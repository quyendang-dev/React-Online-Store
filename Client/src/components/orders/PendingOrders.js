import React, { Component } from "react";
import PendingOrdersTable from "./PendingOrdersTable";
import PendingOrdersTableHeader from "./PendingOrdersTableHeader";
import PendingOrdersTableRow from "./PendingOrdersTableRow";
import orderService from "../../services/order-service";

class PendingOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      error: null
    };
  }

  componentDidMount = async () => {
    const orders = await orderService.getPendingOrders();
    this.setState({ orders });
  };

  approveOrder = async id => {
    if (!id) {
      this.setState({ error: "Invalid Order Id" });
      return;
    }

    const result = await orderService.approveOrderById(id);
    const { message, success } = result;
    console.log(result);

    if (!success) {
      this.setState({ error: message });
    } else {
      // Update pending orders
      const orders = await orderService.getPendingOrders();
      this.setState({
        orders,
        error: null
      });
    }
  };

  render() {
    const { orders } = this.state;

    return (
      <PendingOrdersTable>
        <PendingOrdersTableHeader />

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={6}>No pending orders</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <PendingOrdersTableRow
                key={order._id}
                order={order}
                index={index + 1}
                approveOrder={this.approveOrder}
              />
            ))
          )}
        </tbody>
      </PendingOrdersTable>
    );
  }
}

export default PendingOrders;