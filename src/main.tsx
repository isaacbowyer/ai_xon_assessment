import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageUpcomingLaunches } from "./pages/PageUpcomingLaunches/index.tsx";
import { PageLaunch } from "./pages/PageLaunch/index.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { store } from "./store/index.ts";
import { Provider as ReduxProvider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageUpcomingLaunches />,
  },
  {
    path: "/launch/:id",
    element: <PageLaunch />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
