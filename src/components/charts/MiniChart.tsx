import { useMemo } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  data: number[];
  color?: string;
};

export function MiniChart({ data, color = "#22c55e" }: Props) {
  const width = 80;
  const height = 40;

  const path = useMemo(() => {
    if (!data || data.length === 0) return "";

    const max = Math.max(...data);
    const min = Math.min(...data);

    return data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / (max - min || 1)) * height;

        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  }, [data]);

  return (
    <Svg width={width} height={height}>
      <Path d={path} stroke={color} strokeWidth={2} fill="none" />
    </Svg>
  );
}
