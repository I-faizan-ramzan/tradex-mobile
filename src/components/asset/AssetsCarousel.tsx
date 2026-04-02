import { useEffect, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import Animated from "react-native-reanimated";

import { ASSETS } from "@/data/assets"; // ✅ import your assets
import { Asset } from "@/types/asset";
import { AssetItem } from "./AssetItem";
import { router } from "expo-router";
import { useStore } from "@/store/useStore";

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
      let nextPage = pageIndex + 1;
      if (nextPage >= totalPages) nextPage = 0;
      scrollToPage(nextPage);
    }, interval);

    return () => clearInterval(id);
  }, [pageIndex]);

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
        contentContainerStyle={{ paddingHorizontal: SPACING }}
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

              marginHorizontal: SPACING,
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
      <View className="flex-row justify-center mt-4 gap-5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full ${
              i === pageIndex
                ? "w-4 bg-gray-900 dark:bg-gray-600 dark:bg-dark-background"
                : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
