# Refactoring React

Want to see these in action? Clone this repo and run `npm run start` and swap out the imports in deck.mdx with the files below and go to the associated slide. Or, bring them into your own [create-react-app](https://github.com/facebook/create-react-app). Happy learning!

## Compound Component example

['Plain' example](https://github.com/fullstackzach/refactoring-react/blob/master/CompoundComponents/Plain.js) - Tabs example before it was refactored to compound components.

['Plain' with Options](https://github.com/fullstackzach/refactoring-react/blob/master/CompoundComponents/PlainWithOptions.js) - Added ability to switch tabs on top and bottom, and ability to disable - but a bit cumbersome

[Compound component skeleton](https://github.com/fullstackzach/refactoring-react/blob/master/CompoundComponents/index.js) - Skeleton of the compound component pattern - before we built back in the tab's features

[Solution](https://github.com/fullstackzach/refactoring-react/blob/master/CompoundComponents/Solution.js) - Build out of all of the compound component features

[Add Context](https://github.com/fullstackzach/refactoring-react/blob/master/CompoundComponents/SolutionWithContext.js) - Added React context to simplify the pattern a bit.

## HOC and Render Props

[Plain](https://github.com/fullstackzach/refactoring-react/blob/master/RenderProps/index.js) - The basic example showing mouse x and y on the screen

[HOC](https://github.com/fullstackzach/refactoring-react/blob/master/RenderProps/HOC.js) - Higher order components example

[RenderProp](https://github.com/fullstackzach/refactoring-react/blob/master/RenderProps/RenderProp.js) - Render prop example

# Built with mdx-deck

This was generated with [mdx-deck][]'s `npm init deck` command.

## Development

To run the presentation deck in development mode:

```sh
npm start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck as static HTML:

```sh
npm run build
```

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck

