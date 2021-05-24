import { Connection } from 'mongoose';
import { ProductSchema } from 'src/db/shcema/product.schema';
export const productProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];  