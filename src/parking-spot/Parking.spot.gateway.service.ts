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

  public floors: any;

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

  @SubscribeMessage('create')
  handleCreate(@MessageBody() data: any) {
    if (this.floors === null) {
      this.floors = data;
    }
    this.server.emit('update-all', this.floors);
  }

  @SubscribeMessage('update-all')
  handleUpdate(@MessageBody() data: any) {
    this.floors = data;
    this.server.emit('update-all', this.floors);
  }
}
