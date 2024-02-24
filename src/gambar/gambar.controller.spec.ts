import { Test, TestingModule } from '@nestjs/testing';
import { GambarController } from './gambar.controller';

describe('GambarController', () => {
  let controller: GambarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GambarController],
    }).compile();

    controller = module.get<GambarController>(GambarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
