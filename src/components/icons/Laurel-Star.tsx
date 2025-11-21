export function LaurelStarIcon({
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
            {/* Star */}
            <polygon
                points="32,22 34.5,27 40,27.8 36,31.2 37,36.2 
                32,33.8 27,36.2 28,31.2 24,27.8 29.5,27"
                fill="none"
            />

            {/* Left Wreath */}
            <path d="M26 40 C20 36 16.5 30 17.5 24 C18 21 20 19 22 20" />
            <path d="M24 36 C19 33 17 28 18 25" />
            <path d="M22.5 32 C19.5 30 18.5 27 19 25" />

            {/* Right Wreath */}
            <path d="M38 40 C44 36 47.5 30 46.5 24 C46 21 44 19 42 20" />
            <path d="M40 36 C45 33 47 28 46 25" />
            <path d="M41.5 32 C44.5 30 45.5 27 45 25" />
        </svg>
    );
}
