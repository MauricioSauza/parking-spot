import { Module } from '@nestjs/common';
import { ParkingSpotGatewayService } from './Parking.spot.gateway.service';
import { ParkingSpotController } from './Parking.spot.controller';

@Module({
    providers: [ParkingSpotGatewayService],
    controllers: [ParkingSpotController]
})
export class ParkingSpotModule {}
