import MenuService from '../services/MenuService';
import Util from '../utils/Utils';

const util = new Util();

class MenuController {
  static async getAllMenu(req, res) {
    try {
      const allMenu = await MenuService.getAllMenu();
      if (allMenu.length > 0) {
        util.setSuccess(200, 'Menu encontrado!', allMenu);
      } else {
        util.setSuccess(200, 'Nenhum produto encontrado!');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addProduct(req, res) {
    if (!req.body.product || !req.body.price || !req.body.type || !req.body.category) {
      util.setError(400, 'Por favor, inclua todas as informações!');
      return util.send(res);
    }
    const newProduct = req.body;
    try {
      const createdProduct = await MenuService.addProduct(newProduct);
      util.setSuccess(201, 'Produto adicionado!', createdProduct);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedProduct(req, res) {
    const alteredProduct = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do produto!');
      return util.send(res);
    }
    try {
      const updateProduct = await MenuService.updateProduct(id, alteredProduct);
      if (!updateProduct) {
        util.setError(404, `Nenhum produto encontrado com o ID: ${id}`);
      } else {
        util.setSuccess(200, 'Produto atualizado!', updateProduct);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do produto!');
      return util.send(res);
    }

    try {
      const theProduct = await MenuService.getProduct(id);
      if (!theProduct) {
        util.setError(404, `Nenhum produto encontrado com o ID: ${id}`);
      } else {
        util.setSuccess(200, 'Produto encontrado', theProduct);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do produto!');
      return util.send(res);
    }
    try {
      const ProductToDelete = await MenuService.deleteProduct(id);
      if (ProductToDelete) {
        util.setSuccess(200, 'Produto excluído!');
      } else {
        util.setError(404, `Nenhum produto encontrado com o ID: ${id}`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default MenuController;
