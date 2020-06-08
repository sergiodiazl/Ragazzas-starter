import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Albums from '../sections/Albums';

import Tour from '../sections/Tour';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
const IndexPage = () => (
  <Layout>
    <Header />

    <Landing />
    <Albums/>
    <About />
    <Tour />
    <Contact/>
    <Footer />
  </Layout>
);

export default IndexPage;
