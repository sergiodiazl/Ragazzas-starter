import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  font-family: Amatic SC, Cabin, 'Open Sans', sans-serif;
  .headroom--unfixed {
    background: ${props => props.theme.colors.background};

    min-height: 5vh;
    display: flex;
    align-items: center;
  }
  .headroom--pinned {
    min-height: 5vh;
    background: ${props => props.theme.colors.primaryDark};
    display: flex;
    align-items: center;
  }

  z-index: 1000;
  position: absolute;
  width: 100vw;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );
const Logo = ({ onClick }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        contentfulAbout {
          name
          logo {
            fluid(maxWidth: 900) {
              srcWebp
              srcSetWebp
              src
              srcSet
              sizes
            }
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
      const { logo, name } = contentfulAbout;
      const { sizes, src, srcSet } = logo.fluid;
      return (
        <Image
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          p={[0, 1, 3]}
          width="35%"
          alt={name}
          onClick={onClick}
          style={{
            cursor: 'pointer',
          }}
        />
      );
    }}
  />
);
const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);
            console.log(home);
            console.log(links);

            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
                name={name}
              />
            ));

            return (
              <Fragment>
                {home !== null ? <Logo onClick={home.onClick} /> : <Logo />}
                <Flex
                  flexWrap="wrap"
                  flex="0 1 65%"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  {navLinks}
                </Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
