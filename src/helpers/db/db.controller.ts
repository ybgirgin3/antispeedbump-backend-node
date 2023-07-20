import { AntiSpeedDto } from './dto/antispeed.dto';
import { DbService } from './db.service';

export class DbController {
  constructor(private readonly dbService: DbService) {}

  async create(createAntiSpeed: AntiSpeedDto) {
    try {
      const scrapedResponse: object = await this.dbService.create(
        createAntiSpeed.scrapeResponse,
      );
      return scrapedResponse;
    } catch {
      return {
        status: 403,
        message: 'Forbidden',
        response: [],
      };
    }
  }

  async findAll() {
    try {
      const data = await this.dbService.findAll();
      return {
        status: 200,
        message: 'Expense(s) Found',
        response: data,
      };
    } catch {
      return {
        status: 404,
        message: 'Not Found',
        response: [],
      };
    }
  }

  async findOne(id: string) {
    try {
      const expense = this.dbService.findOne(id);
      return {
        status: 200,
        message: 'Expense Found',
        response: expense,
      };
    } catch {
      return {
        status: 404,
        message: 'Not Found',
        response: [],
      };
    }
  }

  async delete(id: string) {
    return this.dbService.delete(id);
  }
}
