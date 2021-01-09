import * as React from 'react'
import '../box-styles.css'

function Box({size, className = '', style, children}) {
  const sizeClassName = size ? `box--${size}` : ''
  const innerClassName = `box ${sizeClassName} ${className}`
  const innerStyle = {
    fontStyle: 'italic',
    ...style
  }

  return (
    <div
      className={innerClassName}
      style={innerStyle}
    >
      {children}
    </div>
  )
}

const smallBox = <Box size="small" style={{ backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{ backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{ backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
