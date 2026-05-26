import { motion } from "framer-motion";

interface PathProps {
    index: number;
    total: number;
    flip: boolean;
    delay: number;
}

function generatePath(index: number, total: number, flip: boolean = false): string {
    const progress = index / total;
    const spread = 1400;
    const yOffset = progress * 800 - 100;

    const cp1x = 200 + index * 12;
    const cp1y = flip ? 800 - yOffset * 0.3 : yOffset * 0.3;
    const cp2x = spread - 200 - index * 12;
    const cp2y = flip ? 800 - yOffset * 0.7 : yOffset * 0.7;

    const startX = flip ? spread : 0;
    const endX = flip ? 0 : spread;

    return `M${startX},${yOffset} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${yOffset + 100}`;
}

const PATH_COUNT = 36;

function AnimatedPath({ index, total, flip, delay }: PathProps) {
    const progress = index / total;
    const strokeWidth = 0.5 + progress * 1.5;
    const maxOpacity = 0.08 + progress * 0.18;
    const duration = 20 + (index % 10) * 1.2;

    const initialDelay = delay * 0.15;
    const repeatDelay = delay - initialDelay;

    return (
        <motion.path
            d={generatePath(index, total, flip)}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, maxOpacity, maxOpacity, 0],
            }}
            transition={{
                duration,
                delay: initialDelay,
                repeatDelay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
            }}
        />
    );
}

function PathsBackground() {
    return (
        <svg
            viewBox="0 0 1400 800"
            preserveAspectRatio="xMidYMid slice"
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                color: "#a78bfa",
            }}
            aria-hidden="true"
        >
            {Array.from({ length: PATH_COUNT }, (_, i) => (
                <AnimatedPath
                    key={`fwd-${i}`}
                    index={i}
                    total={PATH_COUNT}
                    flip={false}
                    delay={i * 0.4}
                />
            ))}
            {Array.from({ length: PATH_COUNT }, (_, i) => (
                <AnimatedPath
                    key={`rev-${i}`}
                    index={i}
                    total={PATH_COUNT}
                    flip={true}
                    delay={i * 0.4 + 10}
                />
            ))}
        </svg>
    );
}

export { PathsBackground };
