export const navbarData = {
  homeTitle: "ACK868 Blog",
}

export const footerData = {
  author: 'Glenn',
  aboutAuthor: 'Hi! Mijn naam is Glenn. Software engineer en Meshcore liefhebber.',
  authorInterest:"",
  aboutTheSite:
    "Welkom bij ACK868 Limburg. Dé site met informatie over MeshCore, radio en off-gridcommunicatie in Limburg. Wij zijn een groep hobbyisten die genieten van knutselen met antennes, software en radiogolven.",
}

export const homePage = {
  title: 'Welkom by ACK868 Limburg',
  description:
    'Welkom bij ACK868 Limburg. Dé site met informatie over MeshCore, radio en off-gridcommunicatie in Limburg. Wij zijn een groep hobbyisten die genieten van knutselen met antennes, software en radiogolven.',
}

export const blogsPage = {
  title: 'Alle Blogs',
  description: 'Hier delen wij interessante informatie en activiteiten.',
}

export const categoryPage = {
  title: 'Onderwerpen',
  description: 'Blog onderwerpen',
}

export const aboutPage = {
  title: 'Over ACK868LI',
  description: 'Een groep radio communicatie liefhebbers',
  aboutMe: "Mijn naam is Glenn. Software engineer en Meshcore liefhebber.",
}

export const seoData = {
  title: `ACK868 Limburg`,
  ogTitle: `ACK868 Limburg een site van en voor Meshcore enthusiasten.`,
  description: `Welkom bij ACK868 Limburg. Dé site met informatie over MeshCore, radio en off-gridcommunicatie in Limburg. Wij zijn een groep hobbyisten die genieten van knutselen met antennes, software en radiogolven.`,
  twitterDescription: `Riyad's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Riyads Blog | Riyad's Blog`,
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/nurRiyad',
  linkedinLink: 'https://www.linkedin.com/in/nur-riyad/',
  twitterLink: 'https://twitter.com/qdnvubp',
  stackoverflowLink: 'https://stackoverflow.com/users/16781395/nur-riyad',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
