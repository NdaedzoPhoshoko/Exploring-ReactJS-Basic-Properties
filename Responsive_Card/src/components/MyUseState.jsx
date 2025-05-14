
/**States are used when we want to store change that can be used in the future
 * Example keeping number of times user tried a password
 * or keeping a user's name
*/

import {useState} from 'react';

export default function MyUseState() { //component name
    /*declare useState variable
    * count has initial value set to 0
    * setCount is a function that allows us to update the value of count
    */
    const [count, setCount] = useState(0); //initial state is 0 meaning that count is 0
    function handleCLick() {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <>
        <div className='usesate-container' style={{backgroundColor: 'lightblue', padding: '2rem', margin: '1rem', borderRadius: '1rem'}}>
            <h1 className='usestate-header'>You have clicked image {count} times</h1>
            <img src="https://picsum.photos/102/102" alt="random image to click" 
                onClick={handleCLick} />
        </div>
        </>
        //Note: Each component remembers its own state. 
        //So if you have multiple components that need to keep track of their own state, 
        //each component can have its own state variable and use the useState hook to manage it.
    );
}