import moment from "moment";

import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import React, { useState, useEffect } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { View, TextInput } from "react-native";

import { useTaskContext } from "../contexts/taskContext";

import { Task } from "../utils/types/checklist";
import { Button } from "../components/UI/Button";
import DropDownPicker from "react-native-dropdown-picker";
import { EventItem } from "../components/UI/EventItem";

interface RoutesParam {
    taskId: string;
}

const EventScreen: React.FC = () => {
    // recebe os parametros
    const { goBack } = useNavigation();
    const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();

    // contextos
    const { EditTask, useStore } = useTaskContext();
    const {
        events,
        colorValue,
        setColorValue,
        dateValue,
        setDateValue,
        InitialDateValueRef,
        setCategory,
        category,
    } = useStore();

    // states
    const [event, setEvent] = useState<Task[]>([]);
    const [input, setInput] = useState<string>("");

    const [openDateTime, setOpenDateTime] = useState<boolean>(false);
    const [openHoursTime, setOpenHoursTime] = useState<boolean>(false);

    const [openCategoria, setOpenCategoria] = useState(false);
    const [openColor, setOpenColor] = useState(false);

    const [valueColor, setValueColor] = useState<string>("");
    const [valueCategoria, setValueCategoria] = useState<string>("");

    const [cores, setCores] = useState([
        { label: "Alert", value: "#facc15" },
        { label: "Multa", value: "#dc2626" },
        { label: "Tarefa", value: "#a3e635" },
    ]);

    const [categorias, setCategorias] = useState([
        { label: "Dinheiro", value: "Dinheiro" },
        { label: "Compras", value: "Compras" },
        { label: "Produto", value: "Produto" },
    ]);

    // salvar evento
    const saveTask = () => {
        const oldNameValue = event[0].name;
        EditTask({
            id: params.taskId,
            newColor: colorValue,
            newDateAndTime: dateValue,
            newName: input ? input : oldNameValue,
        });
        goBack();
        setDateValue(InitialDateValueRef.current);
    };

    const DateTime = ({ nativeEvent }: DateTimePickerEvent) => {
        setOpenDateTime(false);
        setDateValue(new Date(nativeEvent?.timestamp!));
    };

    const HoursTime = ({ nativeEvent }: DateTimePickerEvent) => {
        setOpenHoursTime(false);
        setDateValue(new Date(nativeEvent?.timestamp!));
    };

    useEffect(() => {
        const filter = (id: string) => {
            const UpdateEvent = events.filter((item) => item.id === id);
            setEvent(UpdateEvent);
        };
        filter(params.taskId);
        
        setColorValue(valueColor ? valueColor : "#000000");
        setCategory(valueCategoria ? valueCategoria : category);

    }, [dateValue, valueColor, valueCategoria]);

    return (
        <View className="flex-1 justify-start items-center p-4 bg-slate-800">
            {event.map((item) => {
                return (
                    <View className="w-full items-start" key={item.id}>
                        <View className="z-50 flex-row">
                            <DropDownPicker
                                open={openCategoria}
                                value={category}
                                items={categorias}
                                placeholder="sem categorias"
                                dropDownDirection="BOTTOM"
                                setOpen={setOpenCategoria}
                                containerStyle={{
                                    paddingVertical: 5,
                                    marginRight: 5,
                                    width: "50%",
                                }}
                                setValue={setValueCategoria}
                                setItems={setCategorias}
                            />
                            <DropDownPicker
                                open={openColor}
                                value={colorValue}
                                addCustomItem
                                items={cores}
                                placeholder="tag"
                                setOpen={setOpenColor}
                                setValue={setValueColor}
                                setItems={setCores}
                                dropDownDirection="BOTTOM"
                                containerStyle={{
                                    paddingVertical: 5,
                                    width: "25%",
                                }}
                            />
                        </View>
                        <View className="border-2 border-slate-700 w-full h-56 rounded-lg my-2 overflow-hidden">
                            <TextInput
                                autoFocus
                                defaultValue={item.name}
                                inputMode="text"
                                onChangeText={(e) => setInput(e)}
                                className="text-white text-xl px-4 py-2 w-full h-auto"
                                numberOfLines={2}
                            />
                        </View>
                        <EventItem
                            name="calendar-alt"
                            mode={{
                                date: dateValue
                                    ? moment(dateValue).format("L")
                                    : moment(item.date).format("L"),
                            }}
                            label="data de vencimento"
                            onPress={() => setOpenDateTime(true)}
                        />
                        {openDateTime && (
                            <DateTimePicker
                                value={dateValue}
                                mode="date"
                                onChange={DateTime}
                            />
                        )}
                        <EventItem
                            name="clock"
                            mode={{
                                time: dateValue
                                    ? moment(dateValue).format("LT")
                                    : moment(item.date).format("LT"),
                            }}
                            label="hora"
                            onPress={() => setOpenHoursTime(true)}
                        />
                        {openHoursTime && (
                            <DateTimePicker
                                value={dateValue}
                                mode="time"
                                onChange={HoursTime}
                            />
                        )}
                        <EventItem
                            name="file-alt"
                            mode={{ notas: "Editar" }}
                            label="descrição"
                        />
                    </View>
                );
            })}
            <Button Label="Salvar" onPress={saveTask} />
        </View>
    );
};

export default EventScreen;
