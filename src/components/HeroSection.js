import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  //background//
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  //Hello my name is......//
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    //Andy Allen//
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
    }
  }
  //Image Profile Pic//
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border: 3px solid var(--gray-1);
  }
  //Text Underneath Profile Pic//
  .hero__info {
    margin-top: -18rem;
  }
  //Arrows//
  .hero__social,
  .hero__scrollDown {
    border: 10px lime solid;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 500px;
  }
  //Message Left//
  .hero__social {
    left: 50px;
  }
  //Message Right//
  .hero__scrollDown {
    right: 50px;
  }
  //FOLLOW ME ON & SCROLL//
  .hero__social__indicator,
  .hero__scrollDown {
    width: 500px;
    p {
      top: 15vh;
      left: 5px;
      width: 500px;
      background-color: red;
      display: flex;
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    //Arrows Left & Right//
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  //Arrow Right//
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  //LINKEDIN//
  .hero__social__text {
    margin-bottom: 1rem;
    a {
      display: flex;
      font-size: 1.6rem;
      transform: rotate(90deg);
      letter-spacing: 5px;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        a {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, My Name is</span>
            <span className="hero__name">Andy Allen</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow Me On</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <a
                href="https://be.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
