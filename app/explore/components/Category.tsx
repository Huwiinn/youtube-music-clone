import React from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";

const CategoryMenu = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="w-full h-[56px] py-4 px-6 flex gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  const COLOR = "#AAA";

  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu label={"최신음악"} icon={<FiMusic color={COLOR} />} />
      <CategoryMenu label={"차트"} icon={<FiBarChart color={COLOR} />} />
      <CategoryMenu label={"분위기 및 장르"} icon={<FiSmile color={COLOR} />} />
    </div>
  );
};

export default Category;
