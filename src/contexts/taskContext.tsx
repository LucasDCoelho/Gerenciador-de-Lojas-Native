import React, { createContext, useContext } from "react";
import { useTask } from "../Hooks/useTask";
import { ContextProps, taskContextProps } from "../utils/types/context";

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
