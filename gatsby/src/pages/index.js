import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <h1>Welcome to Andy's slices</h1>
      <p>Andy Serves the Sweetest Slices, incredibly the best in town :) </p>
      <span className="mark">
        <Link to="/pizzas">Checkout the Menu and Order Now!!!</Link>
      </span>
      <br />
      <br />
      <br />
      <em>- New home page design coming soon -</em>
      <br />
      <br />
    </>
  );
}
