import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../randomSalons/generateRandomSalons";

export const sharjahSalons = [
  {
    id: 0,
    name: "Tribes Men's and Spa Salon ",
    rating: "4.9",
    reviews: "193",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    speciality: "Hair Salon",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Sharjah 2",
    rating: "4.7",
    reviews: "237",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    speciality: "Eyebrows & Lashes",
    gender: "Women only",
  },
];

export const abuDhabiSalons = [
  {
    id: 0,
    name: "abuDhabi 1",
    rating: "4.8",
    reviews: "223",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    speciality: "Barber Shop",
    gender: "Men only",
  },
  {
    id: 1,
    name: "abuDhabi 2",
    rating: "4.6",
    reviews: "2,086",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    speciality: "Hair Salon",
    gender: "Women only",
  },
];

export const AjmanSalons = [
  {
    id: 0,
    name: "Ajman 1",
    rating: "4.4",
    reviews: "53",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    speciality: "Eyebrows & Lashes",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Ajman 2",
    rating: "4.9",
    reviews: "700",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    speciality: "Barber Shop",
    gender: "Women only",
  },
];

export const FujairahSalons = [
  {
    id: 0,
    name: "Fujairah 1",
    rating: "5.0",
    reviews: "663",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    speciality: "Barber Shop",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Fujairah 2",
    rating: "5.0",
    reviews: "481",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    speciality: "Barber Shop",
    gender: "Women only",
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
