export function TrophyIcon({
    size = 64,
    color = "#4997D3",
}: {
    size?: number;
    color?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Trophy cup */}
            <path d="M20 12 H44 V22 C44 32 36 38 32 38 C28 38 20 32 20 22 V12 Z" />

            {/* Trophy handles */}
            <path d="M20 14 H14 C10 14 10 22 14 24 L20 24" />
            <path d="M44 14 H50 C54 14 54 22 50 24 L44 24" />

            {/* Trophy stem */}
            <path d="M28 38 V46 H36 V38" />

            {/* Trophy base */}
            <rect x="24" y="46" width="16" height="6" rx="1" />

            {/* Sparkles */}
            <path d="M15 32 L17 32" />
            <path d="M49 32 L51 32" />
            <path d="M18 29 L19 30" />
            <path d="M46 29 L47 30" />
            <path d="M18 35 L19 34" />
            <path d="M46 35 L47 34" />
        </svg>
    );
}
