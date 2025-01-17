import { useEffect, useState } from "react";

const IntroPage = ({setFirstLoad}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setFirstLoad(false);
        }, 6000);
    },[]);

    return (
        <>
        <div className="intro-page">
            {/* <button className="portfolio-link">Portfolio</button> */}
            <div className="name">Hi, I'm <span className="highlight">David</span></div>
            <div className="text-1"><p>I am passionate about learning</p></div>
            <div className="text-2"><p>I like to build things</p></div>
            <div className="text-3"><p>I like to solve problems</p></div>
            <div className="text-5"><p>I like to make things work</p></div>
            <div className="text-6"><p>I seek mentorship</p></div>
            <div className="sub-title">Full-Stack Web Developer</div>
            
        </div>
        {loading && <div className="loader"></div>}
        </>
    )
}

export default IntroPage;