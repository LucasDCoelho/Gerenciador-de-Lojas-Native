import * as React from 'react';
import { View, Text } from 'react-native';
import CardTask, { CardTaskProps } from '../components/Cards/CardTask';
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated';

interface TaskProps {
    mode: 'Tasks' | 'Lembretes'
    data?: [
        {
            id: 1,
            name: 'lucas',
            descriptions: "Fazer Compras2"
        }
    ] | any
}

const Task = ({ mode, data }: TaskProps) => {
    if (mode === 'Tasks') {
        return (
            <Animated.View entering={SlideInLeft} className='w-full'>
                <Text className="text-2xl font-bold text-black text-center bg-white mx-4 py-1 rounded-md">
                    Tarefas
                </Text>
                <CardTask messages={data} />
            </Animated.View>
        )
    }
    if (mode === 'Lembretes') {
        return (
            <Animated.View entering={SlideInRight} className='w-full'>
                <Text className="text-2xl font-bold text-black text-center bg-white mx-4 py-1 rounded-md">
                    Lembretes
                </Text>
                <CardTask messages={data} />
            </Animated.View>
        )
    }
    return <Text className='text-2xl font-bold text-black text-center bg-white mx-4 py-1 rounded-md'>Sem Task</Text>
};

export default Task;