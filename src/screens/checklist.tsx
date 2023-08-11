import { useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { ModalAdicionar } from "../components/Modal";
import moment from "moment";
import "moment/locale/pt-br";
import { Dropdown } from "../components/UI/dropdown";
import { Task } from "../utils/types/checklist";

const ChecklistScreen = () => {
    const [taskDay, setTaskDay] = useState<Task[]>([
        {
            id: "1",
            date: moment().format("ddd"),
            height: 300,
            name: "algum text1",
        },
        {
            id: "2",
            date: moment().format("ddd"),
            height: 300,
            name: "algum text2",
        },
        {
            id: "3",
            date: moment().format("ddd"),
            height: 300,
            name: "algum text3",
        },
    ]);

    moment.locale("pt-br");
    const Mes = moment().format("MMMM");

    return (
        <SafeAreaView className="flex-1 justify-start items-start px-2 py-4 bg-slate-800">
            <Text className="text-3xl font-semibold mb-2 text-white">
                {Mes}
            </Text>
            <Dropdown data={taskDay} label="Hoje" />
            <Dropdown data={taskDay} label="Futuros" />
            <Dropdown data={taskDay} label="Concluido Hoje" />
            <ModalAdicionar />
        </SafeAreaView>
    );
};

export default ChecklistScreen;
