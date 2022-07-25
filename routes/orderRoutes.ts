import express from "express";
import { BasicOrder, Order } from "../types/ProductOrder";
import * as orderModel from "../models/order";
const orderRouter = express.Router();
orderRouter.get("/", (req, res) => {
  orderModel.findTotalOrder((err: Error, orderRow: Order) => {
    if (err) {
      res.status(400).json({ message: err.message });
    }
    res.status(200).json({ data: orderRow });
  });
});
orderRouter.get("/:id", (req, res) => {
  const orderId: number = Number(req.params.id);
  orderModel.findOneOrder(orderId, (err: Error, order: Order) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).json({ data: order });
  });
});
orderRouter.post("/create", (req, res) => {
  const newOrder: BasicOrder = req.body;
  orderModel.createOrder(newOrder, (err: Error, orderId: number) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).json({ orderId: orderId });
  });
});
orderRouter.put("/:id", (req, res) => {
  const order: Order = req.body;
  orderModel.updateOrder(order, (err: Error) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).send();
  });
});
export { orderRouter };
