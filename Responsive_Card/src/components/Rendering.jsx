
/**There is no special syntax for writing conditions in JSX. You can use JavaScript's if, else, and switch statements. */
export default function Rendering() {
    if (isLoggedin) {
        content = <AdminPanel />; // AdminPanel is a component
    } else {
        content = <LoginForm />; // LoginForm is a component
    }

    return (
        <div>
            {content}
        </div>
    );
}

/**Or you can use alternative syntax of the if statement */
return (
    <div>
        {isLoggedin ? <AdminPanel /> : <LoginForm />}
    </div>
);
