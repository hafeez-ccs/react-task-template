import React from "react";
import { IPerson } from "../types/person";

interface SearchResultsProps {
  results: IPerson[];
  onSelect: (person: IPerson) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Search Results
      </h2>
      {results.length > 0 ? (
        results.map((person) => <Person person={person} />)
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;

const Person: React.FC<{ person: IPerson }> = ({ person }) => {
  return (
    <div
      key={person.id}
      className="p-3 border-b border-gray-200 cursor-pointer hover:bg-blue-50"
    >
      <h4 className="font-bold">{person.fullName}</h4>
      <p className="text-sm text-gray-500">Father: {person.fathersName}</p>
    </div>
  );
};
