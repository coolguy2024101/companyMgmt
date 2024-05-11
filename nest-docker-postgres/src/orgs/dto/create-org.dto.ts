import { IsString } from 'class-validator';
import { Description, Contact } from 'src/common/entities/common.entity';
import { GeoJSON } from 'geojson';

export class CreateOrgDto {
  @IsString()
  readonly name: string;

  readonly description: Description;

  readonly address: GeoJSON;

  readonly contact: Contact;
}
