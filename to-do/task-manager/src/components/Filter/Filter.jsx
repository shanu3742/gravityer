import React from "react";
import ButtonBar from "../../lib/ButtonBar/ButtonBar";

const Filter = ({ selectedFilter, setFilter }) => {
  return (
    <ButtonBar
      buttonList={["all", "completed", "pending"]}
      selectedButton={selectedFilter}
      onButtonChange={setFilter}
    />
  );
};

export default Filter;
