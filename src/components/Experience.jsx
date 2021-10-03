import React, {Component} from "react";

export default class Experience extends Component{
    render(){
        return(
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-2">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Software Developer 2 at Intuit</a> <span>May 2021- Present</span></h2>
                                <p>As a part of Quickbook Online Advanced Team, actively involved in developing features for Quickbook Advanced Sku providing E-Signature capabilities and Template Customisation.</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-3">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Software Developer at Cisco </a> <span>August 2019- May 2021</span></h2>
                                <p>Was a Part of Global Cloud Infrastructure Team, As a part of this team my primary role was engineering and building software around provisioning, monitoring, managing and self-healing distributed storage including entire manual provisioning of storage, Alerts Correlation  of large scale systems etc</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Software Developer Intern at Cisco</a> <span>January 2019 – July 2019</span></h2>
                                <p>Worked on Anomaly detection on time series based performance metrics obtained from storage fabric and helped predict future anomalies and alert the same with a 80-85% accuracy.</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-5">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Machine Learning Intern at MCG</a> <span>May 2018 – July 2018</span></h2>
                                <p>Developed a Model management system for machine learning models. Concept is similar to source code control system but applied for machine learning models that are built, updated ,trained regularly in enterprise scenario..</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-none">
                                </div>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}