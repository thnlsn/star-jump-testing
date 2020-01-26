import React, { useContext, useEffect } from 'react';
import './mainAppStyle.css';
import { Link } from 'react-router-dom';

import UserContext from '../context/user/userContext';

function MainApp() {
    const userContext = useContext(UserContext); // init context

    useEffect(() => {
        userContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className='container mainspace'>
                <div className='row justify-content-center'>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/math'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconMath'></div>
                                <p className='hoverText hvr-fade'>Math</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/abc'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconABC'></div>
                                <p className='hoverText hvr-fade'>Spelling</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/shapes'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconShapes'></div>
                                <p className='hoverText hvr-fade'>Shapes</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/numbers'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconNumbers'></div>
                                <p className='hoverText hvr-fade'>Numbers</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/colors'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconColors'></div>
                                <p className='hoverText hvr-fade'>Colors</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/animals'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconAnimals'></div>
                                <p className='hoverText hvr-fade'>Animals</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/planets'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconPlanets'></div>
                                <p className='hoverText hvr-fade'>Planets</p>
                            </div>
                        </Link>
                    </div>
                    <div className='buffer col-md-3 col-sm-6'>
                        <Link to='/sightwords'>
                            <div className='gameWrapper hvr-pulse'>
                                <div className='iconTime'></div>
                                <p className='hoverText hvr-fade'>Sightwords</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainApp;
