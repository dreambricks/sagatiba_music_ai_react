import React from "react";
import OldLayout from "./OldLayout";
import NewLayout from "./NewLayout";

// Mude para "old" ou "new" para escolher o layout
const LAYOUT = "new";

export const Home = () => {
  return LAYOUT === "old" ? <OldLayout /> : <NewLayout />;
};

export default Home;
