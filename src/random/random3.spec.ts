import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const newUser = {
      email: 'test@example.com',
      name: 'Test User',
    };
    const createdUser = await service.create(newUser);
    expect(createdUser).toBeDefined();
    expect(createdUser.email).toBe(newUser.email);
    expect(createdUser.name).toBe(newUser.name);
  });


  it('should find a user by id', async () => {
    const newUser = await service.create({ email: 'findtest@example.com', name: 'Find Test User' });
    const foundUser = await service.findOne(newUser.id);
    expect(foundUser).toBeDefined();
    expect(foundUser.id).toBe(newUser.id);
  });

  it('should find all users', async () => {
    await service.create({ email: 'findall1@example.com', name: 'Find All User 1' });
    await service.create({ email: 'findall2@example.com', name: 'Find All User 2' });
    const users = await service.findAll();
    expect(users.length).toBeGreaterThanOrEqual(2);
  });


  it('should update a user', async () => {
    const newUser = await service.create({ email: 'updatetest@example.com', name: 'Update Test User' });
    const updatedUser = await service.update(newUser.id, { name: 'Updated User' });
    expect(updatedUser.name).toBe('Updated User');
  });

  it('should delete a user', async () => {
    const newUser = await service.create({ email: 'deletetest@example.com', name: 'Delete Test User' });
    await service.remove(newUser.id);
    const deletedUser = await service.findOne(newUser.id);
    expect(deletedUser).toBeNull();
  });

  it('should handle error when user not found', async () => {
    await expect(service.findOne(9999)).rejects.toThrow();
  });

  it('should handle error when updating non-existent user', async () => {
    await expect(service.update(9999, { name: 'test' })).rejects.toThrow();
  });

  it('should handle error when deleting non-existent user', async () => {
    await expect(service.remove(9999)).rejects.toThrow();
  });

});