import { Feather } from "@expo/vector-icons";
const AlertTriangle = (props: any) => <Feather name="alert-triangle" {...props} />;
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;

  rightContent?: ReactNode;
  onPress?: () => void;
};

export function SignalCard({
  title,
  subtitle,

  rightContent,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row items-center justify-between">
        {/* Left Content */}
        <View className="flex-row items-center gap-3 flex-1">
          {/* Icon */}
          <View className="w-10 h-10 rounded-xl bg-background dark:bg-dark-background/10 items-center justify-center">
            <AlertTriangle size={18} color="#fff" />
          </View>

          {/* Text */}
          <View className="flex-1">
            <Text className="text-white font-semibold text-base">{title}</Text>

            {subtitle && (
              <Text className="text-white/70 text-xs mt-1">{subtitle}</Text>
            )}
          </View>
        </View>

        {/* Right Side */}
        {rightContent && <View>{rightContent}</View>}
      </View>
    </Pressable>
  );
}
