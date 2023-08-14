import { Task } from "./checklist";

// export type CheckContextType = {
//   check: boolean;
//   setCheck: React.Dispatch<React.SetStateAction<boolean>>;
// };

export interface ContextProps {
  children: React.ReactNode;
}

export interface taskContextProps {
  createTask: () => Promise<void>;
  DeleteTask: (id: string) => Promise<void>;
  EditTask: (id: string, newName: string, newColor: string, newDateAndTime: string) => Promise<void>
  events: Task[];
  handleCheckboxChange: (taskId: string) => void;
  setEvents: React.Dispatch<React.SetStateAction<Task[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputCheck: boolean;
  setInputCheck: React.Dispatch<React.SetStateAction<boolean>>;
}