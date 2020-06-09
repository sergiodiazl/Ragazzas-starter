import React from 'react';

import PropTypes from 'prop-types';
import { Heading, Flex, Text, Link } from 'rebass';

import styled from 'styled-components';

const FeaturedContainer = styled.div`
  color: ${props => props.theme.colors.primary};
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  padding: 0;
  scroll-behavior: smooth;

  background: no-repeat center center;
  background-image: url(${props => props.bgImgSrc});
  background-image: image-set(${props => props.bgImgSrcSet});
  background-size: cover;
  height: 100%;
  width: 100%;

  &::after {
    content: '';

    background-color: black;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }
  & > * {
    z-index: 2;
  }
`;
const FeaturedLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.primary};
  padding: 2%;
  width: 100%;
  position: relative;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.colors.primary};
  }
  &::after {
    content: '';
    background: ${props => props.theme.colors.secondaryDark};
    width: 100%;
    border-radius: 15px;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
  &:hover ::after {
    background: ${props => props.theme.colors.secondaryLight};
    opacity: 0.8;
  }
  & > * {
    position: relative;
    z-index: 6;
  }
`;

const Featured = ({ node }) => {
  const { title, text, link, linkText, photo } = node;
  const { src: bgImgSrc, srcSet: bgImgSrcSet } = photo.fixed;
  const featuredText = text.text;
  return (
    <FeaturedContainer
      bgImgSrc={bgImgSrc}
      bgImgSrcSet={bgImgSrcSet}
      className="featured-Container"
    >
      <Flex
        alignItems="center"
        justifyContent="space-around"
        height="100%"
        flexDirection="column"
        flexFlow="wrap"
        color="primary"
      >
        <Heading
          textAlign="center"
          as="h1"
          color="secondary"
          fontSize={[6, 7, 8]}
          mt={[50, 75, 100]}
          mb={[3, 4, 5]}
        >
          {title}
        </Heading>
        <Flex flexDirection="column" fontSize={[4, 5, 6]}>
          {featuredText ? (
            <Text fontWeight="bold" my={[2, 2, 0]} mx={[0, 0, 1]}>
              {featuredText}
            </Text>
          ) : null}

          {link && linkText ? (
            <FeaturedLink
              href={link}
              target="_blank"
              fontWeight="bold"
              color="primary"
              my={[2, 2, 0]}
              mx={[0, 0, 1]}
            >
              <Text>{linkText}</Text>
            </FeaturedLink>
          ) : null}
        </Flex>
      </Flex>
    </FeaturedContainer>
  );
};

Featured.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.objectOf(PropTypes.string),
    link: PropTypes.string,
    linkText: PropTypes.string,
    photo: PropTypes.shape({
      fixed: PropTypes.objectOf(PropTypes.string),
    }),
  }),
};
export default Featured;
/* content: "";
      background-image: url('https://placekitten.com/1200/800');
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.75;

      */

/*
       content:"";
    background:rgba(0,0,0,0.5)  no-repeat  center center ;
 background-image:  url(${props=>props.bgImgSrc}) ;
 background-image:image-set(${props=>props.bgImgSrcSet});
 background-size:cover;

    position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.5;
      */
