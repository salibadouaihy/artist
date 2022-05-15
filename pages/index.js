import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '/components/en/layout'


import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


export default function Home() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <Layout>
            <section class="heroBanner">

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="imageLeft">
                                <img src="img/painting.jpg" /> 
                            </div>
                            </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="text-banner">
                                <h2>
                                    <strong>Saliba
                                    </strong>
                                    &nbsp;Douaihy</h2>
                                    <img src="img/signature.png" class="signature"/>
                                <p class="secDescription"
                                    style={
                                        {"margin-bottom": "15px"}
                                }>
                                We are proud to bring to you this web site dedicated to the Lebanese-American master painter – one of the most accomplished Lebanese painters of his generation. We hope you will enjoy the web site. 
                                </p><p>Should you have examples of his paintings, please do not hesitate to send to us pictures so we can expand and enhance this web site. Should you have a painting of Saliba Douaihy you wish to sell, we also might be interested.
                                </p>
                            </div>

                        </div>

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
                    <h2 class="sectionHeading">Paintings</h2>
                    <p class="subheading">I used to look at modern paintings, which most people considered ugly, and found that in my eyes, they were beautiful.</p>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/Arcades.jpg" alt="Painting"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/Arcades2.jpg" alt="painting"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/Early-Mar-Elias-Monastry.jpg" alt="painting"/>
                        </div>
                    </div>

                    <Link href="/en/designArenas">
                        <a class="btn btn-primary btnMain">Read More</a>
                    </Link>
                </div>
            </section>
            <section class="indoorSec">
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            
                            <h2 class="mars_section_title">
                                <span class="mars_color">SALIBA DOUAIHY</span><br/> <small style={{color:'white'}}>ARTIST / PAINTER (1915 / 1994)</small></h2>
                            <p class="secDescription">
                            Included in the NYU Grey Art Gallery’s exhibition Taking Shape: Abstraction from the Arab World, 1950s-1980s (on view January 14-April 4, 2020) are three paintings by Saliba Douaihy (1915-1994), a leading 20th-century painter of Lebanon. 
                            </p><p class="secDescription">Born in 1915 in a mountainous town in northern Lebanon, Douaihy was first exposed to painting and art through the Maronite churches in his hometown. Due to his apprenticeship with Habib Srour at the age of 14, his style was initially realistic and figurative. 
                            
                            <p class="secDescription">Srour was a portrait painter of religious, social, and political Arab figures in Lebanon and taught Douaihy the techniques of drawing and painting. 
                            Douaihy later assisted Srour in large church murals.</p>
                            </p>


                            <br/>
                            <br/>
                            <br/>
                            <Link href="/en/about">
                                <a class="btn btn-primary btnMain">View More</a>
                            </Link>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="/img/profilepic.jpeg"/>
                        </div>

                    </div>
                </div>
                {/* <div class="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div> */} 
            </section>

        </Layout>
    )
}
