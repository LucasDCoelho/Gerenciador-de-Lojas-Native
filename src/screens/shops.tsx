import * as React from 'react';
import {View , Text, Pressable} from 'react-native';

import { useNavigation } from "@react-navigation/native";

const ShopScreen = () => {
  const { navigate } = useNavigation()
  return (
    <View className="flex-1 bg-slate-800 justify-center items-center p-4">
      <Text className='text-white'>Dropdown</Text>
      <Pressable
        onPress={() => navigate("home")}
      >
        <Text className='text-white'>Loja Parangaba</Text>
      </Pressable>
    </View>
  );
};

export default ShopScreen;