import styles from './style.module.scss'
import Carousel from "react-multi-carousel";
import {CustomLeftArrow, CustomRightArrow} from "../Arrow";
import React from "react";
import CategoryCard from "../CategoryCard";


const CategoriesList = (props) => {
    const { label, data } = props;
    return (
        <>
            <h2>{label}</h2>
            <Carousel
                itemClass={styles.carouselItem}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 5,
                        slidesToSlide: 1,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 3,
                        slidesToSlide: 3,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        slidesToSlide: 1,
                    },
                }}
            >
                {data.map((item, index) => (
                    <CategoryCard key={item._id}
                                  title={item.title}
                                  image={item.image}>
                    </CategoryCard>
                ))}
            </Carousel>
        </>
    )
}

export default CategoriesList;