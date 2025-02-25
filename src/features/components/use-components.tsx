"use client";

import { useFormLib } from "@/hooks/use-form-lib";
import { columnsDynamic, data, signinFormDefaultValues } from "./components.data";


export const useComponents = () => {
  const column = columnsDynamic;
  const renderData = data;

  const { methods } = useFormLib({
    defaultValues: signinFormDefaultValues,
  });

  return { column, renderData,methods };
};
