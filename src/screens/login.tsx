import React from "react";
import { Text, View } from "react-native";

import { Input } from "../components/UI/input";
import { Button } from "../components/UI/Button";

const LoginScreen = () => {
    return (
        <View className="flex-1 p-8 justify-center items-center bg-black">
            <View className="w-full justify-between p-4 m-4 rounded-md border-2 border-rose-800  items-center bg-black">
                <Text className="text-4xl text-white">Divino Fogão</Text>
                <Text className="text-2xl my-4 font-bold text-white">Login</Text>
                <View>
                    <Input
                        label="Email"
                        inputIcon="user-alt"
                        inputMode="email"
                        placeholder="email@gmail.com"
                    />
                    <Input
                        label="Senha"
                        inputIcon="lock"
                        inputMode="numeric"
                        placeholder="*******"
                        maxLength={8}
                        password={true}
                    />
                </View>
                <Button Label="Entrar" />
            </View>
        </View>
    );
};

export default LoginScreen;
