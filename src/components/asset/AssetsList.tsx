import { ScrollView } from "react-native";
import { Asset } from "@/types/asset";
import { AssetItem } from "./AssetItem";

type Props = {
  data: Asset[];
};

export function AssetsList({ data }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
    >
      {data.map((item) => (
        <AssetItem key={item.ticker} asset={item} />
      ))}
    </ScrollView>
  );
}
