
/**Components can be nested within other components */
import Button from './Button'
import './NestedComponent.css'

const user = {
    name: 'Ndaedzo Phoshoko',
    age: 25,
    occupation: 'Software Engineer',
    email: 'ndaedzo@gmail.com',
    address: {
        street: '123 Main St',
        city: 'Gauteng',
        country: 'South Africa'
    },
    imageUri: 'https://picsum.photos/201/300',
    imageSize: 90,
}

function Profile() {
    return (
       <>
            <h3>{user.name}</h3>
            <img className='avatar'
            src={user.imageUri}
            alt={user.occupation.concat(" random image")}
            style={ //object style
                {   width: user.imageSize,
                    height: user.imageSize
                }
            }
            />
            <p style={{fontWeight: 'bold'}}>{"age: ".concat(user.age)}</p>
       </> 
    );
}
export default function NestedComponent() {
    return (
        <div className="nested-component">
            <h1>Nested Component</h1>
            <Profile />
            <Button />
        </div>
    )
}