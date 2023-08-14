import { Task } from "./checklist";

export interface ContextProps {
  children: React.ReactNode;
}

export interface useEventStoreProps {
  events: Task[];
  inputValue: string;
  inputCheck: boolean;
  colorValue: string;
  dateValue: string;
  setEvents: (newEvents: Task[]) => void;
  setInputValue: (newValue: string) => void;
  setInputCheck: (newCheck: boolean) => void;
  setColorValue: (newColor: string) => void;
  setDateValue: (newDate: string) => void;
}

export interface taskContextProps {
  createTask: () => Promise<void>
  DeleteTask: (id: string) => Promise<void>;
  EditTask: (id: string, newName: string, newColor: string, newDateAndTime: string) => Promise<void>
  useStore: () => useEventStoreProps;
  handleCheckboxChange: (taskId: string) => void;
}