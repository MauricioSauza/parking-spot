import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingSpotModule } from './parking-spot/parking-spot.module';

@Module({
  imports: [ParkingSpotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
