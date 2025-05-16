# Air WP Sync UI

Air WP Sync component library. \
It contains all items required to build interactive interfaces for the plugin.

## Commands

### Icons
To build new components from SVG icons (folder "icons"), run the command below:

`npm run dev:icons`

New components icons will be populated in the folder "src/components/graphics/icons/".

The generated code requires some fixes: \
- change prop type to `IconProps`
- change fill / stoke color code to `currentColor`
- if the svg uses a clip path with an id, use `useId` React hook (see "CircleChecked.tsx")

### Storybook

To display the Storybook, run the command below:

`npm run storybook`

The script will search for each file with the following format: `{componant-name}.stories.tsx` \
These files describe for each component some usage examples that should cover all the props they are expecting and the states they are managing.

### Rollup

The command `npm run rollup` will generate the "library" folder containing all the files that should be published.

### Build

The build command, `npm run build`, will clean up build destination folders, run rollup command then will copy the files to the assets plugin folder: "assets/js/air-wp-sync-ui".

## Create a new component

Add a folder in one of the "src/components/" sub folders (content, form, layout).

Create the files below:
- `{componant-name}.stories.tsx`: Describe usage of the component in the Storybook.
- `{ComponantName}.tsx`: The component code.
- `{ComponantName}.types.ts`: The component props types.
- `{ComponantName}.css`: The component CSS.
- `index.ts`: Export entry point (should contain `export { default as {ComponantName} } from './{ComponantName}'`)

Update the `index.ts` from the parent folder (content, form, layout).

The Storybook will automatically read the `{componant-name}.stories.tsx` file, the `{ComponantName}.tsx` will be exported and the css file will be merged with the commands rollup/build

## Use the component library

- If you have made some changes to the library, run the build command (`npm run build`).
- Install the package locally in your project: `npm install {relative path to assets/js/air-wp-sync-ui}`
- Import component as needed, e.g `import ButtonLinkIcon from "air-wp-sync-ui/library/components/content/button-link-icon";`
- Add the css file "air-wp-sync-ui/library/index.css" to your interface (don't import into your package, it will be already loaded by the plugin).
