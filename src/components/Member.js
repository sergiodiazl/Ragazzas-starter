import React from 'react';

import PropTypes from 'prop-types';
import { Box, Image, Flex, Heading, Text } from 'rebass';
// import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

import SocialLink from './SocialLink';
// import markdownRenderer from '../components/MarkdownRenderer';

const ProfilePicture = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 5%;
  box-shadow: 1px 1px 8px 1px ${props => props.theme.colors.primary};
`;
// verificar que tengan la misma estrucutra las dos posibilidades
const Member = ({ member, reverseBox }) => {
  const { name, photo, role, info, socialLinks } = member;
  const {
    src,
    srcSet,

    sizes,
  } = photo.fluid;

  const infoText = JSON.parse(info.info).content[0].content[0].value;

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      flexWrap="wrap"
      width="100%"
    >
      <Heading
        textAlign="center"
        as="h3"
        color="primary"
        fontSize={[4, 6, 8]}
        mt={[10, 25, 50]}
        mb={[3, 4, 5]}
      >
        {name}
      </Heading>
      <Flex
        width="100%"
        flexDirection="row"
        flexWrap={reverseBox ? 'wrap' : 'wrap-reverse'}
      >
        {reverseBox ? (
          <>
            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade right>
                <ProfilePicture
                  src={src}
                  srcSet={srcSet}
                  sizes={sizes}
                  alt={name}
                  my={[4, 4, 0]}
                  mx={[1]}
                />
              </Fade>
            </Box>
            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade bottom>
                <Text
                  fontSize={[3, 4, 5]}
                  fontWeight="bold"
                  color="primary"
                  my={[2, 2, 0]}
                  mx={[0, 0, 1]}
                >
                  {role}
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  fontSize={[3, 4, 5]}
                  fontWeight="bold"
                  color="primary"
                  my={[2, 2, 0]}
                  mx={[0, 0, 1]}
                >
                  {infoText}
                </Text>
              </Fade>
              <Fade bottom>
                <Flex
                  width="100%"
                  alignContent="center"
                  justifyContent="center"
                >
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                      <SocialLink {...rest} color="primaryDark" />
                    </Box>
                  ))}
                </Flex>
              </Fade>
            </Box>
          </>
        ) : (
          <>
            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade bottom>
                <Text
                  fontSize={[3, 4, 5]}
                  fontWeight="bold"
                  color="primary"
                  my={[1, 1, 0]}
                  mx={[1]}
                >
                  {role}
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  fontSize={[3, 4, 5]}
                  fontWeight="bold"
                  color="primary"
                  my={[1, 1, 0]}
                  mx={[0, 0, 1]}
                >
                  {infoText}
                </Text>
              </Fade>
              <Flex width="100%" alignContent="center" justifyContent="center">
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color="primaryDark" />
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade right>
                <ProfilePicture
                  srcSet={srcSet}
                  src={src}
                  sizes={sizes}
                  alt={name}
                  my={[1, 1, 0]}
                  mx={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </>
        )}
      </Flex>
    </Flex>
  );
};

Member.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    info: PropTypes.object,
    socialLinks: PropTypes.array,
    photo: PropTypes.shape({ fluid: PropTypes.objectOf(PropTypes.string) }),
  }),

  reverseBox: PropTypes.bool,
};
export default Member;
