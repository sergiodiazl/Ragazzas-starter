import React from 'react';

import PropTypes from 'prop-types';
import { Box, Flex, Text, Link } from 'rebass';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

const ConcertContainer = styled.div`
  width: 100%;
  margin-top: 1%;
  border-radius: 15px;
  position: relative;
  padding: 2%;
  &::after {
    content: '';
    background: ${props => props.theme.colors.primaryDark};
    width: 100%;
    border-radius: 15px;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;

    pointer-events: none;
  }
  & > * {
    z-index: 4;
  }
`;
const TicketButton = styled(Link)`
  display: flex;
  color: ${props => props.theme.colors.primary};
  padding: 2%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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
const NoTicketButton = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primary};
  padding: 2%;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    background: gray;
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
  & > * {
    position: relative;
    z-index: 6;
  }
`;
const renderTicketButton = (
  cancelled,
  tickets,
  cancelledMessage,
  ticketsMessage,
  noTicketsMessage,
  link,
) => {
  if (cancelled === true) {
    return (
      <NoTicketButton>
        <Text fontWeight="bold">{cancelledMessage}</Text>
      </NoTicketButton>
    );
  }
  if (tickets === true) {
    return (
      <TicketButton href={link} target="_blank">
        <Text fontWeight="bold">{ticketsMessage}</Text>
      </TicketButton>
    );
  }
  return (
    <NoTicketButton>
      <Text fontWeight="bold">{noTicketsMessage}</Text>
    </NoTicketButton>
  );
};

const Concert = props => {
  const { concert, noTicketsMessage, ticketsMessage, cancelledMessage } = props;
  const {
    place,
    cancelled,
    time,
    tickets,
    link,
    message: messageText,
  } = concert;
  let message;
  if (messageText !== null) {
    // eslint-disable-next-line prefer-destructuring
    message = messageText.message;
  }
  return (
    <ConcertContainer>
      <Flex
        width="100%"
        alignContent="center"
        justifyContent="space-around"
        fontSize={[2, 3.5, 5]}
      >
        <Flex width={[7 / 10]}>
          <Flex
            width={[1 / 2, 1]}
            flexWrap="wrap"
            alignContent="center"
            justifyContent="space-around"
          >
            <Box
              width={[1, 1 / 2]}
              alignContent="center"
              justifyContent="center"
            >
              <Text color="primary">{place}</Text>
            </Box>
            <Box
              width={[1, 1 / 2]}
              alignContent="center"
              justifyContent="center"
            >
              <Text color="primary">{time}</Text>
            </Box>
          </Flex>
          <Flex
            width={[1 / 2, 1]}
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center"
          >
            <Box>
              <Text color="primary">{message}</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex width={[3 / 10]}>
          {renderTicketButton(
            cancelled,
            tickets,
            cancelledMessage,
            ticketsMessage,
            noTicketsMessage,
            link,
          )}
        </Flex>
      </Flex>
    </ConcertContainer>
  );
};
Concert.propTypes = {
  concert: PropTypes.shape({
    place: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string,
    cancelled: PropTypes.bool,
    tickets: PropTypes.bool,
    message: PropTypes.objectOf(PropTypes.string),
  }),
  cancelledMessage: PropTypes.string,
  ticketsMessage: PropTypes.string,
  noTicketsMessage: PropTypes.string,
};
export default Concert;
