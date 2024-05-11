import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';

export class Contact {
  @ApiProperty({
    example: '张三',
    description: "The contact person's name",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '155XXXX0756',
    description: "The contact person's phone number",
  })
  @IsString()
  readonly phone: string;
}

export enum DescriptionType {
  TEXT = 'TEXT',
  MARK_DOWN = 'MARK_DOWN',
}

export class Description {
  @ApiProperty({
    description:
      'Description content. It can be written as plain text or markdown',
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 'MARK_DOWN',
    description:
      'Indicates description content type. We currently support TEXT | MARK_DOWN.',
  })
  @IsEnum(DescriptionType)
  type: DescriptionType;
}
