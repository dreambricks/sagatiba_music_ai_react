import React, { PropsWithChildren } from "react";

const TableCell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <td style={{ padding: "12px", verticalAlign: "top", fontSize: "16px" }}>
      {children}
    </td>
  );
};

export default TableCell;
