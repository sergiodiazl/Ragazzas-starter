import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Contact/>
    <Footer />
  </Layout>
);

export default IndexPage;
