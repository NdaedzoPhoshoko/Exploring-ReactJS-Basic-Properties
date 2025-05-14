// This is a component that displays a header with the title of the app.
function Header(){
    return( //return one parent element at a time
        <header>
            <h1>My First React App</h1>
            <nav nav-bat-color>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                <hr />
            </nav>
        </header>
    );
}

export default Header;