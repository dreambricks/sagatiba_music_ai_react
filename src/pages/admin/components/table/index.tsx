import React, { PropsWithChildren } from "react";

const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}
    >
      {children}
    </table>
  );
};

export default Table;
