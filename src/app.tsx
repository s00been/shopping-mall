import React, { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient"; // Singleton QueryClient 가져오기
import { routes } from "./routes";
import "./styles/globals.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/commons/header";
import Footer from "./components/commons/Footer";

const App = () => {
  const queryClient = getClient();
  const elem = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {elem}
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
