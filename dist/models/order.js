"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = exports.findTotalOrder = exports.findOneOrder = exports.createOrder = void 0;
const app_1 = require("../app");
const createOrder = (order, callback) => {
    console.log(order);
    const queryString = "INSERT INTO ProductOrder(product_id,customer_id,product_quantity) VALUES(?,?,?)";
    app_1.dbConnect.query(queryString, [order.product.id, order.customer.id, order.productQuantity], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result;
        callback(null, insertId);
    });
};
exports.createOrder = createOrder;
const findOneOrder = (orderId, callback) => {
    const queryString = `SELECT o.*,p.*,c.name AS customer_name,c.email
  FROM ProductOrder AS o
  INNER JOIN Customer AS c ON c.id= o.customer_id
  INNER JOIN Product AS p ON p.id= o.product_id
  WHERE o.order_id=?`;
    app_1.dbConnect.query(queryString, orderId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        console.log(row);
        const order = {
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
exports.findOneOrder = findOneOrder;
const findTotalOrder = (callback) => {
    const queryString = "SELECT o.*,p.*,c.name AS customer_name,c.email FROM ProductOrder AS o INNER JOIN Customer AS c ON c.id= o.customer_id INNER JOIN Product AS p ON p.id= o.product_id";
    app_1.dbConnect.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const orderRow = [];
        rows.forEach((row) => {
            const order = {
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
                    name: row.name,
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
exports.findTotalOrder = findTotalOrder;
const updateOrder = (order, callback) => {
    const queryString = `UPDATE ProductOrder SET product_id=? product_quantity=? WHERE order_id=?`;
    app_1.dbConnect.query(queryString, [order.product.id, order.productQuantity, order.orderId], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.updateOrder = updateOrder;
