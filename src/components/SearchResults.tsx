import React from "react";
import { IPerson } from "../types/person";

interface SearchResultsProps {
  results: IPerson[];
  onSelect: (person: IPerson) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div >
      <h2 >
        Search Results
      </h2>
      {results.length > 0 ? (
        results.map((person) => <Person person={person} />)
      ) : (
        <p >No results found</p>
      )}
    </div>
  );
};

export default SearchResults;

const Person: React.FC<{ person: IPerson }> = ({ person }) => {
  return (
    <div
      key={person.id}
      className=""
    >
      <h4 >{person.fullName}</h4>
      <p >Father: {person.fathersName}</p>
    </div>
  );
};
