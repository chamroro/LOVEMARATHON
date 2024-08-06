import React from "react";
import styled from "styled-components";
import bgApply from "../assets/img/bgApply.png";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import arrowIcon from "../assets/img/cardarrow.png";

function Apply() {
  const Apply = styled.div`
    height: 100vh;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow: hidden;

    .img-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2); /* 20% 투명도 */
      z-index: 2;
    }

    .content {
      position: relative;
      z-index: 3;
      display: flex;
      justify-content: space-around;
      height: 450px;
      max-width: 1048px;
      gap: 30px;
    }

    .card {
      background: linear-gradient(
        111deg,
        rgba(255, 255, 255, 0.5) -4.87%,
        rgba(255, 255, 255, 0) 103.95%
      );
      border-radius: 32px;
      padding: 60px 30px 30px 30px;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(25px);
      border: 1.5px solid rgba(255, 255, 255, 0.5);
      transition: background 0.3s, border 0.3s;
      text-decoration: none; /* 링크 텍스트의 밑줄 제거 */
      color: inherit; /* 링크 텍스트 색상 상속 */
    }

    .arrow-icon {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 17px;
      height: 17px;
    }

    .card p1 {
      color: #4e4e4e;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 10px;
    }

    .card p {
      color: #4e4e4e;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 5px 0px;
    }

    .cardImage {
      height: 150px;
    }

    .card:hover {
      background: linear-gradient(
        111deg,
        rgba(134, 51, 44, 0.2) -4.87%,
        rgba(255, 255, 255, 0) 103.95%
      );
      p1,
      p {
        color: white;
      }
    }

    @media screen and (max-width: 768px) {
      align-items: flex-start;

      .content {
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
      }

      .card {
        width: 80%;
        padding: 40px 30px 30px 30px;
        flex-direction: row;

        gap: 10px;
      }
      .card p {
        font-size: 12px;
      }
      .cardImage {
        height: 100px;
        padding-top: 30px;
      }
    }
  `;

  return (
    <Apply>
      <img className="img-background" src={bgApply} alt="Background" />
      <div className="overlay"></div>
      <div className="content">
        <a
          href="https://forms.gle/YWW7vK7qJqULpc4N8"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <div className="cardText">
            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
            <p1>개인 참가자 모집</p1>
            <p>
              장애인 개인신청
              <br /> <br />
              한동대학교 학생들과 1:1로 짝이 되어, <br /> 발걸음을 맞춰나갈
              장애인 마라토너를 모집합니다.
            </p>
          </div>
          <div>
            <img className="cardImage" src={card1} alt="Illustration" />
          </div>
        </a>
        <a
          href="https://forms.gle/kzw4xpjPCedHHfXeA"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <div className="cardText">
            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
            <p1>기관 참가자 모집</p1>
            <p>
              장애인 기관 신청 <br /> <br />
              한동대학교 학생들과 1:1로 짝이 되어,
              <br />
              발걸음을 맞춰나갈 장애인 마라토너를 모집합니다.
            </p>
          </div>
          <div>
            <img className="cardImage" src={card2} alt="Illustration" />
          </div>
        </a>
        <a
          href="https://forms.gle/y7waopAkLzDAujyw8"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <div className="cardText">
            <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
            <p1>짝꿍/운영도우미 모집</p1>
            <p>
              한동대학교 학생 신청 <br /> <br />
              사랑의 마라톤을 적극 지원할 짝꿍과 운영 도우미를 모집합니다.
            </p>
          </div>
          <div>
            <img className="cardImage" src={card3} alt="Illustration" />
          </div>
        </a>
      </div>
    </Apply>
  );
}

export default Apply;
