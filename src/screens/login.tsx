import React from "react";
import { Image, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Input } from "../components/UI/input";
import { Button } from "../components/UI/Button";

const Login = () => {
    return (
        <View className="flex-1 p-8 justify-center items-center bg-black">
            <View className="w-full justify-between p-4 m-4 rounded-md border-2 border-rose-800  items-center bg-black">
                <Image source={require('../../assets/favicon.png')} className="w-32 h-32 m-4" resizeMode="cover" />
                <Text className="text-2xl my-4 font-bold">Login</Text>
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

export default Login;
