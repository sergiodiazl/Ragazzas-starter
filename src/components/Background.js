import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
const Background = props => {
  console.log(props);
  return styled.div`
   
  background:${props =>
    props.bgImg ? [props.bgImg] : props.theme.colors.background}
  width:100%;
  height:100%;  

`;
};

export default Background;
