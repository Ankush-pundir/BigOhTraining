type OriginalTuple = [number, string, boolean];

type Reverse<T> =
  T extends [infer first, ...infer remaining] 
    ? [...Reverse<remaining>, first]          
    : [];                                


type ReversedTuple = Reverse<OriginalTuple>;


const original: OriginalTuple = [42, 'hello', true];

const reversed: ReversedTuple = [true, 'hello', 42];



const arr = [42, 'hello', true] as const ;

type ArrType = typeof arr;  


type age=12|20
type Generalized<T extends readonly any[]> =
  T extends readonly [infer First, ...infer remaining]
    ? [First extends number ? number :
       First extends string ? string :
       First extends boolean ? boolean :
       First, ...Generalized<remaining>]
    : [];


const age:age=12

type NormalizedArr = Generalized<ArrType>;


type ReversedTuple1 = Reverse<NormalizedArr>; 

const reversedTuple: ReversedTuple1 = [true, 'hello', 42];













