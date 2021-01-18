import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomePageGrid = styled.div`
  background-color: var(--yellow);
  padding: 2rem;
  margin: 3rem;
  margin-bottom: 6rem;
  margin-top: -6rem;
  z-index: 2;
  position: relative;
  transform: rotate(-2deg);
  text-align: center;
  font-size: 4rem;
`;

export default function HomePage() {
  return (
    <>
      <HomePageGrid>
        <SEO title="Home" />
        <h1>Welcome to Andy's slices</h1>
        <p>Andy Serves the Sweetest Slices, incredibly the best in town :) </p>
      </HomePageGrid>
    </>
  );
}
