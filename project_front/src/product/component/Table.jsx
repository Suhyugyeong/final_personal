import React from "react";

const Table = ({ auctionData }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">입찰자</th>
            <th scope="col">입찰금액(원)</th>
            <th scope="col">상품상태</th>
          </tr>
        </thead>
        <tbody>
          {auction.data.map((auction) => (
            <tr key={auction.auction_id}>
              <td>{auction.auction_id}</td>
              <td>
                <Link to={"/products/detail" + product_id}>
                  {/* 입찰하기 버튼을 누르면 ... */}
                </Link>
              </td>
              <td>{auction.email}</td>
              <td> {auction.auction_price}</td>
              <td> {auction.actuion_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
