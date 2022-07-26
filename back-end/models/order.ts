import { dbConnect } from "../app";
import { OkPacket, RowDataPacket } from "mysql2";
import { BasicOrder, Order, OrderWithDetails } from "../types/ProductOrder";

export const createOrder = (order: BasicOrder, callback: Function) => {
  console.log(order);
  const queryString =
    "INSERT INTO ProductOrder(product_id,customer_id,product_quantity) VALUES(?,?,?)";
  dbConnect.query(
    queryString,
    [order.product.id, order.customer.id, order.productQuantity],
    (err, result) => {
      if (err) {
        callback(err);
      }
      const insertId = <OkPacket>result;
      callback(null, insertId);
    }
  );
};
export const findOneOrder = (orderId: number, callback: Function) => {
  const queryString = `SELECT o.*,p.*,c.name AS customer_name,c.email
  FROM ProductOrder AS o
  INNER JOIN Customer AS c ON c.id= o.customer_id
  INNER JOIN Product AS p ON p.id= o.product_id
  WHERE o.order_id=?`;
  dbConnect.query(queryString, orderId, (err, result) => {
    if (err) {
      callback(err);
    }
    const row = (<RowDataPacket>result)[0];
    console.log(row);
    const order: OrderWithDetails = {
      orderId: row.order_id,
      product: {
        id: row.product_id,
        name: row.name,
        description: row.description,
        inStockQuantity: row.instock_quantity,
        price: row.price,
      },
      customer: {
        id: row.customer_id,
        name: row.customer_name,
        password: row.password,
        email: row.email,
      },
      productQuantity: row.product_quantity,
    };
    callback(null, order);
  });
};
export const findTotalOrder = (callback: Function) => {
  const queryString =
    "SELECT o.*,p.*,c.name AS customer_name,c.email FROM ProductOrder AS o INNER JOIN Customer AS c ON c.id= o.customer_id INNER JOIN Product AS p ON p.id= o.product_id";
  dbConnect.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const orderRow: Order[] = [];
    rows.forEach((row) => {
      const order: OrderWithDetails = {
        orderId: row.order_id,
        product: {
          id: row.product_id,
          name: row.name,
          description: row.description,
          inStockQuantity: row.instock_quantity,
          price: row.price,
        },
        customer: {
          id: row.id,
          name: row.customer_name,
          password: row.password,
          email: row.email,
        },
        productQuantity: row.product_quantity,
      };
      orderRow.push(order);
    });
    callback(null, orderRow);
  });
};
export const updateOrder = (order: Order, callback: Function) => {
  const queryString = `UPDATE ProductOrder SET product_id=? product_quantity=? WHERE order_id=?`;
  dbConnect.query(
    queryString,
    [order.product.id, order.productQuantity, order.orderId],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null);
    }
  );
};
