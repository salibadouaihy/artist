import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div class="topFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-12">
                            <div class="footerLogo">
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo2.png" alt="logo-lasrertag"/>
                                    </a>
                                </Link>
                            </div>
                            <p>We are proud to bring to you this web site dedicated to the Lebanese-American master painter – one of the most accomplished Lebanese painters of his generation. We hope you will enjoy the web site.
                            </p>
                        </div>
                        <div class="col-md-2 col-sm-12">
                            
                        </div>

                        <div class="col-md-5 col-sm-12">
                            <h2 class="footerTitle">Pages</h2>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/about">
                                        <a>Biography</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/designArenas">
                                        <a>Paintings</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">@ 2022 Copyright. salibadouaihy.com</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
