import React from "react";

const UpcomingEvents: React.FC<IProps> = (props) => {
  return (
    <div className="">
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
    <div className="">
      {/*Full Name*/}
      {/*Event Name*/}
      {/*Date*/}
    </div>
  );
};
