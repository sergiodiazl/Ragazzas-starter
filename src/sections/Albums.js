import React from 'react';
import { Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';

import Section from '../components/Section';

import Album from '../components/Album';

const Albums = () => (
  <Section.Container id="Escuchá">
    <Section.Header name="Escuchá, amor" />
    <StaticQuery
      query={graphql`
        query albumsQuery {
          allContentfulAlbum(sort: { fields: year, order: [DESC] }) {
            edges {
              node {
                id
                name
                year
                description {
                  description
                }
                photo {
                  fluid(maxWidth: 1000, quality: 80) {
                    srcSet
                    src
                    sizes
                  }
                }
                playlist {
                  linkPlaylist {
                    linkPlaylist
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: albumsArray } = data.allContentfulAlbum;
        const bandAlbums = albumsArray.map(album => album.node);

        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            {bandAlbums.map((node, index) => (
              <Album reverseBox={index % 2 === 0} key={node.id} album={node} />
            ))}
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default Albums;
