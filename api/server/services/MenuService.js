import database from '../src/models';

class MenuService {
  static async getAllMenu() {
    try {
      return await database.Menu.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.Menu.create(newProduct);
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const productToUpdate = await database.Menu.findOne({
        where: { id: Number(id) },
      });
      if (productToUpdate) {
        await database.Menu.update(updateProduct, { where: { id: Number(id) } });
        return updateProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await database.Menu.findOne({
        where: { id: Number(id) },
      });
      return theProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await database.Menu.findOne({
        where: { id: Number(id) },
      });

      if (productToDelete) {
        const deletedProduct = await database.Menu.destroy({
          where: { id: Number(id) },
        });
        return deletedProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default MenuService;
