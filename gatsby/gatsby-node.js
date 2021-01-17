import path from 'path';
import fetch from 'isomorphic-fetch';
// import SlicemastersPage from 'pages/slicemasters';

// //////// A: PIZZAS PAGES ///////// //
async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');

  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data);

  // 3. Loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    // console.log('creating a page for', pizza.name);
    actions.createPage({
      // url for this new page
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

// //////// B: TOPPINGS PAGES ///////// //
async function turnToppingsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');

  // 2. Query all the toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityToppings {
        nodes {
          name
          id
        }
      }
    }
  `);
  // console.log(data);

  // 3. Create a page for that topping
  data.toppings.nodes.forEach((topping) => {
    // console.log('creating a page for topping', topping.name);
    actions.createPage({
      // url for this new page
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        toppingRegex: `/${topping.name}/i`,
        // TODO Regex for Topping
      },
    });
  });
}

async function turnSlicemastersIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const slicemastersTemplate = path.resolve('./src/pages/slicemasters.js');

  // 1. Query all SlicemastersPage
  const { data } = await graphql(`
    query {
      slicemasters: allSanityPerson {
        totalCount
        nodes {
          name
          id
          description
          slug {
            current
          }
        }
      }
    }
  `);
  // TODO: 2. Turn each slicemaster into their own page (TODO)
  // 3. Figure out how many pages there are based on how many slicemasters there are, and how many per page!
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);

  // 4. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    // console.log(`creating page ${i}`);
    actions.createPage({
      path: `/slicemasters/${i + 1}`,
      component: path.resolve(slicemastersTemplate),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnSlicemastersIntoPages(params),
  ]);

  // 1. Pizzas
  // 2. Toppings
  // 3. Slicemasters
}

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  // Fetch list of beers
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await res.json();
  // Loop over each one
  for (const beer of beers) {
    // create a node for each beer
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
  // Create a node for that beer
}

export async function sourceNodes(params) {
  // fetch a list of beers and source then into our gatsby API!
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}
