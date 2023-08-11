import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import moment from "moment";
import axios from "axios";
import { Button } from "../components/UI/Button";
import { Task } from "../utils/types/checklist";

const EventScreen: React.FC = () => {
    const { navigate } = useNavigation();

    const [inputValue, setInputValue] = useState<Task>({
        date: moment().format("ddd"),
        height: 800,
        id: "0",
        name: "",
        isCheck: false,
    });

    const createEvent = async () => {
        try {
            const response = await axios.post(
                "https://64d677d42a017531bc12abcc.mockapi.io/tasks",
                inputValue
            );
            navigate('checklist')
            console.log("Resposta da API:", response.data);
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
        }
    };

    const handleInputChange = (name: keyof Task, value: any) => {
        setInputValue((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 4,
                paddingTop: 10,
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <View style={{ width: "100%" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Titulo do Evento
                </Text>
                <TextInput
                    style={{
                        borderWidth: 2,
                        borderColor: "white",
                        marginTop: 4,
                        borderRadius: 4,
                        padding: 8,
                    }}
                    placeholder="Nome do Evento"
                    onChangeText={(value) => handleInputChange("name", value)}
                />
                <Button Label="Criar Evento" onPress={createEvent} />
            </View>
        </SafeAreaView>
    );
};

export default EventScreen;
