import React from "react";
import { useState } from "react";
import CheckBox from "./03_1_CheckBox";

function Sidebar({
  selectedAuthors,
  setSelectedAuthors,
  selectedBindings,
  setSelectedBindings,
  selectedLanguages,
  setSelectedLanguages,
  selectedAgeGroups,
  setSelectedAgeGroups,
  selectedPublications,
  setSelectedPublications,
  selectedBookConditions,
  setSelectedBookConditions,
  selectedBookPrices,
  setSelectedBookPrices,
}) {
  const handleAuthorChange = (author) => {
    console.log("Author checkbox clicked:", author);
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter((a) => a !== author));  
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };
  const handleBindingChange = (binding) => {
    console.log("Binding checkbox clicked:", binding);

    if (selectedBindings.includes(binding)) {
      setSelectedBindings(selectedBindings.filter((b) => b !== binding));
    } else {
      setSelectedBindings([...selectedBindings, binding]);
    }
  };

  const handleLanguageChange = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleAgeGroupChange = (ageGroup) => {
    if (selectedAgeGroups.includes(ageGroup)) {
      setSelectedAgeGroups(selectedAgeGroups.filter((ag) => ag !== ageGroup)); // --> to create a new array containing only the elements that do not match the ageGroup being toggled
    } else {
      setSelectedAgeGroups([...selectedAgeGroups, ageGroup]);
    }
  };

  const handlePublicationChange = (publication) => {
    if (selectedPublications.includes(publication)) {
      setSelectedPublications(
        selectedPublications.filter((p) => p !== publication)
      );
    } else {
      setSelectedPublications([...selectedPublications, publication]);
    }
  };

  const handleBookConditionChange = (bookCondition) => {
    if (selectedBookConditions.includes(bookCondition)) {
      setSelectedBookConditions(
        selectedBookConditions.filter((bc) => bc !== bookCondition)
      );
    } else {
      setSelectedBookConditions([...selectedBookConditions, bookCondition]);
    }
  };

  const handleBookPriceChange = (bookPrice) => {
    if (selectedBookPrices.includes(bookPrice)) {
      setSelectedBookPrices(
        selectedBookPrices.filter((bp) => bp !== bookPrice)
      );
    } else {
      setSelectedBookPrices([...selectedBookPrices, bookPrice]);
    }
  };

  return (
    <div className="h-full w-1/4 bg-slate-600 m-5">
      <div className="m-3">
        <h5 className="text-white">Authors</h5>
        <CheckBox
          text={"Richardson"}
          onChange={() => handleAuthorChange("Richardson")}
          checked={selectedAuthors.includes("Richardson")}
        />

        <CheckBox
          text={"Anthony"}
          onChange={() => handleAuthorChange("Anthony")}
          checked={selectedAuthors.includes("Anthony")}
        />
        <CheckBox
          text={"Tommy"}
          onChange={() => handleAuthorChange("Tommy")}
          checked={selectedAuthors.includes("Tommy")}
        />
        <CheckBox
          text={"Lanny"}
          onChange={() => handleAuthorChange("Lanny")}
          checked={selectedAuthors.includes("Lanny")}
        />
        <CheckBox
          text={"Micheal"}
          onChange={() => handleAuthorChange("Micheal")}
          checked={selectedAuthors.includes("Micheal")}
        />
        <CheckBox
          text={"Hercules"}
          onChange={() => handleAuthorChange("Hercules")}
          checked={selectedAuthors.includes("Hercules")}
        />
      </div>
      <div className="m-3">
        <h5 className="text-white">Binding</h5>
        <CheckBox
          text={"Paperback"}
          onChange={() => handleBindingChange("Paperback")}
          checked={selectedBindings.includes("Paperback")}
        />
        <CheckBox
          text={"Softback"}
          onChange={() => handleBindingChange("Softback")}
          checked={selectedBindings.includes("Softback")}
        />
      </div>
      <div className="m-3">
        <h5 className="text-white">Language</h5>
        <CheckBox
          text={"English"}
          onChange={() => handleLanguageChange("English")}
          checked={selectedLanguages.includes("English")}
        />
        <CheckBox
          text={"Hindi"}
          onChange={() => handleLanguageChange("Hindi")}
          checked={selectedLanguages.includes("Hindi")}
        />
        <CheckBox
          text={"French"}
          onChange={() => handleLanguageChange("French")}
          checked={selectedLanguages.includes("French")}
        />
        <CheckBox
          text={"German"}
          onChange={() => handleLanguageChange("German")}
          checked={selectedLanguages.includes("German")}
        />
        <CheckBox
          text={"Spanish"}
          onChange={() => handleLanguageChange("Spanish")}
          checked={selectedLanguages.includes("Spanish")}
        />
        <CheckBox
          text={"Russian"}
          onChange={() => handleLanguageChange("Russian")}
          checked={selectedLanguages.includes("Russian")}
        />
      </div>
      {/* <div className="m-3">
        <h5 className="text-white">Age Group</h5>
        <CheckBox
          text={"3-5 Years"}
          onChange={() => handleAgeGroupChange("3-5 Years")}
          checked={selectedAgeGroups.includes("3-5 Years")}
        />
        <CheckBox
          text={"6-9 Years"}
          onChange={() => handleAgeGroupChange("6-9 Years")}
          checked={selectedAgeGroups.includes("6-9 Years")}
        />
      </div> */}
      <div className="m-3">
        <h5 className="text-white">Publication</h5>
        <CheckBox
          text={"Rich Publications"}
          onChange={() => handlePublicationChange("Rich Publications")}
          checked={selectedPublications.includes("Rich Publications")}
        />
        <CheckBox
          text={"Ant Publications"}
          onChange={() => handlePublicationChange("Ant Publications")}
          checked={selectedPublications.includes("Ant Publications")}
        />
        <CheckBox
          text={"Tom Publications"}
          onChange={() => handlePublicationChange("Tom Publications")}
          checked={selectedPublications.includes("Tom Publications")}
        />
        <CheckBox
          text={"Lan Publications"}
          onChange={() => handlePublicationChange("Lan Publications")}
          checked={selectedPublications.includes("Lan Publications")}
        />
        <CheckBox
          text={"Mica Publications"}
          onChange={() => handlePublicationChange("Mica Publications")}
          checked={selectedPublications.includes("Mica Publications")}
        />
        <CheckBox
          text={"Hercules Publications"}
          onChange={() => handlePublicationChange("Hercules Publications")}
          checked={selectedPublications.includes("Hercules Publications")}
        />
      </div>
      <div className="m-3">
        <h5 className="text-white">Book Condition</h5>
        <CheckBox
          text={"Brand New"}
          onChange={() => handleBookConditionChange("Brand New")}
          checked={selectedBookConditions.includes("Brand New")}
        />
        <CheckBox
          text={"Very Good"}
          onChange={() => handleBookConditionChange("Very Good")}
          checked={selectedBookConditions.includes("Very Good")}
        />
        <CheckBox
          text={"Good"}
          onChange={() => handleBookConditionChange("Good")}
          checked={selectedBookConditions.includes("Good")}
        />
        <CheckBox
          text={"Average"}
          onChange={() => handleBookConditionChange("Average")}
          checked={selectedBookConditions.includes("Average")}
        />
        <CheckBox
          text={"Below Average"}
          onChange={() => handleBookConditionChange("Below Average")}
          checked={selectedBookConditions.includes("Below Average")}
        />
      </div>
      <div className="m-3">
        <h5 className="text-white">Book Price</h5>
        <CheckBox
          text={"Less than Rs 99"}
          onChange={() => handleBookPriceChange("Less than Rs 99")}
          checked={selectedBookPrices.includes("Less than Rs 99")}
        />
        <CheckBox
          text={"Less than Rs 599"}
          onChange={() => handleBookPriceChange("Less than Rs 599")}
          checked={selectedBookPrices.includes("Less than Rs 599")}
        />
      </div>
    </div>
  );
}

export default Sidebar;
