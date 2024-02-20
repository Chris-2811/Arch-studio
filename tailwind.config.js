/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '760px',
        lg: '1020px',
        xl: '1240px',
        xxl: '1440px',
      },
      colors: {
        'dark-blue': 'hsl(225, 13%, 12%)',
        'grey-100': 'hsl(230, 21%, 95%)',
        'grey-200': 'hsl(225, 17%, 82%)',
        'grey-300': 'hsl(223, 7%, 53%)',
        'grey-400': 'hsl(225, 6%, 40%)',
        red: 'hsl(0, 68%, 61%)',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        120: '7.5rem',
        250: '15.625rem',
      },
      height: {
        240: '240px',
        560: '560px',
        720: '720px',
      },
      maxWidth: {
        573: '573px',
      },
      width: {
        350: '350px',
      },
      backgroundImage: (theme) => ({
        /* Hero home */
        'federal-mobile':
          "url('/src/assets/home/mobile/image-hero-federal.webp')",
        'federal-tablet':
          "url('/src/assets/home/tablet/image-hero-federal.webp')",
        'federal-desktop':
          "url('/src/assets/home/desktop/image-hero-federal.webp')",
        'paramour-mobile':
          "url('/src/assets/home/mobile/image-hero-paramour.webp')",
        'paramour-tablet':
          "url('/src/assets/home/tablet/image-hero-paramour.webp')",
        'paramour-desktop':
          "url('/src/assets/home/desktop/image-hero-paramour.webp')",
        'seraph-mobile':
          "url('/src/assets/home/mobile/image-hero-seraph.webp')",
        'seraph-tablet':
          "url('/src/assets/home/tablet/image-hero-seraph.webp')",
        'seraph-desktop':
          "url('/src/assets/home/desktop/image-hero-seraph.webp')",
        'trinity-mobile':
          "url('/src/assets/home/mobile/image-hero-trinity.webp')",
        'trinity-tablet':
          "url('/src/assets/home/tablet/image-hero-trinity.webp')",
        'trinity-desktop':
          "url('/src/assets/home/desktop/image-hero-trinity.webp')",
        'image-team': "url('/src/assets/home/desktop/image-small-team.webp')",

        /* Featured */
        'featured-1-mobile':
          "url('/src/assets/portfolio/mobile/image-del-sol.jpg')",
        'featured-1-tablet':
          "url('/src/assets/portfolio/tablet/image-del-sol.jpg')",
        'featured-1-desktop':
          "url('/src/assets/portfolio/desktop/image-del-sol.jpg')",

        'featured-2-mobile':
          "url('/src/assets/portfolio/mobile/image-228b.jpg')",
        'featured-2-tablet':
          "url('/src/assets/portfolio/tablet/image-228b.jpg')",
        'featured-2-desktop':
          "url('/src/assets/portfolio/desktop/image-228b.jpg')",

        'featured-3-mobile':
          "url('/src/assets/portfolio/mobile/image-prototype.jpg')",
        'featured-3-tablet':
          "url('/src/assets/portfolio/tablet/image-prototype.jpg')",
        'featured-3-desktop':
          "url('/src/assets/portfolio/desktop/image-prototype.jpg')",

        /* Helper */
        'linear-gradient-featured':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%)',

        /* Hero */
        'hero-about-mobile': "url('/src/assets/about/mobile/image-hero.jpg')",
        'hero-about-tablet': "url('/src/assets/about/tablet/image-hero.jpg')",
        'hero-about-desktop': "url('/src/assets/about/desktop/image-hero.jpg')",

        'hero-contact-mobile':
          "url('/src/assets/contact/mobile/image-hero.jpg')",
        'hero-contact-tablet':
          "url('/src/assets/contact/tablet/image-hero.jpg')",
        'hero-contact-desktop':
          "url('/src/assets/contact/desktop/image-hero.jpg')",
      }),
    },
  },
  plugins: [],
};
