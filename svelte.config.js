import path from 'path';
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true
        }),
    ],
    kit: {
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
