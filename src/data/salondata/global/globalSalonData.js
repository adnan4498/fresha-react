import { generateRandomSalons } from "../../../ownModules/randomSalons/generateRandomSalons";
import allDubaiSalons from "../dubai/dubaiData";
import allPakistanSalons from "../pakistan/pakistanData";

let pkSalons = allPakistanSalons
let dubaiSalons = allDubaiSalons

let merge = pkSalons.concat(dubaiSalons)

let globalSalons =  generateRandomSalons(merge)

export default globalSalons