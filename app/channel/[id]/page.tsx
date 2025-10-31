import React from "react";

const page = async (props: any) => {
  return <div>{props.params.id}</div>;
};

export default page;
