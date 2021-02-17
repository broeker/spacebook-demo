const autoprefixer = require('autoprefixer');

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      // backgroundImage: theme => ({
      //   'logo': "url('_includes/assets/images/logo.png') !important",
      //   'pogo': "url('_includes/assets/images/logo-dark.png') !important",
      //  }),
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#1D4ED8',
              '&:hover': {
              color: '#1E3A8A',
              },
            },
            'div.logo': {
              width: "250px",
              height: "250px",
              'background-color': "#ff9900"
            },
            '.prose a.edit, .tag a': {
              color: '#333',
              'text-decoration': 'none',
            },
            'ul.footer-nav': {
              '::before': {
                display: 'none',
                'text-decoration': 'none',
              }
            },
            'ul.contains-task-list': {
              '::before': {
                display: 'none',
              }
            },
            'ul.spacelog': {
              '::before': {
                display: 'none',
              }
            },
          },
        },
      }
    },
  }, 
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}