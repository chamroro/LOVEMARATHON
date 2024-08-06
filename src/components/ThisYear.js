import React, { useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/img/bg.png";
import centerImage from "../assets/img/centerImage.png";
import thisyearimg from "../assets/img/thisyearimg.png";
import tt1 from "../assets/img/timetable1.png";
import tt2 from "../assets/img/timetable2.png";
import flowerImage from "../assets/img/bluef.png";
import { Link } from "react-router-dom";

const ThisYearWrapper = styled.div`
  padding-top: 80px;
  background-image: url(${bg});
  background-size: cover; /* Ensures the image covers the full width */
  background-repeat: repeat-y; /* Repeats the image vertically */
  background-position: top center; /* Starts the image at the top center */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 100%; */
  padding: 20px;
  /* @media screen and (max-width: 768px) {
    padding-top: 70px;
  } */
  .container1 {
    display: flex;
    justify-content: center;

    margin-top: 60px;
    max-width: 1048px;
    width: 80%;
    gap: 30px;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
  }

  .left {
    font-size: 56px;
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }

  .centerImage {
    max-width: 736px;
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
      /* padding: 20px; */
    }
  }

  .right {
    text-align: center;
  }

  .date {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #255ac4;
    text-align: center;
    font-size: 40px;
    margin: 0;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .subtitle {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #255ac4;
    text-align: center;
    font-size: 56px;
    margin: 0;
    line-height: 110%;

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }

  .registerButton {
    color: #255ac4;
    background-color: rgba(0, 0, 0, 0);
    padding: 12px 50px;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 600;
    cursor: pointer;
    border: 2px #255ac4 solid;
    border-radius: 32px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      padding: 7px 30px;
      font-size: 16px;
    }
  }

  hr {
    border: 0.5px solid #255ac4;
    height: 0px;
    width: 100%;
    margin-top: 60px;
    @media screen and (max-width: 768px) {
      margin-top: 50px;
    }
  }

  .container2 {
    max-width: 1048px;
    width: 80%;
    margin: 80px 0px 0px 0px;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    padding-left: 0;
    @media screen and (max-width: 768px) {
      align-items: center;
      width: 100%;
      /* padding: 0 20px; */
    }
  }

  .typing {
    display: flex;
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #255ac4;
    font-size: 80px;
    letter-spacing: -1.92px;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      letter-spacing: -1px;
    }
  }

  .typing p {
    margin-bottom: 0px;
    text-align: center;
    overflow: hidden;
  }

  .typing p span.typed-text {
    font-weight: normal;
    color: #dd7732;
  }

  .typing p span.cursor {
    display: inline-block;
    background-color: #ccc;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
  }

  .typing p span.cursor.typing {
    animation: none;
  }

  .desc {
    color: #255ac4;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 24px;
    }
  }

  .thisyearimg1 {
    max-width: 1048px;
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .container3 {
    max-width: 1048px;
    width: 80%;
    @media screen and (max-width: 768px) {
      width: 100%;
      /* padding: 0 20px; */
    }
  }

  .title {
    color: #255ac4;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    margin-top: 80px;
    margin-bottom: 30px;
    position: relative;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin-top: 50px;
      margin-bottom: 10px;
      padding-left: 25px;
    }
  }

  .title::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px; /* 이미지 크기 조정 */
    height: 30px; /* 이미지 크기 조정 */
    background-image: url(${flowerImage});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
      width: 20px; /* 이미지 크기 조정 */
      height: 20px; /* 이미지 크기 조정 */
    }
  }

  .desc2 {
    color: #255ac4;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .timetables {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
      width: 100%;
    }
  }

  .timetables img {
    max-width: 48%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  .programs {
    display: grid;
    grid-template-columns: 1fr 11fr;
    gap: 12px;
    max-width: 1048px;
    width: 100%;
    margin: 20px 0;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 5fr;
      margin: 0;
    }
  }

  .program-title {
    color: #255ac4;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .program-description {
    color: #255ac4;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  @keyframes blink {
    0% {
      background-color: #ccc;
    }
    49% {
      background-color: #ccc;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #ccc;
    }
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ThisYear = () => {
  useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Blank", "Love", "Joy", "Heart"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingTimeout;
    let erasingTimeout;
    let newTextTimeout;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        newTextTimeout = setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        erasingTimeout = setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 250);
      }
    }

    // 초기화 코드 추가
    typedTextSpan.textContent = "";

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(newTextTimeout);
    };
  }, []);

  return (
    <ThisYearWrapper>
      <hr></hr>
      <div className="container1">
        <div className="left">
          <p className="subtitle">
            Handong
            <br />
            Global
            <br />
            Univ.
          </p>
        </div>
        <img className="centerImage" src={centerImage} alt="사랑의 마라톤" />
        <div className="right">
          <p className="date">2024.8.29</p>
          <p className="subtitle">Register Now</p>
          <Link to={`/apply`}>
            <button className="registerButton">신청하기</button>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="typing">
        <p>
          Fill in your &#123; <span className="typed-text"></span>
          <span className="cursor">&nbsp;</span> &#125;
        </p>
      </div>

      <div className="container2">
        <img className="thisyearimg1" src={thisyearimg}></img>
      </div>
      <div className="container3">
        <p className="title">다시 돌아온 사랑의 마라톤.</p>
        <p className="desc">
          포항 지역 장애인 참가자와 한동대학교 학생(짝꿍)이 하나가 되어 <br />
          마라톤을 완주하는 사랑의 마라톤 행사가 많은 기관과 단체, 개인의 후원과
          기도 아래 올해 제16회를 맞이했습니다. <br />
          이번 사랑의 마라톤 주제는 ‘Fill in your &#123;Blank&#125;’ 입니다.{" "}
          <br />
          사랑의 마라톤을 통해 함께 동행하며 서로의 있는 그대로를 깊게 이해할 수
          있는 계기를 마련하고자 합니다.
          <br />
          서로를 바라보는 우리의 여정에서 더이상 달리거나 걷는 방식은 중요하지
          않습니다. <br />
          함께하는 시간 가운데 어느새 완주에 다다른 우리의 마음속에는 짝꿍과의
          소소한 추억과 따뜻한 사랑만이 가득할 겁니다.
          <br /> 당신은 사랑의 마라톤에서 무엇을 채우고 싶으신가요?
        </p>
        <p className="title">올해 사랑의 마라톤은요!</p>
        <div className="programs">
          <div className="program-title">일시</div>
          <div className="program-description">2024년 9월 28일 9:00~17:00</div>
          <div className="program-title">장소</div>
          <div className="program-description">
            한동대학교 일대 (경북 포항시 북구 흥해읍 한동로 558)
          </div>
        </div>
        <p className="title">다양한 프로그램을 함께 즐겨요.</p>
        <div className="programs">
          <div className="program-title">공연</div>
          <div className="program-description">
            사랑의 마라토너만을 위해 준비된 멋진 무대를 맘껏 즐겨보세요.
          </div>
          <div className="program-title">레크레이션</div>
          <div className="program-description">
            흥이 넘치는 사회자와 함께하는 신나는 게임과 활동으로 에너지를
            채워보세요.
          </div>
          <div className="program-title">마라톤</div>
          <div className="program-description">
            걷거나 뛰는 방식에 상관없이 하나된 마음으로 함께 완주해요.
          </div>
          <div className="program-title">부스</div>
          <div className="program-description">
            마라톤 중 운영되는 재미있는 체험 부스의 기회를 놓치지 마세요!
          </div>
          <div className="program-title">네트워킹</div>
          <div className="program-description">
            참가자 가족들과 함께, 맛있는 식사와 교제를 나눠보아요.
          </div>
        </div>
        <p className="title">타임테이블</p>
        <div className="timetables">
          <img src={tt1} alt="Timetable 1"></img>
          <img src={tt2} alt="Timetable 2"></img>
        </div>
        <p className="title">지난 사랑의 마라톤 살펴보기</p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dHgcbFOYtB0?si=-YQk8vahSF95kkXC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/2OkkVCgaZ_g?si=wdrBREGIx8SVi9w7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </ThisYearWrapper>
  );
};

export default ThisYear;
