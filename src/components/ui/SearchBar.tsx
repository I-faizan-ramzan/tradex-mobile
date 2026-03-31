import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Search...",
  onSubmit,
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      className={`flex-row items-center px-4 py-3 rounded-2xl border ${
        focused ? "border-primary" : "border-gray-200 dark:border-white/10"
      } bg-gray-100 dark:bg-dark-card`}
    >
      {/* Icon */}
      <Ionicons
        name="search"
        size={18}
        color={focused ? "#563fc2" : "#9ca3af"}
      />

      {/* Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        className="flex-1 ml-2 text-gray-900 dark:text-white"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />

      {/* Optional Clear Button */}
      {value ? (
        <Pressable onPress={() => onChangeText?.("")}>
          <Ionicons name="close-circle" size={18} color="#9ca3af" />
        </Pressable>
      ) : null}
    </View>
  );
}
