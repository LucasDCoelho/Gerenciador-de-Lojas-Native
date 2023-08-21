import { useRef } from "react";
import { useEventStoreProps } from "../utils/types/context";
import { create } from "zustand";

export const useEventStore = create<useEventStoreProps>((set) => ({
    // initial state
    events: [],
    inputValue: "",
    inputCheck: false,
    colorValue: "#000000",
    dateValue: new Date(),
    category: "sem categoria",

    // dispatch
    setEvents: (newEvents) => set({ events: newEvents }),
    setInputValue: (newValue) => set({ inputValue: newValue }),
    setInputCheck: (newCheck) => set({ inputCheck: newCheck }),
    setColorValue: (newColor) => set({ colorValue: newColor }),
    setDateValue: (newDate) => set({ dateValue: newDate }),
    setCategory: (newCategory) => set({ category: newCategory }),
}));

export const useStore = () => {
    const events = useEventStore((state) => state.events);
    const setEvents = useEventStore((state) => state.setEvents);

    const inputValue = useEventStore((state) => state.inputValue);
    const setInputValue = useEventStore((state) => state.setInputValue);

    const inputCheck = useEventStore((state) => state.inputCheck);
    const setInputCheck = useEventStore((state) => state.setInputCheck);

    const colorValue = useEventStore((state) => state.colorValue);
    const setColorValue = useEventStore((state) => state.setColorValue);

    const dateValue = useEventStore((state) => state.dateValue);
    const setDateValue = useEventStore((state) => state.setDateValue);

    const category = useEventStore((state) => state.category);
    const setCategory = useEventStore((state) => state.setCategory);

    // refObject
    const InitialDateValueRef = useRef(dateValue);

    return {
        events,
        setEvents,
        inputValue,
        setInputValue,
        colorValue,
        inputCheck,
        InitialDateValueRef,
        category,
        setCategory,
        setInputCheck,
        setColorValue,
        dateValue,
        setDateValue,
    };
};
