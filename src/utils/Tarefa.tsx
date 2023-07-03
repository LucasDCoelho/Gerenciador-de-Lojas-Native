import * as React from 'react';
import { View, Text } from 'react-native';
import CardTask from '../components/Cards/CardTask';

interface TaskProps {
    mode: 'Tasks' | 'Lembretes'
}

const Task = ({ mode }: TaskProps) => {
    if (mode === 'Tasks') {
       return(
        <View className='w-full'>
        <Text className="text-2xl font-bold text-black text-center bg-white mx-4 py-1 rounded-md">
            Tarefas
        </Text>
        <CardTask />
    </View>
       )
    }
    if (mode === 'Lembretes') {
        return <Text>Hello</Text>
    }
    return null
};

export default Task;