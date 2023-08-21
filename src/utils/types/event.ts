import { Task } from "./checklist";

export interface EventStoreState {
    input: string;
    event: Task[];
    openDateTime: boolean;
    openHoursTime: boolean;
    openCategoria: boolean;
    openColor: boolean;
    valueColor: string;
    valueCategoria: string;
    cores: string[];
    categorias: string[];
    setInput: (input: string) => void;
    setEvent: (event: any[]) => void; 
    setOpenDateTime: (open: boolean) => void;
    setOpenHoursTime: (open: boolean) => void;
    setOpenCategoria: (open: boolean) => void;
    setOpenColor: (open: boolean) => void;
    setValueColor: (value: string) => void;
    setValueCategoria: (value: string) => void;
    setCores: (cores: string[]) => void;
    setCategorias: (categorias: string[]) => void;
  }