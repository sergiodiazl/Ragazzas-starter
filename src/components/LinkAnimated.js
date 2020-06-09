import styled from 'styled-components';
import PropTypes from 'prop-types';
const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom:   ${props =>
    props.underlinePosition ? `${props.underlinePosition}` : '5px'};
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};} 
  ${props =>
    props.selected &&
    `border-bottom:  5px solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s all linear;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${props => props.theme.colors.secondaryLight};
    height: 5px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;
LinkAnimated.propTypes = {
  underlinePosition: PropTypes.string,
};

export default LinkAnimated;
