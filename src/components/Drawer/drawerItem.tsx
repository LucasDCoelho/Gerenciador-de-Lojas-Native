import { DrawerItem } from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";

interface Drawer {
  label: string;
  onPress: () => void;
  nameIcon: any;
}


export const DrawerItemCostumer = ({ label, nameIcon, onPress }: Drawer) => {
  return (
    <DrawerItem
      label={label}
      labelStyle={{ marginLeft: -20, }}
      onPress={onPress}
      icon={({ size, color }) => (
        <FontAwesome5 name={nameIcon} size={size} color={color} />
      )}
    />
  );
};
