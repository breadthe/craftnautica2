const colors = require('tailwindcss/colors')

module.exports = {
    mode: "jit",
    purge: [
        "./src/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            colors: {
                "cn-blue-900": "#12283a",
                blue: colors.sky,
                green: colors.emerald,
                red: colors.rose,
            },
        },
    },
    plugins: [],
};
