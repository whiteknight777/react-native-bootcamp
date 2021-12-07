import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";
import { AppLayout } from "./AppLayout";
import FeedScreen from "./src/screens/FeedScreen";

const queryClient = new QueryClient();

export const App = () => {
  return (
    // <LoginScreen />
    // <TermsScreen />
    <AppLayout title="Starships">
      <QueryClientProvider client={queryClient}>
        <FeedScreen />
      </QueryClientProvider>
    </AppLayout>
  );
};
