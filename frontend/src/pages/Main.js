import React from 'react';
import Header from '../components/Header';
import { HeroImage } from '../components/HeroImage';
import { SmallCard } from '../components/SmallCard';
import { LargeCard } from '../components/LargeCard';
import { VideoBox } from '../components/VideoBox';
import { MediumTile } from '../components/MediumTile';
import { IconBox } from '../components/IconBox';
import CountBox from '../components/CountBox';
import { DonationTypeCard } from '../components/DonationTypeCard';

const Main = () => {
    return (
        <div>


            <div className="App">

                <Header />

                <HeroImage />

                <div id="main">


                    <section id="why-us" className="why-us">
                        <div className="container">

                            <div className="row">

                                <LargeCard
                                    title="Why Donate Blood?"
                                    desc=" Our nation’s blood supply dropped to historic lows during the COVID-19 pandemic. We are no longer in crisis, but we need your help to ensure there is never a shortage again. Donate today to make sure blood is available when it’s needed. Then donate again and again and again. The more often you give, the more lives you can save." />

                                <div className="col-lg-8 d-flex align-items-stretch">
                                    <div className="icon-boxes d-flex flex-column justify-content-center">
                                        <div className="row">

                                            <SmallCard
                                                title="SCHEDULE TO DONATE BLOOD NOW"
                                                desc=" By donating blood, you are ensuring the life-saving gift is available to your friends, family, and neighbors when they need it.     Without your volunteer donation, blood will not be available for those you love."
                                            />

                                            <SmallCard
                                                title="HOST OR SPONSOR A BLOOD DRIVE"
                                                desc=" By hosting or sponsoring a blood drive, you help to ensure patients have blood when they need it. We has over 700 blood drives a year in order to meet the needs of the communities we serve. "
                                            />

                                            <SmallCard
                                                title="BECOME A COMMUNITY PARTNER"
                                                desc="Our supporters and partners are powered by purpose and passion for being part of something bigger than themselves. We are seeking like-minded organizations who are interested in helping us."
                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="about" className="about">
                        <div className="container-fluid">

                            <div className="row">

                                <VideoBox />

                                <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">

                                    <MediumTile />

                                    <IconBox
                                        title="Registration"
                                        desc="You will complete donor registration, which includes information such as your name, address, phone number, and donor identification number (if you have one).
          You will be asked to show a donor card, driver’s license or two other forms of ID."
                                    />

                                    <IconBox
                                        title="Health History and Mini Physical"
                                        desc="You will answer some questions during a private and confidential interview about your health history and the places you have traveled.
          You will have your temperature, hemoglobin, blood pressure and pulse checked."
                                    />

                                    <IconBox
                                        title="Donation"
                                        desc="We will cleanse an area on your arm and insert a brand–new, sterile needle for the blood draw. This feels like a quick pinch and is over in seconds.
          You will have some time to relax while the bag is filling. (For a whole blood donation, it is about 8-10 minutes. If you are donating platelets, red cells or plasma by apheresis the collection can take up to 2 hours.)
          When approximately a pint of blood has been collected, the donation is complete and a staff person will place a bandage on your arm. "
                                    />
                                    <IconBox
                                        title="Refreshments"
                                        desc="You will spend a few minutes enjoying refreshments to allow your body time to adjust to the slight decrease in fluid volume.
          After 10-15 minutes you can then leave the donation site and continue with your normal daily activities.
          Enjoy the feeling of accomplishment knowing that you have helped to save lives."
                                    />

                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="counts" className="counts">
                        <div className="container">

                            <div className="row">

                                <CountBox title="million Americans will a need blood transfusion each year" icon="fa fa-user-md" figure="4.5" clsNme="col-lg-3 col-md-6" />
                                <CountBox title="units of red blood cells are needed every day in the U. S. " icon="fa fa-hospital" figure="29,000" clsNme="col-lg-3 col-md-6 mt-5 mt-md-0" />
                                <CountBox title="tests (11 for infectious diseases) are performed on each unit of donated blood." icon="fa fa-flask" figure="13" clsNme="col-lg-3 col-md-6 mt-5 mt-lg-0" />
                                <CountBox title="percent of the U.S. population is eligible to donate blood" icon="fa fa-award" figure="37" clsNme="col-lg-3 col-md-6 mt-5 mt-lg-0" />

                            </div>

                        </div>
                    </section>


                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                                <h2>Types of Donations</h2>
                                <p>We are able to collect blood in multiple ways to best meet the transfusion needs of patients in your community. </p>
                            </div>

                            <div className="row">

                                <DonationTypeCard
                                    title="Whole Blood Donation"
                                    desc="A whole blood is the most common kind of donation. During the donation roughly one pint of blood is taken from a donor. This process takes about one hour from the time the donor comes in to the time the donor is ready to leave. Whole blood donations can be made every 56 days."
                                />

                                <DonationTypeCard
                                    title="Double Red Cell Donation"
                                    desc="A double red cell donation allows you to donate two units of red blood cells during a single donation. The automated process is used to separate the red blood cells from the other blood components. A single double red cell donation can save two lives."
                                />

                                <DonationTypeCard
                                    title="Platelet Donation"
                                    desc="Platelet donation by automation (apheresis) allows for one donation to help up to three patients. The donor’s platelet count and available time will help determine how many platelet doses can be collected."
                                />

                                <DonationTypeCard
                                    title="Plasma Donation"
                                    desc="Plasma is the liquid part of the blood that carries nutrients, hormones and proteins to other parts of the body.The eligibility requirements for donating plasma by automation (apheresis) are the same as those for whole blood in most cases."
                                />

                                <DonationTypeCard
                                    title="Directed Donation"
                                    desc="
          Directed donation is a blood donation made by a friend or family member who is approved to donate for a specific patient."
                                />

                                <DonationTypeCard
                                    title="Autologous Donation"
                                    desc="Donation of your own blood (usually red blood cells) prior to planned (non-emergency) surgery is available with the request of your physician."
                                />

                            </div>

                        </div>
                    </section>

                    <section id="faq" className="faq section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Frequently Asked Questions</h2>
                            </div>

                            <div className="faq-list text-center">
                                <ul>

                                    <li data-aos="fade-up">
                                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What happens to the blood? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                            <p>
                                                After you donate the unit of blood, it is
                                                processed in the lab and separated into
                                                up to three components. That is why
                                                one unit of blood can save up to
                                                three lives!
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">How often can I donate?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                            <p>
                                                You can safely donate whole blood every eight weeks (56 days).
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up">
                                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What should I do before donating? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                            <p>
                                                Eat a well-balanced meal and drink extra fluids. <br /><br />
                                                Note any medications you are taking - you will be asked during your donation interview.  <br /><br />
                                                If you have questions about your eligibility to donate, you can call ahead and ask the blood center staff.
                                            </p>
                                        </div>
                                    </li>


                                </ul>

                            </div>

                        </div>
                    </section>

                </div>


            </div>

        </div>
    )
}

export default Main