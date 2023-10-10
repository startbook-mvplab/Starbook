import { IProduct } from "../models";

export const productAdapter = (product: any): IProduct => ({
   name: product.name,
   price: product.price,
   buyDate: product.buyDate,
   num_pedido: product.num_pedido,
   downloadState: product.downloadState,
   isdownload: product.isdownload,
   downloadCount: product.downloadCount,

   nit: product.nit,
   nur: product.nur,
   number: product.number,
   tipoPersona: product.tipo_persona,
   razonSocial: product.razon_social,
   trade: product.trade,
   registration: product.registration,

   email: product.email,
   phone: product.phone,
   userName: product.userName,

   category: product.category,
   tipoServicio: product.tipoServicio,
   id: product.id,
});

