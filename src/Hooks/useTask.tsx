import axios from "axios";
import { useEffect } from "react";
import { Task } from "../utils/types/checklist";
import { useStore } from "./useStore";
import { EditProps } from "../utils/types/context";

export const useTask = () => {
  const {
    colorValue,
    dateValue,
    events,
    inputCheck,
    inputValue,
    setEvents,
    setInputValue,
  } = useStore();

  // visualizar lista
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get(
          "https://64d677d42a017531bc12abcc.mockapi.io/tasks/"
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
        "https://64d677d42a017531bc12abcc.mockapi.io/tasks/",
        {
          ...events,
          name: inputValue,
          date: dateValue,
          isCheck: inputCheck,
          color: colorValue,
        }
      );
      setEvents([...events, response.data]);
      setInputValue("");
    } catch (err) {
      console.error(err);
    }
  };

  // editar eventos
  const EditTask = async ({ id, newColor, newDateAndTime, newName }:EditProps) => {
    try {
      const updatedTasks = events.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: newName,
            color: newColor,
            date: newDateAndTime,
            isCheck: inputCheck,
          };
        }
        return item;
      });

      await axios.put(
        `https://64d677d42a017531bc12abcc.mockapi.io/tasks/${id}`,
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
        `https://64d677d42a017531bc12abcc.mockapi.io/tasks/${id}`
      );
      const updatedTasks = events.filter((item) => item.id !== id);
      setEvents(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  // verificar Checkbox
  const handleCheckboxChange = async (taskId: string) => {
    const updatedTasks = events.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCheck: !task.isCheck };
      }
      return task;
    });
    await axios.put(
      `https://64d677d42a017531bc12abcc.mockapi.io/tasks/${taskId}`,
      updatedTasks.find((task) => task.id === taskId)
    );
    setEvents(updatedTasks);
  };

  return {
    createTask,
    DeleteTask,
    handleCheckboxChange,
    EditTask,
    useStore,
  };
};
