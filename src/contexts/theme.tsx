import { ReactNode, createContext, useContext, useReducer } from 'react';

type Theme = {
  mode: 'light' | 'dark' | 'system';
};

export type ThemeContextValue = Theme & {
  changeTheme: (theme: Theme) => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

const initialState: Theme = {
  mode: 'light',
};

type ChangeMode = {
  type: 'CHANGE_MODE';
  payload: Theme;
};

function themeReducer(state: Theme, action: ChangeMode): Theme {
  if (action.type === 'CHANGE_MODE') {
    return { mode: action.payload.mode };
  }

  return state;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useThemeContext() {
  const ThemeMode = useContext(ThemeContext);
  if (ThemeMode === null) {
    throw new Error(`Test is null`);
  }

  return ThemeMode;
}

export default function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [themestate, dispatch] = useReducer(themeReducer, initialState);

  const ctx: ThemeContextValue = {
    mode: themestate.mode,
    changeTheme(theme) {
      dispatch({ type: 'CHANGE_MODE', payload: theme });
    },
  };

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
}
