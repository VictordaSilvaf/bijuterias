import React, { useEffect, useState } from "react";

interface TimerProgressProps {
    totalMinutes?: number; // tempo inicial em minutos
    height?: string;
    color?: string;
    bgColor?: string;
}

export default function TimerProgress({
    totalMinutes = 10,
    height = "10px",
    color = "#4ade80",
    bgColor = "#e5e7eb"
}: TimerProgressProps) {
    const totalSeconds = totalMinutes * 60;

    const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

    // Atualiza o contador
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = () => {
        const m = Math.floor(secondsLeft / 60);
        const s = secondsLeft % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    return (
        <div style={{ width: "100%" }}>
            <div className="w-full bg-app-banner-bg p-3 flex justify-center items-center rounded-2xl">
                <p className="text-app-text font-bold">OFERTA POR TEMPO LIMITADO: {formatTime()}</p>
            </div>
        </div>
    );
}
