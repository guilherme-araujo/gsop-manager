import { Program } from "../../entities/Program"

export interface ICreateParameterRequestDTO {
   name: string
   descr: string
   program: Program
   param: string
   optional: boolean
}
