import React from "react";
import Access from "../Main/AccessContainer/Access/Access";
import CoverContainer from "../Main/CoverContainer/CoverContainer";
import ServicesContainer from "../Main/ServicesContainer/ServicesContainer";
import UniversityContainer from "../Main/UniversityContainer/UniversityContainer";
import TopContainer from "../Shared/TopContainer/TopContainer";

const Home = () => {
  return (
    <div>
      <TopContainer />
      <ServicesContainer />
      <CoverContainer />
      <Access />
      <UniversityContainer />
    </div>
  );
};

export default Home;
