/**
 * @jest-environment
 */

import React from "react";
import ReactDOM from "react-dom";
import { appReducer } from "./features/app/app.reducers";
import AppContainer from "./features/app/app.container";

describe("Employers reducer", () => {
  it("should be defined", () => {
    expect(appReducer).toBeDefined();
  });
});
