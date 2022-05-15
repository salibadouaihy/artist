import Link from 'next/link'
import Layout from '/components/en/layout'
import { SRLWrapper } from "simple-react-lightbox";

export default function contact() {
    return (
        <Layout>
            
            <section class="heroBanner aboutHeroBanner"
                style={
                    {backgroundImage: "url('/img/Early-Mar-Elias-Monastry.jpg')"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                              <strong>
                                Paintings
                                </strong>
                            </h2>
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
            <section>
                <div class="container">
                    <SRLWrapper>
                        <div class="gallery_group">
                            <div class="arena_img_box">
                                <img src="/img/Conversation.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Farmer.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Hauran-Druze-Women.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Beiteddine-Palace.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Douaihy3.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Still-Life.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Lebanese-Village.jpg"/>
                            </div>

                            <div class="arena_img_box">
                                <img src="/img/1.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/2.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/3.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/4.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/5.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/6.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/7.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/8.jpg"/>
                            </div>

                           
                            <div class="arena_img_box">
                                <img src="/img/9.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/10.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/11.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/12.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/13.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Ehden-Mar-Gerges.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Arcades.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Arcades2.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Early-Mar-Elias-Monastry.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Carthage.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Rechmaya-Village.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Sulaymania-Mosque.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Water-Mill-in-Akkar-Region.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Sea-Mountains.jpg"/>
                            </div>
                            
                        </div>
                    </SRLWrapper>
                </div>  
            </section>


        </Layout>
    )
}
