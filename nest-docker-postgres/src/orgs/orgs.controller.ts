import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrgsService } from './orgs.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { Org } from './entities/org.entity';

// @ApiBearerAuth()
@ApiTags('org')
@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Post()
  @ApiOperation({ summary: 'Create org' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Org,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createOrgDto: CreateOrgDto): Promise<Org> {
    return this.orgsService.create(createOrgDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Org,
  })
  findOne(@Param('id') id: string): Org {
    return this.orgsService.findOne(+id);
  }
}
