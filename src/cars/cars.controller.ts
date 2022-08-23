import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe) //Can be used before a specific controller method, just after the request decorator. Not being used because I'm using the validation pipe globally
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get('/:id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.createNewCar(createCarDto);
        
    }

    @Patch('/:id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() body: any){
        return{
            body,
            id
        }
    }

    @Delete('/:id')
    deleteCar(@Param('id', ParseIntPipe) id: string){
        return {
            method: 'delete',
            id
        }
    }
    

}
