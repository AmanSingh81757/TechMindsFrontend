import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Drop = () => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select room" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">demo room1</SelectItem>
          <SelectItem value="banana">demo room2</SelectItem>
          <SelectItem value="blueberry">demo room3</SelectItem>
          <SelectItem value="grapes">demo room4</SelectItem>
          <SelectItem value="pineapple">demo room5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Drop;
