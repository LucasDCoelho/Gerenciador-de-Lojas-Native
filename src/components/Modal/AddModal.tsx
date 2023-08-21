import * as React from "react";
import { View, Pressable } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

import { IconAdicionar } from "../UI/IconAdicionar";
import { CreateTaskModal } from "./CreateTaskModal";

export const ModalAdicionar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalEvents, setModalEvents] = React.useState<boolean>(false);

  const abrirModal = () =>{
    setIsOpen(!isOpen)
    setModalEvents(!modalEvents)
  }

  return (
    <>
      <View
        className={`z-30 absolute bottom-0 w-screen ${
          modalEvents ? "h-screen" : "h-0"
        }`}>
        {modalEvents && (
          <Pressable className={`z-30 absolute w-full h-full bg-[#00000070]`} onPress={()=> setModalEvents(false)}>
            <View className="z-40 absolute bottom-0 right-0 mx-5 my-24">
                <Animated.View entering={SlideInDown.delay(350)}>
                  <IconAdicionar
                    colorIcon="white"
                    nameIcon="calendar"
                    sizeIcon={26}
                    label="Tarefas"
                    colorButton="bg-sky-500"
                    onPress={abrirModal}
                  />
                </Animated.View>

                <Animated.View entering={SlideInDown.delay(150)}>
                  <IconAdicionar
                    colorIcon="white"
                    nameIcon="check"
                    sizeIcon={26}
                    label="Lembretes"
                    colorButton="bg-green-600"
                  />
                </Animated.View>
            </View>
          </Pressable>
        )}
        <View className="z-40 absolute bottom-0 right-0 mx-5 my-7">
          <IconAdicionar
            colorIcon="white"
            nameIcon={modalEvents ? "times" : "plus"}
            sizeIcon={26}
            onPress={() => setModalEvents(!modalEvents)}
            colorButton={modalEvents ? "bg-black" : "bg-rose-800"}
          />
        </View>
      </View>
      <CreateTaskModal open={isOpen} setOpen={setIsOpen} />
    </>
  );
};
