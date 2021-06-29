import React from "react";
import Tabs from "./Commom/Tabs";

const list = [
  {
    name: "Tab 1",
  },
  {
    name: "Tab 2",
  },
  {
    name: "Tab 3",
  },
  {
    name: "Tab 4",
  },
];
const TabContainer = ({}) => {
  const [active, setActive] = React.useState("Tab 1");
  return (
    <div>
      <div className="flex justify-center w-full">
        <Tabs
          className=" flex bg-gray-100  w-full text-center justify-around uppercase text-sm font-medium text-gray-500"
          tabClasses="py-2 px-6"
          activeClasses=" text-primary-blue bg-white "
          active={active}
          borderClasses="border-b-4 rounded-t-full border-primary-blue"
          onChange={(e) => setActive(e)}
        >
          {list.map((el) => (
            <div key={el.name} className="flex pb-3 flex-col">
              <span className="">{el.name}</span>
            </div>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabContainer;
