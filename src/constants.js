// Wedding Website Content & Configuration
export const WEDDING_INFO = {
  bride: {
    firstName: "Andrea",
    lastName: "Thannikot",
    fullName: "Andrea Thannikot",
    father: "Dr. Jesline",
    mother: "Mrs. Irene",
    city: "Ernakulam, Kerala"
  },
  groom: {
    firstName: "Atul",
    lastName: "Krishnan",
    fullName: "Atul Krishnan",
    father: "Ramakrishnan",
    mother: "Bindu",
    city: "Calicut, Kerala"
  },
  ceremony: {
    date: "February 11, 2026",
    time: "9:00 AM - 11:00 AM",
    event: "Muhurtham",
    venue: {
      name: "Rhythm Event Galleria",
      address: "Pantheeramkavu, Calicut, Kerala",
      location: "Pantheeramkavu, Calicut",
      googleMapsUrl: "https://maps.google.com/maps?q=Rhythm+Event+Galleria,+Pantheeramkavu,+Calicut&output=embed",
      directionsUrl: "https://maps.app.goo.gl/jti2vTYpz1GmDc9D9"
    }
  },
  quote: "Two souls, one heart"
};

// Image URLs - Store your images in /assets folder and reference them here
export const IMAGES = {
  // Section Background Images - Download these and place in /assets/backgrounds/
  backgroundImages: {
    hero: "public/assets/backgrounds/hero.jpg",
    gallery: "public/assets/backgrounds/wedding_flowers.jfif",
    weddingDetails: "public/assets/backgrounds/gallery.jpeg",
    location: "public/assets/backgrounds/rhythm.png",
    footer: "public/assets/backgrounds/wedding_flowers.jfif"
  },
  
  // Gallery Images - Download these and place in /assets/gallery/
  galleryImages: [
    {
      url: "public/assets/gallery/couple-1.png",
      alt: "Couple Portrait 1"
    },
    // {
    //   url: "public/assets/gallery/couple-2.jpg",
    //   alt: "Romantic Moment"
    // },
    {
      url: "public/assets/gallery/couple-3.jpg",
      alt: "Love & Joy"
    },
    {
      url: "public/assets/gallery/couple-4.jpg",
      alt: "Wedding Romance"
    },
    {
      url: "public/assets/gallery/couple-5.jpg",
      alt: "Indian Wedding Couple"
    },
    {
      url: "public/assets/gallery/couple-6.jpg",
      alt: "Bride & Groom Portrait"
    },
    {
      url: "public/assets/gallery/couple-7.jpg",
      alt: "Wedding Ceremony"
    },
    // {
    //   url: "public/assets/gallery/couple-8.jpg",
    //   alt: "Romantic Photo"
    // },
    // {
    //   url: "public/assets/gallery/couple-9.jpg",
    //   alt: "Engagement Couple"
    // },
    // {
    //   url: "public/assets/gallery/couple-10.jpg",
    //   alt: "Love Moments"
    // }
  ]
};

// Design Settings
export const DESIGN = {
  colors: {
    primary: "rose",
    secondary: "pink",
    accent: "purple"
  },
  animation: {
    floatingHearts: 6,
    galleryScrollDuration: 40 // seconds for full scroll
  }
};