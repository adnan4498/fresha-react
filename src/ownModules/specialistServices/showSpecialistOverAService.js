export const showSpecialistOverAService = function (
  professionalsList,
  services
) {
  console.log(professionalsList, "professionals");
  console.log(services, "services");

  let seperateSpecialityWords = (professional, i) => {
    let speciality = professional[i].memberSpeciality.toLocaleLowerCase();

    let regex = /\b(yoga|specialist|therapist|head|technician)\b|&/gi;
    let removedWords = speciality.replace(regex, "").trim();
    removedWords.includes("  ") &&
      (removedWords = removedWords.replace(" ", ""));
    return (removedWords = removedWords.split(" "));
  };

  let getTheSpecialists = [];

  for (let i = 0; i < professionalsList.length; i++) {
    let gotWords = seperateSpecialityWords(professionalsList, i);

    for (let j = 0; j < services.length; j++) {
        // console.log(services[j]?.name.includes(gotWords), "name")
        // console.log(services[j].name, "name")
        // console.log(gotWords, "got words")
    //   services[j]?.name.includes(gotWords) && getTheSpecialists.push(professionalsList[i]);
    }
  }

  //   console.log(getTheSpecialists, "getTheSpecialists")

  let ab = "Haircut"
  let bb = "hair"

  console.log(ab.includes(bb))

  //   let ab = ["a", "b", "c"]
  //   let bb = ["b", "a"]

  //   for(let items of ab){
  //     console.log(bb.includes(items))
  //   }

  // console.log(gotWords, "gotWords")
};
