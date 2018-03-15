import React from "react";
import { Button } from "../ui-kit/components/Button";
import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
`;

export const ListItem = ({ locationName }) => (
  <Item>
    {locationName} <Button>Rate This</Button>
  </Item>
);
