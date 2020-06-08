import React from 'react';
import PropTypes from 'prop-types';
import {  Text, Flex,  } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase,faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import Triangle from '../components/Triangle';
import {  Card } from '../components/Card';
library.add(fab,faDatabase,faNetworkWired)
const Background = () => (
  <div>
     <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="secondaryLight"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    
  </div>
);

const CARD_HEIGHT = '70px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});
 
  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;




const Skill = ({
  faIcon,
  iconType,
  description,
 
  
}) => (
  <Flex m={2}>
  <Card>
    <Flex p={2}  style={{ height: CARD_HEIGHT }}>
    {iconType!=='fas'?<FontAwesomeIcon icon={[iconType,faIcon]} />:<FontAwesomeIcon icon={faIcon }/> }
      <TextContainer>
        
          <Title my={2} pb={1}>
            
            {description}



          </Title>
          
        
               
      </TextContainer>    
     
    </Flex>
    </Card>
    </Flex>
);

Skill.propTypes = {
  faIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
 
  
};

const Skills = () => (
  <Section.Container id="Skills" Background={Background}>
    <Section.Header name="Skills and tools" icon="🛠️" label="tools" />
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          allContentfulSkill {
            nodes {
              id
              faIcon
              iconType
              description
            }
          
          }
        }
      `}
      render={({  allContentfulSkill }) => (
        
          <Flex flexWrap="wrap"p={3}> 
          { allContentfulSkill.nodes.map((p, i) => (
            <Fade bottom delay={i * 100} key={p.id}>
             
              <Skill {...p} />
              
            </Fade>
          ))}
          </Flex>
        
      )}
    />
  </Section.Container>
);

export default Skills;
