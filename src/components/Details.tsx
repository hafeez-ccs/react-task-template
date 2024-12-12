import React from "react";
import { IPerson } from "../types/person";

interface PersonDetailsProps {
  person: IPerson;
}

const Details: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <div className="w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Details</h2>
      <div className="my-4">
        <p>
          <strong>Name:</strong> {person.fullName}
        </p>
      </div>
      {/* Additional Details */}
    </div>
  );
};

export default Details;
