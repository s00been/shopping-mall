import React, { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient"; // Singleton QueryClient 가져오기
import { routes } from "./routes";
import "./styles/globals.css";
import { ReactQueryDevtools } from 'react-query/devtools';
import Gnb from "./components/gnb";

const App = () => {
  const queryClient = getClient();
  const elem = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
