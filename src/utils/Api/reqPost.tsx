import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "../../components/UI/Button";

type dadosEvent = {
  dados: {
    id: string;
    description: string;
    date: string;
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
      await axios.get(
        "https://64d536d6b592423e469544ad.mockapi.io/task/tasks/" + task.id
      );

      console.log("ID já existe na API");

      return;
    } catch (error) {
      if (error.response && error.response.status === 500) {
        try {
          const response = await axios.post(
            "https://64d536d6b592423e469544ad.mockapi.io/task/tasks/",
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
