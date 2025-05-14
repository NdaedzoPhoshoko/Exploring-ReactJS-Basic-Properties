
function List(){
    const fruits = ['banana', 'apple', 'orange', 'mango','kiwi', 'grape', 'pear', 'peach', 'plum', 'cherry'];
    //read as: for every fruit in fruit array do a list item element and return a fruit element
    //the map method will return a new array of the same length as the original array
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    //create a list of objects of fruits
    const object = [
        {name: "kiwi", price: 3},
        {name: "banana", price: 1.2},
        {name: "apple", price: 2},
        {name: "orange", price: 1.5},
        {name: "mango", price: 2.5}]

        //create a list of objects of fruits with the map method
        const objectListItems = object.map((fruit, index) => <li key={index}>{fruit.name} - ${fruit.price}</li>)
        const sortedObject = object.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical order
        //const sortedObjectListItems = object.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical order
        const sortedObjectListItems = sortedObject.map((fruit, index) => <li key={index}>{fruit.name} - ${fruit.price}</li>)
    
    return (
        <>
        <p>List of strings</p>
        <ol>
            {listItems}
        </ol>
        <p>List of objects</p>
        <ol>
            {objectListItems}
        </ol>

        <p>List of sorted objects</p>
        <ol>
            {objectListItems}
        </ol>
        </>
    );
}

export default List;