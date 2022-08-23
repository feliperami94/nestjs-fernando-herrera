import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
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


}
