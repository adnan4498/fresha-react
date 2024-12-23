const servicesOfSpecialist = function (specialist, services) {
  // console.log(services, "services");

  let speciality = specialist.memberSpeciality.toLocaleLowerCase();


  let regex = /\b(yoga|specialist)\b|&/gi;

  let removedWords = speciality.replace(regex, "").trim()

  removedWords.includes("  ") && (removedWords = removedWords.replace(" ", ""))
  
  removedWords = removedWords.split(" ")
  
  // console.log(removedWords, "rr")

  // services = [services]

  console.log(services)

  let getServices = []

  for(let item in services){
    for(let i = 0; i < services[item].length; i++){
      let lowered = services[item][i].name.toLowerCase()
      if(lowered.includes("massage")){
        getServices.push({[item] : services[item][i]})
      } 
    }
  }

  console.log(getServices, "gs")



  // let getServices = []

  // if(speciality.includes("hair")){
  //   Object.keys(services).forEach((item, i) => {
  //     let serviceLowerCased = item.toLowerCase()
  //     if(serviceLowerCased.includes("hair")){
  //       getServices.push(item)  
  //     } 
  //   })
  // }

  // let getSpecialistServices = services[getServices]
  
  // let getFinalObj = {
  //   [getServices] : getSpecialistServices
  // }

  // // console.log(getFinalObj, "gf")


};

export default servicesOfSpecialist;
