import {createContext, useState} from 'react';

type ScoreContext = {
  score: number;
  updateScore: (value: number) => void;
};
export const ScoreContext = createContext<ScoreContext | undefined>(undefined);

export const ScoreContextProvider = ({children}) => {
  const [score, setScore] = useState<number>(0);
  const updateScore = () => {
    setScore(prev => prev + 1);
  };
  return <ScoreContext value={{score, updateScore}}>{children}</ScoreContext>;
};
