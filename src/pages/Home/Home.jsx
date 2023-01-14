import React from "react";
import { motion } from "framer-motion";
import ArticleCard from "../../components/cards/ArticleCard";
import Slides from "../../components/carousel/Slides";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="flex  flex-col  pt-28">{/* main-container */}
      <div className="bg-slate-400"> {/* carousel */}
        <Slides />
      </div>
      {/* Article container starts from here */}
      <div className="xl:grid  xl:grid-col-2  xl:grid-flow-col sm:grid sm:grid-row-2 sm: grid-flow-row">
        {/* in this div category list lies */}
        <div className="bg-slate-800  p-4  xl:grid grid-flow-row  xl:col-span-1 xl:gap-4">
          <motion.div
          className="bg-slate-300 h-24 rounded"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          ></motion.div>
          <section className="bg-slate-300  h-24  rounded"></section>
          <section className="bg-slate-300  h-24  rounded"></section>
          <section className="bg-slate-300  h-24  rounded"></section>
        </div>
        {/* in this div the category cards are shown */}
        <div className="col-span-3 bg-slate-800 xl:py-16 px-4 xl:grid xl:grid-flow-col xl:gap-4">
          <section className="bg-slate-300 rounded"></section>
          <section className="bg-slate-300 rounded"></section>
          <section className="bg-slate-300 rounded"></section>
        </div>
      </div>
      <div className="bg-slate-800 h-96"></div>
    </div>
  );
};

export default Home;
