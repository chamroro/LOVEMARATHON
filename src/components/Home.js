import React, { useState, useEffect, useRef } from "react";
import homelogo from "../assets/img/homelogo.png";
import styled from "styled-components";

import bgVideo1 from "../assets/video/bgvideo1.mp4";
import bgVideo2 from "../assets/video/bgvideo2.mov";
import bgVideo3 from "../assets/video/bgvideo3.mov";

const HomeWrapper = styled.div`
  height: 100vh;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10%;
  padding-right: 10%;

  position: relative;
  overflow: hidden;
  align-items: center;

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transition: opacity 0.5s ease;
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
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .homelogo {
    width: 809px;
    text-align: center;
  }

  .desc {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    letter-spacing: -1.2px;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  .apply {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 38px;
    gap: 10px;
    width: 170px;
    margin-top: 60px;
    background: #3300ff;
    border-radius: 25px;

    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    text-decoration: none;
    text-align: center;

    color: #dadcfa;
  }

  .carousel-indicators {
    bottom: 10%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.5;
  }

  .indicator.active {
    opacity: 1;
    width: 17px;
    border-radius: 15px;
  }

  @media screen and (max-width: 768px) {
    .content {
      padding-bottom: 20%;
    }

    .title {
      font-size: 30px;
      line-height: 43px;
    }

    .desc {
      font-size: 28px;
      line-height: 170%;
      word-break: keep-all;
    }

    .homelogo {
      width: 100%;
    }
  }
`;

function Home() {
  const videos = [bgVideo1, bgVideo2, bgVideo3];
  const descriptions = [
    "서로 손을 맞잡고 <br /> 함께 걸음을 맞추는",
    "사랑과 연대의 <br /> 귀한 만남의 장",
    "사랑의 마라톤으로 <br /> 당신을 초대합니다",
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Preload videos
    videos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video;
      videoElement.preload = "auto";
      videoElement.load();
    });
  }, [videos]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.play().catch((error) => {
        console.log("Video play interrupted:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = (index) => {
    if (index === currentVideoIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 500); // Duration of the fade-out transition
    }
  };

  return (
    <HomeWrapper>
      {videos.map((video, index) => (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className="video-background"
          autoPlay
          muted
          onEnded={() => handleVideoEnd(index)}
          style={{
            opacity: currentVideoIndex === index && !isTransitioning ? 1 : 0,
          }}
          key={video}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
      <div className="overlay"></div>
      <div className="content">
        <img src={homelogo} className="homelogo" alt="Home Logo" />
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: descriptions[currentVideoIndex],
          }}
        ></p>
        <div className="carousel-indicators">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`indicator ${
                index === currentVideoIndex ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
