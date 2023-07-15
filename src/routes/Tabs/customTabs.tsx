import * as React from 'react'
import { EvilIcons } from "@expo/vector-icons"
import { Text, View, Pressable } from "react-native"
import { EventContext } from '../app.routes'

export const CustomTabs = ({ ...props }) => {

    const { isOpenModal, setIsOpenModal } = React.useContext(EventContext)

    return (
        
            <View className="w-full p-2 items-center bg-rose-800">
                <Pressable className="items-center justify-center bg-transparent" onPress={() => setIsOpenModal(!isOpenModal)}>
                    <EvilIcons name="plus" color={'white'} size={80} />
                </Pressable>
            </View>
    )
}