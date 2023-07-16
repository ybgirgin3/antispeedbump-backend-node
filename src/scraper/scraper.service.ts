import { Injectable } from '@nestjs/common';
import { getHeaders } from '../helpers/headers.service';
import { ScrapeDto } from './dto/scrape.dto';
import axios from 'axios';

@Injectable()
export class ScraperService {
  private headers: object;
  private url: string;
  private dynamicHeaders: object;
  private scrapeResponse: object;
  private errorResponse: object;

  async fetch(scraperDto: ScrapeDto) {
    // headers
    this.dynamicHeaders = {
      referer: `https://www.instagram.com/${scraperDto.username}/`,
    };
    this.headers = { ...getHeaders, ...this.dynamicHeaders };

    // urls
    this.url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${scraperDto.username}`;

    // request
    await axios({
      method: 'get',
      url: this.url,
      data: {},
      headers: this.headers,
    })
      .then((res) => {
        this.scrapeResponse = res.data;
        this.errorResponse = null;
        // console.log('scrapeResponse', this.scrapeResponse);
      })
      .catch((err) => {
        this.errorResponse = err;
        this.scrapeResponse = null;
      });

    return {
      scrapeResponse: this.scrapeResponse,
      errorResponse: this.errorResponse,
    };
  }
}
