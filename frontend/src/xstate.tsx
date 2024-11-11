import { createMachine } from 'xstate';
import { createContext, useContext, ReactNode } from 'react';
import { useMachine } from '@xstate/react';

// Define the machine
export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: {
        TOGGLE: 'Active'
      }
    },
    Active: {
      on: {
        TOGGLE: 'Inactive'
      }
    }
  }
});

// Define types for the context
type GlobalStateContextType = {
  state: any;
  send: (event: { type: string }) => void;
} | undefined;

const GlobalStateContext = createContext<GlobalStateContextType>(undefined);

interface GlobalStateProviderProps {
  children: ReactNode;
}

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const [state, send] = useMachine(toggleMachine);

  return (
    <GlobalStateContext.Provider value={{ state, send }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
} 