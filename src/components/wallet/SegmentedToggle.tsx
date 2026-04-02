import React from "react";
import { Pressable, Text, View } from "react-native";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: any) => void;
  className: string;
};

export function SegmentedToggle({
  options,
  value,
  onChange,
  className,
}: Props) {
  return (
    <View className={`flex-row ${className}   rounded-full p-1 `}>
      {options.map((item) => {
        const isActive = value === item.value;

        return (
          <Pressable
            key={item.value}
            onPress={() => onChange(item.value)}
            className={`flex-1 className py-3 rounded-full items-center ${
              isActive
                ? "bg-accent"
                : "dark:bg-dark-card border border-gray-100 dark:border-white/5"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                isActive
                  ? "text-white"
                  : "text-gray-400 dark:text-muted dark:text-gray-400 font-medium"
              }`}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
