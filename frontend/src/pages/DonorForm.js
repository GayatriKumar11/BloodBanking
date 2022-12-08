import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const DonorForm = () => {
    return (
        <div className='App'>

            <Header />

            <br /><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className="section-title">
                <h2>Blood Donor Eligibility Guidelines</h2>
                <p>Donors must complete a questionnaire, which includes health and lifestyle questions, at their blood donation appointment to determine final eligibility.</p>
            </div>

            <section id="about about-section" className="about donorpageabout">
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-xl-12 col-lg-6 icon-boxes d-flex flex-column px-lg-2 about-donor">

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Basic Requirements for Blood Donation</h4><br />
                                <p className="description desc-donor">
                                &diams; Donors must be in good health and feel well the day of their donation <br /><br />
                                &diams; Donors must be at least 17 years of age, or 16 with parental consent <br /><br />
                                &diams; Donors must weigh at least 110 pounds and no more than 350 pounds  <br /><br />
                                &diams; Donors must show a photo ID
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Donation Frequency</h4><br />
                                <p className="description desc-donor">
                                &diams; Whole Blood: Every 56 days  <br /><br />
                                &diams; Platelets: Every 7 days <br /><br />
                                &diams; Double Red Cells: Every 112 days  <br /><br />
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Health Conditions</h4><br />
                                <p className="description desc-donor">
                                &diams; Antibiotics: Donors are deferred for 24 hours after their final dose.  <br /><br />
                                &diams; Cancer: Donors with a history of most types of cancer are eligible to donate 1 year from the date of their last treatment.<br /><br />
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Exceptions</h4><br />
                                <p className="description desc-donor">
                                There is no deferral period for donors with a history of: <br /><br />
                                &diams; Basal cell carcinoma of the skin <br /><br />
                                &diams; Squamous cell carcinoma of the skin <br /><br />
                                &diams; Carcinoma-in-situ or Dysplasia of the cervix or breast, if treated <br /><br />
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Exceptions</h4><br />
                                <p className="description desc-donor">
                                There is no deferral period for donors with a history of: <br /><br />
                                &diams; Basal cell carcinoma of the skin <br /><br />
                                &diams; Squamous cell carcinoma of the skin <br /><br />
                                &diams; Carcinoma-in-situ or Dysplasia of the cervix or breast, if treated <br /><br />
                                
                                There is a permanent deferral for donors with a history of: <br /><br />
                                &diams; Leukemia<br /><br />
                                &diams; Lymphoma <br /><br />
                                &diams; Multiple myeloma <br /><br />
                                &diams; Waldenstrom's Macroglobulinemia <br /><br />
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Travel</h4><br />
                                <p className="description desc-donor">
                                &diams; Malarial-Endemic Areas: Donor is deferred for 3 months after travel to a malarial-endemic area. <br /><br />
                              </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title title-donor">Other Lifestyle Factors</h4><br />
                                <p className="description desc-donor">
                                &diams; Tattoos: Donor is deferred for 3 months after getting a tattoo.<br /><br />
                                &diams; Ear/Body Piercing: Donor is eligible if piercing was performed using sterile single-use equipment.<br /><br />
                              </p>
                            </div>


                        </div>
                    </div>

                </div>
            </section>








            <Footer />


        </div>
    )
}

export default DonorForm