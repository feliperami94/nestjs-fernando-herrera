import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: "The brand must be a real brand"})
    @IsOptional()
    readonly brand?: string;

    @IsString({message: "The model must be a fancy one"})
    @MinLength(3, {message: "The model should contain at least three characters"})
    @IsOptional()
    readonly model?: string;
}