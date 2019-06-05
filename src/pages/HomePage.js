import React, { Component } from 'react';

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='slider'>
                <div className='slide banner'>
                    <div className='image-container'>
                        <img 
                            className='image-banner' 
                            src='https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' 
                            alt='farmers market'
                        />
                    </div>
                    <div className='banner-content'>
                        <div>
                            <h1>Farm to peeps</h1>
                            <p>
                                <a href='/get-started' className='button button1'>
                                    <span>GET STARTED</span>
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
                

            </div>
         );
    }
}
 
export default HomePage;