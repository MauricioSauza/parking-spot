import { Body, Controller, Post } from "@nestjs/common";
import { ParkingSpotGatewayService } from "./Parking.spot.gateway.service";
import { SpotInterface } from "./types/interfaces";


@Controller("/api")
export class ParkingSpotController {
    constructor(
        private readonly parkingSpotGatewayService: ParkingSpotGatewayService
    ) {}

    @Post("/send-data")
    handlePost(@Body() body: SpotInterface) {
        this.parkingSpotGatewayService.handleMessage(body);

        return body;
    }
}