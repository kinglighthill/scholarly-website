import { createContext, useContext, useState } from 'react';

type FaqsContextType = [
  number,
  (value: number) => void
];

const FaqsContext = createContext<FaqsContextType>([0, (value) => null]);

export default function FaqsProvider({ children }: { children: React.ReactNode }) {
  const [faqsSection, setFaqsSection] = useState<number>(0);

  const updateFaqsSection = (value: number) => {
    setFaqsSection(value);
  }

  return (
    <FaqsContext.Provider value={[faqsSection, updateFaqsSection]}>
      {children}
    </FaqsContext.Provider>
  )
}

export const useFaqsContext = () => useContext(FaqsContext);