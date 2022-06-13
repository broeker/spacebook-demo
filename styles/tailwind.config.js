module.exports = {
  mode: 'jit',
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './pages/**/*.{html,js}',
    './_includes/components/**/*.{html,js}',
    './_site/index.html'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      margin: {
        '26': '6.5rem',
       },
      backgroundImage: {
        'hamburger': "url('/_includes/assets/buttons/menu.svg')",
        'hamburger-dark': "url('/_includes/assets/buttons/menu-dark.svg')",
        'hamburger-close': "url('/_includes/assets/buttons/close.svg')",
      },
      colors: {
        'header': {
          DEFAULT: 'var(--header)',
          'dark': 'var(--header-dark)',
        },
        'header-height': {
          DEFAULT: 'var(--header-height)',
        },
        'header-text': {
          DEFAULT: 'var(--header-text)',
          'dark': 'var(--header-text-dark)',
          'dark-hover': 'var(--header-text-dark-hover)',
          'hover': 'var(--header-text-hover)'
        },
        'content': {
          DEFAULT: 'var(--content)',
          'dark': 'var(--content-dark)',
        },
        'content-text': {
          DEFAULT: 'var(--content-text)',
          'dark': 'var(--content-text-dark)',
        },
        'content-link': {
          DEFAULT: 'var(--content-link)',
          'hover': 'var(--content-link-hover)',
          'dark': 'var(--content-link-dark)',
          'dark-hover': 'var(--content-link-dark-hover)',
        },
        'pagenav': {
          DEFAULT: 'var(--pagenav)',
          'hover': 'var(--pagenav-hover)',
          'dark': 'var(--pagenav-dark)',
          'dark-hover': 'var(-pagenav-dark-hover)',
        },
        'dateline': {
          DEFAULT: 'var(--dateline)',
          'dark': 'var(--dateline-dark)',
          'dark-hover': 'var(--dateline-dark-hover)',
          'hover': 'var(--dateline-hover)'
        },
        'blockquote': {
          DEFAULT: 'var(--blockquote)',
          'dark': 'var(--blockquote-dark)',
          'text': 'var(--blockquote-text)',
          'text-dark': 'var(--blockquote-text-dark)',
          'border': 'var(--blockquote-border)',
          'border-dark': 'var(--blockquote-border-dark)',
          'link': 'var(--blockquote-link)',
          'link-hover': 'var(--blockquote-link-hover)',
          'link-dark': 'var(--blockquote-link-dark)',
          'link-dark-hover': 'var(--blockquote-link-dark-hover)',
        },
        'callout': {
          DEFAULT: 'var(--callout)',
          'text': 'var(--callout-text)',
          'dark': 'var(--callout-dark)',
          'text-dark': 'var(--callout-text-dark)',
          'link': 'var(--callout-link)',
          'link-hover': 'var(--callout-link-hover)',
          'link-dark': 'var(--callout-link-dark)',
          'link-dark-hover': 'var(--callout-link-dark-hover)',
        },
        'footer': {
          DEFAULT: 'var(--footer)',
          'dark': 'var(--footer-dark)',
        },
        'footer-text': {
          DEFAULT: 'var(--footer-text)',
          'dark': 'var(--footer-text-dark)',
          'dark-hover': 'var(--footer-text-dark-hover)',
          'hover': 'var(--footer-text-hover)'
        },
        'subheader-text': {
          DEFAULT: 'var(--subheader-text)',
          'dark': 'var(--subheader-text-dark)',
          'dark-hover': 'var(--subheader-text-dark-hover)',
          'hover': 'var(--subheader-text-hover)'
        },
        'sidebar': {
          DEFAULT: 'var(--sidebar)',
          'dark': 'var(--sidebar-dark)',
        },
        'sidebar-text': {
          DEFAULT: 'var(--sidebar-text)',
          'dark': 'var(--sidebar-text-dark)',
        },
        'sidebar-link': {
          DEFAULT: 'var(--sidebar-link)',
          'hover': 'var(--sidebar-link-hover)',
          'dark': 'var(--sidebar-link-dark)',
          'dark-hover': 'var(--sidebar-link-dark-hover)',
        },
        'nav': {
          DEFAULT: 'var(--nav)',
          'dark': 'var(--nav-dark)',
          'hover': 'var(--nav-hover)',
          'dark-hover': 'var(--nav-dark-hover)',
          'button': 'var(--nav-button)',
          'button-dark': 'var(--nav-button-dark)',
        },
        'logo': {
          DEFAULT: 'var(--logo)',
          '1': 'var(--logo-1)',
          '1-hover': 'var(--logo-1-hover)',
          '1-dark': 'var(--logo-1-dark)',
          '1-dark-hover': 'var(--logo-1-dark-hover)',
          '2': 'var(--logo-2)',
          '2-hover': 'var(--logo-2-hover)',
          '2-dark': 'var(--logo-2-dark)',
          '2-dark-hover': 'var(--logo-2-dark-hover)',
          'accent': 'var(--logo-accent)',
          'accent-hover': 'var(--logo-accent-hover)',
          'accent-dark': 'var(--logo-accent-dark)',
          'accent-dark-hover': 'var(--logo-accent-dark-hover)',
        },
        'icon': {
          DEFAULT: 'var(--icon)',
          'dark': 'var(--icon-dark)',
          'dark-hover': 'var(--icon-dark-hover)',
          'hover': 'var(--icon-hover)'
        },
        'search': {
          DEFAULT: 'var(--search)',
          'dark': 'var(--search-dark)',
        },
        'search-text': {
          DEFAULT: 'var(--search-text)',
          'dark': 'var(--search-text-dark)',
        },
        'search-border': {
          DEFAULT: 'var(--search-border)',
          'dark': 'var(--search-border-dark)',
        },
        'focus': {
          DEFAULT: 'var(--focus)',
          'dark': 'var(--focus-dark)',
        },
        'placeholder': {
          DEFAULT: 'var(--placeholder)',
          'dark': 'var(--placeholder-dark)',
        },
        'default-border': {
          DEFAULT: 'var(--default-border)',
          'dark': 'var(--default-border-dark)',
        },
        'header-border': {
          DEFAULT: 'var(--header-border)',
          'dark': 'var(--header-border-dark)',
        },
        'sidebar-border': {
          DEFAULT: 'var(--sidebar-border)',
          'dark': 'var(--sidebar-border-dark)',
        },
        'footer-border': {
          DEFAULT: 'var(--footer-border)',
          'dark': 'var(--footer-border-dark)',
        },
        'content-hr': {
          DEFAULT: 'var(--content-hr)',
          'dark': 'var(--content-hr-dark)',
        },
        'sidebar-hr': {
          DEFAULT: 'var(--sidebar-hr)',
          'dark': 'var(--sidebar-hr-dark)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
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
          },
        },
      }
    },
  }, 
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}