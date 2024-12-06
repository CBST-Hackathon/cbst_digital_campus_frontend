import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { system } from "@chakra-ui/react/preset"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider value={system}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
              <App />
          </ThemeProvider>
      </ChakraProvider>
  </StrictMode>,
)
