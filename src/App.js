import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Login from "./componentes/LoginForm";
import { v4 as uuidv4 } from 'uuid';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
  );
}

export default App;
