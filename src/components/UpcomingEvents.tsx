import React from "react";

const UpcomingEvents: React.FC<IProps> = (props) => {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg  p-4 mb-6 flex space-x-2">
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

interface IProps {}

export default UpcomingEvents;

const Event: React.FC = () => {
  return (
    <div className="p-3 border-b border-gray-200 cursor-pointer hover:bg-blue-50">
      {/*Full Name*/}
      {/*Event Name*/}
      {/*Date*/}
    </div>
  );
};
