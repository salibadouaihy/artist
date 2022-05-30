import Link from 'next/link'

export default function header() {
    return (<div>
        <nav class="main_menu navbar navbar-default">
            <div class="container"> {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link href="/">
                        <a class="navbar-brand">
                            <img src="/img/logo2.png" alt="logo"/>
                        </a>
                    </Link>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">

                        <li>
                            <Link href="/">
                                <a title="home">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/en/designArenas">
                                <a title="Paintings">Paintings
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/en/about">
                                <a title="Biography">
                                Biography
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/en/contact">
                                <a title="contact us">Contact us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */} </nav>
    </div>)
}
