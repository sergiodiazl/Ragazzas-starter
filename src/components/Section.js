import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: ${props =>[props.minHeight] };
  min-width: 320px;
  background: ${props => props.theme.colors.background} no-repeat center 0;
  min-height: ${props => [props.minHeight]};
  height: ${props => [props.height]};
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: ${props => [props.padding]};
  scroll-behavior: smooth;
  background-image: url(${props => props.bgImgSrc});
  background-image: image-set(${props => props.bgImgSrcSet});
  background-size: cover;
  height: 100%;
  width: 100%;
  &::after {
    content: '';
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
  }
  & > * {
    z-index: 2;
  }
`;

const DefaultBackground = () => <div></div>;
const Container = ({
  id,
  children,
  Background = DefaultBackground,
  minHeight = '50vh',
  bgImgSrc = 'null',
  padding = '5%',
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer
      minHeight={minHeight}
      padding={padding}
      bgImgSrc={bgImgSrc}
    >
      {children}
    </SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
  bgImgSrc: PropTypes.string,
  padding: PropTypes.string,
};

const Header = ({ name, icon = '', label = '' }) => (
  <Slide left>
       <Heading color="primary" mb={4} fontSize={[6, 8]}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
