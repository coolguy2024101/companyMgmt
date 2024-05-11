import { ApiProperty } from '@nestjs/swagger';
import { Description, Contact } from 'src/common/entities/common.entity';
import { GeoJSON } from 'geojson';

export class Org {
  @ApiProperty({
    example: '旧南方法语培训-活力城分校',
    description: 'The name of the org (including location).',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the org.',
  })
  description?: Description;

  @ApiProperty({
    description: 'The address of the org, including longitude and latitude.',
  })
  address?: GeoJSON;

  @ApiProperty({
    description: 'The contact of the org.',
  })
  contact?: Contact;

  @ApiProperty({
    default: new Date(),
    description: 'The record created date time.',
  })
  created_at?: Date;

  @ApiProperty({
    default: new Date(),
    description: 'The record last updated date time',
  })
  last_updated_at?: Date;
}

/**
 {
  "name": "旧南方法语培训-活力城分校",
  "description": {
    "content": "#旧南方法语培训-活力城分校\n",
    "type": "MARK_DOWN"
  },
  "address": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        43.891672,
        125.334441
      ]
    },
    "properties": {
      "name": "长春市南关区重庆路88号"
    }
  },
  "contact": {
    "name": "张三",
    "phone": "15500000756"
  },
  "created_at": "2023-12-14T12:34:37.734Z",
  "last_updated_at": "2023-12-14T12:34:37.734Z"
}
 */
