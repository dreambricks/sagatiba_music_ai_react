import React, { PropsWithChildren } from "react";

const TableRow: React.FC<PropsWithChildren> = ({ children }) => {
  return <tr style={{ borderBottom: "1px solid #ccc" }}>{children}</tr>;
};

export default TableRow;
