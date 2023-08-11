import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swipeable } from 'react-native-gesture-handler';
import { renderRightActions } from "../gesturesActions";
import { ChecklistItensProps } from "../../utils/types/checklist";



export const ChecklistItens = ({ color, date, text, isCheck }: ChecklistItensProps) => {
    
    const [value, setValue] = useState<boolean>(isCheck!);

    return (
        <GestureHandlerRootView className="w-full">
            <Swipeable renderRightActions={renderRightActions}>
                <View className="relative w-full h-36 p-4 justify-center bg-white shadow-lg my-1 rounded-lg">
                    <View
                        className={`w-24 h-8 rounded-lg mb-2 ${color}`}
                    ></View>
                    <View className="flex-row gap-2 items-center mb-2">
                        <Checkbox
                            value={value}
                            color={"#000"}
                            onValueChange={() => setValue(!value)}
                        />
                        <Text className={`${value ? "line-through" : ""}`}>
                            {text}
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-1 ">
                        <Image
                            source={{
                                uri: "https://www.iconarchive.com/download/i103365/paomedia/small-n-flat/calendar.ico",
                            }}
                            className="w-8 h-8"
                        ></Image>
                        <Text>{date}</Text>
                    </View>

                    <Image
                        source={{
                            uri: "https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png",
                        }}
                        className="absolute w-12 h-12 bg-slate-500 object-contain rounded-full bottom-0 right-0 m-2"
                    />
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
};
