import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="nft">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/1.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/home", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/1.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/home", "_self")}>
                  <h4>Collection #6949</h4>
                </span>
                <span>ERC-192</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/2.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/2.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Collection #2672</h4>
                </span>
                <span>ERC-61</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/3.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/3.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Collection #2856</h4>
                </span>
                <span>ERC-126</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/4.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/4.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Collection #7643</h4>
                </span>
                <span>ERC-73</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/5.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/5.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Collection #5784</h4>
                </span>
                <span>ERC-85</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={6}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/sophon/6.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/sophon/6.png"
                    alt=""
                  />
                </span>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Collection #0364</h4>
                </span>
                <span>ERC-42</span>
              </div>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
