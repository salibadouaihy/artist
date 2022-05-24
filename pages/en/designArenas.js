import Link from 'next/link'
import Layout from '/components/en/layout'
import Tabs from '/components/tabs'

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
                    <Tabs/>
                </div>  
            </section>


        </Layout>
    )
}
