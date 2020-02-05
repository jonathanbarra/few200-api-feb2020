import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingController } from './shopping/shopping.controller';
import { ShoppingService } from './shopping/shopping.service';

@Module({
  imports: [],
  controllers: [AppController, ShoppingController],
  providers: [AppService, ShoppingService],
})
export class AppModule {}
