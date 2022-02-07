import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";
import "../information/styles.css";
import noImage from "../../assets/img/no-image.jpg";
import troyCoffeImage from "../../assets/img/troyCoffeImage.jpg";
import smartBeamImage from "../../assets/img/smartBeamImage.jpg";
import safkaImage from "../../assets/img/safkaImage.jpg";
import recipeImage from "../../assets/img/recipeImage.jpg";
import movieImage from "../../assets/img/movieImage.jpg";
import todoappImage from "../../assets/img/todoappImage.jpg";
import crochetArtImage from "../../assets/img/crochetArtImage.jpg";
import weatherAppImage from "../../assets/img/weatherAppImage.jpg";
// import quizAppImage from "../../assets/img/quizAppImage.jpg";
import TempsAppImage from "../../assets/img/TempsImage.jpg";
import cowenterImage from "../../assets/img/cowenterImage.jpg";
import todosImage from "../../assets/img/todosImage.jpg";
import Spinner from "../../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";

const getLanguagesIcons = () => {
  var json = {
    icons: [
      {
        id: 1,
        alt: "HTML5",
        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
      },
      {
        id: 2,
        alt: "CSS3",
        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      },
      {
        id: 3,
        alt: "JavaScript",
        src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
      },
      {
        id: 4,
        alt: "React",
        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      },
      {
        id: 5,
        alt: "Redux",
        src: "https://img.icons8.com/color/48/000000/redux.png",
      },
      {
        id: 6,
        alt: "NodeJS",
        src: "https://img.icons8.com/color/48/000000/nodejs.png",
      },
      {
        id: 7,
        alt: "ExpressJS",
        src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
      },
      // {
      // 	id: 8,
      // 	alt: "Python",
      // 	src: "https://img.icons8.com/color/48/000000/python.png",
      // },
      // {
      // 	id: 9,
      // 	alt: "SQL",
      // 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
      // },
      // {
      // 	id: 10,
      // 	alt: "MongoDB",
      // 	src: "https://img.icons8.com/color/48/000000/mongodb.png",
      // },
      // {
      // 	id: 11,
      // 	alt: "PostgreSQL",
      // 	src: "https://img.icons8.com/color/48/000000/postgreesql.png",
      // },
    ],
  };
  return json.icons;
};

const getToolsIcon = () => {
  let json = {
    icons: [
      {
        id: nextId(),
        alt: "VScode",
        src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
      },
      {
        id: nextId(),
        alt: "Git",
        src: "https://img.icons8.com/color/48/000000/git.png",
      },
      {
        id: nextId(),
        alt: "Github",
        src: "https://img.icons8.com/nolan/64/github.png",
      },
      {
        id: nextId(),
        alt: "Terminal",
        src: "https://img.icons8.com/fluent/48/000000/console.png",
      },
      {
        id: nextId(),
        alt: "Katalon",
        src: "https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
      },
      {
        id: nextId(),
        alt: "Photoshop",
        src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
      },
      {
        id: nextId(),
        alt: "Premiere",
        src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
      },
      {
        id: nextId(),
        alt: "Trello",
        src: "https://img.icons8.com/color/48/000000/trello.png",
      },
      {
        id: nextId(),
        alt: "Slack",
        src: "https://img.icons8.com/color/48/000000/slack-new.png",
      },
    ],
  };
  return json.icons;
};

const getSocialsIcon = () => {
  let json = {
    socials: [
      {
        id: nextId(),
        alt: "linkedin",
        link: "https://www.linkedin.com",
        src: "https://img.icons8.com/color/48/000000/linkedin-circled.png",
      },
      // {
      //   id: nextId(),
      //   alt: "github",
      //   link: "https://github.com/mohamed4ahmed",
      //   src: "https://img.icons8.com/fluent/48/000000/github.png",
      // },
      {
        id: nextId(),
        alt: "Facebook",
        link: "https://www.facebook.com/ayaahmedabdelsalam",
        src: "https://img.icons8.com/fluent/48/000000/facebook-new.png",
      },
      {
        id: nextId(),
        alt: "Instagram",
        link: "https://www.instagram.com/youyaahmed/",
        src: "https://img.icons8.com/ios-glyphs/48/000000/instagram-circle.png",
      },
    ],
  };
  return json.socials;
};

const getPosts = () => {
  let json = {
    posts: [
      {
        id: nextId(),
        title: "TROY COFFE Web Application",
        description: "React web app for my coffe.",
        imgSrc: troyCoffeImage,
        imgAlt: "troy-logo",
        link: "https://www.troycoffe.cf",
      },
      {
        id: nextId(),
        title: "Smart Beam Web Application",
        description: "React web app for Metal Decoration.",
        imgSrc: smartBeamImage,
        imgAlt: "smart-logo",
        link: "https://smartbeam.tk",
      },
      {
        id: nextId(),
        title: "Safka For Clothes Web Application",
        description: "React web app for Clothes (mens,womens,childreen)",
        imgSrc: safkaImage,
        imgAlt: "safka-logo",
        link: "https://safka.ga",
      },
      {
        id: nextId(),
        title: "Recipe Web Application",
        description:
          "vanillia javascript ,css ,html app for Search for your favorite food , click like , and save it in your fav items , get back",
        imgSrc: recipeImage,
        imgAlt: "Recipe-logo",
        link: "https://mohamed4ahmed.github.io/RecipeApp",
      },
      {
        id: nextId(),
        title: "Movie App Web Application",
        description:
          "vanillia javascript ,css ,html app for get Rating and overview and search  for a movies",
        imgSrc: movieImage,
        imgAlt: "Movie-logo",
        link: "https://mohamed4ahmed.github.io/MovieApp",
      },
      {
        id: nextId(),
        title: "تطبيق قائمة المهام",
        description:
          "React web app for Write down your daily tasks. Save and edit them or delete them, you can also cross them off as finished tasks and filter professional and uifinshed tasks.",
        imgSrc: todoappImage,
        imgAlt: "todoapp-logo",
        link: "https://todoapp.ml",
      },
      {
        id: nextId(),
        title: "Crochetart Web Application",
        description: "React web app for Handmade crochet",
        imgSrc: crochetArtImage,
        imgAlt: "crochetart-logo",
        link: "https://crochetart.cf",
      },
      {
        id: nextId(),
        title: "Weather Web Application",
        description:
          "vanillia javascript ,css ,html for search for your city weather degree",
        imgSrc: weatherAppImage,
        imgAlt: "weather-logo",
        link: "https://mohamed4ahmed.github.io/Weather",
      },
      {
        id: nextId(),
        title: "QuizApp Web Application",
        description:
          "vanillia javascript ,css ,html for get simple quiz and get your result ",
        imgSrc: noImage,
        imgAlt: "QuizApp-logo",
        link: "https://mohamed4ahmed.github.io/QuizApp",
      },
      {
        id: nextId(),
        title: "Temps Web Application",
        description: "React web app old portfolio",
        imgSrc: TempsAppImage,
        imgAlt: "Temps-logo",
        link: "https://mohamed4ahmed.github.io/Temps",
      },
      {
        id: nextId(),
        title: "Cowenter Web Application",
        description:
          "vanillia javascript ,css ,html for cowenter down event new year",
        imgSrc: cowenterImage,
        imgAlt: "cowenter-logo",
        link: "https://mohamed4ahmed.github.io/Cowenter",
      },
      {
        id: nextId(),
        title: "Todo Web Application",
        description:
          "Todo List web app React web app for Write down your daily notes.",
        imgSrc: todosImage,
        imgAlt: "Todos-logo",
        link: "https://mohamed4ahmed.github.io/todo",
      },
    ],
  };
  return json.posts;
};

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const socials = getSocialsIcon();
  const languages = getLanguagesIcons();
  const tools = getToolsIcon();
  const posts = getPosts();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <HomePageComponent
            socials={socials}
            languages={languages}
            tools={tools}
            posts={posts}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
