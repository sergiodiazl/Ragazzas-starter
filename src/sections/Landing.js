import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Section from '../components/Section';
import Featured from '../components/Featured';

const CarouselContainer = styled(Carousel)`
  width: 100%;

  height: 100vh;
  & .carousel {
    height: 100%;
  }
  & .slider-wrapper,
  & .slider {
    height: 100%;
  }
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    z-index: 1;
    width: 10%;
  }
  .carousel .control-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .carousel .control-dots .dot {
    width: 48px;
    height: 48px;
  }
`;

const featuredContent = () => {
  const featuredData = useStaticQuery(graphql`
    query FeaturedQuery {
      allContentfulFeatured(sort: { fields: order }) {
        edges {
          node {
            id
            title
            order
            linkText
            link
            text {
              text
            }
            photo {
              fluid(maxWidth: 2000, quality: 75) {
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
  const featuredArray = featuredData.allContentfulFeatured.edges.map(
    item => item.node,
  );
  return featuredArray;
};
const LandingPage = () => {
  return (
    <Section.Container id="home" padding="0">
      <CarouselContainer
        stopOnHover
        useKeyboardArrows
        infiniteLoop
        swipeable
        showThumbs={false}
        showStatus={false}
      >
        {featuredContent().map(node => (
          <Featured key={node.id} node={node} />
        ))}
      </CarouselContainer>
    </Section.Container>
  );
};

export default LandingPage;
