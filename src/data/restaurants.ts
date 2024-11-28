import { Restaurant } from '../types/restaurant';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The French',
    cuisine: 'French',
    priceRange: '££££',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
    description: 'Elegant French dining in the historic Midland Hotel.',
    address: 'The Midland Hotel, Peter Street, Manchester',
    coordinates: {
      lat: 53.4774,
      lng: -2.2445
    },
    phone: '+44 161 236 3333',
    openingHours: {
      Monday: '17:00-22:30',
      Tuesday: '17:00-22:30',
      Wednesday: '17:00-22:30',
      Thursday: '17:00-22:30',
      Friday: '12:00-14:30, 17:00-22:30',
      Saturday: '12:00-14:30, 17:00-22:30',
      Sunday: '12:00-21:00'
    },
    popularDishes: [
      {
        name: 'Beef Wellington',
        price: 45,
        description: 'Classic beef wellington with wild mushroom duxelles'
      },
      {
        name: 'Lobster Thermidor',
        price: 52,
        description: 'Whole lobster with rich thermidor sauce'
      },
      {
        name: 'Soufflé au Fromage',
        price: 18,
        description: 'Twice-baked cheese soufflé'
      }
    ],
    bookingUrl: 'https://bookings.thefrench.co.uk',
    specialOffers: [
      {
        title: 'Tasting Menu Experience',
        description: '7-course tasting menu with wine pairing',
        type: 'special-menu'
      },
      {
        title: 'Early Dinner Special',
        description: '3 courses for £35 before 6:30 PM',
        type: 'early-bird'
      }
    ],
    reviews: [
      {
        author: 'James M.',
        rating: 5,
        comment: 'Exceptional dining experience. The tasting menu was outstanding.',
        date: '2024-02-15'
      },
      {
        author: 'Sarah P.',
        rating: 4.5,
        comment: 'Beautiful atmosphere and impeccable service.',
        date: '2024-02-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Hawksmoor',
    cuisine: 'Steakhouse',
    priceRange: '£££',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    description: 'Premium steakhouse known for its exceptional cuts.',
    address: '184-186 Deansgate, Manchester',
    coordinates: {
      lat: 53.4797,
      lng: -2.2498
    },
    phone: '+44 161 836 6980',
    openingHours: {
      Monday: '12:00-22:30',
      Tuesday: '12:00-22:30',
      Wednesday: '12:00-22:30',
      Thursday: '12:00-22:30',
      Friday: '12:00-23:00',
      Saturday: '12:00-23:00',
      Sunday: '12:00-22:00'
    },
    popularDishes: [
      {
        name: 'Porterhouse Steak',
        price: 95,
        description: '1kg cut perfect for sharing'
      },
      {
        name: 'Bone-in Prime Rib',
        price: 65,
        description: '35-day aged beef'
      },
      {
        name: 'Sticky Toffee Pudding',
        price: 12,
        description: 'With clotted cream'
      }
    ],
    bookingUrl: 'https://bookings.hawksmoor.com',
    specialOffers: [
      {
        title: 'Express Menu',
        description: '2 courses for £25 available Mon-Fri until 6:30pm',
        type: 'early-bird'
      }
    ],
    reviews: [
      {
        author: 'Michael R.',
        rating: 5,
        comment: 'Best steak in Manchester, hands down.',
        date: '2024-02-18'
      },
      {
        author: 'Emma L.',
        rating: 4.5,
        comment: 'Amazing food and cocktails. A must-visit.',
        date: '2024-02-12'
      }
    ]
  },


  {
    id: '3',
    name: 'Mana',
    cuisine: 'Modern British',
    priceRange: '££££',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    description: 'Michelin-starred restaurant offering innovative British cuisine.',
    address: '42 Blossom Street, Ancoats, Manchester',
    coordinates: {
      lat: 53.4848,
      lng: -2.2291
    },
    phone: '+44 161 392 7294',
    openingHours: {
      Monday: 'Closed',
      Tuesday: '18:00-22:00',
      Wednesday: '18:00-22:00',
      Thursday: '18:00-22:00',
      Friday: '18:00-22:00',
      Saturday: '18:00-22:00',
      Sunday: 'Closed'
    },
    popularDishes: [
      {
        name: 'Seasonal Tasting Menu',
        price: 195,
        description: 'Multi-course experience showcasing local ingredients'
      },
      {
        name: 'Barbecued Duck',
        price: 45,
        description: 'With fermented honey and lavender'
      }
    ],
    bookingUrl: 'https://bookings.manarestaurant.co.uk',
    specialOffers: [
      {
        title: 'Chef\'s Table Experience',
        description: 'Exclusive dining at the kitchen counter',
        type: 'special-menu'
      }
    ],
    reviews: [
      {
        author: 'Sophie T.',
        rating: 5,
        comment: 'An extraordinary culinary journey. Worth every penny.',
        date: '2024-02-20'
      },
      {
        author: 'David W.',
        rating: 4.8,
        comment: 'Innovative dishes that push the boundaries of flavor.',
        date: '2024-02-14'
      }
    ]
  },
  {
    id: '4',
    name: 'Bundobust',
    cuisine: 'Indian Street Food',
    priceRange: '££',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
    description: 'Innovative Indian street food and craft beer.',
    address: '61 Piccadilly, Manchester',
    coordinates: {
      lat: 53.4808,
      lng: -2.2368
    },
    phone: '+44 161 359 6757',
    openingHours: {
      Monday: '12:00-22:00',
      Tuesday: '12:00-22:00',
      Wednesday: '12:00-22:00',
      Thursday: '12:00-22:00',
      Friday: '12:00-23:00',
      Saturday: '12:00-23:00',
      Sunday: '12:00-21:00'
    },
    popularDishes: [
      {
        name: 'Vada Pav',
        price: 6.50,
        description: 'Spicy potato ball in a bun with chutneys'
      },
      {
        name: 'Okra Fries',
        price: 5.50,
        description: 'Crispy fried okra dusted with black salt and mango powder'
      }
    ],
    bookingUrl: 'https://bookings.bundobust.com',
    specialOffers: [
      {
        title: 'Lunch Deal',
        description: 'Two dishes and a drink for £12',
        type: 'lunch-special'
      }
    ],
    reviews: [
      {
        author: 'Priya K.',
        rating: 4.5,
        comment: 'Delicious vegetarian food and great craft beer selection.',
        date: '2024-02-22'
      },
      {
        author: 'Tom H.',
        rating: 4.8,
        comment: 'The okra fries are addictive! Love the casual atmosphere.',
        date: '2024-02-17'
      }
    ]
  },
  {
    id: '5',
    name: 'Erst',
    cuisine: 'Modern European',
    priceRange: '££',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
    description: 'Minimalist restaurant with a focus on natural wine and small plates.',
    address: '9 Murray Street, Ancoats, Manchester',
    coordinates: {
      lat: 53.4847,
      lng: -2.2276
    },
    phone: '+44 161 826 3008',
    openingHours: {
      Monday: 'Closed',
      Tuesday: '17:00-22:00',
      Wednesday: '17:00-22:00',
      Thursday: '17:00-22:00',
      Friday: '12:00-15:00, 17:00-22:30',
      Saturday: '12:00-15:00, 17:00-22:30',
      Sunday: '12:00-16:00'
    },
    popularDishes: [
      {
        name: 'Flatbread with Cultured Cream',
        price: 7,
        description: 'House-made flatbread with whipped cultured cream'
      },
      {
        name: 'Beef Tartare',
        price: 14,
        description: 'Hand-cut beef with pickled mushrooms and egg yolk'
      }
    ],
    bookingUrl: 'https://bookings.erst-mcr.co.uk',
    specialOffers: [
      {
        title: 'Wine Tasting Evenings',
        description: 'Monthly natural wine tasting events',
        type: 'special-event'
      }
    ],
    reviews: [
      {
        author: 'Alice R.',
        rating: 5,
        comment: 'Exceptional food and wine. The flatbread is a must-try!',
        date: '2024-02-19'
      },
      {
        author: 'Mark S.',
        rating: 4.7,
        comment: 'Innovative dishes and great selection of natural wines.',
        date: '2024-02-13'
      }
    ]
  }
];
