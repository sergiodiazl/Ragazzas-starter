import React from 'react';
import { Box, Image, Flex, Heading, Text } from 'rebass';
// import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

// import markdownRenderer from '../components/MarkdownRenderer';

const ProfilePicture = styled(Image)`
  width: 100%;
  height: auto;
`;
// verificar que tengan la misma estrucutra las dos posibilidades
const PlaylistContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
const Album = ({ album, reverseBox }) => {
  const { name, year, photo, description, playlist } = album;
  const descriptionText = description.description;
  const { linkPlaylist } = playlist.linkPlaylist;

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      flexWrap="wrap"
      width="100%"
      as="article"
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
                  src={photo.fixed.src}
                  srcSet={photo.fixed.srcSet}
                  alt={name}
                  my={[4, 4, 0]}
                  mx={[0, 0, 1]}
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
                  {year}
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
                  {descriptionText}
                </Text>
              </Fade>
              <PlaylistContainer>
                <iframe
                  src={linkPlaylist}
                  title={name}
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                />
              </PlaylistContainer>
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
                  mx={[0, 0, 1]}
                >
                  {year}
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
                  {descriptionText}
                </Text>
              </Fade>
              <Fade rigth>
                <PlaylistContainer>
                  <iframe
                    src={linkPlaylist}
                    title={name}
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                  />
                </PlaylistContainer>
              </Fade>
            </Box>
            <Box width={[1, 1 / 2]} px={[1, 2, 4]}>
              <Fade right>
                <ProfilePicture
                  src={photo.fixed.src}
                  srcSet={photo.fixed.srcSet}
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

export default Album;
