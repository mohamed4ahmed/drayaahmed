import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Post from "./post";

const Posts = ({ posts }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		lazyLoad: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					autoplaySpeed: 10000,
					dots: false,
				},
			},
		],
	};
	return (
		<React.Fragment>
			<h3 style={{ textAlign: "center" }}>Some Of My Work Experience</h3>
			<div className="posts-wrapper">
				<Slider {...settings}>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								id={post.id}
								imgSrc={post.imgSrc}
								imgAlt={post.imgAlt}
								title={post.title}
								description={post.description}
								link={post.link}
							/>
						);
					})}
				</Slider>
			</div>
		</React.Fragment>
	);
};

export default Posts;
