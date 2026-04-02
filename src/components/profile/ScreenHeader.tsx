import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text, View } from "react-native";

type IconType = "ionicons" | "fontawesome";

type IconProps = {
  type: IconType;
  name: keyof typeof Ionicons.glyphMap | keyof typeof FontAwesome.glyphMap;
};

type Props = {
  title: string;

  leftIcon?: IconProps;
  onLeftPress?: () => void;

  rightIcon?: IconProps;
  onRightPress?: () => void;
};

function renderIcon(icon: IconProps | undefined, color: string) {
  if (!icon) return null;

  switch (icon.type) {
    case "ionicons":
      return <Ionicons name={icon.name as any} size={24} color={color} />;
    case "fontawesome":
      return <FontAwesome name={icon.name as any} size={24} color={color} />;
    default:
      return null;
  }
}

export function ScreenHeader({
  title,
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
}: Props) {
  const { isDark } = useTheme();
  const iconColor = isDark ? "#f0f2f7" : "#0a0c10";

  return (
    <View className="flex-row items-center px-5 pt-2 pb-6">
      {/* Left */}
      {leftIcon ? (
        <Pressable
          onPress={onLeftPress}
          className="w-9 h-9 rounded-full  items-center justify-center"
        >
          {renderIcon(leftIcon, iconColor)}
        </Pressable>
      ) : (
        <View className="w-9 h-9" />
      )}

      {/* Title */}
      <Text className="flex-1 text-lg font-semibold text-gray-900 dark:text-white text-center">
        {title}
      </Text>

      {/* Right */}
      {rightIcon ? (
        <Pressable
          onPress={onRightPress}
          className="w-9 h-9 rounded-full  items-center justify-center"
        >
          {renderIcon(rightIcon, iconColor)}
        </Pressable>
      ) : (
        <View className="w-9 h-9" />
      )}
    </View>
  );
}
