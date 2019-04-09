import React from "react";

const OrdersTable = props => {
  const { title, children } = props;

  return (
    <div className="container" style={{ paddingTop: 25 + "px" }}>
      <h1 className="text-center text-capitalize">{title || "Orders"}</h1>
      <div className="row" style={{ paddingTop: 25 + "px" }}>
        <div className="col-md-12" id="customer-orders">
          <div className="box">
            <div className="table-responsive">
              <table className="table table-hover">
                {/* header, body, footer */}
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
