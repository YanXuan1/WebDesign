import React from "react";
import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Components
import Product from "../components/Product.js";
import Carousel from "../components/Carousel";
import Card from "../components/Card"
import food from "../img/a-3.jpg";
import food1 from "../img/b-3.jpg";
import food2 from "../img/4.jpg"
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "../components/Table";
import cImage1 from "../img/14.jpg";
import cImage2 from "../img/c2.jpg";
import cImage3 from "../img/c3.jpg";
import cImage4 from "../img/c4.jpg";
import cImage5 from "../img/c5.jpg";
import cImage6 from "../img/c6.jpg";
import cImage7 from "../img/c7.jpg";
import cImage8 from "../img/c8.jpg";
import cImage9 from "../img/c9.jpg";

//Actionswafasf
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const data = [
    {
      image:cImage1,
      caption: `<div>
        Best Recommend
      </div>`,
    },
    {
      image:cImage2,
      caption: "<div>Branded Dessert</div>",
    },
    {
      image:cImage3,
      caption: "<div>New Arrival</div>",
    },
    {
      image:cImage4,
      caption: "<div>Most Famous</div>",
    },
    {
      image: cImage5,   
      caption: "<div>Highest guest rating</div>",
    },
    {
      image: cImage6,
      caption: "<div>Classic Flavor</div>",
    },
    {
      image: cImage7,
      caption: "<div>Sugar Free</div>",
    },
    {
      image: cImage8,
      caption: "<div>Innovative Dessert</div>",
    },
    {
      image: cImage9,
      caption: "<div>Master's Recommendation</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const recipeAuthor = "Efecan";
  const recipeItem = {
    title: "Our Products",
    date: "delicious and healthy",
    description:
    "All items are made fresh, from scratch, and on-site. We offer special orders of gluten-free, dairy-free, or vegan cakes. Call us today for more information!"
      
  };
  const recipeItem1 = {
    title: "Our Store",
    date: "clean and fancy",
    description:
    "Our artisan bakers have a passionate commitment to quality and excellence. Our gourmet cakes, mousses, buttercreams and ganache are all scratch made in-house.",
  };
  const recipeItem2 = {
    title: "Our chef",
    date: "Joshua Madison",
    description:
      "Few chefs have displayed the genius of Joshua Madison. Constantly inventing new techniques and garnering a slew of Michelin stars, Joshua makes creations to the dessert world.",
  };

  const like= 193;
  const isLiked = true;
  // const image1 = "../img/22.jpg"

  return (
    <div className="homescreen">
      <div className="bg">
      <div class="frosted-glass">
      <div class="neon">Flowers of Paris</div>
  </div>

      </div>
      



    <div id="carousel">
         <Carousel
            data={data}
            time={2000}
            width="1200px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              margin: "20px auto",
            }}
          />
          </div>
          <div className="cardOut">
          <div className="cardRow">
          <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image = {food}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}
        />
        <Card
          author={recipeAuthor}
          title={recipeItem1.title}
          date={recipeItem1.date}
          image = {food1}
          description={recipeItem1.description}
          liked={isLiked}
          likeCount={like}
        />
        <Card
          author={recipeAuthor}
          title={recipeItem2.title}
          date={recipeItem2.date}
          image = {food2}
          description={recipeItem2.description}
          liked={isLiked}
          likeCount={like}
        />
        </div>
        </div>
         
         <Table></Table>

         <div className="titlep">
         <button class="btnk btn-gradient">
         Latest Products
  </button>
         {/* <h1 class="title slide-bar">I'm alphardex.</h1>
    <p class="subtitle slide-bar">A CSS Wizard</p> */}
         </div>
      {/* <h2 className="homescreen__title">Latest Products</h2> */}
       <div className="homescreen__products">
         {/* <div className="homescreen_carousel">
           <Homescreen />
         </div> */}
         {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div> 

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
};

export default HomeScreen;
