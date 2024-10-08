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
        customerImg: "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        reviewDateTime: "Wed, 4 oct 2024 at 4:32pm",
        customerReviewStars: 5,
        customerReviewMessage:"Great service and friendly staff. Highly recommend!",
      },
      {
        customerName: "Sara Ahmed",
        reviewDateTime: "Fri, 31 oct 2024 at 6:16pm",
        customerImg: "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage: "Amazing Moroccan bath experience. Will visit again!",
      },
      {
        customerName: "John Doe",
        reviewDateTime: "Tue, 8 oct 2024 at 10:07pm",
        customerImg: "../../../../public/images/salons/hairSalon/customer-dummy-img2.png",
        customerReviewStars: 4,
        customerReviewMessage: "Best hair treatment in town, totally worth the price.",
      },
    ],
  },
  {
    id: 1,
    name: "karachi 2",
    rating: "4.8",
    reviews: "700",
    city: "karachi",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Eyebrows & Lashes",
    category: "eyebrows-lashes",
    gender: "Unisex",
    salonSlug: "multan-1",
  },
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
    speciality: "Eyebrows & Lashes",
    category: "eyebrows-lashes",
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
