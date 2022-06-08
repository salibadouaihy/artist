import Link from 'next/link'
import Layout from '/components/en/layout'

import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaLocationArrow
} from "react-icons/fa"

import {RiInstagramFill} from "react-icons/ri";

import emailjs from 'emailjs-com';


export default function contact() {

    return (
        <Layout>
            <section class="heroBanner aboutHeroBanner"
                style={
                    {backgroundImage: "url('/img/new/3.jpg')"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>Get in touch
                                </strong>
                            </h2>
                            <p class="secDescription">
                                Everything starts from a Hello
                            </p>

                        </div>
                        <div class="col-md-2 col-sm-2 col-0"></div>


                    </div>
                </div>
                <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>


            <section class="airBunker">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-12">

                            {/* <form class="contactForm" name="contactForm" method="POST" action="https://formsubmit.co/mindwasher99@gmail.com">

                                <div class="formGroup">
                                    <label>Full Name</label>
                                    <input required name="fullName" class="inputField form-control"/>
                                </div>

                                <div class="formGroup">
                                    <label>
                                        Your Email
                                    </label>
                                    <input required type='email' name="email" class="inputField form-control"/>
                                </div>
                                <div class="formGroup">
                                    <label>
                                        Phone Number
                                    </label>
                                    <input required type='number' name="phone" class="inputField form-control"/>
                                </div>

                                <div class="formGroup">
                                    <label>Your Message</label>
                                    <textarea name="message" class="inputField form-control" required></textarea>
                                </div>
                                <input type='submit' class="btn btn-primary btnMain"/>
                            </form> */}

                            <h2><a href="mailto:salibadouaihy@hotmail.com">salibadouaihy@hotmail.com</a></h2>
                            <a class="btn btn-primary btnMain" href="mailto:salibadouaihy@hotmail.com">Email Now</a>
                            <div id="formMsg"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="contactInfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="icon"><FaEnvelope/></div>
                            <h3>
                                Have Any Questions? ​
                            </h3>
                            <p>
                                <br/><a href="mailto:salibadouaihy@hotmail.com">salibadouaihy@hotmail.com</a>
                            </p>
                            
                        </div>
                        {/* <div class="col-md-4">
                            <div class="icon"><FaPhone/></div>
                            <h3>
                                Call us or WhatsApp
                            </h3>

                            <p>
                                <b>Lebanon:</b><br/>
                                +1234578
                                <br/>
                                <br/>
                                <b>Estonia:</b>
                                <br/>+1212212
                            </p>
                        </div> */}

                    </div>
                </div>
            </section>


            {/* <section class="preFooter"
                style={
                    {backgroundImage: "url('../img/sky.jpeg')"}
            }>
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div class="container">
                    <h2 class="sectionHeading">
                        Follow Us In Social Media
                    </h2>
                    <p class="secDescription">We are ready to connect with you!</p>
                    <ul class="socialIcons">
                        <li>
                            <a href="#" target="_blank"><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><RiInstagramFill/></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><FaYoutube/></a>
                        </li>


                    </ul>
                </div>


                <div class="background-overlay"></div>
            </section> */}
        </Layout>
    )
}
