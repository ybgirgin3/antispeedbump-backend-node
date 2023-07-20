import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AntiSpeed } from './schemas/antispeed.schema';
import { ScrapeResponseDto } from './dto/antispeed.dto';

export class DbService {
  constructor(
    @InjectModel(AntiSpeed.name)
    private readonly antiSpeedModel: Model<AntiSpeed>,
  ) {}

  async create(createAntiSpeed: ScrapeResponseDto) {
    const isExists = await this.antiSpeedModel
      .findOne({
        username: createAntiSpeed.username,
      })
      .lean();

    if (isExists) {
      return {
        status: 409,
        message: 'Data Already Exists',
        response: createAntiSpeed,
      };
    } else {
      return {
        status: 201,
        message: 'Data Created',
        response: await this.antiSpeedModel.create(createAntiSpeed),
      };
    }
  }

  async findAll(): Promise<AntiSpeed[]> {
    return this.antiSpeedModel.find().exec();
  }

  async findOne(id: string): Promise<AntiSpeed> {
    return this.antiSpeedModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.antiSpeedModel.findByIdAndRemove({ _id: id }).exec();
  }
}
