import { useState, useEffect } from 'react';

import Header from './Header';
import Portfolio from './Portfolio';
import IntroPage from './IntroPage';

//** Content Component */

const Content = () => {
    const [firstLoad, setFirstLoad] = useState(true);

    return (
        <div className="container">
            
            {firstLoad 
                ? <IntroPage setFirstLoad={setFirstLoad}/> 
                : <>
                    <Header />
                    <Portfolio />
                  </>
            }
        </div>
    )
}

export default Content