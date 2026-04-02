import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Variant = "primary" | "secondary";

type Props = TouchableOpacityProps & {
  label: string;
  variant?: Variant;
  className?: string;
  textClassName?: string;
};

const STYLES: Record<Variant, { container: string; text: string }> = {
  primary: {
    container: "bg-accent  rounded-full items-center shadow-sm",
    text: "text-white font-semibold text-base",
  },
  secondary: {
    container:
      "bg-primary dark:bg-dark-background rounded-full items-center shadow-sm",
    text: "text-white font-semibold text-base",
  },
};

export function FormButton({
  label,
  variant = "primary",
  className = "",
  textClassName = "",
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      className={`${STYLES[variant].container} ${className}`} // ✅ merged
      activeOpacity={0.8}
      {...rest}
    >
      <Text className={`${STYLES[variant].text} ${textClassName}`}>
        {" "}
        {/* ✅ merged */}
        {label}
      </Text>
    </TouchableOpacity>
  );
}
