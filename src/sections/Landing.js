import React, { Fragment, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SectionLink } from 'react-scroll-section';

import styled from 'styled-components';
import Section from '../components/Section';
import Featured, { DefaultFeatured } from '../components/Featured';
const CarouselContainer = styled(Carousel)`
  width: 100%;
  margin-top: 10vh;
  height: 90vh;
  & .carousel {
    height: 100%;
  }
  & .slider-wrapper,
  & .slider {
    height: 100%;
  }
  &.carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    z-index: 1;
    width: 10%;
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
              fixed(width: 2000, quality: 100) {
                width
                src
                srcSet
                height
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
  const bgTest =
    'http://images.ctfassets.net/zlzjaasypn6d/4mh5p5XnCYj5gTJQd3FzuV/db67e5c024f10cd1488c07c42d3c035a/58917082_10158355060516124_7739273992124497920_o.jpg';

  const [bgImg, setBgImg] = useState(bgTest);

  useEffect(() => {
    return () => {};
  }, [bgImg]);
  return (
    <Section.Container id="home" padding="0">
      <CarouselContainer
        stopOnHover
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
        bgImg={bgImg}
      >
        {featuredContent().map(node => (
          <Featured key={node.id} node={node} />
        ))}
      </CarouselContainer>
    </Section.Container>
  );
};

export default LandingPage;
