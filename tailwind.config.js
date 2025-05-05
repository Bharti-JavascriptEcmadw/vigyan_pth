
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryGreen: '#2DC67D',
        greenborder: '#2DC67D',
        themecolor: '#111827',
      },
      screens: {
        xsm: '200px',
        sm: '640px',
        md: '740px',
        lg: '1024px',
        xl: '1280px',
      },
      keyframes: {

        

        rotateYLeft: {
          '0%': {
            opacity: 0,
            transform: 'rotateY(-90deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0deg)',
          },
        },
        rotateYRight: {
          '0%': {
            opacity: 0,
            transform: 'rotateY(90deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0deg)',
          },
        },
        verticalRotateIn: {
          '0%': {
            opacity: 0,
            transform: 'rotateX(-90deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        rotateInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100px) rotate(-5deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0) rotate(0deg)',
          },
        },
        rotateInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100px) rotate(5deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0) rotate(0deg)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        rotateInLeft: 'rotateInLeft 0.8s ease-out',
        rotateInRight: 'rotateInRight 0.8s ease-out',
        verticalRotateIn: 'verticalRotateIn 0.8s ease-out',
        rotateYLeft: 'rotateYLeft 1s ease-out',
        rotateYRight: 'rotateYRight 1s ease-out',

      },
      transformOrigin: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
        
        'center': 'center',

      },
    },
  },
  plugins: [],
};
