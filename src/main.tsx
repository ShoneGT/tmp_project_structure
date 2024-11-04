import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from "./routers.tsx";
import "./styles/index.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <div>
         <AppRouter />
     </div>
  </StrictMode>,
)
