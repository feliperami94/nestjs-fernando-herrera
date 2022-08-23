import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {v4 as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';



@Injectable()
export class CarsService {


    private cars: Car[]  = [
        {
            id:uuid(),
            brand: 'Toyota',  
            model: 'Corolla'
        },

        {
            id:uuid(),
            brand:'Honda',  
            model: 'Civic'
        },

        {
            id:uuid(),
            brand: 'Jeep',  
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.cars;
    }

    findById(id: string){
        const car =  this.cars.find(car => car.id === id);
        if(!car){
            throw new NotFoundException(`Car with id: ${id} not found`);
        }
        return car;
    }

    createNewCar(createCarDto: CreateCarDto){
        const car: Car ={
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car

    }

    updateCar(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException('Car id inside body is different from the path id')

        this.cars = this.cars.map(car =>{
            if(car.id === id){
                carDB = {...carDB, ...updateCarDto, id}
                return carDB
            }
            return car
        })


        return carDB; //Updated car

    }


}
