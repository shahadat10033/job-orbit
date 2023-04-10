import React from "react";
import HeaderArticle from "./HeaderArticle";
import JobCategory from "./JobCategory";
import FeaturedJob from "./FeaturedJob";

const Root = () => {
  return (
    <div>
      <HeaderArticle></HeaderArticle>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Root;
