import React from "react";
import Comp1 from "../components/comp1/page";
import Comp2 from "../components/comp2/page";
import Comp3 from "../components/comp3/page";
import Comp4 from "../components/comp4/page";
import Comp5 from "@/components/comp5/page";
import Comp6 from "@/components/comp6/page";
import Button1 from "@/components/buttons/button1";

import skillData from "@/components/data";
import { Explora } from "next/font/google";

const Main = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 skillData={skillData.slice(0, 3)} />
      <Button1 link="/portfolio" title="MORE PROJECTS" />
      <Comp6 />
      <Comp5 />
    </div>
  );
};

export default Main;
