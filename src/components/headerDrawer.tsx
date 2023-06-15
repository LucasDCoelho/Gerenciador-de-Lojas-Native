import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderDrawer = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      className="p-4 mr-[38%] flex-row items-center"
      onPress={() => navigate("lojas")}>
      <Ionicons name="chevron-back" size={23} />
      <Text className="text-md font-extrabold">Loja Parangaba</Text>
    </Pressable>
  );
};
