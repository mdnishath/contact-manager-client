import PlainLayout from "@/components/layouts/PlainLayout";
import { TChildren } from "@/interface";
import React from "react";

const layout = ({ children }: TChildren) => {
  return <PlainLayout>{children}</PlainLayout>;
};

export default layout;
