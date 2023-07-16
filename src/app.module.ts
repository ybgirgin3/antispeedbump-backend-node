import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScraperService } from './scraper/scraper.service';
import { ScraperController } from './scraper/scraper.controller';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  controllers: [AppController, ScraperController],
  providers: [AppService, ScraperService],
  imports: [ScraperModule],
})
export class AppModule {}
