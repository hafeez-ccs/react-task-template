import React from "react";
import { IPerson } from "../types/person";

interface PersonDetailsProps {
  person: IPerson;
}

const Details: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <div >
      <h2 >Details</h2>
      <div >
        <p>
          <strong>Name:</strong> {person.fullName}
        </p>
      </div>
      {/* Additional Details */}
    </div>
  );
};

export default Details;
