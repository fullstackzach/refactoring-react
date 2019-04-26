import React from 'react'
import withCat from './withCat'

// *** HOC Solution ***
const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 }

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }

    render () {
      return <Component mouse={this.state} handleMouseMove={this.handleMouseMove} {...this.props} />
    }
  }
}

class App extends React.Component {
  render() {
    const { x, y } = this.props.mouse

    return (
      <div style={{ height: '100%' }} onMouseMove={this.props.handleMouseMove}>
        <h1>The mouse position is ({x}, {y}), the message is {this.props.message}</h1>
      </div> 
    )
  }
}

export default withMouse(withCat(App))
