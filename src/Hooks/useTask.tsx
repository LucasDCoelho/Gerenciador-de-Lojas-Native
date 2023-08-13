import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../utils/types/checklist";
import moment from "moment";

export const useTask = () => {
  const [events, setEvents] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputCheck, setInputCheck] = useState<boolean>(false);

  // visualizar lista
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get(
          "https://64d536d6b592423e469544ad.mockapi.io/task/tasks/"
        );
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, [setEvents]);

  // criar eventos
  const createTask = async () => {
    try {
      const response = await axios.post<Task>(
        "https://64d536d6b592423e469544ad.mockapi.io/task/tasks/",
        { name: inputValue, date: moment().calendar(), isCheck: inputCheck }
      );
      setEvents([...events, response.data]);
      setInputValue("")
      console.log("criada nova task = ", response.data);
    } catch (err) {
      console.error(err);
    }
  };

// editar eventos
const EditTask = async (id: string, newName: string) => {
  try {
    const updatedTasks = events.map((item) => {
      if (item.id === id) {
        return { ...item, name: newName, isCheck: inputCheck };
      }
      return item;
    });

    await axios.put(
      `https://64d536d6b592423e469544ad.mockapi.io/task/tasks/${id}`,
      updatedTasks.find((task) => task.id === id)
    );

    setEvents(updatedTasks);
    console.log("Tarefa atualizada com sucesso");
  } catch (error) {
    console.error(error);
  }
};


  // deletar eventos
  const DeleteTask = async (id: string) => {
    try {
      await axios.delete(
        `https://64d536d6b592423e469544ad.mockapi.io/task/tasks/${id}`
      );

      const updatedTasks = events.filter((item) => item.id !== id);
      setEvents(updatedTasks);
      console.log("Tarefa excluída com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (taskId: string) => {
    const updatedTasks = events.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCheck: !task.isCheck };
      }
      return task;
    });

    setEvents(updatedTasks);
  };

  return {
    createTask,
    DeleteTask,
    handleCheckboxChange,
    EditTask,
    events,
    setEvents,
    inputValue,
    setInputValue,
    inputCheck,
    setInputCheck,
  };
};
