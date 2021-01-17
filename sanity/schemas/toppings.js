import { FaPepperHot as icon, FaLeaf as iconLeaf } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'toppings',
  // Visible Title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Check this for vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
      iconLeaf: 'iconLeaf',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '(Veg)' : ''}`,
    }),
  },
};
