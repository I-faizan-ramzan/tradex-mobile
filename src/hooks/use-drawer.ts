import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export function useDrawer() {
  const navigation = useNavigation();

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return { openDrawer, closeDrawer, toggleDrawer };
}
