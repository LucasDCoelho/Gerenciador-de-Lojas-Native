import { StyledButton } from "../utils/styles";
import { Pressable, Text } from "react-native";

interface Btn {
    Label: string;
    onPress?: () => void;
  }
  
  export const Button = ({ Label, onPress }: Btn) => {
    return (
      <Pressable style={StyledButton.Container} onPress={onPress}>
        <Text style={StyledButton.Label}>{Label}</Text>
      </Pressable>
    );
  };