import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StressModule } from "./stress/stress.module";
import { Stress } from "./stress/entities/stress.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      entities: [Stress],
      synchronize: true,
    }),
    StressModule,
  ],
})
export class AppModule {}
