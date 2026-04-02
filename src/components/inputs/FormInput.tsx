import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  label: string;
};

export function FormInput({ label, ...rest }: Props) {
  return (
    <View className="mb-4">
      <Text className="text-sm text-gray-500 mb-2 ml-1 font-medium">
        {label}
      </Text>
      <TextInput
        placeholderTextColor="#6B7280"
        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
        {...rest}
      />
    </View>
  );
}
