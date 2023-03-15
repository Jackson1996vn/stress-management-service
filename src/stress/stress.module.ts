import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StressService } from "./stress.service";
import { StressController } from "./stress.controller";
import { Stress } from "./entities/stress.entity";
import { UploadService } from "../utils/upload.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stress])],
    providers: [StressService, UploadService],
    controllers: [StressController],
})
export class StressModule {}