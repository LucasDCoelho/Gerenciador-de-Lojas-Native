import "react-native-gesture-handler";

import * as React from 'react';
import {View , Text} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

interface ShopProps{}

const Shop = ({}:ShopProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Loja1', value: 'Loja1'},
    {label: 'Loja2', value: 'Loja2'}
  ]);
  return (
    <View className="flex-1 bg-slate-800 justify-center items-center p-4">
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    </View>
  );
};

export default Shop;