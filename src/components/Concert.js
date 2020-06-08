import React from 'react';
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
  display: block;
  color: ${props => props.theme.colors.primary};
  padding: 2%;
  width: 100%;
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
  display: block;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primaryDark};
  padding: 2%;
  width: 100%;
  border-radius: 15px;
  text-align: center;
`;
const Concert = props => {
  console.log(props);
  const { concert, noTIcketsMessage, ticketsMessage, cancelledMessage } = props;
  const { place, cancelled, time, link, message: messageText } = concert;
  let message = undefined;
  console.log(messageText !== null);
  if (messageText !== null) {
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
            <Box width={[1, 1 / 2]}>
              <Text color="primary">{place}</Text>
            </Box>
            <Box width={[1, 1 / 2]}>
              <Text color="primary">{time}</Text>
            </Box>
          </Flex>
          <Flex width={[1 / 2, 1]} flexWrap="wrap">
            <Box>
              <Text color="primary">{message}</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex width={[3 / 10]}>
          <TicketButton href={link} target="_blank">
            <Text fontWeight="bold">{ticketsMessage}</Text>
          </TicketButton>
        </Flex>
      </Flex>
    </ConcertContainer>
  );
};

export default Concert;
