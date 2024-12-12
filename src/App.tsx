import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Details from "./components/Details";
import { people } from "./data/people";
import { IPerson } from "./types/person";
import UpcomingEvents from "./components/UpcomingEvents";

const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<IPerson>();
  const [query, setQuery] = useState<string>();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleSelectPerson = (person: IPerson) => {
    setSelectedPerson(person);
  };

  /**
   * Filter logic should be handled here
   */
  const filteredPeople: IPerson[] = people;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        People Finder Dashboard
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <UpcomingEvents />
        <SearchBar onSearch={handleSearch} />
        <div className="flex gap-6 mt-6">
          <SearchResults
            results={filteredPeople}
            onSelect={handleSelectPerson}
          />
          {selectedPerson && <Details person={selectedPerson} />}
        </div>
      </div>
    </div>
  );
};

export default App;
