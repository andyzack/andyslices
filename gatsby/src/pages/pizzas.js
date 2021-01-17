import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PizzaList from '../components/PizzasList';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  // console.log(pizzas);

  return (
    <>
      <SEO
        title={
          pageContext.topping ? `with ${pageContext.topping}` : `All Pizzas`
        }
      />
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
      nodes {
        name
        price
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
