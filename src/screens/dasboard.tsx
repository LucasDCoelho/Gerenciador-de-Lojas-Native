import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "../components/Button";

const Dasboard = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: '<Button Label=""/>', value: 'bananas' }
  ]);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];
  return (
    <View className="flex-1 justify-center items-center p-4 bg-slate-800">

    </View>
  );
};

export default Dasboard;
