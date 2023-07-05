import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import Mensagem from '../../utils/mensage';

export interface CardTaskProps {
  messages: any
}

const CardTask = ({ messages }: CardTaskProps) => {
  return (
    <View className='h-auto my-3 mx-4 p-2 justify-center rounded-lg bg-slate-500'>
      {
        messages?.map((item: any) => {
          return (
            <Mensagem
              key={item.id}
              description={item.descriptions}
              name={item.name} />
          )
        })
      }

    </View>
  );
};

export default CardTask;