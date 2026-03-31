import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TABS = ["Trending", "News", "Top Market"];

export default function SegmentedControl() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View className="flex-row mt-5 rounded-2xl dark:bg-dark-card border border-gray-100 dark:border-white/5 bg-surface p-1 w-[60%] self-center">
      {TABS.map((tab, index) => {
        const isActive = activeTab === index;
        return (
          <TouchableOpacity
            key={tab}
            className={`flex-1 items-center justify-center py-2 rounded-full ${
              isActive ? "bg-gray-300 dark:bg-gray-700" : "bg-transparent"
            }`}
            onPress={() => setActiveTab(index)}
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
