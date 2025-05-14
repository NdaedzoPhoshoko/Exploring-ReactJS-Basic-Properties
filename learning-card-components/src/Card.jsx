import profileImage from './assets/profile.jpg';

/**
 * Card component
 * 
 * @returns card componenet with image, title, and description
 */
function Card(){
    return (
        <div className="card">
            <img src={profileImage} className='card-image' alt="placeholder" />
            <h3 className='card-title'>Card Title</h3>
            <p className='card-description'>Card description is put here, at the moment we are not yet opening our IT freelancing company kindly wait for year {(new Date().getFullYear())+1}</p>
        </div>
    );
}

export default Card;