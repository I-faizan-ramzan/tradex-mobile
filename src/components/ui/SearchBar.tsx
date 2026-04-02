import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
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
  const inputRef = useRef<TextInput>(null);
  return (
    <Pressable // ✅ changed View → Pressable so tapping anywhere in bar focuses input
      onPress={() => inputRef.current?.focus()}
    >
      <View
        className={`flex-row items-center px-4 py-3 rounded-full border
          ${focused ? "border-accent" : "border-gray-200 dark:border-white/10"}
          bg-surface dark:bg-dark-card`}
      >
        <Ionicons
          name="search"
          size={20}
          color={focused ? "#4f8ef7" : "#9ca3af"}
        />

        <TextInput
          ref={inputRef} // ✅ add ref
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          className="flex-1 ml-2 text-sm text-gray-900 dark:text-white"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          returnKeyType="search"
          onSubmitEditing={onSubmit}
          autoCorrect={false} // ✅ prevents autocorrect stealing focus
          autoCapitalize="none" // ✅ prevents caps interfering
        />

        {value ? (
          <Pressable onPress={() => onChangeText?.("")} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color="#9ca3af" />
          </Pressable>
        ) : null}
      </View>
    </Pressable>
  );
}
