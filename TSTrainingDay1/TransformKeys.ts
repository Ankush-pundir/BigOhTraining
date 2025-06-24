interface ObjStructure {
    firstName : string,
    lastName : string,
    age : number
}


const user: ObjStructure = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
}


function transformKeys(obj1: ObjStructure, obj2: Partial<ObjStructure>): ObjStructure {
   return {...obj1, ...obj2}
}



console.log(transformKeys(user,{firstName:"first",lastName:"last"}))