import React from "react";
import { TabNavigate } from "../../components/Tabs";


export default function StyledLayout({ layoutProps }: any): JSX.Element {
  return (
    <>
      {layoutProps}
      <TabNavigate />
    </>
  );
}
