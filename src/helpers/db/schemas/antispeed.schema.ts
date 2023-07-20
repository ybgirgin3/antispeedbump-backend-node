import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AntiSpeedDocument = HydratedDocument<AntiSpeed>;

@Schema()
export class AntiSpeed {
  @Prop({ type: String })
  username: string;

  @Prop({ type: Object })
  response: object;

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now() })
  updatedAt: Date;
}

export const AntiSpeedSchema = SchemaFactory.createForClass(AntiSpeed);
