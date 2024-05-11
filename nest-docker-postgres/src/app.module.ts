import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrgsModule } from './orgs/orgs.module';

@Module({
  imports: [ConfigModule.forRoot(), OrgsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
