import { useMemo } from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type Props = {
  data: number[];
  color?: string;
};

export function MiniChart({ data, color = "#22c55e" }: Props) {
  const width = 100;
  const height = 40;

  const { linePath, areaPath } = useMemo(() => {
    if (!data || data.length === 0) {
      return { linePath: "", areaPath: "" };
    }

    const max = Math.max(...data);
    const min = Math.min(...data);

    let line = "";
    let area = "";

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * height;

      line += `${index === 0 ? "M" : "L"} ${x} ${y} `;
      area += `${index === 0 ? "M" : "L"} ${x} ${y} `;
    });

    // Close the area path (go down to bottom)
    area += `L ${width} ${height} L 0 ${height} Z`;

    return {
      linePath: line.trim(),
      areaPath: area.trim(),
    };
  }, [data]);

  return (
    <Svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <Defs>
        <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <Stop offset="100%" stopColor={color} stopOpacity="0" />
        </LinearGradient>
      </Defs>

      {/* Area (shadow effect) */}
      <Path d={areaPath} fill="url(#gradient)" />

      {/* Line */}
      <Path d={linePath} stroke={color} strokeWidth={2} fill="none" />
    </Svg>
  );
}
