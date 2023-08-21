import { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Button } from "../UI/Button";
import { useTaskContext } from "../../contexts/taskContext";

interface EditModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateTaskModal = ({ open, setOpen }: EditModalProps) => {
    const { createTask, useStore } = useTaskContext();
    const { inputValue, setInputValue, setColorValue, setCategory, category } = useStore();

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
        { label: "Produto", value: "Produtos" },
    ]);

    useEffect(() => {
        setColorValue(valueColor? valueColor : '#000000');
        setCategory(valueCategoria? valueCategoria : category)
        console.log(category)
    }, [valueColor, valueCategoria]);

    if (open) {
        return (
            <>
                <TouchableOpacity
                    className="z-40 absolute  border-white w-screen h-screen bottom-0 left-0 justify-end bg-[#00000060]"
                    onPress={() => setOpen(!open)}
                />
                <View className="z-50 absolute w-screen h-auto bottom-0 px-2 py-4 rounded-t-2xl bg-slate-600">
                    <TextInput
                        autoFocus
                        defaultValue={inputValue}
                        placeholder="nova tarefa"
                        onChangeText={(e) => setInputValue(e)}
                        className="w-full border-2 px-4 py-6 rounded-2xl text-white border-white"
                    />
                    <View className="flex-row">
                    <DropDownPicker
                            open={openCategoria}
                            value={valueCategoria}
                            items={categorias}
                            placeholder="Categorias"
                            dropDownDirection="TOP"
                            setOpen={setOpenCategoria}
                            containerStyle={{
                                paddingVertical: 5,
                                marginRight:5,
                                width: "50%",
                            }}
                            setValue={setValueCategoria}
                            setItems={setCategorias}
                        />
                        <DropDownPicker
                            open={openColor}
                            value={valueColor}
                            addCustomItem
                            items={cores}
                            placeholder="Colors"
                            setOpen={setOpenColor}
                            setValue={setValueColor}
                            setItems={setCores}
                            dropDownDirection="TOP"
                            containerStyle={{
                                paddingVertical: 5,
                                width: "25%",
                            }}
                        />
                        
                    </View>
                    <Button
                        Label="Criar tarefa"
                        onPress={createTask}
                        className="m-0"
                    />
                </View>
            </>
        );
    } else return null;
};