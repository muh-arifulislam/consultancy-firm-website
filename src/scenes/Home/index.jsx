import React from "react";
import HeroTop from "./HeroTop";
import Services from "./Services";
import AboutBanner from "./AboutBanner";
import StatisticsBanner from "./StatisticsBanner";
import Message from "./Message";
import Support from "./Support";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className="">
      <HeroTop></HeroTop>
      <Services></Services>
      <AboutBanner></AboutBanner>
      <StatisticsBanner></StatisticsBanner>
      <Pricing></Pricing>
      <Message></Message>
      <Support></Support>
    </div>
  );
};

export default Home;
