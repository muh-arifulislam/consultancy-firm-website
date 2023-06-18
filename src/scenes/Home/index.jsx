import React from "react";
import HeroTop from "./HeroTop";
import Services from "./Services";
import AboutBanner from "./AboutBanner";
import StatisticsBanner from "./StatisticsBanner";
import Message from "./Message";

const Home = () => {
  return (
    <div className="">
      <HeroTop></HeroTop>
      <Services></Services>
      <AboutBanner></AboutBanner>
      <Message></Message>
      <StatisticsBanner></StatisticsBanner>
    </div>
  );
};

export default Home;
