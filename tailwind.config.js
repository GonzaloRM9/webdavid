/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                vpg: {
                    navy: '#003057',
                    yellow: '#FFC107',
                    'navy-light': '#004A7C',
                    'yellow-dark': '#FFA000',
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
