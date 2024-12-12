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
    <div >
      <h1 >
        People Finder Dashboard
      </h1>
      <div >
        <UpcomingEvents />
        <SearchBar onSearch={handleSearch} />
        <div >
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
