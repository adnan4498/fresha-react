import { generateRandomSalons } from "../../../ownModules/randomSalons/generateRandomSalons";
import allDubaiSalons from "../dubai/dubaiData";
import allOmanSalons from "../oman/omanData";
import allPakistanSalons from "../pakistan/pakistanData";

let pkSalons = allPakistanSalons
let dubaiSalons = allDubaiSalons
let omanSalons = allOmanSalons

let merge = pkSalons.concat(dubaiSalons, omanSalons)

let globalSalons =  generateRandomSalons(merge)

export default globalSalons