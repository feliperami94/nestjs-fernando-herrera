import { IsString, MinLength } from "class-validator";

export class CreateCarDto{

    @IsString({message: "The brand must be a real brand"})
    readonly brand: string;

    @IsString({message: "The model must be a fancy one"})
    @MinLength(3, {message: "The model should contain at least three characters"})
    readonly model: string;
}