import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../randomSalons/generateRandomSalons";

export const karachiSalons = [
  {
    id: 0,
    name: "Tribes Men's and Spa Salon ",
    rating: "5.0",
    reviews: "228",
    city: "karachi",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair Salon",
    category: "hair-salon",
    gender: "Men only",
    salonSlug: "multan-1",
    services: {
      features: [
        {
          name: "Treat Me Better",
          duration: "120 min",
          price: "OMR 20",
          details: "3 services",
        },
        { name: "Moroccan Bath", duration: "60 min", price: "OMR 18" },
        { name: "Beard Trimming", duration: "30 min", price: "OMR 2" },
        { name: "Full Body Wax", duration: "90 min", price: "OMR 25" },
        {
          name: "Kevin Murphy Hair Treatments",
          duration: "60 min",
          price: "OMR 15",
        },
        { name: "Deep Tissue Massage", duration: "90 min", price: "OMR 30" },
        { name: "Thai Massage", duration: "60 min", price: "OMR 25" },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "30 min", price: "OMR 4" },
        { name: "Beard Trimming", duration: "30 min", price: "OMR 2" },
        {
          name: "Haircut & Beard Trimming",
          duration: "45 min",
          price: "OMR 6",
        },
        {
          name: "Kevin Murphy Hair Treatments",
          duration: "60 min",
          price: "OMR 15",
        },
      ],
      massage: [
        { name: "Full Body Massage", duration: "60 min", price: "OMR 20" },
        { name: "Deep Tissue Massage", duration: "90 min", price: "OMR 30" },
        { name: "Thai Massage", duration: "60 min", price: "OMR 25" },
      ],
      spa: [
        { name: "Moroccan Bath", duration: "60 min", price: "OMR 18" },
        { name: "Facial Treatment", duration: "45 min", price: "OMR 12" },
        { name: "Pedicure", duration: "30 min", price: "OMR 8" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "OMR 25" },
        { name: "Arm Wax", duration: "30 min", price: "OMR 8" },
        { name: "Back Wax", duration: "45 min", price: "OMR 12" },
      ],
      packages: [
        {
          name: "Treat Me Better",
          duration: "120 min",
          price: "OMR 20",
          details: "3 services",
        },
        { name: "Wedding Package", duration: "240 min", price: "OMR 50" },
      ],
    },
    teamMembers: [
      {
        memberName: "Saleem",
        memberRating: 4.9,
        memberSpeciality: "Hair & Beard Specialist",
        memberImg:
          "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "David",
        memberRating: 4.8,
        memberSpeciality: "Hair Stylist",
        memberImg:
          "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Rose",
        memberRating: 4.6,
        memberSpeciality: "Spa Therapist",
        memberImg:
          "../../../../public/images/salons/hairSalon/female-barber-img.webp",
      },
      {
        memberName: "Velleria",
        memberRating: 5.0,
        memberSpeciality: "Nail Specialist",
        memberImg:
          "../../../../public/images/salons/hairSalon/female-barber-img.webp",
      },
      {
        memberName: "Jhon",
        memberRating: 4.9,
        memberSpeciality: "Head Barber",
        memberImg:
          "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
    ],
    customerReviews: [
      {
        customerName: "Ali Khan",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Wed, 4 oct 2024 at 4:32pm",
        customerReviewStars: 5,
        customerReviewMessage:
          "Great service and friendly staff. Highly recommend!",
      },
      {
        customerName: "Sara Ahmed",
        reviewDateTime: "Fri, 31 oct 2024 at 6:16pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage:
          "Amazing Moroccan bath experience. Will visit again!",
      },
      {
        customerName: "John Doe",
        reviewDateTime: "Tue, 8 oct 2024 at 10:07pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage:
          "Best hair treatment in town, totally worth the price.",
      },
      {
        customerName: "Maria Gomez",
        reviewDateTime: "Sat, 12 oct 2024 at 3:45pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage:
          "Professional staff, loved the atmosphere. Definitely coming back!",
      },
      {
        customerName: "Michael Smith",
        reviewDateTime: "Mon, 14 oct 2024 at 9:20am",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 3,
        customerReviewMessage:
          "Good service, but a bit overpriced for the haircut.",
      },
      {
        customerName: "Fatima Noor",
        reviewDateTime: "Thu, 17 oct 2024 at 5:15pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage: "Exceptional service, the facial was fantastic!",
      },
      {
        customerName: "James Brown",
        reviewDateTime: "Sun, 20 oct 2024 at 11:30am",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage:
          "Great overall experience, would have preferred a shorter wait time.",
      },
      {
        customerName: "Nadia Hossain",
        reviewDateTime: "Wed, 23 oct 2024 at 1:50pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage:
          "The massage was absolutely amazing. 10/10 recommend.",
      },
      {
        customerName: "Omar Ali",
        reviewDateTime: "Fri, 25 oct 2024 at 7:40pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage:
          "Friendly staff, but the waiting area could be improved.",
      },
      {
        customerName: "Jessica Lee",
        reviewDateTime: "Mon, 28 oct 2024 at 12:00pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage:
          "Absolutely loved the haircut! Will be back for sure.",
      },
      {
        customerName: "David Johnson",
        reviewDateTime: "Wed, 30 oct 2024 at 4:45pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 3,
        customerReviewMessage:
          "The service was decent but could be more attentive.",
      },
      {
        customerName: "Emily Thompson",
        reviewDateTime: "Fri, 1 nov 2024 at 8:30am",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage:
          "The best salon experience I've ever had! Highly recommend.",
      },
    ],
    about:
      "Omans 1st Boho Inspired spa & salon. Located near Muscat Grand Mall,adjacent to Ramez Al Khuwair. We offer the best of hair salon services including haircuts, beard trimming and spa services such as manicure, pedicure, body massage, facial and skin treatments.",
    openingTimes: {
      Monday: [
        {
          opening: "10:00",
          closing: "24:00",
        },
      ],
      Tuesday: [
        {
          opening: "10:00",
          closing: "24:00",
        },
      ],
      Wednesday: [
        {
          opening: "10:00",
          closing: "24:00",
        },
      ],
      Thursday: [
        {
          opening: "10:00",
          closing: "24:00",
        },
      ],
      Friday: [
        {
          opening: "10:00",
          closing: "24:00",
        },
      ],
      Saturday: [
        {
          opening: "12:00",
          closing: "21:00",
        },
      ],
      Sunday: [
        {
          closed: "closed",
        },
      ],
    },
    additionalInformation: ["Instant Booking ", "Pay by app"],
  },

  {
    id: 1,
    name: "Royal Spa and Salon",
    rating: "4.8",
    reviews: "320",
    city: "karachi",
    address: "Street 22, Qurum Heights, Muscat, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxury Spa",
    category: "luxury-spa",
    gender: "Unisex",
    salonSlug: "muscat-royal-1",
    services: {
      features: [
        {
          name: "Royal Bath",
          duration: "150 min",
          price: "OMR 35",
          details: "4 services",
        },
        { name: "Aromatherapy Massage", duration: "90 min", price: "OMR 40" },
        { name: "Beard Shaping", duration: "30 min", price: "OMR 3" },
        { name: "Full Body Wax", duration: "120 min", price: "OMR 30" },
        {
          name: "Hydrating Facial",
          duration: "60 min",
          price: "OMR 25",
        },
        { name: "Deep Tissue Massage", duration: "90 min", price: "OMR 35" },
        { name: "Swedish Massage", duration: "60 min", price: "OMR 28" },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "45 min", price: "OMR 5" },
        { name: "Beard Shaping", duration: "30 min", price: "OMR 3" },
        {
          name: "Haircut & Beard Shaping",
          duration: "60 min",
          price: "OMR 7",
        },
        {
          name: "Hydrating Hair Treatment",
          duration: "90 min",
          price: "OMR 20",
        },
      ],
      massage: [
        { name: "Full Body Massage", duration: "90 min", price: "OMR 35" },
        { name: "Swedish Massage", duration: "60 min", price: "OMR 28" },
        { name: "Aromatherapy Massage", duration: "90 min", price: "OMR 40" },
      ],
      spa: [
        { name: "Royal Bath", duration: "150 min", price: "OMR 35" },
        { name: "Facial Treatment", duration: "60 min", price: "OMR 18" },
        { name: "Pedicure", duration: "40 min", price: "OMR 10" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "120 min", price: "OMR 30" },
        { name: "Leg Wax", duration: "45 min", price: "OMR 15" },
        { name: "Arm Wax", duration: "30 min", price: "OMR 10" },
      ],
      packages: [
        {
          name: "Royal Indulgence",
          duration: "180 min",
          price: "OMR 50",
          details: "5 services",
        },
        { name: "Bridal Package", duration: "360 min", price: "OMR 100" },
      ],
    },
    teamMembers: [
      {
        memberName: "Hassan",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg:
        "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Aisha",
        memberRating: 4.9,
        memberSpeciality: "Spa Specialist",
        memberImg:
        "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Kevin",
        memberRating: 4.5,
        memberSpeciality: "Massage Therapist",
        memberImg:
        "../../../../public/images/salons/hairSalon/female-barber-img.webp",
      },
    ],
    customerReviews: [
      {
        customerName: "Salim Al-Busaidi",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Mon, 2 oct 2024 at 2:15pm",
        customerReviewStars: 5,
        customerReviewMessage: "Amazing service! The best spa experience.",
      },
      {
        customerName: "Lina Farooq",
        reviewDateTime: "Thu, 5 oct 2024 at 6:50pm",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage: "The massage was excellent, will come again!",
      },
    ],
    about:
      "A luxury spa and salon in Muscat offering high-end spa treatments and hair services. Located at Qurum Heights with a beautiful ambiance and professional staff.",
    openingTimes: {
      Monday: [
        {
          opening: "09:00",
          closing: "22:00",
        },
      ],
      Tuesday: [
        {
          opening: "09:00",
          closing: "22:00",
        },
      ],
      Wednesday: [
        {
          opening: "09:00",
          closing: "22:00",
        },
      ],
      Thursday: [
        {
          opening: "09:00",
          closing: "22:00",
        },
      ],
      Friday: [
        {
          opening: "09:00",
          closing: "22:00",
        },
      ],
      Saturday: [
        {
          opening: "12:00",
          closing: "20:00",
        },
      ],
      Sunday: [
        {
          closed: "closed",
        },
      ],
    },
    additionalInformation: ["Pre-booking required", "Parking Available"],
  },

  {
    id: 2,
    name: "Bella Beauty Lounge",
    rating: "4.7",
    reviews: "210",
    city: "karachi",
    address: "12th Avenue, Beach Road, Salalah, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/bellaLounge/bella-inner-1.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-2.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-3.jpg",
    ],
    speciality: "Beauty & Wellness",
    category: "beauty-lounge",
    gender: "Women only",
    salonSlug: "salalah-bella-1",
    services: {
      features: [
        {
          name: "Scrub Facial",
          duration: "180 min",
          price: "OMR 40",
          details: "4 services",
        },
        { name: "Moroccan Bath", duration: "90 min", price: "OMR 25" },
        { name: "Manicure", duration: "60 min", price: "OMR 10" },
        { name: "Body Scrub", duration: "60 min", price: "OMR 20" },
        {
          name: "Hydration Facial",
          duration: "60 min",
          price: "OMR 18",
        },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "45 min", price: "OMR 7" },
        { name: "Hair Treatment", duration: "90 min", price: "OMR 15" },
      ],
      massage: [
        { name: "Relaxing Massage", duration: "60 min", price: "OMR 30" },
        { name: "Deep Tissue Massage", duration: "90 min", price: "OMR 40" },
      ],
      spa: [
        { name: "Moroccan Bath", duration: "90 min", price: "OMR 25" },
        { name: "Facial Treatment", duration: "60 min", price: "OMR 15" },
        { name: "Pedicure", duration: "45 min", price: "OMR 8" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "OMR 22" },
        { name: "Arm Wax", duration: "30 min", price: "OMR 10" },
        { name: "Leg Wax", duration: "45 min", price: "OMR 12" },
      ],
      packages: [
        {
          name: "Bridal Package",
          duration: "300 min",
          price: "OMR 80",
          details: "5 services",
        },
        { name: "Relax & Refresh Package", duration: "240 min", price: "OMR 50" },
      ],
    },
    teamMembers: [
      {
        memberName: "Lina",
        memberRating: 4.9,
        memberSpeciality: "Spa Specialist",
        memberImg:
        "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Sarah",
        memberRating: 4.7,
        memberSpeciality: "Beauty Therapist",
        memberImg:
        "../../../../public/images/salons/hairSalon/female-barber-img.webp",
      },
    ],
    customerReviews: [
      {
        customerName: "Fatima Al-Lawati",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Thu, 7 oct 2024 at 3:30pm",
        customerReviewStars: 5,
        customerReviewMessage: "A perfect pampering experience, loved it!",
      },
      {
        customerName: "Zara Ibrahim",
        reviewDateTime: "Mon, 10 oct 2024 at 5:45pm",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage: "Great facial treatment, very refreshing.",
      },
    ],
    about:
      "Bella Beauty Lounge is a women-only beauty and wellness lounge located in Salalah, Oman, offering a range of luxurious beauty treatments and spa services.",
    openingTimes: {
      Monday: [
        {
          opening: "09:00",
          closing: "21:00",
        },
      ],
      Tuesday: [
        {
          opening: "09:00",
          closing: "21:00",
        },
      ],
      Wednesday: [
        {
          opening: "09:00",
          closing: "21:00",
        },
      ],
      Thursday: [
        {
          opening: "09:00",
          closing: "21:00",
        },
      ],
      Friday: [
        {
          opening: "12:00",
          closing: "20:00",
        },
      ],
      Saturday: [
        {
          opening: "12:00",
          closing: "20:00",
        },
      ],
      Sunday: [
        {
          closed: "closed",
        },
      ],
    },
    additionalInformation: ["Ladies Only", "Free Wi-Fi"],
  },

  {
    id: 3,
    name: "Gentlemen's Corner Salon",
    rating: "4.9",
    reviews: "185",
    city: "karachi",
    address: "Suite 32, Al Majaz Tower, Sohar, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/gentlemenCorner/gentlemen-inner-1.jpg",
      "../../../../public/images/salons/gentlemenCorner/gentlemen-inner-2.jpg",
      "../../../../public/images/salons/gentlemenCorner/gentlemen-inner-3.jpg",
    ],
    speciality: "Barber Shop",
    category: "barber-shop",
    gender: "Men only",
    salonSlug: "sohar-gentlemen-1",
    services: {
      features: [
        {
          name: "Premium Beard Grooming",
          duration: "60 min",
          price: "OMR 10",
          details: "Includes hot towel shave",
        },
        { name: "Classic Haircut", duration: "45 min", price: "OMR 6" },
        { name: "Hair Coloring", duration: "60 min", price: "OMR 12" },
        { name: "Head Massage", duration: "30 min", price: "OMR 5" },
        {
          name: "Full Body Massage",
          duration: "90 min",
          price: "OMR 25",
        },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "45 min", price: "OMR 6" },
        { name: "Beard Grooming", duration: "60 min", price: "OMR 10" },
        {
          name: "Haircut & Beard Grooming",
          duration: "75 min",
          price: "OMR 14",
        },
        {
          name: "Hair Coloring",
          duration: "60 min",
          price: "OMR 12",
        },
      ],
      massage: [
        { name: "Full Body Massage", duration: "90 min", price: "OMR 25" },
        { name: "Head Massage", duration: "30 min", price: "OMR 5" },
      ],
      spa: [
        { name: "Facial Treatment", duration: "45 min", price: "OMR 15" },
        { name: "Foot Reflexology", duration: "30 min", price: "OMR 10" },
      ],
      waxing: [
        { name: "Back Wax", duration: "60 min", price: "OMR 15" },
        { name: "Chest Wax", duration: "45 min", price: "OMR 12" },
      ],
      packages: [
        {
          name: "Gentleman's Deluxe Package",
          duration: "150 min",
          price: "OMR 40",
          details: "Haircut, beard grooming, and facial treatment",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Fahad",
        memberRating: 4.9,
        memberSpeciality: "Beard Specialist",
        memberImg:
        "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Ali",
        memberRating: 4.8,
        memberSpeciality: "Hair Stylist",
        memberImg:
        "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
    ],
    customerReviews: [
      {
        customerName: "Omar Al-Harthi",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Wed, 1 oct 2024 at 4:00pm",
        customerReviewStars: 5,
        customerReviewMessage:
          "Best beard grooming experience, highly professional.",
      },
      {
        customerName: "Hassan Ali",
        reviewDateTime: "Fri, 10 oct 2024 at 5:30pm",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage:
          "Great service, but the prices are slightly high for a haircut.",
      },
    ],
    about:
      "Gentlemen's Corner offers a unique barbershop experience in Sohar. Specializing in premium grooming services including beard grooming, haircuts, and massages.",
    openingTimes: {
      Monday: [
        {
          opening: "10:00",
          closing: "22:00",
        },
      ],
      Tuesday: [
        {
          opening: "10:00",
          closing: "22:00",
        },
      ],
      Wednesday: [
        {
          opening: "10:00",
          closing: "22:00",
        },
      ],
      Thursday: [
        {
          opening: "10:00",
          closing: "22:00",
        },
      ],
      Friday: [
        {
          opening: "10:00",
          closing: "22:00",
        },
      ],
      Saturday: [
        {
          opening: "12:00",
          closing: "20:00",
        },
      ],
      Sunday: [
        {
          closed: "closed",
        },
      ],
    },
    additionalInformation: ["Walk-ins Welcome", "Online Booking Available"],
  }
];

export const lahoreSalons = [
  {
    id: 0,
    name: "lahore 1",
    rating: "4.9",
    reviews: "193",
    city: "lahore",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    category: "barber-shop",
    gender: "Unisex",
    salonSlug: "multan-1",
  },
  {
    id: 1,
    name: "lahore 2",
    rating: "4.8",
    reviews: "257",
    city: "lahore",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair Salon",
    category: "hair-salon",
    gender: "Women only",
    salonSlug: "multan-1",
  },
];

export const islamabadSalons = [
  {
    id: 0,
    name: "islamabad 1",
    rating: "4.8",
    reviews: "553",
    city: "islamabad",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Nail & Eyebrows",
    category: "nail-salon",
    gender: "Men only",
    salonSlug: "multan-1",
  },
  {
    id: 1,
    name: "islamabad 2",
    rating: "5.0",
    reviews: "637",
    city: "islamabad",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    category: "barber-shop",
    gender: "Women only",
    salonSlug: "multan-1",
  },
];

export const multanSalons = [
  {
    id: 0,
    name: "multan 1",
    rating: "5.0",
    reviews: "551",
    city: "multan",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair Salon",
    category: "hair-salon",
    gender: "Men only",
    salonSlug: "multan-1",
  },
  {
    id: 1,
    name: "multan 2",
    rating: "4.9",
    reviews: "378",
    city: "multan",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    category: "barber-shop",
    gender: "Women only",
    salonSlug: "multan-1",
  },
];

const pakistanSalonsMerged = karachiSalons.concat(
  multanSalons,
  lahoreSalons,
  islamabadSalons
);

let allPakistanSalons = generateRandomSalons(pakistanSalonsMerged);

// console.log(allPakistanSalons, "all dubai salons");

export default allPakistanSalons;
