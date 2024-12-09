import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SpotInterface } from './types/interfaces';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ParkingSpotGatewayService
  implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  public server: Server;

  onModuleInit() {
    console.log('Websocket listening');
  }

  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('new-data')
  handleMessage(@MessageBody() data: SpotInterface) {
    this.server.emit('new-data', data);
  }
}
