import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & Product;

@Schema()
export class Product {
  @Prop()
  productName: string;

  @Prop({ required: true })
  date: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  person: string;

  @Prop()
  avatar: string;

  @Prop({
    type: mongoose.Schema.Types.Mixed,
  })
  bought: {
    buyDate: number;
    buyer: string;
  };

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
