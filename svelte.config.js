import path from 'path';
import preprocess from "svelte-preprocess";

// @see https://github.com/sveltejs/kit/tree/master/packages/adapter-static
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true
        }),
    ],
    kit: {
        /* adapter: adapter({
            fallback: '200.html'
        }), */
        ssr: false,
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    $store: path.resolve('./src/store')
                }
            }
        },
    }
};

export default config;
