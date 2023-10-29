import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from "./providers/ThemeProvider";
import { client } from "./client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </ThemeProvider>
  );
}
export default App;
