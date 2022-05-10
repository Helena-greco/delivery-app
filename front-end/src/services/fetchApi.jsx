const appJson = 'application/json';
const NUMBER = 3001;
const PORT = process.env.REACT_APP_BACKEND_PORT || NUMBER;
const URL = process.env.REACT_APP_HOSTNAME || 'localhost';

export const fetchApi = async (email, password) => {
  const fecthLogin = fetch(`http://${URL}:${PORT}/login`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await fecthLogin;
  return response;
};

export const fetchApiRegister = async (name, email, password) => {
  const fetchRegister = fetch(`http://${URL}:${PORT}/register`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const response = await fetchRegister;
  return response;
};

export const fetchApiProducts = async () => {
  const fetchProducts = fetch(`http://${URL}:${PORT}/customer/products`, {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
  });
  const response = await fetchProducts;
  return response;
};

export const fetchApiOrders = async () => {
  const fetchProducts = fetch(`http://${URL}:${PORT}/customer/orders`, {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
  });
  const response = await fetchProducts;
  return response;
};

export const fetchApiCreateOrder = async (order, token) => {
  const fetchCreateOrder = fetch(`http://${URL}:${PORT}/customer/orders`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      Authorization: token,
    },
    body: JSON.stringify({
      user_id: order.userId,
      seller_id: order.sellerId,
      total_price: order.totalPrice,
      delivery_address: order.deliveryAddress,
      delivery_number: order.deliveryNumber,
      status: order.status,
    }),
  });
  const response = await fetchCreateOrder;
  return response;
};

export const fetchApiOrderById = async (id) => {
  const fetchOrderById = fetch(`http://${URL}:${PORT}/customer/orders/${id}`, {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
  });
  const response = await fetchOrderById;
  return response;
};

export const fetchApiGetSellers = async () => {
  const fetchSellers = fetch(`http://${URL}:${PORT}/sellers`, {
    method: 'GET',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
    },
  });
  const response = await fetchSellers;
  return response;
};

export const fetchApiCreateSaleProducts = async (arrayBody, token) => {
  const fetchCreateSaleProducts = fetch(`http://${URL}:${PORT}/customer/saleProduct`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      Authorization: token,
    },
    body: JSON.stringify(arrayBody),
  });
  const response = await fetchCreateSaleProducts;
  return response;
};
