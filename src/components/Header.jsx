import { useState } from 'react';

import iconMail from '../assets/icons/Mail.svg';
import iconCopy from '../assets/icons/Copy.svg';
import iconCheck from '../assets/icons/Check.svg';

//** Header with Menu component */

const Header = () => {
    const [copied, setCopied] = useState(false); 
    const copyEmailAddress = () => {
        // Copy email to clipboard
        navigator.clipboard.writeText('jwgim7786@gmail.com')
        .then(() => {
            setCopied(true); // Optionally show feedback
            setTimeout(() => setCopied(false), 2000); // Reset the feedback after 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    return (
        <header>
            <div className="title">
                <div className="email-link">
                {copied && <img src={iconCheck} className="copy-feedback" />}
                    <a href="mailto:jwgim7786@gmail.com" className="email">
                        <img src={iconMail} alt="Email Address" title="jwgim7786@gmail.com" />
                    </a>
                    <img src={iconCopy} alt="Copy Icon" title="Copy Email Address" className="copy" onClick={copyEmailAddress} />
                </div>
                <span>Portfolio</span>
            </div>
           
        </header>
    )
}

export default Header;