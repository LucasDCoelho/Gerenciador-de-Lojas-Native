import { Pressable, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import Animated, {  BounceInDown,  RotateInDownLeft } from "react-native-reanimated";

interface IconAdicionarProps{
    label?:string;
    nameIcon:string;
    sizeIcon:number;
    colorIcon:string;
    colorButton?:string;
    onPress?:()=> void;
}

export const IconAdicionar = ({ onPress, label, nameIcon, colorIcon, sizeIcon, colorButton}:IconAdicionarProps ) => {
  return (
    <View  className="flex-row items-center justify-end">
      <Animated.Text entering={BounceInDown.delay(300)} className="text-md text-white font-semibold mr-2">{label}</Animated.Text>
      <Pressable className={`justify-center items-center w-14 h-14 mb-2 border-2 border-transparent ${colorButton?colorButton:'bg-rose-800'} rounded-2xl active:bg-black shadow-md shadow-black`} onPress={onPress}>
        <Animated.View entering={RotateInDownLeft.delay(450)}>
        <Icon name={nameIcon}  color={colorIcon}  size={sizeIcon}/>
        </Animated.View>
      </Pressable>
    </View>
  );
};
