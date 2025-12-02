// Componente reutilizável
interface ProgressBarProps {
    value: number;      // percentual de 0 a 100
    height?: string;    // altura opcional
    color?: string;     // cor da barra
    bgColor?: string;   // cor do fundo
}

export default function ProgressBar({
    value,
    height = "8px",
    color = "#ca8a04",
    bgColor = "#faebd4"
}: ProgressBarProps) {
    const clamped = Math.min(100, Math.max(0, value));

    return (
        <div
            style={{
                width: "100%",
                backgroundColor: bgColor,
                height,
                borderRadius: "999px",
                overflow: "hidden"
            }}
            aria-valuenow={clamped}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
        >
            <div
                style={{
                    width: clamped + "%",
                    height: "100%",
                    backgroundColor: color,
                    transition: "width 0.3s ease"
                }}
            />
        </div>
    );
}
