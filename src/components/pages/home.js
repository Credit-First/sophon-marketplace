import React from "react";
import SliderCarousel from "../components/SliderCarousel";
import FeatureBox from "../components/FeatureBox";
import CarouselCollection from "../components/CarouselCollection";
import ColumnNew from "../components/ColumnNew";
import AuthorList from "../components/authorList";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    // background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    // color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree = () => (
  <div>
    <GlobalStyles />
    <div>
      <div
        className="about"
        style={{ backgroundImage: `url(${"./img/about/sophon.png"})` }}
      >
        <video autoPlay={true} playsInline={true} muted={true} loop={true}>
          <source src="./video/sophon.mp4" type="video/mp4" />
        </video>
        <div className="back-image"></div>
        <div className="video-wrap">
          <div className="video-content">
            <div>
              <p className="copy-right">&copy; 2022 Sophon Foundation</p>
            </div>
            {/* <div className="text-right">
              <h2 className="title">An NFT like no other</h2>
              <p className="description">{`Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live.`}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>

    <section className="jumbotron no-bg no-bottom">
      <div className="container-fluid">
        <div className="row">
          <SliderCarousel />
        </div>
      </div>
    </section>

    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">New Items</h2>
        </div>
      </div>
      <ColumnNew />
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">Hot Collections</h2>
        </div>
      </div>
      <div className="container no-top">
        <div className="row">
          <div className="col-lg-12 px-0">
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">Top Seller</h2>
        </div>
        <div className="col-lg-12">
          <AuthorList />
        </div>
      </div>
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">Create and sell</h2>
        </div>
      </div>
      <div className="container px-0">
        <FeatureBox />
      </div>
    </section>

    <Footer />
  </div>
);
export default homethree;
