// src/components/ui/AppIcon.tsx
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

type IconLibrary =
  | "Ionicons"
  | "MaterialIcons"
  | "FontAwesome"
  | "Feather"
  | "Entypo"
  | "MaterialCommunityIcons"
  | "AntDesign"
  | "SimpleLineIcons"
  | "EvilIcons"
  | "Zocial"
  | "Foundation";

// Map each library to its glyph map keys
type IconNameMap = {
  Ionicons: keyof typeof Ionicons.glyphMap;
  MaterialIcons: keyof typeof MaterialIcons.glyphMap;
  FontAwesome: keyof typeof FontAwesome.glyphMap;
  Feather: keyof typeof Feather.glyphMap;
  Entypo: keyof typeof Entypo.glyphMap;
  MaterialCommunityIcons: keyof typeof MaterialCommunityIcons.glyphMap;
  AntDesign: keyof typeof AntDesign.glyphMap;
  SimpleLineIcons: keyof typeof SimpleLineIcons.glyphMap;
  EvilIcons: keyof typeof EvilIcons.glyphMap;
  Zocial: keyof typeof Zocial.glyphMap;
  Foundation: keyof typeof Foundation.glyphMap;
};

type Props<Lib extends IconLibrary = "Ionicons"> = {
  library?: Lib;
  name: IconNameMap[Lib];
  size?: number;
  color?: string;
};

export function AppIcon<Lib extends IconLibrary = "Ionicons">({
  library = "Ionicons" as Lib,
  name,
  size = 24,
  color,
}: Props<Lib>) {
  switch (library) {
    case "Ionicons":
      return <Ionicons name={name as any} size={size} color={color} />;
    case "MaterialIcons":
      return <MaterialIcons name={name as any} size={size} color={color} />;
    case "FontAwesome":
      return <FontAwesome name={name as any} size={size} color={color} />;
    case "Feather":
      return <Feather name={name as any} size={size} color={color} />;
    case "Entypo":
      return <Entypo name={name as any} size={size} color={color} />;
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons name={name as any} size={size} color={color} />
      );
    case "AntDesign":
      return <AntDesign name={name as any} size={size} color={color} />;
    case "SimpleLineIcons":
      return <SimpleLineIcons name={name as any} size={size} color={color} />;
    case "EvilIcons":
      return <EvilIcons name={name as any} size={size} color={color} />;
    case "Zocial":
      return <Zocial name={name as any} size={size} color={color} />;
    case "Foundation":
      return <Foundation name={name as any} size={size} color={color} />;
    default:
      return null;
  }
}
