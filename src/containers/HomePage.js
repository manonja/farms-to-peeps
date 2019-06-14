import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {

    render() { 
        return ( 
        <div >
            <div id="intro">
                <div className="mask rgba-light-light">
                    <div className="container d-flex align-items-center justify-content-center h-100">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-10">
                                <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">Farm To Peeps</h2>
                                <hr className="hr-light"/>
                                <h4 className="white-text my-4">Get fresh produces from dedicated farmers</h4>
                                <Link to='/signin'><button  id='farmer-btn' type="button" className="btn btn-outline-white">GET STARTED</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="mt-5">
                <div className="container">
                    <section id="best-features" className='text-center'>
                        <h2 className="mb-5 font-weight-bold">How it works?</h2>
                        <div className="row d-flex justify-content-center mb-4">
                            <div className="col-md-8">
                                <p className='grey-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat
                                    facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis est
                                    sit pariatur.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-1">
                                <i className="fas fa-camera-retro"></i>
                                <h4 className="my-4">Farmers</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>
                            <div className="col-md-4 mb-1">
                                <i className="fas fa-heart"></i>
                                <h4 className="my-4">People</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>
                            <div className="col-md-4 mb-1">
                                <i className="fas fa-bicycle"></i>
                                <h4 className="my-4">Community</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>
                        </div>
                    </section>
                    <hr className="my-5"/>
                    <section id="examples" className='text-center'>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://images.unsplash.com/photo-1529007328922-d323f83de273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="img-fluid" alt='example'/>
                            <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <h4 className="my-4 font-weight-bold">Local Farms</h4>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src="https://images.unsplash.com/photo-1463490093487-b0ffe9b8e140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="img-fluid" alt='example2'/>
                                <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <h4 className="my-4 font-weight-bold">Sustainable</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                                aperiam minima
                                assumenda deleniti hic.</p>
                            </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="view overlay z-depth-1-half">
                                <img src="https://images.unsplash.com/photo-1501620123930-c0eeb6d954a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="img-fluid" alt='example2'/>
                                <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <h4 className="my-4 font-weight-bold">Fresh</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam,
                                aperiam minima
                                assumenda deleniti hic.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-5"/>
                    <section id="gallery">
                    <h2 className="mb-5 font-weight-bold text-center">They love it!</h2>
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1501620123930-c0eeb6d954a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1529007328922-d323f83de273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                        </div>

                        <div className="col-md-6">
                            <a href="#!" className="teal-text">
                                <h6 className="pb-1"><i className="fas fa-heart"></i><strong> Peep </strong></h6>
                            </a>
                            <h4 className="mb-3"><strong>It finally becomes easy to eat local!</strong></h4>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis
                                debitis aut rerum.</p>

                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis
                                debitis aut rerum.</p>
                            <p>by <strong>Diogo Costa</strong>, 26/08/2016</p>

                        </div>
                    </div>

                    </section>

                    <hr className="my-5"/>

                    <section id="contact">
                    <h2 className="mb-5 font-weight-bold text-center">Contact us</h2>

                        <div className="row">

                        <div className="col-lg-7 col-md-12">

                        <form className="p-5 grey-text">
                            <div className="md-form form-sm"> <i className="fas fa-user prefix"></i>
                                <input type="text" id="form3" className="form-control form-control-sm"/>
                                <label htmlFor="form3">Your name</label>
                            </div>
                            <div className="md-form form-sm"> <i className="fas fa-envelope prefix"></i>
                                <input type="text" id="form2" className="form-control form-control-sm"/>
                                <label htmlFor="form2">Your email</label>
                            </div>
                            <div className="md-form form-sm"> <i className="fas fa-tag prefix"></i>
                                <input type="text" id="form32" className="form-control form-control-sm"/>
                                <label htmlFor="form34">Subject</label>
                            </div>
                            <div className="md-form form-sm"> <i className="fas fa-pencil-alt prefix"></i>
                                <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="4"></textarea>
                                <label htmlFor="form8">Your message</label>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-orange">Send <i className="far fa-paper-planeml-1"></i></button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </section>
                </div>
            </main>         
        </div>
         );
    }
}
 
export default HomePage;