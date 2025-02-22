"use client";

import { columnsDynamic, data } from "./home.data";

export const useHome = () => {
  const column = columnsDynamic;
  const renderData = data;

  return { column, renderData };
};
