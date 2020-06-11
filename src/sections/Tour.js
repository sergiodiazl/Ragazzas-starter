import React from 'react';
import { Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';
import Concert from '../components/Concert';

const Tour = () => (
  <StaticQuery
    query={graphql`
      query tourQuery {
        contentfulTour {
          ticketsMessage
          message
          cancelledMessage
          noTicketsMessage
          noConcertMessage
          photo {
            fixed(width: 2000, quality: 75) {
              srcSet
              src
              width
            }
          }
        }
        allContentfulConcert(sort: { fields: time, order: ASC }) {
          edges {
            node {
              id
              time
              place
              link
              tickets
              cancelled
              message {
                message
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        photo,
        ticketsMessage,
        noTicketsMessage,
        message,
        cancelledMessage,
        noConcertMessage,
      } = data.contentfulTour;
      const { src, srcSet } = photo.fixed;
      const { edges: concertsEdges } = data.allContentfulConcert;

      const concerts = concertsEdges.map(concert => concert.node);
      return (
        <Section.Container
          id="Gira"
          bgImgSrc={src}
          bgImgSrcSet={srcSet}
          minHeight="50vh"
        >
          <Section.Header name="Proximas Fechas" />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            width="100%"
            fontSize={[2, 3.5, 5]}
          >
            <Text color="primary" width="100%">
              {concerts.length > 0 ? message : noConcertMessage}
            </Text>
            <Flex
              width="100%"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              flexWrap="wrap"
            >
              {concerts.length > 0
                ? concerts.map(node => (
                    <Concert
                      key={node.id}
                      concert={node}
                      cancelledMessage={cancelledMessage}
                      ticketsMessage={ticketsMessage}
                      noTicketsMessage={noTicketsMessage}
                    />
                  ))
                : null}
            </Flex>
          </Flex>
        </Section.Container>
      );
    }}
  />
);

export default Tour;
