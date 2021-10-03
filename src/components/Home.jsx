import React , { Component } from "react";

export default class Home extends Component{
    render(){
        return(
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                        <li style={{backgroundImage: 'url(images/img_bg2.jpg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner js-fullheight">
                                    <div className="desc">
                                    <h1 >Hi! <br />I'm Nirusha</h1>
                                    <p ><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1F8nTD0adS2Et5RQw3uT5UwBTUiC0aofC/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner">
                                    <div className="desc">
                                    <h1 style={{color: 'white'}}>I love building<br /> THINGS !!</h1>
                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/nirushanayak" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>View Projects <i className="icon-briefcase3" /></a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                        {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner">
                                    <div className="desc">
                                    <h1>I often <br/>Write ... </h1>
                                    <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li> */}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}