import React from 'react';
import android_link from '../components/images/android_link.png';
import hw_img from'../components/images/hw-img2.jpg';

import '../components/css/Home.css';

class Home extends React.Component{
  render(){
    return (
      <div className="main_page">
        <div className="article article_intro">
          <div className="intro_img_box">
            <div className="intro_img"><div className="intro_img2"></div></div>
          <div className="intro_desc">
            <h3>민서쿠가<br/>
            만든<br/>
            웹 페이지</h3>
            <div className="intro_link">
              <a className="btn btn-primary btn-googleplay" href="#" role="button">
                <img src={android_link} width="100%"></img>
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="article article_hw">
          <div className="img_hw">
            <img src={hw_img} width="100%" height="600px" ></img>
          </div>
          <div className="default_size">
            <div className="hw_desc">
              <h2>제품소개</h2>
              <h3>민준이가 만든</h3>
              <h4>우리의 하드웨어<br/>
              Aeye입니다 <br/></h4>
            </div>
          </div>
        </div>

        <div className="article article_app">
          <div className="img_hw">
            <img src={hw_img} width="100%" height="600px" ></img>
          </div>
          <div className="default_size">
            <div className="article app_desc">
              <h2>어플소개</h2>
              <h3>지영 지우가 만든</h3>
              <h4>우리의 애플리케이션<br/>
              Aeye+입니다 <br/></h4>
            </div>
          </div>
        </div>
        <div className="article app_func">
          <h2>서비스 기능</h2>
          <ul>
            <li>사물인식</li>
            <li>문자인식</li>
            <li>색상인식</li>
            <li>빛 밝기</li>
            <li>돋보기</li>
          </ul>
        </div>

        <div className="article article_video">
          <div className="video_box">
            <h1 className="video_h1">가이드 영상</h1>
            <div className="video">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/PQEfodbDODg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
  
