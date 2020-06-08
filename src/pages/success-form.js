import React from 'react';
import { Heading, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Footer from '../components/Footer';
const Background = () => (
  <div>
    <Triangle
      color="secondaryDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
      zIndex={1}
    />

    <Triangle
      color="primaryLight"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
      zIndex={1}
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
      zIndex={1}
    />
  </div>
);
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primaryDark};
`;

const SuccessFormPage = () => (
  <Layout>
    <Section.Container id="404" minHeight="90vh" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primary" fontSize={['3rem', '6rem', '8rem']} as="h1">
          Enviado!
        </Heading>
        <Heading color="secondary" fontSize={['2rem', '3rem', '4rem']} as="h2">
          Pronto te vamos a contestar!
          <StyledLink to="/">Chusmea la página.</StyledLink>
        </Heading>
      </Box>
    </Section.Container>
    <Footer />
  </Layout>
);

export default SuccessFormPage;
