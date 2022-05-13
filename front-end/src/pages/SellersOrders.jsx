import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { fetchApiOrderSellerById } from '../services/fetchApi';
import HeaderSeller from '../components/HeaderSeller';

const SellersOrders = () => {
  const [sales, setSales] = useState([]);
  const params = useParams();

  const getSales = async () => {
    console.log(params);
    const response = await fetchApiOrderSellerById(params.id);
    const data = await response.json();
    console.log(data);
    setSales(data);
  };

  useEffect(getSales, []);

  return (
    <>
      <HeaderSeller />
      { sales.map((sale) => (
        <div key={ sale.id }>
          <div>
            <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>Pedidos</p>
            <h6
              data-testid={ `seller_orders__element-order-id-${sale.id}` }
            >
              { sale.id }
            </h6>
          </div>
          <div>
            <h6
              data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
            >
              { sale.status }
            </h6>
          </div>
          <div>
            <h6
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              { moment(sale.saleDate).format('L') }
            </h6>
            <h6
              data-testid={ `seller_orders__element-card-price-${sale.id}` }
            >
              { sale.priceTotal }
            </h6>
          </div>
          <p
            data-testid={ `seller_orders__element-card-address-${sale.id}` }
          >
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </p>
        </div>
      ))}
    </>
  );
};

export default SellersOrders;
