import { TChildren } from "@/interface";
import React from "react";

const Container = ({ children }: TChildren) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
