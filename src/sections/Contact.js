import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';

library.add(faEnvelope);

const Input = styled.input`
  padding: 2%;
  margin: 2%;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.background};} 
  background: ${props =>
    props.theme.colors[props.background] ||
    props.theme.colors.backgroundDark};} 
  font-family: Cabin, 'Open Sans', sans-serif;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;
const Label = styled.label`
font-family: Amatic Sc,Cabin, 'Open Sans', sans-serif;
color: ${props =>
  props.theme.colors[props.color] || props.theme.colors.background};} 
border: none;
border-radius: 3px;
`;
const Textarea = styled.textarea`
flex:1;
padding: 2%;
font-family: Cabin, 'Open Sans', sans-serif;
min-height:30vh;
color: ${props =>
  props.theme.colors[props.color] || props.theme.colors.background};}
background: ${props =>
  props.theme.colors[props.color] || props.theme.colors.backgroundDark};} 
border: none;
border-radius: 3px;
resize:none;
overflow:auto;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
padding: 0.5em;
width:100%;
cursor: pointer;
font-family: Amatic Sc,Cabin, 'Open Sans', sans-serif;
color: ${props =>
  props.theme.colors[props.color] || props.theme.colors.primary};}
background-color: ${props =>
  props.theme.colors[props.color] || props.theme.colors.primaryLight};} 
border: none;
border-radius: 3px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
&:hover {
  background-color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primaryDark};} 
  box-shadow: 0 40x 4px rgba(0, 0, 0, 0.2);
}
`;

const FormCard = styled(Card)`
  width: 100%;
  padding: 1%;
  &:hover {
    top: 0px;
  }
`;

const ContactForm = () => (
  <Flex width="100%">
    <Box flex="1 1 auto" fontSize={[3, 4, 5]}>
      <form
        name="Contact Form"
        action="success-form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <Box m={2}>
          <Flex flexDirection="column" flexWrap="wrap">
            <Flex
              flexWrap="wrap"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box m={2}>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Label htmlFor="email">Tu Email:</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    fontSize={[3, 4, 5]}
                  />
                </Flex>
              </Box>
              <Box m={2}>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Label htmlFor="name">Tu nombre:</Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    required
                    fontSize={[3, 4, 5]}
                  />
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box m={2}>
          <Flex
            flexDirection="column"
            alignItems="stretch"
            justifyContent="space-evenly"
          >
            <Label htmlFor="message">Mensaje:</Label>
            <Textarea
              id="message"
              name="message"
              required
              fontSize={[3, 4, 5]}
            />
          </Flex>
        </Box>
        <Box m={2}>
          <SubmitButton type="submit">
            <Box fontSize={[3, 4, 5]}>
              Enviar <FontAwesomeIcon icon="envelope" />
            </Box>
          </SubmitButton>
        </Box>
      </form>
    </Box>
  </Flex>
);

const Contact = () => (
  <Section.Container id="Contacto">
    <Section.Header name="Dejanos un mensaje" icon="✍️" label="writing" />

    <CardContainer minWidth="50vw">
      <FormCard>
        <Fade bottom delay={100}>
          <ContactForm />
        </Fade>
      </FormCard>
    </CardContainer>
  </Section.Container>
);

export default Contact;
