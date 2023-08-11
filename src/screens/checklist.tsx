import { useEffect, useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { ModalAdicionar } from "../components/Modal";
import moment from "moment";
import { Dropdown } from "../components/UI/dropdown";
import { Task } from "../utils/types/checklist";
import useFetch from "../Hooks/useFetch";
import { Button } from "../components/UI/Button";

import "moment/locale/pt-br";

const dados = {
    id: "0",
    date: "2024-08-11T08:27:43.506Z",
    height: 300,
    name: "adicionar isso",
};

const ChecklistScreen = () => {
    const { data, error, loading } = useFetch<Task[]>({
        method: "GET",
        baseURL: "https://64d677d42a017531bc12abcc.mockapi.io/tasks",
    });

    const [eventData, setEventData] = useState<Task[]>([]);

    moment.locale("pt-br");
    const Mes = moment().format("MMMM");

    useEffect(() => {
        setEventData(data!);
    }, [data]);

    return (
        <SafeAreaView className="flex-1 justify-start items-start px-2 py-4 bg-slate-800">
            <Text className="text-3xl font-semibold mb-2 text-white">
                {Mes}
            </Text>
            <Dropdown data={eventData} label="Hoje" />
            <Dropdown data={eventData} label="Futuros" />
            <Dropdown data={eventData} label="Concluido Hoje" />
            {/* <Button Label="Adicionar" onPress={PostData} /> */}
            <ModalAdicionar />
        </SafeAreaView>
    );
};

export default ChecklistScreen;
