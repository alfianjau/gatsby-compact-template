import React from 'react'
import { useColorMode } from 'theme-ui'

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <button
      type="button"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  )
}
