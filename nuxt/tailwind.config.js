module.exports = {
  theme: {
    extend: {
      fontSize: {
        '5xl': '4.5rem',
        '4xl': '4rem',
        '3.5xl': '3.5rem',
        '3xl': '2.5rem', // 40px
        '2xl': '2rem',
        xl: '1.75rem',
        lgr: '1.5rem',
        lg: '1.25rem', // 20px
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },
      fontFamily: {
        AvenirBook: ['Avenir-Book', 'Sans-serif'],
        Avenir: ['Avenir', 'Sans-serif'],
      },
      screens: {
        '2xl': '1536px',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
        2: '2',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
      },
      padding: {
        44: '11rem',
      },
      height: {
        11: '2.75rem',
        13: '3.25rem',
        28: '7rem',
        60: '15rem',
        80: '20rem',
        96: '24rem',
        104: '26rem',
        120: '30rem',
        128: '32rem',
        160: '40rem',
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '40vh': '40vh',
        '50vh': '50vh',
        '56vh': '56vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      minHeight: {
        12: '3rem',
        16: '4rem',
        28: '7rem',
        32: '8rem',
      },
      maxHeight: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      width: {
        11: '2.75rem',
        13: '3.25rem',
        44: '11rem',
        80: '20rem',
        96: '24rem',
        120: '30rem',
        128: '32rem',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '80vw': '80vw',
        '90vw': '90vw',
      },
      minWidth: {
        6: '1.5rem',
        12: '3rem',
      },
      aspectRatio: {
        square: [1, 1],
        '21/9': [21, 9],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/4': [3, 4],
        '3/2': [3, 2],
        '2/3': [2, 3],
        '.715': [63, 88],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      inset: {
        '-8': '-2rem',
        '-5': '-1.5rem',
      },
      colors: {
        red: {
          500: '#EB5958',
        },
        gray: {
          100: '#F8F8F8',
          200: '#D6D6D6',
          300: '#CBCBCB',
          400: '#969696',
          500: '#707070',
          600: '#575757',
          800: '#3B3B3B',
          900: '#272727',
        },
        green: {
          100: '#F8FAF2',
          200: '#D7E3CC',
          300: '#AAD3AA',
          500: '#0DB02B',
          600: '#118E29',
          700: '#127148',
        },
        blue: {
          100: '#F0F4F8',
          600: '#0b406a',
          800: '#004B87',
        },
        yellow: {
          600: '#f2ac00',
        },
        primary: '#25c19f',
        text: '#1c1e21',
      },
      backgroundOpacity: {
        5: '0.05',
      },
      textOpacity: {
        30: '0.3',
      },
      letterSpacing: {
        label: '0.2em',
      },
      lineHeight: {
        tighter: '1.15',
      },
      fontWeight: {
        book: 350,
      },
      boxShadow: {
        light: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        dark: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants: {
    textColor: ['hover', 'focus', 'group-hover', 'responsive'],
    scale: ['hover', 'focus', 'group-hover', 'responsive'],
    backgroundColor: ['hover', 'focus', 'group-hover', 'responsive'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    fontWeight: ['responsive', 'hover', 'focus', 'group-hover'],
    shadow: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('tailwindcss-aspect-ratio')],
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    enabled: false,
    content: [
      './components/**/*.vue',
      './nuxt/layouts/**/*.vue',
      './nuxt/pages/**/*.vue',
      './nuxt/plugins/**/*.js',
      './nuxt.config.js',
      './editors/**/*.vue',
      './siteSettings/**/*.vue',
      './generic/**/*.vue',
      '@whppt/nuxt/lib/**/*.js',
      '@whppt/nuxt/lib/**/*.vue',
      './.nuxt/whppt-nuxt/**/*.js',
      './.nuxt/whppt-nuxt/**/*.vue',
      './spacingControlClasses.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
