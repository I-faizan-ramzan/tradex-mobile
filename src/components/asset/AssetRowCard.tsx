import { ASSETS } from "@/data/assets";
import { Asset } from "@/types/asset";
import { FlatList, View } from "react-native";
import { AssetRow } from "./AssetRow";
const DATA: Asset[] = [
  {
    id: "1",
    ticker: "AIR",
    name: "Airbnb",
    price: 204.01,
    change: 1.03,
    changePercent: 1.03,
    up: true,
    logo: require("@/assets/logos/airbnb.png"),
    chart: [10, 20, 15, 25, 30, 28, 35],
  },
  {
    id: "2",
    ticker: "NVDA",
    name: "Nvidia",
    price: 875.4,
    change: 3.1,
    changePercent: 3.1,
    up: true,
    logo: null,
    chart: [20, 30, 25, 35, 40, 38, 45],
  },
  {
    id: "3",
    ticker: "TSLA",
    name: "Tesla",
    price: 242.1,
    change: -0.8,
    changePercent: -0.8,
    up: false,
    logo: null,
    chart: [30, 25, 20, 22, 18, 15, 17],
  },
  {
    id: "4",
    ticker: "NFLX",
    name: "Netflix",
    price: 628.5,
    change: -1.2,
    changePercent: -1.2,
    up: false,
    logo: null,
    chart: [50, 48, 42, 44, 40, 38, 35],
  },
];

export function AssetRowCard() {
  return (
    <View>
      <FlatList
        data={ASSETS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AssetRow
            className=""
            asset={item}
            // onPress={(asset) => router.push(`/stock/${asset.ticker}`)}
          />
        )}
      />
    </View>
  );
}
