import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from '../Button';
import { Input } from '../input';

interface ModalProps {
    isOpen: boolean
}


export const ModalAdicionar = ({ isOpen }: ModalProps) => {
    if (isOpen) {
        return (
            <View className='absolute w-full h-full justify-center items-center bg-[#00000050]'>
                <View className='px-10 py-20 items-center rounded-md bg-black'>
                    <Input
                        inputIcon='dragon'
                        inputMode='text'
                        placeholder='titulo evento'
                        label='evento'
                    />
                    <Button Label='Adicionar Evento' />
                </View>
            </View>
        )
    } else {
        return null
    }
}