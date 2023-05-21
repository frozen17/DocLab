import React from 'react';
import './Team.css';

const Team = () => {
    return (
<section class="team spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-md-8 col-sm-6">
                    <div class="section-title">
                        <span>Our Team</span>
                        <h2>Meet our team</h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="team__btn">
                        <a href="#" class="primary-btn normal-btn">View All</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="team__item set-bg" data-setbg="img/team/team-1.jpg" style={{
                        backgroundImage: "url(https://media.licdn.com/dms/image/C4D08AQH66cTOY6BGag/croft-frontend-shrinkToFit1024/0/1618355412320?e=2147483647&v=beta&t=kO-92wBMe1hK6g2k-VGDpVEMJAmFMYRJ-VEGHRu301A)"
                    }}>
                        <div class="team__text">
                            <div class="team__title">
                                <h5>Dolores Webster</h5>
                                <span>CEO & Founder</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean
                            ultricies nisl sit amet.</p>
                            <div class="team__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="team__item set-bg" data-setbg="img/team/team-2.jpg" style={{
                        backgroundImage: "url(https://ca.res.keymedia.com/files/image/atgoogleasiangooglernetwork.jpg)"
                    }}>
                        <div class="team__text">
                            <div class="team__title">
                                <h5>Dana Vaughn</h5>
                                <span>Architect</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean
                            ultricies nisl sit amet.</p>
                            <div class="team__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="team__item set-bg" data-setbg="https://i.insider.com/55311854eab8eaba4c8b4567?width=1000&format=jpeg&auto=webp" style={{
                        backgroundImage: "url(https://i.insider.com/55311854eab8eaba4c8b4567?width=1000&format=jpeg&auto=webp)"
                    }}>
                        <div class="team__text">
                            <div class="team__title">
                                <h5>Jonathan Mcdaniel</h5>
                                <span>Architect</span>
                            </div>
                            <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra
                                porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean
                            ultricies nisl sit amet.</p>
                            <div class="team__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team;