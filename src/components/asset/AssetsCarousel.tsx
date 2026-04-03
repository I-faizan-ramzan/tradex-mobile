import { useEffect, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import { ASSETS } from "@/data/assets";
import { useStore } from "@/store/useStore";
import { Asset } from "@/types/asset";
import { router } from "expo-router";
import { AssetItem } from "./AssetItem";

const { width } = Dimensions.get("window");

const ITEMS_PER_PAGE = 3;
const SPACING = 12;
const ITEM_WIDTH = (width - SPACING * (ITEMS_PER_PAGE + 1)) / ITEMS_PER_PAGE;

type Props = {
  autoPlay?: boolean;
  interval?: number;
};

export function AssetsCarousel({ autoPlay = true, interval = 5000 }: Props) {
  const listRef = useRef<Animated.FlatList<Asset>>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);

  const data = ASSETS; // ✅ use ASSETS directly
  const loopData = [...data, ...data]; // for infinite loop
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // 🔁 Auto scroll
  useEffect(() => {
    if (!autoPlay) return;

    const id = setInterval(() => {
      setPageIndex((prev) => {
        let next = prev + 1;
        if (next >= totalPages) next = 0;

        scrollToPage(next);
        return next;
      });
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, totalPages]);

  const scrollToPage = (page: number) => {
    const offset = page * (ITEM_WIDTH + SPACING) * ITEMS_PER_PAGE;
    listRef.current?.scrollToOffset({ offset, animated: true });
    setPageIndex(page);
  };

  return (
    <View>
      <Animated.FlatList
        ref={listRef}
        data={loopData}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        decelerationRate="fast"
        snapToInterval={(ITEM_WIDTH + SPACING) * ITEMS_PER_PAGE}
        contentContainerStyle={{ gap: 20 }}
        onMomentumScrollEnd={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const currentPage = Math.round(
            offset / ((ITEM_WIDTH + SPACING) * ITEMS_PER_PAGE),
          );
          setPageIndex(currentPage % totalPages);
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: ITEM_WIDTH,
            }}
          >
            <AssetItem
              asset={item}
              onPress={() => {
                setSelectedAsset(item);
                router.push(`/stock/${item.ticker}`);
              }}
            />
          </View>
        )}
      />

      {/* Pagination */}
      {/* Pagination */}
      <View className="mt-4">
        {/* Dots */}
        <View className="flex-row justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => scrollToPage(i)}
              className={`h-2 rounded-full ${
                i === pageIndex
                  ? "w-4 bg-gray-900 dark:bg-white"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </View>

        {/* Skip */}
        <View className="items-center mt-3">
          <TouchableOpacity
            onPress={() => {
              const next = pageIndex + 1 >= totalPages ? 0 : pageIndex + 1;
              scrollToPage(next);
            }}
          >
            <Text className="text-accent font-medium">Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
