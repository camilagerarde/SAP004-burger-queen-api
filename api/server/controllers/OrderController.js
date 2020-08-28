import OrderService from '../services/OrderService';
import Util from '../utils/Utils';

const util = new Util();

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const allOrder = await OrderService.getAllOrders();
      if (allOrder.length > 0) {
        util.setSuccess(200, 'Pedidos encontrados', allOrder);
      } else {
        util.setSuccess(200, 'Nenhum pedido encontrado!');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addOrder(req, res) {
    if (
      !req.body.waiter ||
      !req.body.table ||
      typeof req.body.isActive !== 'boolean' ||
      !req.body.status
    ) {
      util.setError(400, 'Por favor, inclua todas as informações!');
      return util.send(res);
    }
    const newOrder = req.body;
    try {
      const createdOrder = await OrderService.addOrder(newOrder);
      util.setSuccess(201, 'Pedido adicionado!', createdOrder);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedOrder(req, res) {
    const alteredOrder = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do pedido!');
      return util.send(res);
    }
    try {
      const updateOrder = await OrderService.updateOrder(id, alteredOrder);
      if (!updateOrder) {
        util.setError(404, `Nenhum pedido encontrado com o ID: ${id}`);
      } else {
        util.setSuccess(200, 'Pedido atualizado', updateOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do pedido!');
      return util.send(res);
    }

    try {
      const theOrder = await OrderService.getOrder(id);

      if (!theOrder) {
        util.setError(404, `Nenhum pedido encontrado com o ID: ${id}`);
      } else {
        util.setSuccess(200, 'Pedido encontrado', theOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Por favor, insira o número(ID) correto do pedido!');
      return util.send(res);
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(id);

      if (orderToDelete) {
        util.setSuccess(200, 'Pedido excluído!');
      } else {
        util.setError(404, `Nenhum pedido encontrado com o ID: ${id}`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default OrderController;
