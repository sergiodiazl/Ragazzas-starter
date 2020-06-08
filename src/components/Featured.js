import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text, Link } from 'rebass';

import styled from 'styled-components';
import SocialLink from './SocialLink';

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

export const DefaultFeatured = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulAbout {
          name
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
          }
        }
        site {
          siteMetadata {
            deterministicBehaviour
          }
        }
      }
    `}
    render={({ contentfulAbout }) => {
      const { name, socialLinks } = contentfulAbout;

      return (
        <FeaturedContainer>
          <Flex
            alignItems="center"
            justifyContent="center"
            height="100%"
            flexDirection="column"
            flexFlow="wrap"
            opacity="1"
          >
            <Heading
              textAlign="center"
              as="h1"
              color="secondary"
              fontSize={[5, 6, 8]}
              mt={[100, 175, 200]}
              mb={[3, 4, 5]}
            >
              {`Somos ${name} ,seguinos en las redes`}
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
          </Flex>
        </FeaturedContainer>
      );
    }}
  />
);

const FeaturedLink = styled(Link)`
  color: ${props => props.theme.colors.secondarylight};
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
          fontSize={[5, 6, 8]}
          mt={[50, 75, 100]}
          mb={[3, 4, 5]}
        >
          {title}
        </Heading>
        <Flex flexDirection="column">
          {featuredText ? (
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              my={[2, 2, 0]}
              mx={[0, 0, 1]}
            >
              {featuredText}
            </Text>
          ) : null}

          {link && linkText ? (
            <FeaturedLink
              href={link}
              target="_blank"
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              color="primary"
              my={[2, 2, 0]}
              mx={[0, 0, 1]}
            >
              {linkText}
            </FeaturedLink>
          ) : null}
        </Flex>
      </Flex>
    </FeaturedContainer>
  );
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