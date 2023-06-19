import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView, Text, TextInput, View } from "react-native";
import CalendarView from "../../components/calendar";

const Home = () => {
  return (
    <View className="flex-1 bg-slate-500">
      <ScrollView>
        <View className="">
          <CalendarView />
          <Text className="text-2xl font-bold text-white bg-slate-800 text-center p-2 mx-2 rounded-md my-2">
            Tarefas
          </Text>
          <View className="mx-3">
            <View className="m-2 gap-2">
              <BouncyCheckbox
                size={25}
                fillColor="#green" 
                unfillColor="#000000"
                textComponent={(
                <Text className="mx-2 text-white font-semibold">agendar minha casa para queimar</Text>
                )}
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 1 }}
                onPress={(isChecked: boolean) => {}}
              />
              <BouncyCheckbox
                size={25}
                fillColor="#green" 
                unfillColor="#000000"
                textComponent={(
                <Text className="mx-2 text-white font-semibold">agendar minha casa para queimar</Text>
                )}
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 1 }}
                onPress={(isChecked: boolean) => {}}
              />
              <BouncyCheckbox
                size={25}
                fillColor="#green" 
                unfillColor="#000000"
                textComponent={(
                <Text className="mx-2 text-white font-semibold">agendar minha casa para queimar</Text>
                )}
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 1 }}
                onPress={(isChecked: boolean) => {}}
              />
              <BouncyCheckbox
                size={25}
                fillColor="#green" 
                unfillColor="#000000"
                textComponent={(
                <Text className="mx-2 text-white font-semibold">agendar minha casa para queimar</Text>
                )}
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 1 }}
                onPress={(isChecked: boolean) => {}}
              />
            </View>
          </View>
          <Text className="text-2xl font-bold text-white bg-slate-800 text-center p-2 mx-2 rounded-md my-2">
            Lembretes
          </Text>
          <Text className="text-base font-bold text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            perspiciatis eveniet. Quas perferendis fugit cumque quo est eaque?
            Beatae esse quidem aliquam reiciendis nihil harum optio veritatis,
            repellat fugiat voluptas?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
