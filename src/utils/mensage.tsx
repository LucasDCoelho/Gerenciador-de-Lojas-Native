import * as React from 'react';
import { View, Text } from 'react-native';
import Animated, { BounceInLeft } from 'react-native-reanimated';

interface MensagemProps {
    description: string;
    name: string;
}

const Mensagem = ({ description, name }: MensagemProps) => {
    return (
        <Animated.View  entering={BounceInLeft} className='w-full px-3 my-1 flex-row items-center'>
            <View className='w-12 h-12 mr-2 justify-center items-center rounded-full bg-black'>
                <Text className='text-white font-semibold text-2xl'>{name}</Text>
            </View>
            <View className='flex-1 h-auto justify-center items-start px-4 py-2 bg-black rounded-xl'>
                <Text className='text-white font-semibold text-md' numberOfLines={2}>{description}</Text>
            </View>
        </Animated.View>
    );
};

export default Mensagem;