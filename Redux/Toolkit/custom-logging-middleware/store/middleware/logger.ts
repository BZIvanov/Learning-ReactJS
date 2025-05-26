import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (storeAPI) => (next) => (action) => {
  // We are checking if the action is an object and has a 'type' property, because action is of type unknown.
  if (typeof action === "object" && action !== null && "type" in action) {
    console.group((action as { type: string }).type);
  }
  console.log("%c Previous State:", "color: gray", storeAPI.getState());
  console.log("%c Action:", "color: blue", action);

  const result = next(action);

  console.log("%c Next State:", "color: green", storeAPI.getState());
  console.groupEnd();

  return result;
};
