import {DarkLightThapa, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";

export const App = () => {
  return (
    <>
     <ThemeProvider>
      <DarkLightThapa/>
      </ThemeProvider>
    </>
  );
};
