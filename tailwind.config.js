/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      serif: ["Josefin", 'serif'],

      sans: [["Lilita", 'sans'], ["hiromisake", 'sans']],
     

    },
    backgroundImage: {
      'home-image': "url('./assets/images/chef.jpg')"

    }
  },
  plugins: [],
};
