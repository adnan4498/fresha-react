import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../../ownModules/randomSalons/generateRandomSalons";

export const karachiSalons = [
  {
    id: 0,
    name: "Glamourous Hair & Beauty Lounge",
    rating: "4.8",
    reviews: "250",
    city: "karachi",
    address: "Block 5, Clifton, Karachi, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Makeup Specialist",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "glamourous-hair-beauty",
    services: {
      features: [
        {
          name: "Bridal Makeup Package",
          duration: "240 min",
          price: "PKR 15,000",
          details: "Includes trial, hairstyling, and makeup.",
        },
        { name: "Keratin Treatment", duration: "120 min", price: "PKR 8,000" },
        { name: "Spa Manicure", duration: "45 min", price: "PKR 1,500" },
      ],
      hair_and_beard: [
        { name: "Fashion Haircut", duration: "30 min", price: "PKR 1,200" },
        { name: "Beard Shaping", duration: "30 min", price: "PKR 500" },
      ],
      massage: [
        { name: "Hot Stone Massage", duration: "90 min", price: "PKR 3,500" },
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "PKR 2,500",
        },
      ],
      spa: [
        { name: "Relaxing Facial", duration: "60 min", price: "PKR 2,000" },
        { name: "Full Body Scrub", duration: "45 min", price: "PKR 1,800" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "PKR 4,000" },
        { name: "Leg Wax", duration: "30 min", price: "PKR 800" },
      ],
      packages: [
        {
          name: "Pamper Package",
          duration: "180 min",
          price: "PKR 5,500",
          details: "Includes a facial, massage, and mani-pedi.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Nadia",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage: "Absolutely loved the service and the results!",
      },
    ],
    about:
      "Glamourous Hair & Beauty Lounge offers a luxurious experience with professional services that cater to every beauty need.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "20:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Bridal Trials Available", "Walk-ins Welcome"],
  },

  {
    id: 0,
    name: "The Glam Studio",
    rating: "4.7",
    reviews: "180",
    city: "karachi",
    address: "Gulshan-e-Iqbal, Karachi, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Glamorous Beauty",
    category: "beauty-salon",
    gender: "Women and Men",
    salonSlug: "the-glam-studio",
    services: {
      features: [
        {
          name: "Luxury Facial Treatment",
          duration: "90 min",
          price: "PKR 4,000",
          details: "Deep cleansing, exfoliation, and hydration.",
        },
        { name: "Full Body Massage", duration: "60 min", price: "PKR 2,800" },
        {
          name: "Custom Hair Coloring",
          duration: "120 min",
          price: "PKR 6,500",
        },
      ],
      hair_and_beard: [
        { name: "Men's Haircut", duration: "30 min", price: "PKR 800" },
        { name: "Women’s Haircut", duration: "45 min", price: "PKR 1,500" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "PKR 2,200" },
        { name: "Couples Massage", duration: "90 min", price: "PKR 4,000" },
      ],
      spa: [
        { name: "Detox Body Wrap", duration: "90 min", price: "PKR 3,500" },
        { name: "Express Facial", duration: "30 min", price: "PKR 1,500" },
      ],
      waxing: [
        { name: "Half Body Wax", duration: "60 min", price: "PKR 2,200" },
        { name: "Bikini Wax", duration: "30 min", price: "PKR 1,000" },
      ],
      packages: [
        {
          name: "Signature Spa Package",
          duration: "150 min",
          price: "PKR 6,000",
          details: "Includes a facial, body scrub, and massage.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha",
        memberRating: 4.8,
        memberSpeciality: "Skin Specialist",
        memberImg: "path_to_member_image_2",
      },
    ],
    customerReviews: [
      {
        customerName: "Fariha",
        customerImg: "path_to_customer_image_2",
        reviewDateTime: "2024-10-29",
        customerReviewStars: 4,
        customerReviewMessage: "Great services but a little pricey.",
      },
    ],
    about:
      "The Glam Studio prides itself on innovative beauty solutions, providing exceptional service in a welcoming environment.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Loyalty Program Available", "Free Consultations"],
  },

  {
    id: 2,
    name: "Serenity Spa & Salon",
    rating: "4.6",
    reviews: "300",
    city: "karachi",
    address: "Bahria Town, Karachi, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxary Spa",
    category: "spa-salon",
    gender: "Women and Men",
    salonSlug: "serenity-spa-salon",
    services: {
      features: [
        {
          name: "Holistic Healing Package",
          duration: "120 min",
          price: "PKR 5,000",
          details: "Includes aromatherapy, massage, and facial.",
        },
        {
          name: "Skin Rejuvenation Treatment",
          duration: "90 min",
          price: "PKR 3,500",
        },
        { name: "Hair Spa Treatment", duration: "60 min", price: "PKR 2,000" },
      ],
      hair_and_beard: [
        { name: "Luxury Haircut", duration: "45 min", price: "PKR 1,800" },
        { name: "Kids Haircut", duration: "30 min", price: "PKR 600" },
      ],
      massage: [
        { name: "Thai Massage", duration: "60 min", price: "PKR 2,500" },
        { name: "Reflexology", duration: "45 min", price: "PKR 1,800" },
      ],
      spa: [
        { name: "Mud Wrap Treatment", duration: "90 min", price: "PKR 3,000" },
        { name: "Aromatherapy Facial", duration: "60 min", price: "PKR 2,500" },
      ],
      waxing: [
        { name: "Half Leg Wax", duration: "45 min", price: "PKR 1,200" },
        { name: "Underarm Wax", duration: "30 min", price: "PKR 600" },
      ],
      packages: [
        {
          name: "Ultimate Relaxation Package",
          duration: "150 min",
          price: "PKR 7,500",
          details: "Includes full body massage, facial, and spa treatment.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Hina",
        memberRating: 4.9,
        memberSpeciality: "Spa Therapist",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Sadia",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 5,
        customerReviewMessage:
          "A beautiful experience; I left feeling refreshed!",
      },
    ],
    about:
      "Serenity Spa & Salon specializes in holistic wellness treatments to rejuvenate the body and mind.",
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
      "Membership Discounts Available",
      "Gift Vouchers Offered",
    ],
  },

  {
    id: 3,
    name: "Urban Chic Salon",
    rating: "4.5",
    reviews: "220",
    city: "karachi",
    address: "Saddar, Karachi, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Beauty Salon",
    category: "beauty-salon",
    gender: "Women and Men",
    salonSlug: "urban-chic-salon",
    services: {
      features: [
        {
          name: "Fashionista Package",
          duration: "180 min",
          price: "PKR 5,500",
          details: "Includes a haircut, color, and blow-dry.",
        },
        { name: "Classic Pedicure", duration: "30 min", price: "PKR 900" },
        { name: "Nail Art", duration: "30 min", price: "PKR 1,200" },
      ],
      hair_and_beard: [
        { name: "Layered Cut", duration: "45 min", price: "PKR 1,500" },
        { name: "Boys Haircut", duration: "30 min", price: "PKR 500" },
      ],
      massage: [
        { name: "Sports Massage", duration: "60 min", price: "PKR 2,000" },
        {
          name: "Couples Retreat Massage",
          duration: "90 min",
          price: "PKR 4,500",
        },
      ],
      spa: [
        { name: "Signature Facial", duration: "60 min", price: "PKR 2,000" },
        { name: "Body Exfoliation", duration: "45 min", price: "PKR 1,500" },
      ],
      waxing: [
        { name: "Full Back Wax", duration: "45 min", price: "PKR 1,200" },
        { name: "Bikini Line Wax", duration: "30 min", price: "PKR 1,000" },
      ],
      packages: [
        {
          name: "Total Beauty Makeover",
          duration: "240 min",
          price: "PKR 12,000",
          details: "Includes haircut, facial, and full body massage.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Maya",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Ayesha",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 4,
        customerReviewMessage: "Great atmosphere and excellent stylists!",
      },
    ],
    about:
      "Urban Chic Salon is the go-to destination for modern trends and a fresh look in the heart of Karachi.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Free Wi-Fi", "Refreshments Available"],
  },
];

export const lahoreSalons = [
  {
    id: 0,
    name: "Glamour Salon",
    rating: "4.8",
    reviews: "180",
    city: "lahore",
    address: "Gulberg III, Lahore, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Makeup Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "glamour-salon",
    services: {
      features: [
        {
          name: "Bridal Makeup Package",
          duration: "180 min",
          price: "PKR 20,000",
          details: "Complete bridal makeup with trial.",
        },
        { name: "Party Makeup", duration: "90 min", price: "PKR 5,000" },
        { name: "Facial Treatment", duration: "60 min", price: "PKR 3,500" },
      ],
      hair_and_beard: [
        { name: "Haircut", duration: "30 min", price: "PKR 1,000" },
        { name: "Coloring", duration: "90 min", price: "PKR 4,500" },
      ],
      massage: [
        {
          name: "Relaxing Swedish Massage",
          duration: "60 min",
          price: "PKR 3,000",
        },
        {
          name: "Aromatherapy Massage",
          duration: "90 min",
          price: "PKR 4,000",
        },
      ],
      spa: [
        {
          name: "Deep Cleansing Facial",
          duration: "60 min",
          price: "PKR 2,500",
        },
        { name: "Gold Facial", duration: "90 min", price: "PKR 5,000" },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "90 min", price: "PKR 3,500" },
        { name: "Underarm Wax", duration: "30 min", price: "PKR 800" },
      ],
      packages: [
        {
          name: "Ultimate Glam Package",
          duration: "150 min",
          price: "PKR 12,000",
          details: "Includes makeup, hairstyling, and manicure.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sana",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Fariha",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-29",
        customerReviewStars: 5,
        customerReviewMessage: "Amazing makeup, felt like a queen!",
      },
    ],
    about:
      "Glamour Salon is renowned for its exquisite makeup services and luxurious treatments.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["VIP Services Available", "Walk-ins Welcome"],
  },
  {
    id: 1,
    name: "Bella Vita Salon",
    rating: "4.7",
    reviews: "150",
    city: "lahore",
    address: "Model Town, Lahore, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "bella-vita-salon",
    services: {
      features: [
        {
          name: "Luxury Hair Treatment",
          duration: "120 min",
          price: "PKR 5,000",
          details: "Intensive treatment for damaged hair.",
        },
        { name: "Blow Dry", duration: "45 min", price: "PKR 1,500" },
        { name: "Ombre Hair Color", duration: "90 min", price: "PKR 6,000" },
      ],
      hair_and_beard: [
        {
          name: "Hair Straightening",
          duration: "180 min",
          price: "PKR 10,000",
        },
        { name: "Men's Haircut", duration: "30 min", price: "PKR 800" },
      ],
      massage: [
        { name: "Hot Stone Massage", duration: "60 min", price: "PKR 3,500" },
        { name: "Couples Massage", duration: "90 min", price: "PKR 6,500" },
      ],
      spa: [
        { name: "Hydrating Facial", duration: "60 min", price: "PKR 2,800" },
        { name: "Chemical Peel", duration: "45 min", price: "PKR 3,200" },
      ],
      waxing: [
        { name: "Full Arm Wax", duration: "30 min", price: "PKR 1,000" },
        { name: "Bikini Wax", duration: "45 min", price: "PKR 1,500" },
      ],
      packages: [
        {
          name: "Revive & Shine Package",
          duration: "150 min",
          price: "PKR 8,000",
          details: "Includes haircut, treatment, and facial.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Aisha",
        memberRating: 4.8,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_2",
      },
    ],
    customerReviews: [
      {
        customerName: "Sara",
        customerImg: "path_to_customer_image_2",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 4,
        customerReviewMessage: "Loved my new haircut and color!",
      },
    ],
    about:
      "Bella Vita Salon offers advanced hair treatments and styling in a chic environment.",
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
      "Online Booking Available",
      "Special Discounts on Packages",
    ],
  },
  {
    id: 2,
    name: "Pure Essence Spa",
    rating: "4.9",
    reviews: "200",
    city: "lahore",
    address: "DHA Phase 5, Lahore, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxury Spa",
    category: "beauty-salon",
    gender: "Women and Men",
    salonSlug: "pure-essence-spa",
    services: {
      features: [
        {
          name: "Signature Spa Experience",
          duration: "180 min",
          price: "PKR 8,000",
          details: "Includes massage, facial, and body scrub.",
        },
        { name: "Hot Stone Therapy", duration: "90 min", price: "PKR 5,500" },
        {
          name: "Detoxifying Body Wrap",
          duration: "60 min",
          price: "PKR 4,000",
        },
      ],
      hair_and_beard: [
        { name: "Scalp Treatment", duration: "45 min", price: "PKR 2,000" },
        { name: "Hair Rebonding", duration: "120 min", price: "PKR 7,500" },
      ],
      massage: [
        { name: "Deep Tissue Massage", duration: "60 min", price: "PKR 4,000" },
        { name: "Reflexology Massage", duration: "45 min", price: "PKR 2,500" },
      ],
      spa: [
        { name: "Facial Rejuvenation", duration: "60 min", price: "PKR 3,000" },
        {
          name: "Hydrating Body Polish",
          duration: "90 min",
          price: "PKR 3,500",
        },
      ],
      waxing: [
        { name: "Eyebrow Wax", duration: "15 min", price: "PKR 500" },
        { name: "Leg Wax", duration: "45 min", price: "PKR 2,000" },
      ],
      packages: [
        {
          name: "Ultimate Relaxation Package",
          duration: "180 min",
          price: "PKR 10,000",
          details: "Includes full body massage, facial, and spa access.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Nadia",
        memberRating: 4.9,
        memberSpeciality: "Spa Therapist",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Ali",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 5,
        customerReviewMessage: "Best spa experience ever! Highly recommended!",
      },
    ],
    about:
      "Pure Essence Spa offers a serene atmosphere with high-quality services for relaxation and rejuvenation.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Gift Vouchers Available", "Member Discounts"],
  },
  {
    id: 3,
    name: "Elegance Hair & Beauty Studio",
    rating: "4.6",
    reviews: "130",
    city: "lahore",
    address: "Bahria Town, Lahore, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "elegance-studio",
    services: {
      features: [
        {
          name: "Luxury Bridal Package",
          duration: "240 min",
          price: "PKR 25,000",
          details: "Full bridal service including hair, makeup, and mehndi.",
        },
        { name: "Hair Spa", duration: "90 min", price: "PKR 3,000" },
        { name: "Nail Art", duration: "60 min", price: "PKR 1,200" },
      ],
      hair_and_beard: [
        { name: "Hair Styling", duration: "60 min", price: "PKR 2,500" },
        { name: "Beard Shaping", duration: "30 min", price: "PKR 700" },
      ],
      massage: [
        { name: "Thai Massage", duration: "60 min", price: "PKR 3,500" },
        { name: "Foot Reflexology", duration: "30 min", price: "PKR 1,500" },
      ],
      spa: [
        { name: "Brightening Facial", duration: "60 min", price: "PKR 3,200" },
        {
          name: "Aromatherapy Body Wrap",
          duration: "90 min",
          price: "PKR 4,500",
        },
      ],
      waxing: [
        { name: "Facial Wax", duration: "30 min", price: "PKR 1,000" },
        { name: "Full Back Wax", duration: "45 min", price: "PKR 1,800" },
      ],
      packages: [
        {
          name: "All-In-One Package",
          duration: "150 min",
          price: "PKR 9,000",
          details: "Includes haircut, facial, and manicure.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Huma",
        memberRating: 4.7,
        memberSpeciality: "Nail Artist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Sadia",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-26",
        customerReviewStars: 4,
        customerReviewMessage: "Great service and ambiance!",
      },
    ],
    about:
      "Elegance Hair & Beauty Studio is known for its creative hairstyling and relaxing treatments.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Group Packages Available", "Online Consultation"],
  },
];

export const islamabadSalons = [
  {
    id: 0,
    name: "Glow & Glamour Salon",
    rating: "4.8",
    reviews: "150",
    city: "islamabad",
    address: "Blue Area, Islamabad, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Makeup Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "glow-and-glamour",
    services: {
      features: [
        {
          name: "Bridal Makeup Package",
          duration: "180 min",
          price: "PKR 15,000",
          details: "Includes bridal makeup, hairstyling, and a trial.",
        },
        {
          name: "Facial Glow Treatment",
          duration: "60 min",
          price: "PKR 4,500",
        },
        { name: "Hair Spa Treatment", duration: "90 min", price: "PKR 3,500" },
      ],
      hair_and_beard: [
        {
          name: "Creative Hairstyling",
          duration: "45 min",
          price: "PKR 2,000",
        },
        { name: "Hair Coloring", duration: "90 min", price: "PKR 5,000" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "PKR 3,000" },
        { name: "Hot Stone Massage", duration: "90 min", price: "PKR 4,500" },
      ],
      spa: [
        { name: "Detox Body Wrap", duration: "90 min", price: "PKR 5,000" },
        {
          name: "Manicure & Pedicure Combo",
          duration: "60 min",
          price: "PKR 2,500",
        },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "120 min", price: "PKR 4,000" },
        { name: "Facial Wax", duration: "30 min", price: "PKR 800" },
      ],
      packages: [
        {
          name: "Bridal Package",
          duration: "300 min",
          price: "PKR 20,000",
          details: "Includes all bridal services and a gift.",
        },
        {
          name: "Party Makeup Package",
          duration: "120 min",
          price: "PKR 5,500",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Maya",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Ayesha",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 4,
        customerReviewMessage: "Great atmosphere and excellent stylists!",
      },
    ],
    about:
      "Glow & Glamour Salon is the go-to destination for modern trends and a fresh look in the heart of Karachi.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Free Wi-Fi", "Refreshments Available"],
  },
  {
    id: 1,
    name: "Pamper Me Spa",
    rating: "4.6",
    reviews: "200",
    city: "islamabad",
    address: "F-10 Markaz, Islamabad, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxury Spa",
    category: "spa-salon",
    gender: "Unisex",
    salonSlug: "pamper-me-spa",
    services: {
      features: [
        {
          name: "Signature Spa Experience",
          duration: "150 min",
          price: "PKR 6,000",
          details: "Includes full body massage, facial, and aromatherapy.",
        },
        { name: "Relaxing Facial", duration: "60 min", price: "PKR 2,500" },
        { name: "Mud Body Wrap", duration: "90 min", price: "PKR 3,000" },
      ],
      hair_and_beard: [
        { name: "Haircut & Style", duration: "45 min", price: "PKR 1,500" },
        {
          name: "Conditioning Treatment",
          duration: "30 min",
          price: "PKR 1,200",
        },
      ],
      massage: [
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "PKR 3,500",
        },
        { name: "Couples Massage", duration: "90 min", price: "PKR 6,000" },
      ],
      spa: [
        {
          name: "Rejuvenating Body Scrub",
          duration: "60 min",
          price: "PKR 2,000",
        },
        { name: "Nail Care Package", duration: "60 min", price: "PKR 2,500" },
      ],
      waxing: [
        { name: "Half Body Wax", duration: "60 min", price: "PKR 2,000" },
        { name: "Eyebrow Wax", duration: "15 min", price: "PKR 300" },
      ],
      packages: [
        {
          name: "Ultimate Relaxation Package",
          duration: "240 min",
          price: "PKR 12,000",
          details:
            "Full spa treatment including massage, facial, and body wrap.",
        },
        { name: "Pamper Package", duration: "120 min", price: "PKR 4,500" },
      ],
    },
    teamMembers: [
      {
        memberName: "Maya",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Ayesha",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 4,
        customerReviewMessage: "Great atmosphere and excellent stylists!",
      },
    ],
    about:
      "Pamper Me Spa is the go-to destination for modern trends and a fresh look in the heart of Karachi.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Free Wi-Fi", "Refreshments Available"],
  },

  {
    id: 2,
    name: "Artistry Salon & Spa",
    rating: "4.9",
    reviews: "180",
    city: "islamabad",
    address: "G-11 Markaz, Islamabad, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "artistry-salon",
    services: {
      features: [
        {
          name: "Complete Makeover Package",
          duration: "240 min",
          price: "PKR 8,000",
          details: "Includes haircut, color, and styling.",
        },
        { name: "Glamour Makeup", duration: "120 min", price: "PKR 4,000" },
        { name: "Hair Treatment", duration: "90 min", price: "PKR 3,000" },
      ],
      hair_and_beard: [
        { name: "Creative Haircut", duration: "45 min", price: "PKR 1,800" },
        { name: "Hair Extensions", duration: "120 min", price: "PKR 5,500" },
      ],
      massage: [
        { name: "Relaxation Massage", duration: "60 min", price: "PKR 3,000" },
        { name: "Deep Tissue Massage", duration: "90 min", price: "PKR 4,500" },
      ],
      spa: [
        { name: "Refreshing Facial", duration: "60 min", price: "PKR 2,200" },
        {
          name: "Essential Oils Massage",
          duration: "90 min",
          price: "PKR 4,000",
        },
      ],
      waxing: [
        { name: "Full Body Wax", duration: "120 min", price: "PKR 5,000" },
        { name: "Lip Wax", duration: "15 min", price: "PKR 250" },
      ],
      packages: [
        {
          name: "Bridal Beauty Package",
          duration: "360 min",
          price: "PKR 20,000",
          details: "All-inclusive bridal services.",
        },
        { name: "Party Glam Package", duration: "180 min", price: "PKR 7,000" },
      ],
    },
    teamMembers: [
      {
        memberName: "Maya",
        memberRating: 4.7,
        memberSpeciality: "Hair Stylist",
        memberImg: "path_to_member_image_4",
      },
    ],
    customerReviews: [
      {
        customerName: "Ayesha",
        customerImg: "path_to_customer_image_4",
        reviewDateTime: "2024-10-27",
        customerReviewStars: 4,
        customerReviewMessage: "Great atmosphere and excellent stylists!",
      },
    ],
    about:
      "Artistry Salon & Spa is the go-to destination for modern trends and a fresh look in the heart of Karachi.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Free Wi-Fi", "Refreshments Available"],
  },

  {
    id: 2,
    name: "The Style Studio",
    rating: "4.6",
    reviews: "150",
    city: "islamabad",
    address: "F-7, Islamabad, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair Specialists",
    category: "beauty-salon",
    gender: "Women and Men",
    salonSlug: "the-style-studio",
    services: {
      features: [
        {
          name: "Complete Makeover Package",
          duration: "300 min",
          price: "PKR 15,000",
          details: "Includes hairstyle, makeup, and full body scrub.",
        },
        { name: "Professional Makeup", duration: "90 min", price: "PKR 5,000" },
        { name: "Express Manicure", duration: "30 min", price: "PKR 800" },
      ],
      hair_and_beard: [
        { name: "Creative Haircut", duration: "45 min", price: "PKR 1,800" },
        { name: "Beard Grooming", duration: "30 min", price: "PKR 600" },
      ],
      massage: [
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "PKR 3,000",
        },
        { name: "Luxury Body Massage", duration: "90 min", price: "PKR 4,500" },
      ],

      spa: [
        { name: "Detox Body Wrap", duration: "90 min", price: "PKR 4,000" },
        { name: "Revitalizing Facial", duration: "60 min", price: "PKR 2,500" },
      ],
      waxing: [
        { name: "Full Arm Wax", duration: "30 min", price: "PKR 900" },
        { name: "Underarm Wax", duration: "15 min", price: "PKR 500" },
      ],
      packages: [
        {
          name: "Glamour Package",
          duration: "180 min",
          price: "PKR 9,000",
          details: "Includes hair, makeup, and spa treatment.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Ali",
        memberRating: 4.8,
        memberSpeciality: "Master Stylist",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Fatima",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-26",
        customerReviewStars: 5,
        customerReviewMessage:
          "Absolutely loved my experience! Highly recommend!",
      },
    ],
    about:
      "The Style Studio is a leading salon in Islamabad offering personalized services for every client.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Appointment Required", "Walk-ins Welcome"],
  },
];

export const multanSalons = [
  {
    id: 0,
    name: "92 Zone Salon",
    rating: "4.8",
    reviews: "150",
    city: "multan",
    address: "Bosan Road, Multan, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Makeup Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "glamour-zone",
    services: {
      features: [
        {
          name: "Bridal Makeup Package",
          duration: "180 min",
          price: "PKR 15,000",
          details: "Complete bridal makeup with hair styling.",
        },
        { name: "Party Makeup", duration: "90 min", price: "PKR 5,000" },
        { name: "Facial Treatment", duration: "60 min", price: "PKR 2,500" },
      ],
      hair_and_beard: [
        { name: "Hair Styling", duration: "60 min", price: "PKR 1,500" },
        { name: "Hair Color", duration: "90 min", price: "PKR 3,500" },
      ],
      massage: [
        { name: "Swedish Massage", duration: "60 min", price: "PKR 4,000" },
        { name: "Foot Massage", duration: "30 min", price: "PKR 1,500" },
      ],
      spa: [
        { name: "Detox Facial", duration: "45 min", price: "PKR 2,000" },
        { name: "Body Scrub", duration: "60 min", price: "PKR 3,000" },
      ],
      waxing: [
        { name: "Bikini Wax", duration: "30 min", price: "PKR 1,000" },
        { name: "Full Body Wax", duration: "90 min", price: "PKR 4,500" },
      ],
      packages: [
        {
          name: "Ultimate Glam Package",
          duration: "150 min",
          price: "PKR 10,000",
          details: "Includes facial, massage, and hairstyling.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sana",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Farah",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 5,
        customerReviewMessage: "Amazing service and very professional staff!",
      },
    ],
    about:
      "92 Zone Salon specializes in bridal makeup and offers a luxurious experience.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Gift Cards Available", "Loyalty Programs"],
  },

  {
    id: 1,
    name: "The Secret Serenity",
    rating: "4.7",
    reviews: "200",
    city: "multan",
    address: "MDA Chowk, Multan, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Luxury Spa",
    category: "beauty-salon",
    gender: "Women and Men",
    salonSlug: "serenity-spa",
    services: {
      features: [
        {
          name: "Serenity Spa Experience",
          duration: "120 min",
          price: "PKR 6,000",
          details: "Includes aromatherapy massage and facial.",
        },
        { name: "Mud Wrap Treatment", duration: "60 min", price: "PKR 3,500" },
        { name: "Signature Facial", duration: "45 min", price: "PKR 2,200" },
      ],
      hair_and_beard: [
        { name: "Color Highlights", duration: "90 min", price: "PKR 4,500" },
        { name: "Men's Haircut", duration: "30 min", price: "PKR 800" },
      ],
      massage: [
        {
          name: "Aromatherapy Massage",
          duration: "60 min",
          price: "PKR 4,000",
        },
        { name: "Hot Stone Massage", duration: "90 min", price: "PKR 5,500" },
      ],
      spa: [
        { name: "Hydrating Facial", duration: "60 min", price: "PKR 2,800" },
        { name: "Body Polish", duration: "45 min", price: "PKR 3,000" },
      ],
      waxing: [
        { name: "Upper Lip Wax", duration: "15 min", price: "PKR 400" },
        { name: "Full Leg Wax", duration: "60 min", price: "PKR 1,500" },
      ],
      packages: [
        {
          name: "Complete Wellness Package",
          duration: "150 min",
          price: "PKR 9,000",
          details: "Facial, massage, and body treatment included.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sara",
        memberRating: 4.8,
        memberSpeciality: "Spa Specialist",
        memberImg: "path_to_member_image_2",
      },
    ],
    customerReviews: [
      {
        customerName: "Hassan",
        customerImg: "path_to_customer_image_2",
        reviewDateTime: "2024-10-29",
        customerReviewStars: 4,
        customerReviewMessage: "A tranquil atmosphere with great service.",
      },
    ],
    about:
      "The Secret Serenity Spa & Salon offers a unique blend of relaxation and beauty treatments.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Online Booking Available", "Membership Discounts"],
  },

  {
    id: 2,
    name: "Jasmine Bliss Salon",
    rating: "4.5",
    reviews: "180",
    city: "multan",
    address: "Sadar Bazar, Multan, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Hair Specialists",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "royal-bliss",
    services: {
      features: [
        {
          name: "Complete Bridal Experience",
          duration: "300 min",
          price: "PKR 20,000",
          details: "Includes bridal makeup, hair, and mehndi.",
        },
        { name: "Luxury Facial", duration: "60 min", price: "PKR 3,000" },
        { name: "Gel Manicure", duration: "45 min", price: "PKR 1,500" },
      ],
      hair_and_beard: [
        { name: "Hair Extensions", duration: "120 min", price: "PKR 8,000" },
        { name: "Beard Trimming", duration: "30 min", price: "PKR 500" },
      ],
      massage: [
        { name: "Couples Massage", duration: "90 min", price: "PKR 7,000" },
        { name: "Back Massage", duration: "45 min", price: "PKR 2,500" },
      ],
      spa: [
        { name: "Anti-Aging Facial", duration: "60 min", price: "PKR 3,500" },
        { name: "Spa Body Wrap", duration: "90 min" },
      ],
      waxing: [
        { name: "Bikini Wax", duration: "30 min", price: "PKR 1,000" },
        { name: "Full Body Wax", duration: "90 min", price: "PKR 4,500" },
      ],
      packages: [
        {
          name: "Ultimate Glam Package",
          duration: "150 min",
          price: "PKR 10,000",
          details: "Includes facial, massage, and hairstyling.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Sana",
        memberRating: 4.9,
        memberSpeciality: "Makeup Artist",
        memberImg: "path_to_member_image_1",
      },
    ],
    customerReviews: [
      {
        customerName: "Farah",
        customerImg: "path_to_customer_image_1",
        reviewDateTime: "2024-10-28",
        customerReviewStars: 5,
        customerReviewMessage: "Amazing service and very professional staff!",
      },
    ],
    about:
      "Jasmine specializes in bridal makeup and offers a luxurious experience.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "21:00" }],
      Tuesday: [{ opening: "10:00", closing: "21:00" }],
      Wednesday: [{ opening: "10:00", closing: "21:00" }],
      Thursday: [{ opening: "10:00", closing: "21:00" }],
      Friday: [{ opening: "10:00", closing: "22:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: ["Gift Cards Available", "Loyalty Programs"],
  },

  {
    id: 3,
    name: "The Chic Boutique Salon",
    rating: "4.6",
    reviews: "90",
    city: "multan",
    address: "New Multan, Multan, Pakistan",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/royalSpa/royal-spa-inner-1.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-2.jpg",
      "../../../../public/images/salons/royalSpa/royal-spa-inner-3.jpg",
    ],
    speciality: "Fashion & Style",
    category: "beauty-salon",
    gender: "Women only",
    salonSlug: "chic-boutique",
    services: {
      features: [
        {
          name: "Fashion Bridal Makeup",
          duration: "150 min",
          price: "PKR 12,000",
          details: "Stylish bridal makeup focusing on contemporary trends.",
        },
        { name: "Evening Glam Makeup", duration: "75 min", price: "PKR 4,000" },
        { name: "Natural Glow Facial", duration: "50 min", price: "PKR 2,200" },
      ],
      hair_and_beard: [
        { name: "Layered Haircut", duration: "60 min", price: "PKR 1,800" },
        { name: "Ombre Hair Color", duration: "120 min", price: "PKR 5,000" },
      ],
      massage: [
        { name: "Deep Tissue Massage", duration: "75 min", price: "PKR 5,000" },
        {
          name: "Relaxing Scalp Massage",
          duration: "30 min",
          price: "PKR 1,200",
        },
      ],
      spa: [
        {
          name: "Gold Facial Treatment",
          duration: "90 min",
          price: "PKR 4,000",
        },
        {
          name: "Exfoliating Body Wrap",
          duration: "60 min",
          price: "PKR 3,500",
        },
      ],
      waxing: [
        { name: "Full Arm Wax", duration: "30 min", price: "PKR 800" },
        { name: "Facial Wax", duration: "20 min", price: "PKR 500" },
      ],
      packages: [
        {
          name: "Chic Glam Package",
          duration: "180 min",
          price: "PKR 9,000",
          details: "Includes bridal makeup, facial, and hairstyling.",
        },
      ],
    },
    teamMembers: [
      {
        memberName: "Ayesha",
        memberRating: 4.8,
        memberSpeciality: "Bridal Consultant",
        memberImg: "path_to_member_image_3",
      },
    ],
    customerReviews: [
      {
        customerName: "Nadia",
        customerImg: "path_to_customer_image_3",
        reviewDateTime: "2024-10-30",
        customerReviewStars: 5,
        customerReviewMessage:
          "Best experience! The staff was so attentive and professional.",
      },
    ],
    about:
      "The Chic Boutique Salon focuses on the latest fashion trends and personalized beauty services.",
    openingTimes: {
      Monday: [{ opening: "10:00", closing: "20:00" }],
      Tuesday: [{ opening: "10:00", closing: "20:00" }],
      Wednesday: [{ opening: "10:00", closing: "20:00" }],
      Thursday: [{ opening: "10:00", closing: "20:00" }],
      Friday: [{ opening: "10:00", closing: "21:00" }],
      Saturday: [{ opening: "10:00", closing: "21:00" }],
      Sunday: [{ closed: "closed" }],
    },
    additionalInformation: [
      "Referral Discounts",
      "Special Packages for Events",
    ],
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
