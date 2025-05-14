
//https://react.dev/learn#sharing-data-between-components
/**Functions starting with use are called hooks. They are used for sharing data between components.
 * Hooks let you use state and other React features without writing a class.
 * Example useState() method
 * You can write your own hooks using the existing ones, but there are rules.
 * Hooks can only be called from React function components.
 * Hooks can only be called at the top level. You can’t call hooks inside loops, conditions, or nested functions.
 * 
 * 
 * Sharing data between components
 */

import { useState } from 'react';

export default function UseHooks() { //component 2, to pass data
    //When you click button, the count value moves from component 1 to component 2
    const [count, setCount] = useState(0);

    function handleClick() { //increments count by 1
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Passing count value from button to image</h1>
            <button onClick={handleClick} style={{fontWeight:'500'}}>Click me</button>
            <br /><br />
            <MyImage count={count}/>  {/**Note that count is a prop value to be passed to component 2 */}
        </div>
    );
}

//Pass data to 2nd component as arguments called props. It must be a variable containing state (optional: and its clickHandler)
function MyImage({count}) { //component 2, to receive data
    return (
        <div className="my-image">
            <img src="https://picsum.photos/100/100" alt="some random image"/>
            <p style={{fontWeight:'500'}}>Number of clicks: {count}</p>
        </div>
    );
}