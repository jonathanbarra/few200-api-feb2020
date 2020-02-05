import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingController } from './shopping.controller';

describe('Shopping Controller', () => {
  let controller: ShoppingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingController],
    }).compile();

    controller = module.get<ShoppingController>(ShoppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
