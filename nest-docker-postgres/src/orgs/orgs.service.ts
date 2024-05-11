import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { Org } from './entities/org.entity';

@Injectable()
export class OrgsService {
  private readonly orgs: Org[] = [];

  create(org: CreateOrgDto): Org {
    const orgEntity: Org = org;
    const now = new Date();
    orgEntity.created_at = now;
    orgEntity.last_updated_at = now;
    this.orgs.push(orgEntity);
    return orgEntity;
  }

  findOne(id: number): Org {
    return this.orgs[id];
  }
}
