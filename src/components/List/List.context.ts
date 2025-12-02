import { createContext, useContext } from 'react';

type ListContextType = {
  draggable: boolean;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider = ListContext.Provider;

export const useListContext = (): ListContextType => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
};
