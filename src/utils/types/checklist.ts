import { CalendarEventsProps } from "./agenda";

export interface Task extends CalendarEventsProps {
    isCheck: boolean;
    color: string;
    category: string;
}
export interface DropdownProps {
    data: Task[] | null;
    label: string;
}

export interface ChecklistItensProps {
    color: string;
    text: string;
    date: Date;
    isCheck?: boolean;
    onValueChange: () => void;
    deleteItem: () => void;
    editItem: () => void;
}
