import React ,  {useRef, Component } from "react";
import emailjs from 'emailjs-com';
import emailKey from "./emailKey";


export const Contact = () => {

        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, form.current, emailKey.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

          //TODO :: clear the form data, for thsi Use State and Props
        };

        return(
          <div>
            <section class="colorlib-contact" data-section="contact">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Get in Touch</span>
							<h2 class="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-globe-outline"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="#">nirushanayak31@gmail.com</a></p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-map"></i>
								</div>
								<div class="colorlib-text">
									<p>Bangalore, India</p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-phone"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="tel://">+91 9901013231</a></p>
								</div>
							</div>
						</div>
                        <div class="col-md-7 col-md-push-1">
							<div class="row">
								<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
									<form ref={form} onSubmit={sendEmail}>
										<div class="form-group">
											<input type="text" class="form-control" name="user_name" placeholder="name"></input>
										</div>
										<div class="form-group">
											<input type="text" class="form-control" name="user_email" placeholder="email"></input>
										</div>
										<div class="form-group">
											<input type="text" class="form-control" name="message" placeholder="message"></input>
										</div>
										<div class="form-group">
											<input type="submit" class="btn btn-primary btn-send-message" value="Send Message"></input>
										</div>
									</form>
								</div>
								
							</div>
						</div>
                        
					</div>
				</div>
			</section>
        </div>
        );

    }

export default Contact