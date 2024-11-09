import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../../ownModules/randomSalons/generateRandomSalons";

export const muscatSalons = [
  {
    id: 0,
    name: "Royal Spa and Salon",
    rating: "4.8",
    reviews: "320",
    city: "muscat",
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
    id: 1,
    name: "Essence Spa",
    rating: "4.9",
    reviews: "88",
    city: "muscat",
    address: "Madinat Al Ilam, Muscat, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Boutique Spa",
    category: "luxury-spa",
    gender: "Female Only",
    salonSlug: "muscat-essence-1",
    services: {
      features: [
        {
          name: "Moroccan Bath + Pedicure",
          duration: "105 min",
          price: "OMR 16",
          details: "2 services",
        },
        { name: "Relaxation Massage", duration: "60 min", price: "OMR 30" },
        { name: "Facial Treatment", duration: "45 min", price: "OMR 25" },
        { name: "Turkish Bath", duration: "90 min", price: "OMR 35" },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "45 min", price: "OMR 5" },
        { name: "Wash & Conditioning", duration: "20 min", price: "OMR 3" },
        { name: "Blow Dry", duration: "45 min", price: "OMR 6" },
      ],
      massage: [
        { name: "Full Body Massage", duration: "90 min", price: "OMR 35" },
        { name: "Foot Massage", duration: "45 min", price: "OMR 20" },
        { name: "Back Massage", duration: "30 min", price: "OMR 15" },
      ],
      spa: [
        { name: "Moroccan Bath", duration: "90 min", price: "OMR 28" },
        { name: "Hydrating Facial", duration: "60 min", price: "OMR 25" },
        { name: "Manicure", duration: "30 min", price: "OMR 8" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "120 min", price: "OMR 30" },
        { name: "Leg Wax", duration: "45 min", price: "OMR 15" },
        { name: "Arm Wax", duration: "30 min", price: "OMR 10" },
      ],
      packages: [
        {
          name: "Summer Pamper Package",
          duration: "180 min",
          price: "OMR 40",
          details: "3 services",
        },
        { name: "Bridal Package", duration: "360 min", price: "OMR 100" },
      ],
    },
    teamMembers: [
      {
        memberName: "Sameera",
        memberRating: 5.0,
        memberSpeciality: "Makeup Artist",
        memberImg:
          "../../../../public/images/salons/essenceSpa/makeup-artist-img.avif",
      },
      {
        memberName: "Danny",
        memberRating: 5.0,
        memberSpeciality: "Spa Therapist",
        memberImg:
          "../../../../public/images/salons/essenceSpa/spa-therapist-img.webp",
      },
      {
        memberName: "Teresa",
        memberRating: 5.0,
        memberSpeciality: "Nail Technician",
        memberImg:
          "../../../../public/images/salons/essenceSpa/nail-technician-img.png",
      },
    ],
    customerReviews: [
      {
        customerName: "Ouma S.",
        customerImg:
          "../../../../public/images/salons/essenceSpa/customer-dummy-img2.png",
        reviewDateTime: "Sun, 15 Sep 2024 at 4:47 PM",
        customerReviewStars: 5,
        customerReviewMessage: "Wonderful experience and warm hospitality!",
      },
      {
        customerName: "Toni M.",
        reviewDateTime: "Wed, 28 Aug 2024 at 5:19 PM",
        customerImg:
          "../../../../public/images/salons/essenceSpa/customer-dummy-img2.png",
        customerReviewStars: 5,
        customerReviewMessage: "Teresa's mani-pedi was fantastic!",
      },
    ],
    about:
      "Essence Spa offers a range of luxury services in a tranquil environment. Known for signature treatments and quality, this boutique spa has been a popular choice since 2006.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "21:00" }],
      Tuesday: [{ opening: "09:00", closing: "21:00" }],
      Wednesday: [{ opening: "09:00", closing: "21:00" }],
      Thursday: [{ opening: "09:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "21:00" }],
      Saturday: [{ opening: "09:00", closing: "21:00" }],
      Sunday: [{ opening: "09:00", closing: "21:00" }],
    },
    additionalInformation: ["Pre-booking recommended", "Instant Confirmation"],
  },
  {
    id: 2,
    name: "Gloss Nail Studio",
    rating: "4.7",
    reviews: "95",
    city: "muscat",
    address: "Qurum, Muscat, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Nail Art & Manicure",
    category: "nail-salon",
    gender: "Female Only",
    salonSlug: "muscat-gloss-nail-studio",
    services: {
      nails: [
        { name: "Classic Manicure", duration: "30 min", price: "OMR 10" },
        { name: "Gel Manicure", duration: "45 min", price: "OMR 15" },
        { name: "Acrylic Full Set", duration: "90 min", price: "OMR 30" },
      ],
      nail_art: [
        { name: "French Tips", duration: "30 min", price: "OMR 8" },
        { name: "Custom Nail Art", duration: "60 min", price: "OMR 18" },
      ],
      packages: [
        {
          name: "Nail Spa Package",
          duration: "120 min",
          price: "OMR 40",
          details: "Manicure, pedicure, and nail art",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha",
        memberRating: 4.8,
        memberSpeciality: "Nail Artist",
        memberImg:
          "../../../../public/images/salons/glossNail/aisha-nail-artist.webp",
      },
      {
        memberName: "Samira",
        memberRating: 4.7,
        memberSpeciality: "Nail Technician",
        memberImg:
          "../../../../public/images/salons/glossNail/samira-nail-tech.avif",
      },
    ],
    customerReviews: [
      {
        customerName: "Hana Al Rashdi",
        customerImg:
          "../../../../public/images/salons/glossNail/customer-dummy-img5.png",
        reviewDateTime: "Sat, 14 Oct 2024 at 11:30 AM",
        customerReviewStars: 5,
        customerReviewMessage: "Beautiful nail art and great service!",
      },
      {
        customerName: "Laila Y.",
        reviewDateTime: "Wed, 16 Oct 2024 at 3:00 PM",
        customerImg:
          "../../../../public/images/salons/glossNail/customer-dummy-img6.png",
        customerReviewStars: 4,
        customerReviewMessage: "Loved my gel manicure!",
      },
    ],
    about:
      "Gloss Nail Studio specializes in luxurious nail services and detailed nail art, ideal for special occasions or everyday beauty.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "21:00" }],
      Tuesday: [{ opening: "09:00", closing: "21:00" }],
      Wednesday: [{ opening: "09:00", closing: "21:00" }],
      Thursday: [{ opening: "09:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "21:00" }],
      Saturday: [{ opening: "09:00", closing: "21:00" }],
      Sunday: [{ opening: "Closed" }],
    },
    additionalInformation: ["Long-lasting products", "Walk-ins welcome"],
  },
  {
    id: 3,
    name: "Elite Hair Studio",
    rating: "4.5",
    reviews: "80",
    city: "muscat",
    address: "Al Athaiba, Muscat, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hairstyling & Color",
    category: "hair-salon",
    gender: "Unisex",
    salonSlug: "muscat-elite-hair-studio",
    services: {
      hair_styling: [
        { name: "Basic Haircut", duration: "30 min", price: "OMR 8" },
        { name: "Blow Dry", duration: "45 min", price: "OMR 12" },
        { name: "Hair Wash and Style", duration: "30 min", price: "OMR 10" },
      ],
      hair_coloring: [
        { name: "Full Color", duration: "90 min", price: "OMR 35" },
        { name: "Highlights", duration: "120 min", price: "OMR 50" },
      ],
      packages: [
        {
          name: "Styling Package",
          duration: "180 min",
          price: "OMR 60",
          details: "Wash, cut, color, and blow-dry",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Rashid",
        memberRating: 4.6,
        memberSpeciality: "Stylist",
        memberImg:
          "../../../../public/images/salons/eliteHair/rashid-stylist.avif",
      },
      {
        memberName: "Sara",
        memberRating: 4.7,
        memberSpeciality: "Colorist",
        memberImg:
          "../../../../public/images/salons/eliteHair/sara-colorist.webp",
      },
    ],
    customerReviews: [
      {
        customerName: "Khalid A.",
        customerImg:
          "../../../../public/images/salons/eliteHair/customer-dummy-img7.png",
        reviewDateTime: "Sun, 20 Oct 2024 at 4:00 PM",
        customerReviewStars: 5,
        customerReviewMessage: "Best haircut I’ve had in a while!",
      },
      {
        customerName: "Nadia Al Balushi",
        reviewDateTime: "Tue, 22 Oct 2024 at 6:30 PM",
        customerImg:
          "../../../../public/images/salons/eliteHair/customer-dummy-img8.png",
        customerReviewStars: 4,
        customerReviewMessage: "Excellent color work!",
      },
    ],
    about:
      "Elite Hair Studio provides a complete range of hair services, from cuts to color, with skilled stylists in a modern environment.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "12:00", closing: "20:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ opening: "Closed" }],
    },
    additionalInformation: [
      "Gender-inclusive services",
      "Advanced booking recommended",
    ],
  },
];

export const salalahSalons = [
  {
    id: 0,
    name: "Bella Beauty Lounge",
    rating: "4.7",
    reviews: "210",
    city: "salalah",
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
        {
          name: "Relax & Refresh Package",
          duration: "240 min",
          price: "OMR 50",
        },
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
    id: 1,
    name: "Oasis Spa and Wellness",
    rating: "4.6",
    reviews: "98",
    city: "salalah",
    address: "Al Wadi St, Oasis Mall, Salalah, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Spa and Wellness",
    category: "spa",
    gender: "Mixed",
    salonSlug: "salalah-oasis-3",
    services: {
      features: [
        { name: "Aromatherapy Massage", duration: "90 min", price: "OMR 30" },
        { name: "Hot Stone Massage", duration: "75 min", price: "OMR 35" },
        { name: "Detox Facial", duration: "60 min", price: "OMR 20" },
        { name: "Manicure & Pedicure", duration: "90 min", price: "OMR 15" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "OMR 28" },
        { name: "Reflexology", duration: "45 min", price: "OMR 22" },
      ],
      skincare: [
        { name: "Rejuvenating Facial", duration: "60 min", price: "OMR 18" },
        { name: "Anti-Aging Facial", duration: "60 min", price: "OMR 25" },
      ],
      waxing: [
        { name: "Underarm Wax", duration: "15 min", price: "OMR 5" },
        { name: "Leg Wax", duration: "45 min", price: "OMR 12" },
      ],
    },
    teamMembers: [
      {
        memberName: "Layla",
        memberRating: 4.8,
        memberSpeciality: "Massage Therapist",
        memberImg: "../../../../public/images/salons/oasisSpa/member-layla.jpg",
      },
      {
        memberName: "Samira",
        memberRating: 4.7,
        memberSpeciality: "Facialist",
        memberImg:
          "../../../../public/images/salons/oasisSpa/member-samira.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Amina Khalid",
        reviewDateTime: "Tue, 15 Sep 2024 at 2:00pm",
        customerReviewStars: 5,
        customerReviewMessage:
          "Very relaxing experience with top-notch service.",
      },
      {
        customerName: "Noor Al-Shamsi",
        reviewDateTime: "Wed, 20 Sep 2024 at 3:30pm",
        customerReviewStars: 4,
        customerReviewMessage: "Good services but a bit crowded at times.",
      },
    ],
    about:
      "Oasis Spa and Wellness offers a blend of luxurious spa services with modern wellness treatments for a refreshing experience in Salalah.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "12:00", closing: "22:00" }],
      Saturday: [{ opening: "12:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Mixed Facilities", "Reservation Required"],
  },
  {
    id: 2,
    name: "Harmony Wellness Center",
    rating: "4.8",
    reviews: "150",
    city: "salalah",
    address: "Central Avenue, Dhofar Plaza, Salalah, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/bellaLounge/bella-inner-1.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-2.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-3.jpg",
    ],
    speciality: "Holistic Health & Spa",
    category: "wellness-center",
    gender: "Mixed",
    salonSlug: "salalah-harmony-2",
    services: {
      features: [
        { name: "Therapeutic Massage", duration: "90 min", price: "OMR 35" },
        { name: "Organic Facial", duration: "60 min", price: "OMR 25" },
        {
          name: "Deluxe Manicure & Pedicure",
          duration: "90 min",
          price: "OMR 20",
        },
        { name: "Body Wrap Treatment", duration: "75 min", price: "OMR 30" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "OMR 28" },
        { name: "Aromatherapy Massage", duration: "90 min", price: "OMR 40" },
      ],
      skincare: [
        { name: "Deep Cleansing Facial", duration: "60 min", price: "OMR 22" },
        { name: "Vitamin C Facial", duration: "60 min", price: "OMR 25" },
      ],
      spa: [
        {
          name: "Hydrotherapy Pool Session",
          duration: "45 min",
          price: "OMR 15",
        },
        { name: "Foot Detox Treatment", duration: "30 min", price: "OMR 12" },
      ],
    },
    teamMembers: [
      {
        memberName: "Nadia",
        memberRating: 4.9,
        memberSpeciality: "Massage Therapist",
        memberImg:
          "../../../../public/images/salons/harmonyWellness/member-nadia.jpg",
      },
      {
        memberName: "Yasmine",
        memberRating: 4.7,
        memberSpeciality: "Skincare Specialist",
        memberImg:
          "../../../../public/images/salons/harmonyWellness/member-yasmine.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Reem Al-Harithi",
        reviewDateTime: "Fri, 25 Sep 2024 at 4:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "The body wrap was amazing, truly relaxing.",
      },
      {
        customerName: "Farah Mahmood",
        reviewDateTime: "Sun, 12 Sep 2024 at 3:00pm",
        customerReviewStars: 4,
        customerReviewMessage: "Professional staff and peaceful ambiance.",
      },
    ],
    about:
      "Harmony Wellness Center is a sanctuary for relaxation in Salalah, blending holistic wellness with spa luxury.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "20:00" }],
      Tuesday: [{ opening: "09:00", closing: "20:00" }],
      Wednesday: [{ opening: "09:00", closing: "20:00" }],
      Thursday: [{ opening: "09:00", closing: "22:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "18:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Organic Products", "Reservations Recommended"],
  },
  {
    id: 3,
    name: "Radiance Beauty Hub",
    rating: "4.5",
    reviews: "120",
    city: "salalah",
    address: "Al Muntazah St, Near Salalah Mall, Salalah, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/bellaLounge/bella-inner-1.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-2.jpg",
      "../../../../public/images/salons/bellaLounge/bella-inner-3.jpg",
    ],
    speciality: "Beauty & Aesthetics",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "salalah-radiance-3",
    services: {
      features: [
        { name: "Hydrating Facial", duration: "45 min", price: "OMR 18" },
        { name: "Hair Rebonding", duration: "120 min", price: "OMR 35" },
        { name: "Makeup Services", duration: "60 min", price: "OMR 20" },
        { name: "Pedicure & Manicure", duration: "90 min", price: "OMR 12" },
      ],
      hair: [
        { name: "Hair Color", duration: "90 min", price: "OMR 20" },
        { name: "Haircut & Styling", duration: "60 min", price: "OMR 12" },
      ],
      skincare: [
        { name: "Anti-Aging Facial", duration: "60 min", price: "OMR 20" },
        { name: "Acne Treatment", duration: "60 min", price: "OMR 22" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "OMR 20" },
        { name: "Facial Wax", duration: "30 min", price: "OMR 8" },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha",
        memberRating: 4.6,
        memberSpeciality: "Makeup Artist",
        memberImg:
          "../../../../public/images/salons/radianceBeauty/member-aisha.jpg",
      },
      {
        memberName: "Mariam",
        memberRating: 4.5,
        memberSpeciality: "Hair Stylist",
        memberImg:
          "../../../../public/images/salons/radianceBeauty/member-mariam.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Khadija Al-Muqbali",
        reviewDateTime: "Sat, 19 Oct 2024 at 2:15pm",
        customerReviewStars: 5,
        customerReviewMessage: "Wonderful facial, my skin feels so fresh!",
      },
      {
        customerName: "Layla Al-Sharqi",
        reviewDateTime: "Tue, 14 Oct 2024 at 10:30am",
        customerReviewStars: 4,
        customerReviewMessage: "Good value for hair treatments.",
      },
    ],
    about:
      "Radiance Beauty Hub in Salalah provides specialized beauty treatments and aesthetic services, with a focus on quality and customer care.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "12:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Ladies Only", "Gift Vouchers Available"],
  },
];

export const soharSalons = [
  {
    id: 0,
    name: "Gentlemen's Corner Salon",
    rating: "4.9",
    reviews: "185",
    city: "sohar",
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
  },
  {
    id: 1,
    name: "Elite Grooming Lounge",
    rating: "4.8",
    reviews: "145",
    city: "sohar",
    address: "City Center, Sohar, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Men's Grooming and Barber",
    category: "barber-shop",
    gender: "Men only",
    salonSlug: "sohar-elite-4",
    services: {
      features: [
        { name: "Executive Haircut", duration: "45 min", price: "OMR 8" },
        { name: "Beard Trim & Shape", duration: "30 min", price: "OMR 5" },
        {
          name: "Luxury Shave",
          duration: "60 min",
          price: "OMR 10",
          details: "Includes hot towel and oil treatment",
        },
        { name: "Scalp Treatment", duration: "60 min", price: "OMR 15" },
      ],
      hair_and_beard: [
        { name: "Beard Grooming", duration: "30 min", price: "OMR 5" },
        { name: "Classic Cut", duration: "45 min", price: "OMR 8" },
      ],
      massage: [
        {
          name: "Shoulder & Neck Massage",
          duration: "30 min",
          price: "OMR 12",
        },
        { name: "Head Massage", duration: "30 min", price: "OMR 8" },
      ],
      packages: [
        {
          name: "Gentleman's Essentials",
          duration: "120 min",
          price: "OMR 25",
          details: "Includes haircut, beard trim, and head massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Yasir",
        memberRating: 4.9,
        memberSpeciality: "Hair Stylist",
        memberImg:
          "../../../../public/images/salons/eliteGrooming/member-yasir.jpg",
      },
      {
        memberName: "Ahmed",
        memberRating: 4.8,
        memberSpeciality: "Barber",
        memberImg:
          "../../../../public/images/salons/eliteGrooming/member-ahmed.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Khalid Bin Ahmed",
        reviewDateTime: "Mon, 3 Oct 2024 at 6:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "Excellent services, true professionals!",
      },
      {
        customerName: "Ali Al-Balushi",
        reviewDateTime: "Fri, 7 Oct 2024 at 5:45pm",
        customerReviewStars: 4,
        customerReviewMessage: "Good ambiance, friendly staff.",
      },
    ],
    about:
      "Elite Grooming Lounge offers premium men's grooming services in Sohar, known for its upscale ambiance and attention to detail.",
    openingTimes: {
      Monday: [{ opening: "11:00", closing: "21:00" }],
      Tuesday: [{ opening: "11:00", closing: "21:00" }],
      Wednesday: [{ opening: "11:00", closing: "21:00" }],
      Thursday: [{ opening: "11:00", closing: "21:00" }],
      Friday: [{ opening: "12:00", closing: "22:00" }],
      Saturday: [{ opening: "12:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Online Booking", "Premium Products Used"],
  },
  {
    id: 2,
    name: "Majestic Cuts",
    rating: "4.7",
    reviews: "102",
    city: "sohar",
    address: "Al Kharj Street, Near Sohar Mall, Sohar, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Men's Haircuts and Grooming",
    category: "barber-shop",
    gender: "Men only",
    salonSlug: "sohar-majestic-2",
    services: {
      features: [
        { name: "Classic Shave", duration: "30 min", price: "OMR 5" },
        { name: "Executive Haircut", duration: "45 min", price: "OMR 8" },
        { name: "Beard Trim", duration: "20 min", price: "OMR 3" },
        { name: "Hot Towel Treatment", duration: "15 min", price: "OMR 4" },
      ],
      hair_and_beard: [
        { name: "Buzz Cut", duration: "30 min", price: "OMR 5" },
        { name: "Beard Shape & Style", duration: "30 min", price: "OMR 4" },
      ],
      massage: [
        { name: "Head Massage", duration: "20 min", price: "OMR 6" },
        { name: "Shoulder Massage", duration: "30 min", price: "OMR 10" },
      ],
      packages: [
        {
          name: "Majestic Look Package",
          duration: "90 min",
          price: "OMR 20",
          details: "Haircut, beard trim, and head massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Musa",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg:
          "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
      {
        memberName: "Ali",
        memberRating: 4.6,
        memberSpeciality: "Beard Specialist",
        memberImg:
          "../../../../public/images/salons/hairSalon/male-barber-img.avif",
      },
    ],
    customerReviews: [
      {
        customerName: "Salim Al-Maawali",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Thu, 8 Oct 2024 at 1:30pm",
        customerReviewStars: 5,
        customerReviewMessage: "Excellent haircut and friendly staff.",
      },
      {
        customerName: "Faisal Yousuf",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Tue, 5 Oct 2024 at 3:15pm",
        customerReviewStars: 4,
        customerReviewMessage: "Great service, but the wait was a bit long.",
      },
    ],
    about:
      "Majestic Cuts offers a modern touch to classic grooming services in Sohar, specializing in haircuts, beard grooming, and quick massages.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "12:00", closing: "22:00" }],
      Saturday: [{ opening: "12:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Walk-ins Welcome",
      "Online Appointments Available",
    ],
  },
  {
    id: 3,
    name: "The Royal Men's Lounge",
    rating: "4.9",
    reviews: "87",
    city: "sohar",
    address: "Commercial Avenue, Near Al Khoud Plaza, Sohar, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxury Barber & Spa",
    category: "barber-shop",
    gender: "Men only",
    salonSlug: "sohar-royal-3",
    services: {
      features: [
        { name: "Royal Shave", duration: "60 min", price: "OMR 12" },
        { name: "Signature Haircut", duration: "45 min", price: "OMR 10" },
        { name: "Hair Coloring", duration: "60 min", price: "OMR 15" },
        { name: "Facial Treatment", duration: "45 min", price: "OMR 20" },
      ],
      hair_and_beard: [
        {
          name: "Haircut & Beard Grooming",
          duration: "75 min",
          price: "OMR 16",
        },
        { name: "Classic Beard Grooming", duration: "30 min", price: "OMR 6" },
      ],
      massage: [
        { name: "Back Massage", duration: "60 min", price: "OMR 20" },
        {
          name: "Head & Shoulder Massage",
          duration: "45 min",
          price: "OMR 15",
        },
      ],
      spa: [
        { name: "Deep Cleansing Facial", duration: "45 min", price: "OMR 18" },
        { name: "Hand & Foot Care", duration: "60 min", price: "OMR 20" },
      ],
      packages: [
        {
          name: "Royal Treatment",
          duration: "180 min",
          price: "OMR 50",
          details: "Signature haircut, royal shave, and full-body massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Hamed",
        memberRating: 4.9,
        memberSpeciality: "Barber & Stylist",
        memberImg:
          "../../../../public/images/salons/royalLounge/member-hamed.jpg",
      },
      {
        memberName: "Khalil",
        memberRating: 4.8,
        memberSpeciality: "Spa Therapist",
        memberImg:
          "../../../../public/images/salons/royalLounge/member-khalil.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Majid Al-Hinai",
        reviewDateTime: "Mon, 2 Oct 2024 at 5:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "Fantastic experience, will definitely return.",
      },
      {
        customerName: "Sami Al-Rashdi",
        reviewDateTime: "Sat, 10 Oct 2024 at 6:30pm",
        customerReviewStars: 4,
        customerReviewMessage:
          "Good services, though a bit on the pricier side.",
      },
    ],
    about:
      "The Royal Men's Lounge in Sohar offers a premium grooming experience with luxury barber services and exclusive spa treatments.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "22:00" }],
      Tuesday: [{ opening: "10:00", closing: "22:00" }],
      Wednesday: [{ opening: "10:00", closing: "22:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "12:00", closing: "22:00" }],
      Saturday: [{ opening: "12:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Complimentary Beverages",
      "VIP Membership Available",
    ],
  },
];

export const nizwaSalons = [
  {
    id: 0,
    name: "Spa Station",
    rating: "4.8",
    reviews: "102",
    city: "nizwa",
    address: "Nizwa Business Centre, Office 6",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Spa & Wellness",
    category: "spa",
    gender: "Unisex",
    salonSlug: "nizwa-spa-station",
    services: {
      features: [
        { name: "Royal Shave", duration: "60 min", price: "OMR 12" },
        { name: "Signature Haircut", duration: "45 min", price: "OMR 10" },
        { name: "Hair Coloring", duration: "60 min", price: "OMR 15" },
        { name: "Facial Treatment", duration: "45 min", price: "OMR 20" },
      ],
      hair_and_beard: [
        {
          name: "Haircut & Beard Grooming",
          duration: "75 min",
          price: "OMR 16",
        },
        { name: "Classic Beard Grooming", duration: "30 min", price: "OMR 6" },
      ],
      massage: [
        { name: "Aromatherapy Massage", duration: "90 min", price: "OMR 35" },
        { name: "Deep Tissue Massage", duration: "60 min", price: "OMR 30" },
        { name: "Hot Stone Massage", duration: "75 min", price: "OMR 40" },
        { name: "Swedish Massage", duration: "60 min", price: "OMR 28" },
      ],
      facial: [
        { name: "Hydrating Facial", duration: "60 min", price: "OMR 20" },
        { name: "Anti-Aging Facial", duration: "75 min", price: "OMR 25" },
        { name: "Brightening Facial", duration: "70 min", price: "OMR 22" },
        { name: "Acne Treatment Facial", duration: "80 min", price: "OMR 27" },
      ],
      nails: [
        { name: "Manicure", duration: "45 min", price: "OMR 10" },
        { name: "Pedicure", duration: "60 min", price: "OMR 12" },
        { name: "Gel Manicure", duration: "50 min", price: "OMR 15" },
        { name: "Nail Art", duration: "30 min", price: "OMR 8" },
      ],
      packages: [
        {
          name: "Royal Treatment",
          duration: "180 min",
          price: "OMR 50",
          details: "Signature haircut, royal shave, and full-body massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha Al-Hasni",
        memberRating: 4.8,
        memberSpeciality: "Massage Therapist",
        memberImg:
          "../../../../public/images/salons/spaStation/member-aisha.jpg",
      },
      {
        memberName: "Saleh Al-Mukhtar",
        memberRating: 4.7,
        memberSpeciality: "Facial Specialist",
        memberImg:
          "../../../../public/images/salons/spaStation/member-saleh.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Sara Al-Balushi",
        reviewDateTime: "Tue, 12 Sep 2024 at 4:30pm",
        customerReviewStars: 5,
        customerReviewMessage: "An amazing experience; highly recommend!",
      },
      {
        customerName: "Ahmed Al-Harthy",
        reviewDateTime: "Fri, 22 Sep 2024 at 3:15pm",
        customerReviewStars: 4,
        customerReviewMessage:
          "Excellent services, but would appreciate more options.",
      },
    ],
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "21:00" }],
      Saturday: [{ opening: "09:00", closing: "18:00" }],
    },
    additionalInformation: ["Appointment recommended", "On-site parking"],
  },
  {
    id: 1,
    name: "Al Rawda Beauty Lounge",
    rating: "4.7",
    reviews: "89",
    city: "nizwa",
    address: "Al Aqar, Nizwa, Oman",
    img1: "alRawdaBeautyImg.jpg",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair & Nail Care",
    category: "salon",
    gender: "Female Only",
    salonSlug: "nizwa-al-rawda",
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
      hair: [
        { name: "Haircut & Styling", duration: "45 min", price: "OMR 15" },
        { name: "Keratin Treatment", duration: "120 min", price: "OMR 50" },
        { name: "Hair Coloring", duration: "90 min", price: "OMR 30" },
        { name: "Highlights", duration: "100 min", price: "OMR 35" },
        { name: "Olaplex Treatment", duration: "60 min", price: "OMR 20" },
      ],
      nails: [
        { name: "Gel Manicure", duration: "45 min", price: "OMR 12" },
        { name: "French Pedicure", duration: "60 min", price: "OMR 15" },
        { name: "Spa Manicure", duration: "50 min", price: "OMR 10" },
        {
          name: "Acrylic Nail Extensions",
          duration: "90 min",
          price: "OMR 25",
        },
      ],
      makeup: [
        { name: "Day Makeup", duration: "30 min", price: "OMR 18" },
        { name: "Bridal Makeup", duration: "120 min", price: "OMR 80" },
      ],
    },
    teamMembers: [
      {
        memberName: "Fatima Al-Mutairi",
        memberRating: 4.8,
        memberSpeciality: "Hair Stylist",
        memberImg: "../../../../public/images/salons/alRawda/member-fatima.jpg",
      },
      {
        memberName: "Laila Al-Yahmadi",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "../../../../public/images/salons/alRawda/member-laila.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Nada Al-Balushi",
        reviewDateTime: "Wed, 20 Sep 2024 at 1:45pm",
        customerReviewStars: 5,
        customerReviewMessage: "Loved the gel manicure! Perfect finish.",
      },
      {
        customerName: "Maryam A.",
        reviewDateTime: "Fri, 8 Sep 2024 at 2:20pm",
        customerReviewStars: 4,
        customerReviewMessage:
          "Sara is amazing, highly recommend her services.",
      },
    ],
    openingTimes: {
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ opening: "11:00", closing: "19:00" }],
    },
    additionalInformation: ["Ladies only", "Advance booking"],
  },
  {
    id: 2,
    name: "Serenity Wellness Center",
    rating: "4.5",
    reviews: "67",
    city: "nizwa",
    address: "Nizwa Souq Street, Nizwa, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Massage & Spa",
    category: "wellness",
    gender: "Unisex",
    salonSlug: "nizwa-serenity",
    services: {
      features: [
        { name: "Executive Haircut", duration: "45 min", price: "OMR 8" },
        { name: "Beard Trim & Shape", duration: "30 min", price: "OMR 5" },
        {
          name: "Luxury Shave",
          duration: "60 min",
          price: "OMR 10",
          details: "Includes hot towel and oil treatment",
        },
        { name: "Scalp Treatment", duration: "60 min", price: "OMR 15" },
      ],
      hair_and_beard: [
        { name: "Beard Grooming", duration: "30 min", price: "OMR 5" },
        { name: "Classic Cut", duration: "45 min", price: "OMR 8" },
      ],
      massage: [
        { name: "Thai Massage", duration: "90 min", price: "OMR 40" },
        { name: "Reflexology", duration: "60 min", price: "OMR 25" },
        { name: "Swedish Massage", duration: "75 min", price: "OMR 35" },
        { name: "Hot Stone Massage", duration: "80 min", price: "OMR 30" },
      ],
      body_treatments: [
        { name: "Body Scrub", duration: "45 min", price: "OMR 15" },
        { name: "Hot Stone Therapy", duration: "90 min", price: "OMR 35" },
        { name: "Mud Wrap", duration: "70 min", price: "OMR 28" },
        { name: "Cellulite Treatment", duration: "60 min", price: "OMR 30" },
      ],
      packages: [
        {
          name: "Gentleman's Essentials",
          duration: "120 min",
          price: "OMR 25",
          details: "Includes haircut, beard trim, and head massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Leila",
        memberRating: 4.7,
        memberSpeciality: "Massage Therapist",
        memberImg:
          "../../../../public/images/salons/serenityWellness/leila.jpg",
      },
      {
        memberName: "Amir",
        memberRating: 4.8,
        memberSpeciality: "Spa Therapist",
        memberImg: "../../../../public/images/salons/serenityWellness/amir.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Fatima Al-Mukhaini",
        reviewDateTime: "Tue, 15 Sep 2024 at 3:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "Best massage in Nizwa! Highly recommended.",
      },
      {
        customerName: "Omar Said",
        reviewDateTime: "Thu, 21 Sep 2024 at 4:30pm",
        customerReviewStars: 4,
        customerReviewMessage: "Great service, but could improve ambiance.",
      },
    ],
    openingTimes: {
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "18:00" }],
    },
    additionalInformation: ["Walk-ins welcome", "Family-friendly"],
  },
  {
    id: 3,
    name: "Elegance Nail Studio",
    rating: "4.9",
    reviews: "143",
    city: "nizwa",
    address: "Al Khair Street, Nizwa, Oman",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Nail Art & Manicures",
    category: "nail-studio",
    gender: "Female Only",
    salonSlug: "nizwa-elegance",
    services: {
      features: [
        { name: "Classic Shave", duration: "30 min", price: "OMR 5" },
        { name: "Executive Haircut", duration: "45 min", price: "OMR 8" },
        { name: "Beard Trim", duration: "20 min", price: "OMR 3" },
        { name: "Hot Towel Treatment", duration: "15 min", price: "OMR 4" },
      ],
      hair_and_beard: [
        { name: "Buzz Cut", duration: "30 min", price: "OMR 5" },
        { name: "Beard Shape & Style", duration: "30 min", price: "OMR 4" },
      ],
      nails: [
        { name: "Classic Manicure", duration: "30 min", price: "OMR 8" },
        { name: "Nail Art", duration: "45 min", price: "OMR 12" },
        { name: "Gel Manicure", duration: "45 min", price: "OMR 14" },
        { name: "Shellac Nails", duration: "60 min", price: "OMR 15" },
      ],
      pedicures: [
        { name: "Spa Pedicure", duration: "60 min", price: "OMR 15" },
        { name: "Gel Pedicure", duration: "50 min", price: "OMR 18" },
        { name: "French Pedicure", duration: "60 min", price: "OMR 16" },
        { name: "Foot Massage", duration: "30 min", price: "OMR 10" },
      ],
      packages: [
        {
          name: "Majestic Look Package",
          duration: "90 min",
          price: "OMR 20",
          details: "Haircut, beard trim, and head massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.9,
        memberSpeciality: "Nail Artist",
        memberImg: "../../../../public/images/salons/eleganceNails/sara.jpg",
      },
      {
        memberName: "Fatima",
        memberRating: 4.8,
        memberSpeciality: "Pedicurist",
        memberImg: "../../../../public/images/salons/eleganceNails/fatima.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Nada Al-Balushi",
        reviewDateTime: "Wed, 20 Sep 2024 at 1:45pm",
        customerReviewStars: 5,
        customerReviewMessage: "Loved the gel manicure! Perfect finish.",
      },
      {
        customerName: "Maryam A.",
        reviewDateTime: "Fri, 8 Sep 2024 at 2:20pm",
        customerReviewStars: 4,
        customerReviewMessage:
          "Sara is amazing, highly recommend her services.",
      },
    ],
    openingTimes: {
      Friday: [{ opening: "12:00", closing: "21:00" }],
      Saturday: [{ opening: "09:00", closing: "20:00" }],
    },
    additionalInformation: ["Ladies only", "Professional nail care"],
  },
];

const omanSalonsMerged = muscatSalons.concat(
  salalahSalons,
  soharSalons,
  nizwaSalons
);

let allOmanSalons = generateRandomSalons(omanSalonsMerged);

export default allOmanSalons;
