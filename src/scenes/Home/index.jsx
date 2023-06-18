import React from "react";
import HeroTop from "./HeroTop";
import Services from "./Services";
import AboutBanner from "./AboutBanner";
import StatisticsBanner from "./StatisticsBanner";
import Message from "./Message";
import Support from "./Support";

const Home = () => {
  return (
    <div className="">
      <HeroTop></HeroTop>
      <Services></Services>
      <AboutBanner></AboutBanner>
      <StatisticsBanner></StatisticsBanner>
      <Message></Message>     
      <Support></Support>
    </div>
  );
};

export default Home;
