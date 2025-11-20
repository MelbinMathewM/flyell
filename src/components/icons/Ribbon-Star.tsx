export function RibbonStarIcon({
    size = 64,
    color = "#4A90E2",
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
            <circle cx="32" cy="26" r="14" />
            <polygon
                points="32,20 34.5,24.5 39.5,25.2 36,28.8 36.9,33.7 32,31.2 
                27.1,33.7 28,28.8 24.5,25.2 29.5,24.5"
                fill="none"
            />
            <path d="M24 38 L20 54 L32 48 L44 54 L40 38" />
        </svg>
    );
}
