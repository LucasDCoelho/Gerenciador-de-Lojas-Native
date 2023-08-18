import { Task } from "./checklist";

export interface ContextProps {
  children: React.ReactNode;
}

export interface EditProps{
  id: string,
  newName: string,
  newColor: string,
  newDateAndTime: Date
}

export interface useEventStoreProps {
  events: Task[];
  inputValue: string;
  inputCheck: boolean;
  colorValue: string;
  dateValue: Date;
  setEvents: (newEvents: Task[]) => void;
  setInputValue: (newValue: string) => void;
  setInputCheck: (newCheck: boolean) => void;
  setColorValue: (newColor: string) => void;
  setDateValue: (newDate: Date) => void;
}

export interface taskContextProps {
  createTask: () => Promise<void>
  DeleteTask: (id: string) => Promise<void>;
  EditTask: ({ id, newColor, newDateAndTime, newName }:EditProps) => Promise<void>
  useStore: () => useEventStoreProps;
  handleCheckboxChange: (taskId: string) => void;
}
