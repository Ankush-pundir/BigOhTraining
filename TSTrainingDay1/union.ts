function stringify(val: string | number): string {
    return String(val)
}


const val = stringify(76)

console.log(typeof(val))
console.log(val)



// api-response

// type ResponseData={
//     statusCode:number
//     data:{
//         count:number
//         rows:{
//             name:string
//         }[]
//     }
// }

// const resposeData:ResponseData={
//     statusCode:20
// }

// const demo=resposeData.data.rows.

