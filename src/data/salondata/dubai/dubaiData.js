import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../../ownModules/randomSalons/generateRandomSalons";

export const sharjahSalons = [
  {
    id: 0,
    name: "Tribes Men's and Spa Salon ",
    rating: "5.0",
    reviews: "228",
    city: "sharjah",
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
        memberName: "Maria",
        memberRating: 5.0,
        memberSpeciality: "Massage Specialist",
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
      {
        memberName: "dummy",
        memberRating: 4.9,
        memberSpeciality: "",
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
    name: "Bella Vita Beauty Lounge",
    rating: "4.9",
    reviews: "324",
    city: "sharjah",
    address: "Shop 12, Marina Mall, Dubai Marina, Sharjah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Luxury Beauty Salon",
    category: "beauty-salon",
    gender: "Women Only",
    salonSlug: "dubai-bella-vita",
    services: {
      facial_treatments: [
        {
          name: "Deep Hydration Facial",
          duration: "90 min",
          price: "AED 250",
          details: "For deep hydration and glow",
        },
        {
          name: "Anti-Aging Facial",
          duration: "120 min",
          price: "AED 400",
          details: "Reduces wrinkles, firms skin",
        },
        { name: "Brightening Facial", duration: "75 min", price: "AED 300" },
      ],
      nail_services: [
        { name: "Classic Manicure", duration: "45 min", price: "AED 100" },
        { name: "Gel Nails", duration: "60 min", price: "AED 150" },
        {
          name: "Pedicure & Manicure Combo",
          duration: "90 min",
          price: "AED 180",
        },
      ],
      hair_treatments: [
        { name: "Brazilian Blowout", duration: "120 min", price: "AED 600" },
        { name: "Keratin Treatment", duration: "150 min", price: "AED 750" },
        {
          name: "Scalp Detox",
          duration: "60 min",
          price: "AED 200",
          details: "Deep cleanse and nourish the scalp",
        },
      ],
      packages: [
        {
          name: "Bridal Glow Package",
          duration: "240 min",
          price: "AED 1000",
          details: "Includes facial, hair, and makeup",
        },
        {
          name: "Weekend Pamper",
          duration: "180 min",
          price: "AED 600",
          details: "Manicure, pedicure, and massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha",
        memberRating: 4.9,
        memberSpeciality: "Skin Specialist",
        memberImg: "aisha-profile.jpg",
      },
      {
        memberName: "Lara",
        memberRating: 4.8,
        memberSpeciality: "Nail Technician",
        memberImg: "lara-profile.jpg",
      },
      {
        memberName: "Sara",
        memberRating: 5.0,
        memberSpeciality: "Hair Stylist",
        memberImg: "sara-profile.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Mariam S.",
        reviewDateTime: "Wed, 10 Oct 2024 at 2:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "My skin never felt this good!",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
      },
      {
        customerName: "Alia H.",
        reviewDateTime: "Fri, 18 Oct 2024 at 4:30pm",
        customerReviewStars: 4,
        customerReviewMessage: "Best manicure experience!",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
      },
    ],
    about:
      "A premium beauty lounge located in Dubai Marina, specializing in facials, nail services, and luxury hair treatments.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "22:00" }],
      Tuesday: [{ opening: "10:00", closing: "22:00" }],
      Sunday: [{ opening: "12:00", closing: "20:00" }],
    },
    additionalInformation: ["Free parking available", "Membership discounts"],
  },
  {
    id: 2,
    name: "Aura Men’s Grooming Studio",
    rating: "4.8",
    reviews: "196",
    city: "sharjah",
    address: "Al Majaz Waterfront, Block B, Sharjah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Men's Salon and Spa",
    category: "hair-salon",
    gender: "Men Only",
    salonSlug: "sharjah-aura",
    services: {
      grooming: [
        { name: "Classic Haircut", duration: "30 min", price: "AED 50" },
        { name: "Beard Trim & Style", duration: "30 min", price: "AED 30" },
        { name: "Haircut + Beard Combo", duration: "45 min", price: "AED 70" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "AED 150" },
        { name: "Sports Massage", duration: "75 min", price: "AED 180" },
        { name: "Hot Stone Massage", duration: "90 min", price: "AED 200" },
      ],
      skin_care: [
        { name: "Anti-Aging Treatment", duration: "60 min", price: "AED 180" },
        { name: "Acne Control Facial", duration: "60 min", price: "AED 160" },
        { name: "Deep Cleansing Facial", duration: "75 min", price: "AED 190" },
      ],
      packages: [
        {
          name: "Grooming Essentials",
          duration: "120 min",
          price: "AED 250",
          details: "Haircut, shave, and mini-facial",
        },
        {
          name: "Relax & Recharge",
          duration: "180 min",
          price: "AED 350",
          details: "Full body massage, facial, and manicure",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Yasir",
        memberRating: 4.8,
        memberSpeciality: "Barber",
        memberImg: "yasir-profile.jpg",
      },
      {
        memberName: "Ali",
        memberRating: 4.7,
        memberSpeciality: "Massage Therapist",
        memberImg: "ali-profile.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Imran T.",
        reviewDateTime: "Mon, 15 Oct 2024 at 1:00pm",
        customerReviewStars: 5,
        customerReviewMessage: "Very professional and clean atmosphere!",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
      },
      {
        customerName: "Hamza A.",
        reviewDateTime: "Thu, 19 Oct 2024 at 3:00pm",
        customerImg:
          "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage: "Best haircut experience in Sharjah.",
      },
    ],
    about:
      "A high-end men’s grooming studio offering haircuts, beard styling, massages, and skincare treatments in a modern and relaxing environment.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "22:00" }],
      Friday: [{ opening: "14:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
    },
    additionalInformation: ["Online booking available", "Gift cards"],
  },
  {
    id: 3,
    name: "Zen Retreat Salon & Spa",
    rating: "5.0",
    reviews: "289",
    city: "sharjah",
    address: "Bluewaters Island, Sharjah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Wellness Spa",
    category: "spa-salon",
    gender: "Unisex",
    salonSlug: "dubai-zen-retreat",
    services: {
      spa: [
        { name: "Aromatherapy Massage", duration: "60 min", price: "AED 250" },
        { name: "Detox Body Wrap", duration: "90 min", price: "AED 350" },
        { name: "Anti-Stress Massage", duration: "75 min", price: "AED 300" },
      ],
      skincare: [
        { name: "Hydrating Facial", duration: "60 min", price: "AED 200" },
        { name: "Brightening Facial", duration: "75 min", price: "AED 250" },
      ],
      body_treatments: [
        { name: "Body Scrub & Polish", duration: "45 min", price: "AED 180" },
        { name: "Mud Therapy", duration: "60 min", price: "AED 220" },
      ],
      wellness: [
        { name: "Yoga & Stretching", duration: "45 min", price: "AED 120" },
        { name: "Meditation Session", duration: "30 min", price: "AED 80" },
      ],
    },
    teamMembers: [
      {
        memberName: "Lina",
        memberRating: 4.9,
        memberSpeciality: "Massage Specialist",
        memberImg: "lina-profile.jpg",
      },
      {
        memberName: "Samir",
        memberRating: 4.8,
        memberSpeciality: "Yoga Instructor",
        memberImg: "samir-profile.jpg",
      },
      {
        memberName: "Fatima",
        memberRating: 4.7,
        memberSpeciality: "Skincare Expert",
        memberImg: "fatima-profile.jpg",
      },
    ],
    customerReviews: [
      {
        customerName: "Sofia K.",
        reviewDateTime: "Thu, 25 Oct 2024 at 10:30am",
        customerReviewStars: 5,
        customerReviewMessage: "The best spa experience I've ever had!",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
      },
      {
        customerName: "Nadia P.",
        reviewDateTime: "Sun, 28 Oct 2024 at 3:15pm",
        customerReviewStars: 5,
        customerReviewMessage: "The yoga session was rejuvenating.",
        customerImg:
        "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
      },
    ],
    about:
      "Zen Retreat Salon & Spa offers a serene atmosphere where guests can unwind and rejuvenate through various spa treatments, skincare services, and wellness programs. Our expert team is dedicated to providing a personalized experience for every visitor.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "22:00" }],
      Tuesday: [{ opening: "10:00", closing: "22:00" }],
      Wednesday: [{ opening: "10:00", closing: "22:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "10:00", closing: "23:00" }],
      Saturday: [{ opening: "10:00", closing: "23:00" }],
      Sunday: [{ opening: "11:00", closing: "20:00" }],
    },
    additionalInformation: [
      "Complimentary herbal tea with every treatment",
      "Membership plans available for regular clients",
    ],
  },
];

export const abuDhabiSalons = [
  {
    id: 0,
    name: "Glamour Beauty Lounge",
    rating: "4.8",
    reviews: "250",
    city: "Abu Dhabi",
    address: "Al Maryah Island, Abu Dhabi, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Luxury Beauty Experience",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "glamour-beauty-lounge",
    services: {
      features: [
        {
          name: "Ultimate Glam Experience",
          duration: "120 min",
          price: "AED 400",
          details: "Includes makeup application, hairstyling, and manicure.",
        },
        { name: "Hydrating Facial", duration: "60 min", price: "AED 150" },
        {
          name: "Classic Manicure & Pedicure",
          duration: "90 min",
          price: "AED 100",
        },
      ],
      hair_and_beard: [
        { name: "Blow Dry", duration: "45 min", price: "AED 80" },
        { name: "Coloring", duration: "90 min", price: "200 AED" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "AED 180" },
        { name: "Hot Stone Massage", duration: "90 min", price: "AED 220" },
      ],
      spa: [
        {
          name: "Rejuvenating Body Scrub",
          duration: "45 min",
          price: "AED 120",
        },
        { name: "Foot Reflexology", duration: "30 min", price: "AED 70" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "AED 250" },
        { name: "Eyebrow Wax", duration: "15 min", price: "AED 30" },
      ],
      packages: [
        {
          name: "Bridal Package",
          duration: "240 min",
          price: "AED 800",
          details:
            "Includes makeup, hairstyling, and pre-wedding spa treatments.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_5",
      },
    ],
    customerReviews: [
      {
        customerName: "Fatima",
        customerImg: "path_to_customer_image_5",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage: "Exceptional service and stunning results!",
      },
    ],
    about:
      "Glamour Beauty Lounge offers a luxury beauty experience, focusing on the latest trends and high-quality products to make every client feel special.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Advance Booking Recommended",
      "Discounts for Group Bookings",
    ],
  },
  {
    id: 1,
    name: "Luxe Beauty Spa",
    rating: "4.7",
    reviews: "210",
    city: "Abu Dhabi",
    address: "Corniche Road, Abu Dhabi, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Holistic Treatments",
    category: "spa-salon",
    gender: "Women and Men",
    salonSlug: "luxe-beauty-spa",
    services: {
      features: [
        {
          name: "Relaxation Retreat Package",
          duration: "150 min",
          price: "AED 350",
          details: "Includes body massage, facial, and aromatherapy.",
        },
        { name: "Organic Facial", duration: "60 min", price: "AED 160" },
        { name: "Detox Body Wrap", duration: "90 min", price: "AED 200" },
      ],
      hair_and_beard: [
        { name: "Men’s Haircut", duration: "30 min", price: "AED 50" },
        { name: "Women’s Haircut", duration: "60 min", price: "AED 80" },
      ],
      massage: [
        { name: "Aromatherapy Massage", duration: "60 min", price: "AED 200" },
        { name: "Couple’s Massage", duration: "90 min", price: "AED 400" },
      ],
      spa: [
        { name: "Full Body Exfoliation", duration: "60 min", price: "AED 130" },
        { name: "Luxury Pedicure", duration: "45 min", price: "AED 100" },
      ],
      waxing: [
        { name: "Half Leg Wax", duration: "30 min", price: "AED 60" },
        { name: "Bikini Wax", duration: "30 min", price: "AED 80" },
      ],
      packages: [
        {
          name: "Family Spa Day",
          duration: "300 min",
          price: "AED 700",
          details: "Includes services for up to 4 people.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Hanan",
        memberRating: 4.8,
        memberSpeciality: "Spa Therapist",
        memberImg: "path_to_member_image_6",
      },
    ],
    customerReviews: [
      {
        customerName: "Ahmed",
        customerImg: "path_to_customer_image_6",
        reviewDateTime: "2024-10-31",
        customerReviewStars: 4,
        customerReviewMessage:
          "A great place to unwind with excellent services!",
      },
    ],
    about:
      "Luxe Beauty Spa is dedicated to providing holistic beauty treatments with a focus on relaxation and rejuvenation, ensuring a tranquil experience.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "22:00" }],
      Tuesday: [{ opening: "09:00", closing: "22:00" }],
      Wednesday: [{ opening: "09:00", closing: "22:00" }],
      Thursday: [{ opening: "09:00", closing: "22:00" }],
      Friday: [{ opening: "09:00", closing: "23:00" }],
      Saturday: [{ opening: "09:00", closing: "22:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Group Discounts Available", "Private Spa Rooms"],
  },
  {
    id: 2,
    name: "Oasis Hair and Beauty",
    rating: "4.6",
    reviews: "180",
    city: "Abu Dhabi",
    address: "Khalifa City, Abu Dhabi, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Personalized Hair and Beauty Services",
    category: "hair-salon",
    gender: "Women and Men",
    salonSlug: "oasis-hair-beauty",
    services: {
      features: [
        {
          name: "Total Makeover Package",
          duration: "180 min",
          price: "AED 500",
          details: "Includes haircut, color, styling, and makeup.",
        },
        { name: "Signature Facial", duration: "60 min", price: "AED 140" },
        { name: "Nail Art", duration: "30 min", price: "AED 50" },
      ],
      hair_and_beard: [
        { name: "Men’s Haircut", duration: "30 min", price: "AED 60" },
        { name: "Women’s Hair Color", duration: "90 min", price: "AED 180" },
      ],
      massage: [
        { name: "Therapeutic Massage", duration: "60 min", price: "AED 170" },
        { name: "Thai Massage", duration: "60 min", price: "AED 150" },
      ],
      spa: [
        { name: "Back Exfoliation", duration: "30 min", price: "AED 80" },
        { name: "Luxury Facial", duration: "90 min", price: "AED 200" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "AED 250" },
        { name: "Underarm Wax", duration: "15 min", price: "AED 30" },
      ],
      packages: [
        {
          name: "Weekend Pamper Package",
          duration: "240 min",
          price: "AED 600",
          details: "Includes hair, face, and body treatments.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Yasmin",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_7",
      },
    ],
    customerReviews: [
      {
        customerName: "Layla",
        customerImg: "path_to_customer_image_7",
        reviewDateTime: "2024-10-31",
        customerReviewStars: 5,
        customerReviewMessage:
          "Fantastic experience! Highly recommend their services!",
      },
    ],
    about:
      "Oasis Hair and Beauty focuses on personalized beauty services tailored to meet individual needs, providing a serene environment for relaxation.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Walk-ins Welcome", "Customized Treatment Plans"],
  },
  {
    id: 3,
    name: "Tranquil Escape Spa",
    rating: "4.9",
    reviews: "320",
    city: "Abu Dhabi",
    address: "Sheikh Zayed Bin Sultan Road, Abu Dhabi, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Relaxation and Rejuvenation",
    category: "massage-center",
    gender: "Women and Men",
    salonSlug: "tranquil-escape-spa",
    services: {
      features: [
        {
          name: "Holistic Wellness Package",
          duration: "180 min",
          price: "AED 450",
          details: "Includes massage, facial, and reflexology.",
        },
        { name: "Detox Facial", duration: "60 min", price: "AED 180" },
        { name: "Hydrotherapy Bath", duration: "30 min", price: "AED 100" },
      ],
      hair_and_beard: [
        { name: "Scalp Treatment", duration: "45 min", price: "AED 90" },
        { name: "Men’s Hair Trim", duration: "30 min", price: "AED 50" },
      ],
      massage: [
        { name: "Deep Tissue Massage", duration: "90 min", price: "AED 200" },
        { name: "Prenatal Massage", duration: "60 min", price: "AED 180" },
      ],
      spa: [
        { name: "Indian Head Massage", duration: "30 min", price: "AED 70" },
        { name: "Luxury Body Wrap", duration: "90 min", price: "AED 230" },
      ],
      waxing: [
        { name: "Leg Wax", duration: "45 min", price: "AED 80" },
        { name: "Facial Wax", duration: "20 min", price: "AED 50" },
      ],
      packages: [
        {
          name: "Couple’s Retreat",
          duration: "240 min",
          price: "AED 900",
          details: "Includes dual massage, spa access, and refreshments.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Amina",
        memberRating: 4.9,
        memberSpeciality: "Spa Manager",
        memberImg: "path_to_member_image_8",
      },
    ],
    customerReviews: [
      {
        customerName: "Mohammed",
        customerImg: "path_to_customer_image_8",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage:
          "A perfect getaway for relaxation and self-care!",
      },
    ],
    about:
      "Tranquil Escape Spa provides an oasis of calm in the city, focusing on relaxation and rejuvenation with a wide range of therapeutic treatments.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "22:00" }],
      Tuesday: [{ opening: "09:00", closing: "22:00" }],
      Wednesday: [{ opening: "09:00", closing: "22:00" }],
      Thursday: [{ opening: "09:00", closing: "22:00" }],
      Friday: [{ opening: "09:00", closing: "23:00" }],
      Saturday: [{ opening: "09:00", closing: "22:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Membership Discounts", "Private Treatment Rooms"],
  },
];

export const AjmanSalons = [
  {
    id: 0,
    name: "Royal Beauty Salon",
    rating: "4.5",
    reviews: "150",
    city: "ajman",
    address: "Al Khor Street, Ajman, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Full-Service Salon",
    category: "beauty-salon",
    gender: "Unisex",
    salonSlug: "royal-beauty-salon",
    services: {
      features: [
        {
          name: "Signature Facial",
          duration: "60 min",
          price: "AED 150",
          details: "Deep cleansing and hydration",
        },
        { name: "Classic Manicure", duration: "30 min", price: "AED 50" },
        { name: "Hair Color", duration: "90 min", price: "AED 200" },
        { name: "Massage Therapy", duration: "60 min", price: "AED 120" },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "30 min", price: "AED 40" },
        { name: "Beard Trim", duration: "15 min", price: "AED 25" },
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
        { name: "Swedish Massage", duration: "60 min", price: "AED 100" },
        { name: "Deep Tissue Massage", duration: "90 min", price: "OMR 30" },
        { name: "Thai Massage", duration: "60 min", price: "OMR 25" },
      ],
      spa: [
        { name: "Aromatherapy", duration: "60 min", price: "AED 120" },
        { name: "Facial Treatment", duration: "45 min", price: "OMR 12" },
        { name: "Pedicure", duration: "30 min", price: "OMR 8" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "AED 150" },
        { name: "Arm Wax", duration: "30 min", price: "OMR 8" },
        { name: "Back Wax", duration: "45 min", price: "OMR 12" },
      ],
      packages: [
        {
          name: "Pamper Package",
          duration: "150 min",
          price: "AED 250",
          details: "Includes facial, massage, and manicure",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.7,
        memberSpeciality: "Beauty Expert",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Nadia",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 5,
        customerReviewMessage: "Amazing experience, highly recommend!",
      },
    ],
    about:
      "Royal Beauty Salon offers premium services for all beauty needs in a relaxing atmosphere.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "22:00" }],
      Tuesday: [{ opening: "10:00", closing: "22:00" }],
      Wednesday: [{ opening: "10:00", closing: "22:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "22:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Instant Booking", "Pay by app"],
  },

  {
    id: 1,
    name: "Glamour Studio",
    rating: "4.8",
    reviews: "200",
    city: "ajman",
    address: "Sheikh Khalifa Bin Zayed Road, Ajman, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair and Makeup",
    category: "facial-salon",
    gender: "Women only",
    salonSlug: "glamour-studio",
    services: {
      facial_treatments: [
        {
          name: "Deep Hydration Facial",
          duration: "90 min",
          price: "AED 250",
          details: "For deep hydration and glow",
        },
        {
          name: "Anti-Aging Facial",
          duration: "120 min",
          price: "AED 400",
          details: "Reduces wrinkles, firms skin",
        },
        { name: "Brightening Facial", duration: "75 min", price: "AED 300" },
      ],
      nail_services: [
        { name: "Classic Manicure", duration: "45 min", price: "AED 100" },
        { name: "Gel Nails", duration: "60 min", price: "AED 150" },
        {
          name: "Pedicure & Manicure Combo",
          duration: "90 min",
          price: "AED 180",
        },
      ],
      hair_treatments: [
        { name: "Brazilian Blowout", duration: "120 min", price: "AED 600" },
        { name: "Keratin Treatment", duration: "150 min", price: "AED 750" },
        {
          name: "Scalp Detox",
          duration: "60 min",
          price: "AED 200",
          details: "Deep cleanse and nourish the scalp",
        },
      ],
      packages: [
        {
          name: "Bridal Glow Package",
          duration: "240 min",
          price: "AED 1000",
          details: "Includes facial, hair, and makeup",
        },
        {
          name: "Weekend Pamper",
          duration: "180 min",
          price: "AED 600",
          details: "Manicure, pedicure, and massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Laila",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_2",
      },
    ],
    customerReviews: [
      {
        customerName: "Huda",
        customerImg: "path_to_customer_image_2",
        reviewDateTime: "2024-10-25",
        customerReviewStars: 5,
        customerReviewMessage: "Exceptional makeup service, loved it!",
      },
    ],
    about:
      "Glamour Studio specializes in professional hair and makeup services for all occasions.",
    openingTimes: {
      Monday: [{ opening: "11:00", closing: "20:00" }],
      Tuesday: [{ opening: "11:00", closing: "20:00" }],
      Wednesday: [{ opening: "11:00", closing: "20:00" }],
      Thursday: [{ opening: "11:00", closing: "20:00" }],
      Friday: [{ opening: "11:00", closing: "20:00" }],
      Saturday: [{ opening: "11:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Online Booking Available",
      "Cash and Card Payments Accepted",
    ],
  },

  {
    id: 2,
    name: "Rare Beauty Salon",
    rating: "4.6",
    reviews: "93",
    city: "ajman",
    address: "Unit 10 City Centre Safia, Ajman, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Beauty Treatments",
    category: "wax-salon",
    gender: "Women only",
    salonSlug: "rare-beauty-salon",
    services: {
      features: [
        {
          name: "Organic Hair Treatment",
          duration: "90 min",
          price: "AED 180",
        },
        { name: "Manicure & Pedicure", duration: "60 min", price: "AED 100" },
      ],
      hair_and_beard: [
        { name: "Hair Styling", duration: "30 min", price: "AED 60" },
        { name: "Classic Haircut", duration: "30 min", price: "AED 50" },
        { name: "Beard Trim & Style", duration: "30 min", price: "AED 30" },
        { name: "Haircut + Beard Combo", duration: "45 min", price: "AED 70" },
      ],
      massage: [
        { name: "Deep Tissue Massage", duration: "60 min", price: "AED 130" },
        { name: "Sports Massage", duration: "75 min", price: "AED 180" },
        { name: "Hot Stone Massage", duration: "90 min", price: "AED 200" },
      ],
      spa: [{ name: "Facial Treatment", duration: "45 min", price: "AED 120" }],
      packages: [
        {
          name: "Luxury Package",
          duration: "150 min",
          price: "AED 300",
          details: "Includes facial, manicure, and massage",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Maitha",
        memberRating: 5.0,
        memberSpeciality: "Hair & Beauty Specialist",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Ndooi",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-21",
        customerReviewStars: 5,
        customerReviewMessage:
          "The staff is very nice and cheerful, the service is great!",
      },
    ],
    about:
      "Rare Beauty Salon offers a wide range of beauty treatments in a welcoming environment.",
    openingTimes: {
      Monday: [{ opening: "12:00", closing: "21:00" }],
      Tuesday: [{ opening: "12:00", closing: "21:00" }],
      Wednesday: [{ opening: "12:00", closing: "21:00" }],
      Thursday: [{ opening: "12:00", closing: "21:00" }],
      Friday: [{ opening: "12:00", closing: "21:00" }],
      Saturday: [{ opening: "12:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Instant Confirmation", "Pay by app"],
  },

  {
    id: 3,
    name: "Brow & Beauty Bar",
    rating: "4.7",
    reviews: "120",
    city: "ajman",
    address: "Al Ittihad Road, Ajman, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Brow and Lash Services",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "brow-beauty-bar",
    services: {
      spa: [
        { name: "Aromatherapy Massage", duration: "60 min", price: "AED 250" },
        { name: "Detox Body Wrap", duration: "90 min", price: "AED 350" },
        { name: "Anti-Stress Massage", duration: "75 min", price: "AED 300" },
      ],
      skincare: [
        { name: "Hydrating Facial", duration: "60 min", price: "AED 200" },
        { name: "Brightening Facial", duration: "75 min", price: "AED 250" },
      ],
      body_treatments: [
        { name: "Body Scrub & Polish", duration: "45 min", price: "AED 180" },
        { name: "Mud Therapy", duration: "60 min", price: "AED 220" },
      ],
      wellness: [
        { name: "Yoga & Stretching", duration: "45 min", price: "AED 120" },
        { name: "Meditation Session", duration: "30 min", price: "AED 80" },
      ],
    },
    teamMembers: [
      {
        memberName: "Amina",
        memberRating: 4.8,
        memberSpeciality: "Brow Artist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Sara",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 5,
        customerReviewMessage:
          "Best place for brow shaping and lash extensions!",
      },
    ],
    about:
      "Brow & Beauty Bar specializes in eyebrow and lash services, offering a chic and comfortable atmosphere for all beauty enthusiasts.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "10:00", closing: "20:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Online Booking Available", "Walk-ins Welcome"],
  },
];

export const FujairahSalons = [
  {
    id: 0,
    name: "Fujairah Luxe Salon",
    rating: "4.8",
    reviews: "210",
    city: "fujairah",
    address: "Sheikh Zayed Road, Fujairah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Luxury Hair and Spa Services",
    category: "barber-shop",
    gender: "Women and Men",
    salonSlug: "fujairah-luxe",
    services: {
      features: [
        {
          name: "Signature Spa Retreat",
          duration: "150 min",
          price: "AED 250",
          details: "Includes full body massage, facial, and pedicure.",
        },
        {
          name: "Hair Rejuvenation Treatment",
          duration: "90 min",
          price: "AED 150",
        },
        { name: "Men’s Haircut", duration: "30 min", price: "AED 50" },
        {
          name: "Deep Conditioning Treatment",
          duration: "60 min",
          price: "AED 80",
        },
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "AED 120",
        },
        { name: "Brow Shaping", duration: "30 min", price: "AED 40" },
      ],
      hair_and_beard: [
        { name: "Women’s Haircut", duration: "45 min", price: "AED 70" },
        { name: "Beard Shaping", duration: "30 min", price: "AED 30" },
        {
          name: "Full Hair Coloring",
          duration: "120 min",
          price: "AED 200",
        },
      ],
      massage: [
        { name: "Full Body Massage", duration: "90 min", price: "AED 180" },
        { name: "Hot Stone Massage", duration: "75 min", price: "AED 160" },
      ],
      spa: [
        { name: "Detox Body Wrap", duration: "60 min", price: "AED 140" },
        { name: "Luxury Facial", duration: "75 min", price: "AED 120" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "120 min", price: "AED 200" },
        { name: "Bikini Wax", duration: "30 min", price: "AED 60" },
      ],
      packages: [
        {
          name: "Ultimate Pamper Package",
          duration: "180 min",
          price: "AED 300",
          details: "Includes massage, facial, and manicure.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Nadia",
        memberRating: 4.9,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Fatima",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage:
          "Amazing experience, the staff was very professional!",
      },
    ],
    about:
      "A luxurious salon offering a range of hair and spa services designed to pamper and rejuvenate.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "22:00" }],
      Tuesday: [{ opening: "10:00", closing: "22:00" }],
      Wednesday: [{ opening: "10:00", closing: "22:00" }],
      Thursday: [{ opening: "10:00", closing: "22:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "22:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Online Booking", "Gift Vouchers Available"],
  },

  {
    id: 1,
    name: "Bliss Spa & Salon",
    rating: "4.6",
    reviews: "150",
    city: "fujairah",
    address: "Al Ghurfa Street, Fujairah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Wellness and Relaxation",
    category: "spa-salon",
    gender: "Women and Men",
    salonSlug: "bliss-spa-salon",
    services: {
      features: [
        {
          name: "Blissful Escape",
          duration: "120 min",
          price: "AED 220",
          details: "Includes massage and facial.",
        },
        { name: "Hydrating Body Scrub", duration: "60 min", price: "AED 100" },
        { name: "Hair Styling", duration: "45 min", price: "AED 90" },
      ],
      hair_and_beard: [
        { name: "Men’s Hair Coloring", duration: "60 min", price: "AED 80" },
        { name: "Children's Haircut", duration: "30 min", price: "AED 40" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "AED 150" },
        { name: "Reflexology", duration: "30 min", price: "AED 70" },
      ],
      spa: [
        { name: "Herbal Facial", duration: "45 min", price: "AED 90" },
        { name: "Manicure and Pedicure", duration: "60 min", price: "AED 120" },
      ],
      waxing: [
        { name: "Leg Wax", duration: "45 min", price: "AED 70" },
        { name: "Underarm Wax", duration: "15 min", price: "AED 25" },
      ],
      packages: [
        {
          name: "Relax & Rejuvenate",
          duration: "150 min",
          price: "AED 280",
          details: "Includes full body massage and spa treatment.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.7,
        memberSpeciality: "Spa Therapist",
        memberImg: "path_to_member_image_2",
      },
    ],
    customerReviews: [
      {
        customerName: "John",
        customerImg: "path_to_customer_image_2",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 5,
        customerReviewMessage: "A wonderful place to relax and unwind!",
      },
    ],
    about:
      "Bliss Spa & Salon offers a tranquil environment and a variety of treatments focused on wellness and beauty.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "21:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Loyalty Program", "Walk-ins Welcome"],
  },

  {
    id: 2,
    name: "Royal Touch Beauty Salon",
    rating: "4.9",
    reviews: "300",
    city: "fujairah",
    address: "Al Nakheel Road, Fujairah, UAE",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Premium Beauty Services",
    category: "nail-salon",
    gender: "Women only",
    salonSlug: "royal-touch",
    services: {
      features: [
        {
          name: "Ultimate Glam Package",
          duration: "180 min",
          price: "AED 350",
          details: "Includes hairstyling, makeup, and manicure.",
        },
        {
          name: "Keratin Hair Treatment",
          duration: "90 min",
          price: "AED 200",
        },
        { name: "Classic Manicure", duration: "45 min", price: "AED 70" },
      ],
      hair_and_beard: [
        { name: "Updo Hairstyle", duration: "60 min", price: "AED 150" },
        { name: "Color Touch-up", duration: "45 min", price: "AED 120" },
        { name: "Hair Straightening", duration: "90 min", price: "AED 180" },
      ],
      nails: [
        { name: "Manicure", duration: "45 min", price: "OMR 10" },
        { name: "Pedicure", duration: "60 min", price: "OMR 12" },
        { name: "Gel Manicure", duration: "50 min", price: "OMR 15" },
        { name: "Nail Art", duration: "30 min", price: "OMR 8" },
      ],
      massage: [
        {
          name: "Aromatherapy Body Massage",
          duration: "60 min",
          price: "AED 160",
        },
        { name: "Relaxation Massage", duration: "45 min", price: "AED 120" },
      ],
      spa: [
        { name: "Hydrating Facial", duration: "60 min", price: "AED 90" },
        { name: "Luxury Pedicure", duration: "45 min", price: "AED 80" },
      ],
      waxing: [
        { name: "Full Leg Wax", duration: "60 min", price: "AED 100" },
        { name: "Facial Wax", duration: "30 min", price: "AED 50" },
      ],
      packages: [
        {
          name: "Bridal Package",
          duration: "360 min",
          price: "AED 600",
          details: "Includes bridal hairstyling, makeup, and a spa day.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Amina",
        memberRating: 4.8,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Zara",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-29",
        customerReviewStars: 5,
        customerReviewMessage: "The best salon in town! Highly recommend!",
      },
    ],
    about:
      "Royal Touch Beauty Salon specializes in premium beauty treatments, offering personalized services to ensure you look and feel your best.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "10:00", closing: "20:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Appointment Required",
      "Special Discounts for New Clients",
    ],
  },

  {
    id: 3,
    name: "Elegant Bliss Salon",
    rating: "4.7",
    reviews: "180",
    city: "fujairah",
    address: "Al Maktoum Street, Fujairah, UAE",
    img1: "path_to_image_10",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Holistic Beauty and Wellness",
    category: "wellness-center",
    gender: "Women and Men",
    salonSlug: "elegant-bliss",
    services: {
      features: [
        {
          name: "Total Indulgence Package",
          duration: "150 min",
          price: "AED 300",
          details: "Includes full body massage, facial, and body wrap.",
        },
        { name: "Organic Facial", duration: "60 min", price: "AED 120" },
        {
          name: "Natural Hair Treatment",
          duration: "90 min",
          price: "AED 180",
        },
      ],
      hair_and_beard: [
        { name: "Fashionable Haircut", duration: "45 min", price: "AED 70" },
        { name: "Beard Styling", duration: "30 min", price: "AED 30" },
      ],
      massage: [
        { name: "Deep Tissue Massage", duration: "75 min", price: "AED 150" },
        { name: "Shiatsu Massage", duration: "60 min", price: "AED 140" },
      ],
      spa: [
        { name: "Relaxing Foot Spa", duration: "30 min", price: "AED 50" },
        {
          name: "Essential Oil Body Wrap",
          duration: "90 min",
          price: "AED 160",
        },
      ],
      waxing: [
        { name: "Upper Lip Wax", duration: "15 min", price: "AED 20" },
        { name: "Chest Wax", duration: "30 min", price: "AED 60" },
      ],
      packages: [
        {
          name: "Couple's Spa Day",
          duration: "180 min",
          price: "AED 500",
          details: "Enjoy a shared experience with massages and facials.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Layla",
        memberRating: 4.7,
        memberSpeciality: "Spa Consultant",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Omar",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage: "A serene atmosphere with exceptional service!",
      },
    ],
    about:
      "Elegant Bliss Salon focuses on holistic beauty, providing an array of wellness and beauty services to refresh and revitalize.",
    openingTimes: {
      Monday: [{ opening: "09:00", closing: "21:00" }],
      Tuesday: [{ opening: "09:00", closing: "21:00" }],
      Wednesday: [{ opening: "09:00", closing: "21:00" }],
      Thursday: [{ opening: "09:00", closing: "21:00" }],
      Friday: [{ opening: "09:00", closing: "21:00" }],
      Saturday: [{ opening: "09:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Online Consultations Available",
      "Promotional Offers for Regular Clients",
    ],
  },
];

const dubaiSalonsMerged = sharjahSalons.concat(
  abuDhabiSalons,
  AjmanSalons,
  FujairahSalons
);

let allDubaiSalons = generateRandomSalons(dubaiSalonsMerged);

// console.log(allDubaiSalons, "all dubai salons");

export default allDubaiSalons;
