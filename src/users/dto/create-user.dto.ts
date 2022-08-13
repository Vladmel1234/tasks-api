import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  @IsString({ message: 'is string' })
  @IsEmail({}, { message: 'invalid email' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'password' })
  @IsString({ message: 'is string' })
  @Length(4, 16, { message: 'should be between 4 to 16 chars' })
  readonly password: string;
}
