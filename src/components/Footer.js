import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.div`
  width:100%;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name

          socialLinks {
            id
            url
            name
            fontAwesomeIcon
           
          }
        }
      }
    `}
    render={data => {
      const { name, socialLinks } = data.contentfulAbout;
      const year = new Date().getFullYear();
      return (
        <Box p={3} backgroundColor="primaryDark" as="footer">
       <FooterContainer>
            <TextFooter fontSize={[4, 6]}>
              <Fade left>
                <div>
                  <span>{`${name} -${year} .Web by `}</span>

                  <Link href="https://www.sergiodl.com/" mr={1}>
                    Sergio DL
                  </Link>
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </div>
              </Fade>
            </TextFooter>

            <Flex flexWrap="wrap">
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color="background" />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);
export default Footer;
