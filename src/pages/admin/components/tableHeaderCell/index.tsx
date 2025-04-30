import React, { PropsWithChildren } from "react";

const TableHeaderCell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <th style={{ textAlign: "left", padding: "12px", fontWeight: 16 }}>
      {children}
    </th>
  );
};

export default TableHeaderCell;
