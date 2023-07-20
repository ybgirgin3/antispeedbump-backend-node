import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AntiSpeed,
  AntiSpeedSchema,
} from '../helpers/db/schemas/antispeed.schema';

@Module({
  controllers: [ScraperController],
  providers: [ScraperService],
  imports: [
    MongooseModule.forFeature([
      { name: AntiSpeed.name, schema: AntiSpeedSchema },
    ]),
  ],
})
export class ScraperModule {}
