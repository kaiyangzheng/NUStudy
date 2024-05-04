import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  // must keep ConfigModule.forRoot() as first import
  imports: [ConfigModule.forRoot(), TrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
