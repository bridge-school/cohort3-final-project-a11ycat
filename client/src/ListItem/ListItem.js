import React from "react";
import { Button } from "../ui-kit/components/Button";
export const ListItem = ({ locationName }) => (
  <li>
    {locationName} <Button>Rate This</Button>
  </li>
);
