import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: Number,
  title: String,
  price: Number,
  overview:String
});

export interface Product {
    id: Number,
    title: String,
    price: Number,
    overview:String
}