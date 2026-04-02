import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const TABS = ["Trending", "News", "Top Market"];

type Props = {
  activeTab: number;
  onChange: (index: number) => void;
};

export default function SegmentedControl({ activeTab, onChange }: Props) {
  return (
    <View className="flex-row mt-5 rounded-2xl dark:bg-dark-card border border-gray-100 dark:border-white/5 bg-gray-100 p-1 w-[80%] self-center shadow-md dark:shadow-none">
      {TABS.map((tab, index) => {
        const isActive = activeTab === index;
        return (
          <TouchableOpacity
            key={tab}
            className={`flex-1 items-center justify-center py-2 rounded-full ${
              isActive ? "bg-white shadow-sm dark:bg-gray-700" : "bg-transparent"
            }`}
            onPress={() => onChange(index)}
            activeOpacity={0.7}
          >
            <Text
              className={`text-sm font-semibold ${
                isActive
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
