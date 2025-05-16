'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var glob = require('glob');
var postcssAddRootSelector = require('postcss-add-root-selector');
var ignoreImport = require('rollup-plugin-ignore-import');

const componentsFiles = glob.GlobSync('./src/components/*/*/*.tsx', { ignore: [ './src/components/*/*/*.stories.tsx',  ] });

var rollup_config = [
    {
		input: ['./src/index.css.js', './src/models/mapping/MappingManager.ts', './src/models/mapping/MappingManagerReversed.ts','./src/models/mapping/helpers.ts'].concat(componentsFiles.found).reduce((carry, componentFile) => {
			const componentPath = componentFile.replace('./src/', '');
			const componentPathParts = componentPath.split('/');
			if (componentFile.indexOf('graphics/icons') === -1 && componentFile.indexOf('mapping/helpers') === -1 && componentFile.indexOf('mapping/MappingManagerReversed') === -1) {
				componentPathParts.pop();
			}

			console.log(componentPathParts.join('/'), componentFile);
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
					console.log('chunkInfo', chunkInfo);
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

exports.default = rollup_config;
