import { Body, Controller, Post } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScrapeDto } from './dto/scrape.dto';
import { scrapeParser } from 'src/helpers/scrape.parser';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Post('scrape')
  async scrape(@Body() scrapeDto: ScrapeDto) {
    const rawData = await this.scraperService.fetch(scrapeDto);
    if (rawData.errorResponse === null) {
      return {
        status: 200,
        message: 'Data fetch and parsed successfully',
        error: rawData.errorResponse,
        response: scrapeParser(rawData.scrapeResponse),
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
