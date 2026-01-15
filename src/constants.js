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

// Image URLs
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1656104749691-c87c8377c967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzYXZlJTIwdGhlJTIwZGF0ZXxlbnwxfHx8fDE3Njg1MDA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  
  // Section Background Images
  backgroundImages: {
    hero: "https://images.unsplash.com/photo-1748546639032-203c5bd8ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMHBhc3RlbHxlbnwxfHx8fDE3Njg0OTA3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    couple: "https://images.unsplash.com/photo-1581720848209-9721f8fa30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2ODUwMzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: "https://images.unsplash.com/photo-1706741921974-967b3590743c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg0Nzc2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    weddingDetails: "https://images.unsplash.com/photo-1753559319967-8f959ad78b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzY4NDI5NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1767333586238-5fe2e8e62b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTAwMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Couple Portrait 1"
    },
    {
      url: "https://images.unsplash.com/photo-1755951029375-f1b4d4dd5f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY4NDk1MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Romantic Moment"
    },
    {
      url: "https://images.unsplash.com/photo-1631225893179-4d6e349189c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwbG92ZXxlbnwxfHx8fDE3Njg0ODAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Love & Joy"
    },
    {
      url: "https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY4NDc3NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Wedding Romance"
    },
    {
      url: "https://images.unsplash.com/photo-1722952934708-749c22eb2e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2ODUwMTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Indian Wedding Couple"
    },
    {
      url: "https://images.unsplash.com/photo-1622580627463-b03d48e305d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MzkzOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Bride & Groom Portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1726751151542-1c578a3b68ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzY4NDY2OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Wedding Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1699726252091-8b1f0d621d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBob3RvfGVufDF8fHx8MTc2ODUwMTU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Romantic Photo"
    },
    {
      url: "https://images.unsplash.com/photo-1629751450989-c3aa81267f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY291cGxlfGVufDF8fHx8MTc2ODUwMTU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Engagement Couple"
    },
    {
      url: "https://images.unsplash.com/photo-1766104800192-eb530c2c9252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbG92ZSUyMG1vbWVudHN8ZW58MXx8fHwxNzY4NTAxNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Love Moments"
    }
  ],

  flowerBackground: "https://images.unsplash.com/photo-1748546639032-203c5bd8ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBmbG93ZXJzJTIwd2VkZGluZ3xlbnwxfHx8fDE3Njg0OTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
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