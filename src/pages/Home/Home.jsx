import React from "react";
import ArticleCard from "../../components/cards/ArticleCard";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Landing = () => {
  return (
    <div>
      <div className="carousel-main-container">
        <Carousel />
      </div>
      <div id="article-cont">
        <div id="article-name">
          <section className="art-sec"><span class="material-symbols-rounded">
pacemaker
</span>Health</section>
          <section className="art-sec"><span class="material-symbols-rounded">
fitness_center
</span>Fitness</section>
          <section className="art-sec"><span class="material-symbols-rounded">
restaurant
</span>Diet</section>
          <section className="art-sec"><span class="material-symbols-rounded">
nutrition
</span>Nutritions</section>

        </div>
        <div id="article-cards" className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "1rem",
              margin: "0.5rem",
            }}
          >
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
      <div className="article-container">
        <label className="article-label">Videos</label>
        <div className="article-list-container">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
      <div className="article-container p-3">
        <label className="article-label">Tools</label>
        <div className="row g-3">
          <div className="col">
            <ArticleCard />
          </div>{" "}
          <div className="col">
            <ArticleCard />
          </div>
          <div className="col">
            <ArticleCard />
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
