import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import React from "react";

const DASH_LENGTH = 6000;

export const HandwritingTitle: React.FC = () => {
    const frame = useCurrentFrame();

    const drawProgress = interpolate(frame, [10, 80], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const dashOffset = interpolate(drawProgress, [0, 1], [DASH_LENGTH, 0]);

    const fillOpacity = interpolate(frame, [70, 105], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const underlineWidth = interpolate(frame, [10, 80], [0, 1750], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "transparent",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <svg
                viewBox="0 0 2000 220"
                width="100%"
                height="100%"
                style={{ overflow: "visible" }}
            >
                {/* Filled text - fades in after drawing */}
                <text
                    x="1000"
                    y="155"
                    textAnchor="middle"
                    fontFamily="var(--font-sans), sans-serif"
                    fontSize="145"
                    fontWeight="900"
                    letterSpacing="-0.02em"
                    fill="#ffffff"
                    fillOpacity={fillOpacity}
                >
                    Design、Product、Value
                </text>

                {/* Stroke-animated text - simulates drawing */}
                <text
                    x="1000"
                    y="155"
                    textAnchor="middle"
                    fontFamily="var(--font-sans), sans-serif"
                    fontSize="145"
                    fontWeight="900"
                    letterSpacing="-0.02em"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeDasharray={DASH_LENGTH}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    Design、Product、Value
                </text>

                {/* Decorative timeline underline */}
                <line
                    x1="125"
                    y1="195"
                    x2={125 + underlineWidth}
                    y2="195"
                    stroke="#f59e0b"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
            </svg>
        </AbsoluteFill>
    );
};
