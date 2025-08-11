import { TransferTypeResponseDto } from '../../../../src/features/transfer-type/application/dto/transfer-type.response.dto';

describe('TransferTypeResponseDto', () => {
  it('should create an instance with correct properties', () => {
    const dto = new TransferTypeResponseDto();
    dto.id = 1;
    dto.name = 'Visa';
    dto.description = 'Tarjeta Visa';
    dto.createdAt = '2025-08-10T00:00:00Z';
    dto.updatedAt = '2025-08-11T00:00:00Z';

    expect(dto.id).toBe(1);
    expect(dto.name).toBe('Visa');
    expect(dto.description).toBe('Tarjeta Visa');
    expect(dto.createdAt).toBe('2025-08-10T00:00:00Z');
    expect(dto.updatedAt).toBe('2025-08-11T00:00:00Z');
  });
});
