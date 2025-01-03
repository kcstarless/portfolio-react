import iconMail from '../assets/icons/Mail.svg';


//** Header with Menu component */

const Header = () => {
    return (
        <header>
            <div className="title">
                <a href="mailto:jwgim7786@gmail.com" className="email-link">
                    <img src={iconMail} alt="jwgim7786@gmail.com" />
                </a>
                <span>Portfolio</span>
            </div>
        </header>
    )
}

export default Header;