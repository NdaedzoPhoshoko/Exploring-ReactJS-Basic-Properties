function FriendList(){
    //we will include the javascript code to display the list of friends
    const friendList = ['John', 'Smith', 'Ndaedzo', 'Michael', 'William', 'David'];
    let lastFriend = 'Doe';
    return (
            <>
            <h3>Friend List</h3>
            <ol>
                {/*we will use the map function to iterate over the array and display the list of friends*/}
                {friendList.map((friend, index) => {
                    return <li key={index}>{friend}</li>
                })}
                {/*Or you can simply use placeholders*/}
                <li>{lastFriend}</li>
            </ol>
            
            </>
    );
}

export default FriendList; //export the component so that it can be used in other files