import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigate } from "./src/components/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigate />
    </NavigationContainer>
  );
}
