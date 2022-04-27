import { useState } from 'react'
import { Button } from 'react-bootstrap'

// useState will create a STATE VARIABLE for you!
// {
//     movieTitle: 'Iron Man', <-- this is a state variable!
//      reservation: null <-- this is another state variable!
// name: 'Stefano'
// }

// LET'S REMEMBER THE 2 RULES OF HOOKS:
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS (no class components, no other JS)
// 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL OF YOUR COMPONENT, BEFORE THE RETURN STATEMENT
// AND OUTSIDE OF ANY CONDITION, FUNCTION, LOOP

const UseStateComponent = () => {
  // right here!
  // useState return an array with 2 elements:
  // [0] --> the state variable
  // [1] --> it's a FUNCTION capable of changing the value of the state variable
  // it comes with (smth like a setState, but which JUST works on the associated state variable)
  const [name, setName] = useState('Stefano')
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    specialRequests: '',
  })

  //   const [epicode, setEpicode] = useState(true)
  // name is going to be the state variable React is going to keep track of
  // setName is a function capable of just assigning a new value to the name state variable (like a setState, but more specific)

  // in a class component, if you wanted to change the value of name:
  // this.setState({ name: 'Rasmus' })
  // setName('Rasmus')

  return (
    <div>
      <h2>useState example!</h2>
      <p>Currently my name is: {name}</p>
      <p>Current reservation phone: {reservation.phone}</p>
      <Button variant="warning" onClick={() => setName('Rasmus')}>
        CHANGE NAME
      </Button>
      <Button
        variant="dark"
        onClick={() =>
          setReservation({
            ...reservation,
            phone: '000',
          })
        }
      >
        CHANGE RESERVATION PHONE
      </Button>
    </div>
  )
}

export default UseStateComponent
