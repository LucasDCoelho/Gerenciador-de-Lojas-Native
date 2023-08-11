import * as React from "react";
 import { View } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { IconAdicionar } from "../UI/IconAdicionar";

export const ModalAdicionar = () => {
  const { navigate } = useNavigation();
  const [modalEvents, setModalEvents] = React.useState<boolean>(false);

  return (
    <View
      className={`z-10 absolute bottom-0 w-full ${
        modalEvents ? "h-full" : "h-0"
      }`}>
      {modalEvents ? (
        <View className={`z-30 absolute w-full h-full bg-[#00000070]`}>
          <View className="z-40 absolute bottom-0 right-0 mx-5 my-24">
            <>
              <Animated.View entering={SlideInDown.delay(350)}>
                <IconAdicionar
                  colorIcon="white"
                  nameIcon="calendar"
                  sizeIcon={26}
                  label="Eventos"
                  colorButton="bg-sky-500"
                  onPress={() => navigate("events")}
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
            </>
          </View>
        </View>
      ) : null}
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
  );
};
