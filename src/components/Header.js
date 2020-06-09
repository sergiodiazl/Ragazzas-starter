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
  }
  .headroom--pinned {
    min-height: 5vh;
    background: ${props => props.theme.colors.primaryDark};
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
const Logo = () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        contentfulAbout {
          name
          logo {
            file {
              url
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

      return (
        <Image
          src={logo.file.url}
          p={[0, 1, 3]}
          width="50%"
          alt={name}
          onClick={home.onClick}
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

            const homeLink = home && Logo();
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
                {homeLink}
                <Flex
                  flexWrap="wrap"
                  flex="0 1 50%"
                  alignItems="center"
                  justifyContent="center"
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
