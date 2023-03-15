import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Stress } from "./entities/stress.entity";
import { CreateStressDto } from "./dto/create-stress.dto";

@Injectable()
export class StressService {
    constructor(
        @InjectRepository(Stress) private readonly stressRepository: MongoRepository<Stress>
    ) {}

    async findAll(): Promise<Stress[]> {
        return await this.stressRepository.find();
    }

    async create(dto: CreateStressDto): Promise<Stress> {
        const entity: Stress = new Stress();
        entity.createdDate = new Date();
        entity.stressLevel = dto.stressLevel;
        entity.imageUrl = dto.imageUrl;
        return await this.stressRepository.save(entity);
    }
}