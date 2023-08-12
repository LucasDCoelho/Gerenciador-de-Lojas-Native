import React, { createContext, useContext } from "react";
import { useTask } from "../Hooks/useTask";
import { ContextProps } from "../utils/types/context";
import { Task } from "../utils/types/checklist";

interface taskContextProps {
  createTask: () => Promise<void>;
  DeleteTask: (id: string) => Promise<void>;
  EditTask: (id: string) => Promise<void>;
  events: Task[];
  handleCheckboxChange: (taskId: string) => void;
  setEvents: React.Dispatch<React.SetStateAction<Task[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputCheck: boolean;
  setInputCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskContext = createContext({} as taskContextProps);

export const TaskProvider = ({ children }: ContextProps) => {
  const taskContext = useTask();

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
