import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

export const system = createSystem(defaultConfig, config)
