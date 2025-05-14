
//We can respond to events by using event handler functions inside your components.
export default function EventResponse () {
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            {/*When user clicks the button control is passed to the event handler function.*/}
        </>
        
    );
}

