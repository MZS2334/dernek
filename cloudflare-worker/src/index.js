export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // GET /capacity — returns current in-person registration count
    if (request.method === "GET" && new URL(request.url).pathname === "/capacity") {
      try {
        const maxCapacity = parseInt(env.IN_PERSON_CAPACITY || "200", 10);
        const countObj = await env.DEKONT_BUCKET.get("_in_person_count.json");
        const count = countObj ? JSON.parse(await countObj.text()).count : 0;
        return new Response(
          JSON.stringify({ inPersonCount: count, capacity: maxCapacity, isFull: count >= maxCapacity }),
          { headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } catch {
        return new Response(
          JSON.stringify({ inPersonCount: 0, capacity: parseInt(env.IN_PERSON_CAPACITY || "200", 10), isFull: false }),
          { headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // POST /register — increments in-person counter (called when user submits with in-person)
    if (request.method === "POST" && new URL(request.url).pathname === "/register") {
      try {
        const maxCapacity = parseInt(env.IN_PERSON_CAPACITY || "200", 10);
        const countObj = await env.DEKONT_BUCKET.get("_in_person_count.json");
        const current = countObj ? JSON.parse(await countObj.text()).count : 0;
        if (current >= maxCapacity) {
          return new Response(
            JSON.stringify({ error: "Capacity full", isFull: true, count: current, capacity: maxCapacity }),
            { status: 409, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        const newCount = current + 1;
        await env.DEKONT_BUCKET.put("_in_person_count.json", JSON.stringify({ count: newCount }));
        return new Response(
          JSON.stringify({ success: true, count: newCount, capacity: maxCapacity, isFull: newCount >= maxCapacity }),
          { headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Failed to register: " + err.message }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // POST /reset — resets the in-person counter (admin only, protected by secret)
    if (request.method === "POST" && new URL(request.url).pathname === "/reset") {
      const authHeader = request.headers.get("Authorization") || "";
      const expected = env.ADMIN_SECRET || "";
      if (!expected || authHeader !== `Bearer ${expected}`) {
        return new Response(
          JSON.stringify({ error: "Unauthorized" }),
          { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      try {
        const body = await request.json().catch(() => ({}));
        const newCount = body.count !== undefined ? parseInt(body.count, 10) : 0;
        await env.DEKONT_BUCKET.put("_in_person_count.json", JSON.stringify({ count: newCount }));
        return new Response(
          JSON.stringify({ success: true, count: newCount }),
          { headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Failed to reset: " + err.message }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    try {
      const formData = await request.formData();
      const file = formData.get("file");

      if (!file || typeof file === "string") {
        return new Response(
          JSON.stringify({ error: "No file provided" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      if (!allowedTypes.includes(file.type)) {
        return new Response(
          JSON.stringify({ error: "Invalid file type. Only PDF, JPG, PNG allowed." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        return new Response(
          JSON.stringify({ error: "File too large. Max 5MB." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Generate unique filename
      const ext = file.name.split(".").pop() || "bin";
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 8);
      const filename = `dekont_${timestamp}_${random}.${ext}`;

      // Upload to R2
      await env.DEKONT_BUCKET.put(filename, file.stream(), {
        httpMetadata: { contentType: file.type },
      });

      // Build public URL
      const publicUrl = `${env.R2_PUBLIC_URL}/${filename}`;

      return new Response(
        JSON.stringify({ success: true, url: publicUrl, filename }),
        { headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Upload failed: " + err.message }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
  },
};
