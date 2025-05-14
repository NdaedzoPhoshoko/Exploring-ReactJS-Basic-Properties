import profileImage from './assets/profile.jpg';
/*props is a read only that is used to pass data to a child component */
function Student(props){
    return(
        <div className="student">
            <img src={props.image} className="student_image" alt="student placeholder"/>
            <h3 className="student_name">{props.name}</h3>
            <p className="student_age">{props.age}</p>
        </div>
    );
}

//This are useful when we want to validate the values accpeted by props, mostly used for debugging
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
}

export default Student;