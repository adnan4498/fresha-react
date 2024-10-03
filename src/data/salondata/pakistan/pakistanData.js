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
    speciality: "Hair Salon",
    category: "hair-salon",
    gender: "Men only",
    salonSlug: "multan-1",
  },
  {
    id: 1,
    name: "karachi 2",
    rating: "4.8",
    reviews: "700",
    city: "karachi",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
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
