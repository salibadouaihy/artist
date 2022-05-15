import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'


export default function about() {
    return (
        <Layout>
            <section class="heroBanner aboutHeroBanner">
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>Biography
                                </strong>
                                </h2>
                            <p class="secDescription">
                            Saliba Douaihy was born in 1915 in the picturesque town of Ehden, nestled among Lebanon’s tree covered northern mountains.


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
                        <div class="col-md-5 col-sm-5 col-12">
                            <img src="../img/b3.jpg" alt=""/>
                        </div>
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                                <p class="secDescription">The Douaihy family was, and still is, a well-established family in northern Lebanon, playing an important economic and social role. 
                                But Saliba Douaihy’s upbringing was modest and he was first exposed to painting and art through the churches in his hometown.
                                </p><p class="secDescription">
                                The young Douaihy displayed a talent for drawing, copying illustrations from books and magazines at his school. His teachers often reprimanded him for drawing in class and not reading. But his apparent skills and thirst for art compelled his teachers to urge his father to send him to Beirut to study art.
                                </p>
                                <p class="secDescription">The elder Douaihy had other hopes for his son, but reluctantly agreed. At 14 years old, Saliba Douaihy went to Beirut where his father had arranged for him to apprentice at the well-established painter Habib Srour.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="airBunker"
                style={
                    {paddingTop: 0}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                               

                                <p class="secDescription">For two years, Saliba worked under the master’s guidance, learning the basic techniques of drawing and painting. He also assisted Srour in his large church murals and at times posed for him as a young Saint or the youthful Christ.
                                </p>
                                <p class="secDescription">After two years with Srour, the elder Douaihy was convinced that his son had potential to become a serious artist. With help from the local community, he raised the funds to send the 17-year old Saliba to Paris in the fall of 1932 to study at the prestigious Ecole Nationale Supérieure des Beaux-Arts de Paris. Saliba had aced the entrance exam, placing second on a test given to several thousand students.
                                </p>
                                <p class="secDescription">At the Ecole, he studied oil painting under the directorship of Paul Albert Laurence and Louis Roger and fresco painting under Duco de la Haille. After two years, he won the school’s top award and exhibited at the Salon des Artistes Français.
                                </p>
                                <p class="secDescription">In 1936, Saliba graduated and returned to Lebanon, where he opened his own studio and soon became an established and prolific painter.
                                </p>
                            </div>

                        </div>
                        <div class="col-md-5 col-sm-5 col-12">
                            <img src="../img/b1.jpg" alt=""/>
                        </div>
                    </div>

                </div>
            </section>
            <section class="airBunker">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-5 col-12">
                            <img src="../img/profilepic.jpeg" alt=""/>
                        </div>
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                                <p class="secDescription">During this period, Saliba was awarded many commissions and a professorship in 1947 at the Collège de la Sagesse. But his crowing achievement came with the completion of the decorations commissioned by Patriarch Antoine Arida for the Maronite Church at Diman, the Archbishop’s summer residence. This commission not only caused a sensation in Lebanon but was the start of his professional association with the Maronite Church - an aspect of Douaihy’s career that ran parallel to, but separate from, his secular work.
                                </p>
                                <p class="secDescription">By 1945, Douaihy had introduced in Lebanon a style of painting that was - though based on European traditions - refreshing, original, and pleasing, and one that could be identified as his own. Indeed, Saliba’s painting up until his early 30’s was a blend of descriptive painting with minor twists of minimalism. They were very personal interpretations of the landscape around him - the valleys and the mountains familiar to him since childhood, the colorful villages, villagers at work and ancient churches.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="indoorSec">
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path></svg>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <br/><br/>
                            <p class="secDescription">
                            In 1950, Saliba Douaihy immigrated to New York City, fully prepared to understand and experiment. New York he recalled was a “great revelation”. It not only began to change his artistic concepts, but it also presented him with a totally unfamiliar atmosphere that forced him to think on a different scale and thus ultimately to abandon what he considered his provincialism.
                            </p>
                            <p class="secDescription">
                            It was in New York that he painted his ultimate, and one of his favourite subjects, Mar Qozhayya monastery (home page picture). The monastery was built into the narrow canyon of Kadisha at the outcropping of rock by the cave where the old saint spent his last years in seclusion. To this day, Maronites consider it a sacred place.
                            </p>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="/img/black-white.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="airBunker">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-5 col-12">
                            <br/><br/>
                            <img src="../img/b4.jpg" alt=""/>
                        </div>
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                                <br/>
                                <p class="secDescription">In New York he was exposed to new artists and styles. Mark Rothko, Hans Hofmann, and Ad Reinhardt were some of his acquaintances in those early days. In fact Reinhardt visited several of Lebanon’s ancient sites, including the town of Baalbek in the Bekaa Valley, and discussed them with Saliba.
                                </p>
                                <p class="secDescription">But while he associated with and respected many of these New York artists, he did not join or identify himself with any particular group or movement. He remained detached and worked alone in his spacious studio in the loft of the Maronite Church of Our Lady of Lebanon in Brooklyn Heights (New York). It is there that he achieved his unique abstract/minimalist style. He left his signature on the Church, which is now a Cathedral, creating its magnificent stained glass windows and large mural over the altar.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="airBunker" style={ {paddingTop: 0} }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                               

                                <p class="secDescription">In 1956, he received the medal of High Honor from the president of the Lebanese Republic for art activities in the United States and Mexico, where his work had been exhibited and well-received. By then, he felt that the various avenues of abstract expressionism offered had for him been exhausted. He started to paint flat forms, to apply straight lines to separate and define those forms with hard edges. This was finally the beginning of the movement to his ultimate direction - one for which he had been striving for some time.
                                </p>
                                <p class="secDescription">The process of distillation and refinement through which Douaihy’s painting evolved was for him a challenging one. Part of the process was, of course, intellectual and, he said, may have been stimulated by the German philosopher Immanuel Kant. He read Kant’s work while taking a course in aesthetics under professor Eugen Kollman at the New School for Social Research in New York in 1961. From Kant he derived an impetus to find the sublime, to reduce all elements to their most basic form. This was not a simple concept for him to translate into his paintings. His thorough indoctrination in academic theories and techniques presented a serious obstacle. He found it difficult to free himself immediately from these long-standing habits and to apply paint in one solid colour and as a flat plane. Even in abstract expressionism the spontaneous manipulation of the brush or painting tool was intrinsic to the creative process. It was the work of Josef Albers, he said, and Japanese prints that were the major factors in helping him to arrive at the total flatness he wanted.
</p>
                            </div>

                        </div>
                        <div class="col-md-5 col-sm-5 col-12">
                            <br/><br/><br/><br/><img src="../img/b5.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section class="airBunker" style={ {paddingTop: 0} }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-5 col-12">
                            <br/><br/>
                            <img src="../img/b2.jpg" alt=""/>
                        </div>
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                                <p class="secDescription">The canvases of the late 1960s until his death in 1994 were, therefore, the result of this concentrated experimentation and search for absolute simplification of both form and colour. But at the same time Douaihy sought “flatness”, he saw the concept of “infinite space” as the basis of, and ultimate source for, his compositions. The paintings from those years and succeeding ones are of a type of hard-edge “minimal” style that evolves a complex system of meticulously articulated interrelationships: shape large and small, angular and curved, colours brilliant and subdued, primary and secondary, harmonizing and contrasting; angles acute and obtuse. It also produces a seemingly infinite range of variations within the strict parameters the artist has set for himself. But one constant is the interaction between the dominant asymmetrical central planes and the slender shafts of colours that intersect or border them. We can confidently say that minimal art has not been for Douaihy, as it has for so many others, a passing phase.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="airBunker" style={ {paddingTop: 0} }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-7 col-12">
                            <div class="subheading">
                               
                            <br/><br/>
                                <p class="secDescription">By the mid-1960s, the Museum of Modern Art, the Solomon R. Guggenheim Museum, the Albright-Knox Art Gallery and the David Rockefeller Collection had acquired examples of his work. Douaihy exhibited at the 1968 Pennsylvania Academy Annual and received an award together with Helen Frankenthaler, Richard Diebenkorn, Will Barnet, Isamu Noguchi and Seymour Lipton. A decade later, he had a solo exhibition at the North Carolina Museum of Art, an event arranged by his dear friend Moussa Domit.
                                </p>
                                <p class="secDescription">In 1994, Douaihy passed away at the age of 79 in NY . He married late in life and has a daughter.
                            </p>
                            <p class="secDescription">We sincerely hope you will enjoy his paintings.
                            <br/>Kind regards,
                            <br/>The friends of Saliba Douaihy
                            </p>
                            </div>

                        </div>
                        <div class="col-md-5 col-sm-5 col-12">
                            <img src="../img/painting.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="preFooter"
                style={
                    {backgroundImage: "url('../img/sky.jpeg')"}
            }>

                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>

                <div class="container">
                    <h2 class="sectionHeading">Follow Us In Social Media</h2>
                    <p class="secDescription">We are ready to connect with you!</p>
                    <ul class="socialIcons">
                        <li>
                            <a href="https://www.facebook.com/gulf.lasertag/" target="_blank"><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gulflasertag/" target="_blank"><RiInstagramFill/></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCvKscjsK_AVhpQyiRZrezVg" target="_blank"><FaYoutube/></a>
                        </li>


                    </ul>


                </div>
                <div class="background-overlay"></div>

            </section>
        </Layout>
    )
}
