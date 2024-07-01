import { IsString, IsNotEmpty } from 'class-validator';
export class GitDto {

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  repository: string;

  @IsString()
  @IsNotEmpty()
  oId?: string;
}
