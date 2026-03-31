import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
const User = (props: any) => <Feather name="user" {...props} />;
type LucideIcon = any;
import { Image, Text, View } from "react-native";
import { Button } from "../inputs/Button";

type Props = {
  name: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  fallbackIcon?: LucideIcon;

  // ✅ New props
  showChangePhoto?: boolean;
  onChangePhotoPress?: () => void;
};

export function ProfileHeader({
  name,
  email,
  phone,
  avatarUrl,
  fallbackIcon: FallbackIcon = User,
  showChangePhoto = false,
  onChangePhotoPress,
}: Props) {
  const { isDark } = useTheme();
  return (
    <View className="items-center mb-10">
      {/* Avatar */}
      <View className="w-20 h-20 rounded-full bg-surface dark:bg-dark-card border-2 border-accent items-center justify-center mb-3 overflow-hidden">
        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <FallbackIcon size={36} color="#4f8ef7" strokeWidth={1.4} />
        )}
      </View>

      {/* ✅ Change Photo Button */}
      {showChangePhoto && (
        <Button
          title="Change Photo"
          variant="primary"
          bgClass="bg-accent rounded-full my-2"
          onPress={() => {
            console.log("change photo");
          }}
        />
      )}

      {/* Name */}
      <Text className="text-base font-semibold text-gray-900 dark:text-white">
        {name}
      </Text>

      {/* Email */}
      {email && (
        <Text className="text-xs text-muted dark:text-gray-400 mt-1">
          {email}
        </Text>
      )}

      {/* Phone */}
      {phone && (
        <Text className="text-xs text-muted dark:text-gray-400 mt-0.5">
          {phone}
        </Text>
      )}
    </View>
  );
}
