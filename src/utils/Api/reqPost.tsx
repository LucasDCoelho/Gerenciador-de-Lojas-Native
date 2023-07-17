import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "../../components/UI/Button";

type dadosEvent = {
  dados: {
    id: string;
    description: string;
    date: Date;
  };
};

const NovosDados = ({ dados }: dadosEvent) => {
  const { id, description, date } = dados;

  const createTask = async () => {
    const task = {
      id: id,
      name: description,
      date: date,
      height: 80,
    };

    try {
      // Verificar se o ID já existe na API
      await axios.get(
        "https://64876dc4beba62972790a252.mockapi.io/Divino/task/" + task.id
      );

      // Se a solicitação GET for bem-sucedida, o ID já existe
      console.log("ID já existe na API");

      // Você pode retornar ou fazer qualquer outra ação necessária aqui
      return;
    } catch (error) {
      // Se ocorrer um erro, verifique se é um erro 500
      if (error.response && error.response.status === 500) {
        // ID não existe, fazer a requisição POST
        try {
          const response = await axios.post(
            "https://64876dc4beba62972790a252.mockapi.io/Divino/task",
            task
          );
          console.log("Evento criado:", response.data);
        } catch (error: any) {
          console.error("Erro ao criar evento:", error.message);
        }
      } else {
        console.error("Erro na solicitação GET:", error.message);
      }
    }
  }
  return(
    <Button Label="Salvar" onPress={createTask} />
  )
};

export default NovosDados;
