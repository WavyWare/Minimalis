/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,php}',
      './**/*.{html,php}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ['autumn', 'coffee']
    },
}

