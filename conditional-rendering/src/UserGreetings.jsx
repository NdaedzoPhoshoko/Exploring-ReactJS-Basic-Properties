// import PropTypes from 'prop-types';
function UserGreetings(props){
    //props is an object that contains the value of isLoggedIn
    const welcomeMessage = props.isLoggedIn ? "Welcome back! "+props.name : "Please sign up! "+props.name;
    return (
        <h1>{welcomeMessage}</h1>
    );
}
/*
UserGreetings.propTypes = {
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
*/
UserGreetings.defaultProps = {
    name: "Guest",
}

export default UserGreetings;