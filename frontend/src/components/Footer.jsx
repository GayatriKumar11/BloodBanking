import React from 'react'

const Footer = () => {
    return (

        <footer className="page-footer font-small cyan darken-3">


            <div className="container">


                <div className="row">


                    <div className="ml-200 py-5">
                        <div className="mb-1 flex-center text-center">

                            <a className="fb-ic m-3">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="tw-ic m-3">
                                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="gplus-ic m-3">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="li-ic m-3">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="ins-ic m-3">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="pin-ic  m-3">
                                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>


                </div>


            </div>



            <div className="footer-copyright text-center py-3">© 2023 Copyright:
                <a href="/"> bloodbanking.com</a>
            </div>


        </footer>

    )
}

export default Footer