function Button(){
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    }
    return (
        /*<button className="btn_proceed">Proceeed</button>*/
        <button style={buttonStyle}>Proceed</button>
    );
}

export default Button;