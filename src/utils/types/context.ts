export type CheckContextType = {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ContextProps {
  children: React.ReactNode;
}
