import React from 'react'

class App extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>The mouse position is ({x}, {y})</h1>
      </div>
    )
  }
}

export default App


// 1 - Refactor to HOC
// 2 - What issues do we have?
//  * naming conflicts
//  * ambiguous where props may be coming from
//  * HOCs are static and set up at compile time

// 3 Bring in mouses' 'friend'
// 4 show what happens if theres a naming conflict
// 5 Refactor to Render props
//   
