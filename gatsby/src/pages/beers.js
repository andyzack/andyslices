import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyled = styled.div`
  border: 1px solid var(--grey);
  display: grid;
  padding: 2rem;
  text-align: center;
  img {
    display: grid;
    align-items: center;
    font-size: 10px;
    justify-content: center;
    height: 200px;
    object-fit: contain;
    width: 100%;
  }
`;

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  // console.log(beers);

  return (
    <>
      <SEO title="Beers" />
      <h2>We have {beers.length} Beers Available. Dine in only!</h2>
      <BeerGridStyles>
        {beers.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyled key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {'<3'.repeat(rating)}
                <span style={{ color: `#ccc` }}>{'<3'.repeat(5 - rating)}</span>
                <span> ({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyled>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query beerQuery {
    beers: allBeer {
      nodes {
        name
        id
        price
        image
        rating {
          reviews
          average
        }
      }
    }
  }
`;
