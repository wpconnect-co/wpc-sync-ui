import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from 'rollup-plugin-postcss'
import { GlobSync } from 'glob';
import postcssAddRootSelector from 'postcss-add-root-selector';
import ignoreImport from 'rollup-plugin-ignore-import';
const componentsFiles = GlobSync('./src/components/*/*/*.tsx', { ignore: [ './src/components/*/*/*.stories.tsx',  ] })

export default [
    {
		input: ['./src/index.css.js', './src/models/mapping/MappingManager.ts', './src/models/mapping/MappingManagerReversed.ts','./src/models/mapping/helpers.ts'].concat(componentsFiles.found).reduce((carry, componentFile) => {
			const componentPath = componentFile.replace('./src/', '');
			const componentPathParts = componentPath.split('/');
			if (componentFile.indexOf('graphics/icons') === -1 && componentFile.indexOf('mapping/helpers') === -1 && componentFile.indexOf('mapping/MappingManagerReversed') === -1) {
				componentPathParts.pop();
			}

			console.log(componentPathParts.join('/'), componentFile)
			carry[componentPathParts.join('/')] = componentFile;

			return carry;
		}, {}),
		//	{ 'components/content/heading': './src/components/content/heading/Heading.tsx', ... }

        output: [
			{
				dir: './library',
				format: "esm",
				sourcemap: true,
				chunkFileNames: (chunkInfo) => {
					console.log('chunkInfo', chunkInfo)
					return '[name].js'
				}
			}
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
				tsconfig: "./tsconfig.json",
			}),
			postcss({
				extract: "index.css",
				plugins: [
					postcssAddRootSelector({
						rootSelector: 'body.airwpsync-ui',
					})
				]
			})
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "src/index.ts",
        output: [{
			file: "library/types.d.ts", format: "es"
		}],
        plugins: [
			ignoreImport({
				// Ignore all .scss and .css file imports while building the bundle
				extensions: ['.css'],
			}),
			dts.default()
		],

    },
];
