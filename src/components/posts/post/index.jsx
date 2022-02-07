import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Post = ({ id, imgSrc, imgAlt, title, description, link }) => {
  return (
    <div>
      <div className="post" key={id}>
        <LazyLoadImage
          className="post__thumbnail"
          alt={imgAlt}
          effect="blur"
          src={imgSrc}
        />
        {/* <img className="post__thumbnail" src={imgSrc} alt={imgAlt} /> */}
        <div className="post__preview">
          <h6 className="post__title">{title}</h6>
          <p className="post__description">{description}</p>
          <a href={link} target="__blank" rel="noopener noreferrer">
            See Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
