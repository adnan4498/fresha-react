import tribeImg from "../../../../public/images/salons/pakistan/karachi/tribesSalon/tribe-1.jpg";
import eyeLashImg from "../../../../public/images/salons/pakistan/karachi/eyelashLadiesSalon/eye-lash-salon-2.jpg";
import { generateRandomSalons } from "../../randomSalons/generateRandomSalons";

export const sharjahSalons = [
  {
    id: 0,
    name: "Tribes Dubai",
    rating: "4.9",
    city : "sharjah",
    reviews: "193",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair Salon",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Sharjah 2",
    city : "sharjah",
    rating: "4.7",
    reviews: "237",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Eyebrows & Lashes",
    gender: "Women only",
  },
];

export const abuDhabiSalons = [
  {
    id: 0,
    name: "abuDhabi 1",
    city : "abuDhabi",
    rating: "4.8",
    reviews: "223",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    gender: "Men only",
  },
  {
    id: 1,
    name: "abuDhabi 2",
    city : "abuDhabi",
    rating: "4.6",
    reviews: "2,086",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Hair Salon",
    gender: "Women only",
  },
];

export const AjmanSalons = [
  {
    id: 0,
    name: "Ajman 1",
    city : "Ajman",
    rating: "4.4",
    reviews: "53",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Eyebrows & Lashes",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Ajman 2",
    city : "Ajman",
    rating: "4.9",
    reviews: "700",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    gender: "Women only",
  },
];

export const FujairahSalons = [
  {
    id: 0,
    name: "Fujairah 1",
    city : "Fujairah",
    rating: "5.0",
    reviews: "663",
    address: "Office 1991, Al Ghubrah Street, Sharjah, Dubai",
    img1: tribeImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
    speciality: "Barber Shop",
    gender: "Men only",
  },
  {
    id: 1,
    name: "Fujairah 2",
    city : "Fujairah",
    rating: "5.0",
    reviews: "481",
    address: "Office 1992, Al Jannat Street, Sharjah, Dubai",
    img1: eyeLashImg,
    innerImgs: [
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
      "../../../../public/images/salons/hairSalon/hair-salon-inner-2.jpg",
    ],
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
