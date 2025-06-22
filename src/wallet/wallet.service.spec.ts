import { Test, TestingModule } from '@nestjs/testing';
import { EscrowService } from './wallet.service';

describe('WalletService', () => {
  let service: EscrowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscrowService],
    }).compile();

    service = module.get<EscrowService>(EscrowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
