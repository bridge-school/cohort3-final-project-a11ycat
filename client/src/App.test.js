/**
 * @jest-environment
 */

import { appReducer } from "./features/app/app.reducers";

describe("Employers reducer", () => {
  it("should be defined", () => {
    expect(appReducer).toBeDefined();
  });
});
