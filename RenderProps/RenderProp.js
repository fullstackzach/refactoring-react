import React from 'react'
import CatIcon from './withCat/cat'
import { Motion, spring } from 'react-motion'

// *** RENDER PROP Solution ***

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100%'}} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

class Cat extends React.Component {
  state = { width: 0, height: 0, x: 0, y: 0}

  componentDidMount () {
    this.setState({
      width: this.cat.offsetWidth,
      height: this.cat.offsetHeight
    })
  }

  componentDidUpdate(prevProps) {
    const { mouse } = this.props

    if (mouse.x !== prevProps.mouse.x || mouse.y !== prevProps.mouse.y)
      this.setState(mouse)
  }

  render() {
    const catStyle = {
      top: spring(this.state.y - Math.round(this.state.height / 2)),
      left: spring(this.state.x - Math.round(this.state.width / 2))
    }

    return (
      <Motion style={catStyle}>
        {style => (
          <CatIcon style={style} ref={node => this.cat = node} />
        )}
      </Motion>
    )
  }
}

// We can still create a HOC that wraps a render prop
const WithMouse = (Component) => {
  return class extends React.Component {
    render () {
      return (
        <Mouse>
          {(mouse) => <Component {...this.props} mouse={mouse} />}
        </Mouse>
      )
    }
  }
}

const App = ({message}) =>
  <Mouse>
    {(mouse) => (
      <>
        <h1>The mouse position is ({mouse.x}, {mouse.y}), the message is {message}</h1>
        <Cat mouse={mouse} />
      </>
    )}
  </Mouse>

export default App
