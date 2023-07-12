"use client";

import { useState } from "react";
import SearchManufacture from "./SearchManufacture";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      alt="magnifying glass"
      className="object-contain"
    />
  </button>
)

const SearchBar = ({setManufacturer, setModel}) => {
  const [searchManufacture, setSearchManufacture] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const rounter = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchManufacture === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel)
    setManufacturer(searchManufacture)
  };

  return <form className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">
        <SearchManufacture
          selected={searchManufacture}
          setSelected={setSearchManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
    </div>
    <div className="searchbar__item">
      <Image 
        src="/model-icon.png"
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
        alt="model"
      />
      <input 
        type="text"
        name="model"
        value={searchModel}
        onChange={(e) => setSearchModel(e.target.value)}
        placeholder="Tiguan"
        className="searchbar__input"
      />
      <SearchButton 
        otherClasses="sm:hidden"
      />
    </div>
    <SearchButton 
        otherClasses="max-sm:hidden"
      />
  </form>;
};

export default SearchBar;
