import { create } from "zustand";
import { EventStoreState } from "../utils/types/event";

export const useEventStore = create<EventStoreState>((set) => ({
    // initial state
    input: "",
    event: [],
    openDateTime: false,
    openHoursTime: false,
    openCategoria: false,
    openColor: false,
    valueColor: "",
    valueCategoria: "",
    cores: [],
    categorias: [],

    // dispatch
    setInput: (input) => set({ input }),
    setEvent: (event) => set({ event }),
    setOpenDateTime: (open) => set({ openDateTime: open }),
    setOpenHoursTime: (open) => set({ openHoursTime: open }),
    setOpenCategoria: (open) => set({ openCategoria: open }),
    setOpenColor: (open) => set({ openColor: open }),
    setValueColor: (value) => set({ valueColor: value }),
    setValueCategoria: (value) => set({ valueCategoria: value }),
    setCores: (cores) => set({ cores }),
    setCategorias: (categorias) => set({ categorias }),
}));

export const useEvent = () => {
    const inputValue = useEventStore((state) => state.input);
    const setInputValue = useEventStore((state) => state.setInput);
    const event = useEventStore((state) => state.event);
    const openDateTime = useEventStore((state) => state.openDateTime);
    const openHoursTime = useEventStore((state) => state.openHoursTime);
    const openCategoria = useEventStore((state) => state.openCategoria);
    const openColor = useEventStore((state) => state.openColor);
    const valueColor = useEventStore((state) => state.valueColor);
    const valueCategoria = useEventStore((state) => state.valueCategoria);
    const cores = useEventStore((state) => state.cores);
    const categorias = useEventStore((state) => state.categorias);

    const setInput = useEventStore((state) => state.setInput);
    const setEvent = useEventStore((state) => state.setEvent);
    const setOpenDateTime = useEventStore((state) => state.setOpenDateTime);
    const setOpenHoursTime = useEventStore((state) => state.setOpenHoursTime);
    const setOpenCategoria = useEventStore((state) => state.setOpenCategoria);
    const setOpenColor = useEventStore((state) => state.setOpenColor);
    const setValueColor = useEventStore((state) => state.setValueColor);
    const setValueCategoria = useEventStore((state) => state.setValueCategoria);
    const setCores = useEventStore((state) => state.setCores);
    const setCategorias = useEventStore((state) => state.setCategorias);

    return {
        inputValue,
        setInputValue,
        event,
        openDateTime,
        openHoursTime,
        openCategoria,
        openColor,
        valueColor,
        valueCategoria,
        cores,
        categorias,
        setInput,
        setEvent,
        setOpenDateTime,
        setOpenHoursTime,
        setOpenCategoria,
        setOpenColor,
        setValueColor,
        setValueCategoria,
        setCores,
        setCategorias,
    };
};

