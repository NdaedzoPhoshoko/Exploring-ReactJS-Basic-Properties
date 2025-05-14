import UserGreetings from './UserGreetings';
import List from './List';
import './App.css'

function App() {
  return (
    //props passes the vlue of isLoggedIn to UserGreetings
    //if isLoggedIn is true, it will show the welcome message
    <>
    <UserGreetings  isLoggedIn={true} name="Ndaedzo Phoshoko"/>
    <UserGreetings  isLoggedIn={false} />
    <hr />
    
    <List />
    
    </>
  );
}

export default App