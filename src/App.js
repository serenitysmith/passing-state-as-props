import "./App.css";
import Count from "./COUNT/count";
import React from "react";

//This is another functional component named App, which is the main component of the application.
function App() {
  // React.useState is a hook used to create and manage state in functional components.
  // The `count` state is initialized with a default value of 0, and `setCount` is a function to update the state.
  const [count, setCount] = React.useState(0);
  // This function `add` is used to increase the count value by 1.
  function add() {
    // The `setCount` function here uses the previous state (prevCount) to update the count.
    // It is a function that takes the previous state as an argument and returns the new state value.
    setCount((prevCount) => prevCount + 1);
  }
  console.log("App component rendered")
  // This function `subtract` is used to decrease the count value by 1.
  function subtract() {
    // Similar to the add function, `setCount` is used to update the count state.
    setCount((prevCount) => prevCount - 1);

    // The App component returns the JSX to be rendered in the DOM.
    // The div with className "counter" is the main container of our counter component.
    // Inside it, there are three elements:
    // 1. A button with className "counter--minus" to subtract from the count, clicking on it calls the `subtract` function.
    // 2. An instance of the `Count` component, which displays the current value of the count using the `count` state as the `number` prop.
    // 3. A button with className "counter--plus" to add to the count, clicking on it calls the `add` function.
  }

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */
  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}> –
</button>
      {/* // to meet above reqiurements we removed the. h1 div below and replaced it with the counter Prop function called from aboves function  */}
      {/* <div className="counter--count">
                <h1>{count}</h1>
            </div> */}

      <Count number={count} />

      <button className="counter--plus" onClick={add}>+</button>
    </div>
  );
}
// In summary, this code defines two components: Count and App. The Count component is a simple div that displays the count value passed as a prop. The App component manages the count state and renders a counter UI with buttons to increase and decrease the count, along with the Count component to display the current count value.

export default App;
