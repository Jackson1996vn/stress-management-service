import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateStressDto {

    @IsInt()
    @IsNotEmpty()
    @ApiProperty( {
        description: 'Stress level (0-5)',
        minimum: 0,
        maximum: 5,
        default: 0
    } )
    readonly stressLevel: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty( {
        description: 'Image Url'
    } )
    readonly imageUrl: string;
}