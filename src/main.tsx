import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageUpcomingLaunches } from "./pages/PageUpcomingLaunches/index.tsx";
import { PageLaunch } from "./pages/PageLaunch/index.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

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
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
