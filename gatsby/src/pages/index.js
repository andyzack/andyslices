import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div>
      <SEO title="Home" />
      <div>
        <h1>Welcome to Andy's slices</h1>
        <p>Andy Serves the Sweetest Slices, incredibly the best in town :) </p>
        <Link to="/pizzas">Checkout the Menu and Order Now!!!</Link>
      </div>
    </div>
  );
}
