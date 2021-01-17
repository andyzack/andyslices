import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeGrid = styled.div`
  transform: rotate(-2deg);
  text-align: center;
  font-size: 4rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const HomeStyles = styled.div`
  background-color: var(--yellow);
  padding: 1rem;
  margin: 2rem;
  margin-top: -6rem;
  z-index: 2;
  position: relative;
  text-align: center;
`;

export default function HomePage() {
  return (
    <HomeGrid>
      <SEO title="Home" />
      <HomeStyles>
        <h1>Welcome to Andy's slices</h1>
        <p>Andy Serves the Sweetest Slices, incredibly the best in town :) </p>
        <Link to="/pizzas">Checkout the Menu and Order Now!!!</Link>
      </HomeStyles>
    </HomeGrid>
  );
}
