import database from '../models';

class ProductsToOrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.ProductsToOrder.findAll({ where: { orderId } });
    } catch (error) {
      throw error;
    }
  }
  static async add(orderId, newProductsToOrder) {
    try {
      return await database.ProductsToOrder.create({
        ...newProductsToOrder,
        orderId,
      });
    } catch (error) {
      throw error;
    }
  }
}
export default ProductsToOrderService;
