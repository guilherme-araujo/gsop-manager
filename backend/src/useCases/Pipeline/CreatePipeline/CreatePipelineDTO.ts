import { Program } from "../../../entities/Program"

export interface ICreatePipelineRequestDTO {
   name: string
   descr: string
   rootFolder: string
   programs: Program[]
}
