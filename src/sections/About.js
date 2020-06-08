import React from 'react';
import { Box, Image, Flex } from 'rebass';

import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

import Member from '../components/Member';
import SocialLink from '../components/SocialLink';


const ProfilePicture = styled(Image)`
    width: 100%;
  height: auto;
  border-radius: 5%;
`;

const About = () => (
  <Section.Container id="Nosotros" >
    <Section.Header name="Nosotros"  />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutUs {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 2000, quality: 100) {
                src
              }
            }
            socialLinks {
              name
              fontAwesomeIcon
              url
              id
            }
          }
          allContentfulMember {
            edges {
              node {
                name
                role
                id
                info {
                  info
                }
                photo {
                  fixed(width: 2000, quality: 100) {
                    width
                    src
                    srcSet
                    height
                  }
                }
                socialLinks {
                  name
                  fontAwesomeIcon
                  url
                  id
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutUs, profile, socialLinks } = data.contentfulAbout;
        const { edges: bandMembersArray } = data.allContentfulMember;
        const bandMembers = bandMembersArray.map(member => member.node);
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
           <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutUs.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
                    <Flex
                  width="100%"
                  justifyContent="space-around"
                  flexWrap="wrap"
                >
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box fontSize={[4, 5]} key={id}>
                      <SocialLink {...rest} color="primaryLight" />
                    </Box>
                  ))}
                </Flex>
              </Fade>
            </Box>

            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
            {bandMembers.map((node, index) => (
              <Member
                reverseBox={index % 2 === 0}
                key={node.id}
                member={node}
              />
            ))}
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
