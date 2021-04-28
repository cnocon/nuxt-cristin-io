const defaults = {
  title: "Cristin O'Connor | Front End Software Engineer",
  description:
    "Front End Software Engineer Cristin O'Connor's portfolio, blog and résumé site",
  image: 'https://www.dropbox.com/s/cqtdsyesom9qs22/default.png?raw=1',
  url: 'https://cristin.io',
}

const Head = (parameters = {}) => {
  return {
    title: parameters.title || defaults.title,
    meta: [
      {
        hid: 'og:title',
        name: 'og:title',
        content: parameters.title || defaults.title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: parameters.description || defaults.description,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: parameters.image || defaults.image,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: parameters.url || defaults.url,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@cnocon',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@cnocon',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: parameters.image || defaults.image,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: parameters.title || defaults.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: parameters.description || defaults.description,
      },
      {
        hid: 'description',
        name: 'description',
        content: parameters.description || defaults.description,
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
    ],
  }
}

export default Head
