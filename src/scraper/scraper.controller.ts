import { Body, Controller, Post } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { DbService } from '../helpers/db/db.service';
import { ScrapeDto } from './dto/scrape.dto';
import { scrapeParser } from 'src/helpers/scrape.parser';

import { ScrapeResponseDto } from '../helpers/db/dto/antispeed.dto';

@Controller('scraper')
export class ScraperController {
  constructor(
    private readonly scraperService: ScraperService, // private readonly dbService: DbService,
  ) {}

  @Post('getFromAnother')
  async scrape(@Body() scrapeDto: ScrapeDto) {
    const rawData = await this.scraperService.fetch(scrapeDto);
    if (rawData.errorResponse === null) {
      const resp: ScrapeResponseDto = scrapeParser(rawData.scrapeResponse);
      return {
        status: 200,
        message: 'Data fetch and parsed successfully',
        error: rawData.errorResponse,
        response: resp,
      };
    } else {
      return {
        status: 404,
        message: 'Forbidden Request',
        error: rawData.errorResponse,
        response: {},
      };
    }
  }
}
