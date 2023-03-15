import {Body, Controller, Get, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { StressService } from "./stress.service";
import { CreateStressDto } from "./dto/create-stress.dto";
import {Stress} from "./entities/stress.entity";
import { UploadService } from "../utils/upload.service";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiBearerAuth()
@ApiTags('stresses')
@Controller('stresses')
export class StressController {

    constructor(private readonly stressService: StressService,
                private readonly uploadService: UploadService) {}

    @Post()
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiOperation({ summary: 'Create Stress' })
    async create(@Body() createStressDto: CreateStressDto) {
        const result: Stress = await this.stressService.create(createStressDto);
        return { message: 'success', result: result };
    }

    @Post('upload')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiOperation({ summary: 'Upload Image' })
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file) {
        const result = await this.uploadService.upload(file);
        return { message: 'success', result: result };
    }

    @Get()
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiOperation({ summary: 'Create Stress' })
    async findAll() {
        const result: Stress[] = await this.stressService.findAll();
        return { message: 'success', result: result };
    }
}