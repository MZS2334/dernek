interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export default function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 80"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Leaf - two halves forming a small sprout */}
        <path
          d="M30 2 C26 7, 25 13, 28 17 C29 14, 30 9, 30 2 Z"
          fill="currentColor"
        />
        <path
          d="M30 2 C34 7, 35 13, 32 17 C31 14, 30 9, 30 2 Z"
          fill="currentColor"
        />
        {/* Stem connecting leaf to head */}
        <line x1="30" y1="17" x2="30" y2="22" stroke="currentColor" strokeWidth="1.2" />

        {/* Head circle */}
        <circle cx="30" cy="38" r="15" fill="none" stroke="currentColor" strokeWidth="1.3" />

        {/* Brain curves inside head */}
        <path
          d="M18 35 Q22 32, 26 35 Q30 38, 34 35 Q38 32, 42 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.6"
        />
        <path
          d="M18 41 Q22 38, 26 41 Q30 44, 34 41 Q38 38, 42 41"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.6"
        />

        {/* Heart below head */}
        <path
          d="M30 58 C27 55, 22 55, 22 60 C22 65, 30 72, 30 72 C30 72, 38 65, 38 60 C38 55, 33 55, 30 58 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <path id="topArc" d="M 30 100 A 70 70 0 0 1 170 100" />
        <path id="bottomArc" d="M 38 108 A 62 62 0 0 0 162 108" />
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      {/* Inner thin ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Top text - organization name */}
      <text
        fill="currentColor"
        fontSize="8.5"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="1.2"
        fontWeight="600"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          TÜRKİYE BESLENME PSİKOLOJİSİ DERNEĞİ
        </textPath>
      </text>

      {/* Bottom text - motto */}
      <text
        fill="currentColor"
        fontSize="6.5"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        letterSpacing="0.3"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          Beslenmeyi psikolojisiyle sevmek.
        </textPath>
      </text>

      {/* Decorative side dots */}
      <circle cx="26" cy="100" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="174" cy="100" r="1.5" fill="currentColor" opacity="0.6" />

      {/* === Central Icon === */}
      {/* Leaf */}
      <path
        d="M100 48 C96 53, 95 59, 98 63 C99 60, 100 55, 100 48 Z"
        fill="currentColor"
      />
      <path
        d="M100 48 C104 53, 105 59, 102 63 C101 60, 100 55, 100 48 Z"
        fill="currentColor"
      />
      {/* Stem */}
      <line x1="100" y1="63" x2="100" y2="68" stroke="currentColor" strokeWidth="1" />

      {/* Head circle */}
      <circle cx="100" cy="84" r="17" fill="none" stroke="currentColor" strokeWidth="1.3" />

      {/* Brain curves */}
      <path
        d="M87 81 Q91 78, 95 81 Q99 84, 103 81 Q107 78, 111 81 Q113 82, 113 81"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.6"
      />
      <path
        d="M87 87 Q91 84, 95 87 Q99 90, 103 87 Q107 84, 111 87 Q113 88, 113 87"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.6"
      />

      {/* Heart */}
      <path
        d="M100 108 C97 105, 92 105, 92 110 C92 115, 100 122, 100 122 C100 122, 108 115, 108 110 C108 105, 103 105, 100 108 Z"
        fill="currentColor"
      />
    </svg>
  );
}
