import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// LET'S REMEMBER THE 2 RULES OF HOOKS:
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS (no class components, no other JS)
// 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL OF YOUR COMPONENT, BEFORE THE RETURN STATEMENT
// AND OUTSIDE OF ANY CONDITION, FUNCTION, LOOP

// useEffect can mimic various lifecycle methods in a functional component!
// you can use it to mimic a componentDidMount, a componentDidUpdate, even a componentWillUnmount

// useEffect takes up to 2 parameters:
// 1) the callback, what you want to execute
// 2) a dependencies array, which defines HOW OFTEN TO RE-EXECUTE the callback
// every variable in the deps array, when changed, will fire the callback again!

const UseEffectComponent = () => {
  // right here!

  // let's try to imitate a componentDidMount!
  // how many times does componentDidMount get invoked? --> ONE
  useEffect(
    () => {
      console.log('hello world!')
      // maybe do a fetch here
    },
    [
      // put in here all the variables you want to listen for
      // in order to re-execute the callback
    ]
  )
  // if we put an empty array as the second argument of the useEffect,
  // we're telling the hooks to NOT re-invoke the callback ever again
  // because we're not providing any trigger, any condition to listen for!

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Leon')

  // componentDidUpdate, in a class component, gets invoked every time
  // there's a change in the props or in the state of the component
  // so, if you're interested in a SINGLE PROP CHANGE, you have to put a condition
  // because chances are, you'll enter an infinite loop without it (because componentDidUpdate
  // works TOO well, and invokes itself too much often)

  // let's try to write a componentDidUpdate that triggers when counter in the state
  // changes:
  // componentDidUpdate(prevProps, prevState) {
  //     if(prevState.counter !== this.state.counter) {
  //         // do something
  //     }
  //     if(prevProps.movieTitle !== this.props.movieTitle) {
  //         // do something else
  //     }
  // }

  // like componentDidUpdate for counter
  useEffect(() => {
    // do something
    console.log('counter changed!')
  }, [counter])

  return (
    <div>
      <h2>useEffect example</h2>
      <p>The value of the counter is: {counter}</p>
      <Button variant="success" onClick={() => setCounter(counter + 1)}>
        INCREASE
      </Button>
      <Button variant="success" onClick={() => setCounter(counter - 1)}>
        DECREASE
      </Button>
      <div>
        <p>Current name is: {name}</p>
        <Button
          variant="info"
          onClick={() => setName(name === 'Leon' ? 'Madara' : 'Leon')}
        >
          CHANGE NAME
        </Button>
      </div>
    </div>
  )
}

export default UseEffectComponent
