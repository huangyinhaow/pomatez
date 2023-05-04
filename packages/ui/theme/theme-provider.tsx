import { globalStyles as applyGlobalStyles } from "./global-styles";
import { ThemeContext } from "./theme-context";
import { theme } from "./stitches.config";
import { CreateTheme } from "./types";

export type ThemeProviderProps = {
  theme?: CreateTheme;
  disableBaseline?: boolean;
  children?: React.ReactNode;
};

export const ThemeProvider = ({
  theme: userTheme,
  disableBaseline,
  children,
}: ThemeProviderProps) => {
  applyGlobalStyles();

  return (
    <ThemeContext.Provider
      value={{ isDark: false, type: "light", theme: theme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};