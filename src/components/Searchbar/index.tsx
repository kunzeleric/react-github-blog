import { ChangeEvent, useState, FormEvent } from 'react';

type SearchBarProps = {
  getIssue: (query: string) => void;
}

export const Searchbar = ({getIssue}: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await getIssue(search);

    setSearch("");
  }

  return (
    <div className="w-[864px] flex flex-col">
      <div className="flex justify-between pb-2">
        <p className="text-lg text-base-subtitle">Publicações</p>
        <span className="text-sm text-base-span">6 publicações</span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex">
        <input 
          placeholder="Buscar conteúdo"
          type="text" 
          className="w-full h-[50px] bg-base-input text-base-label border-[1px] rounded-md border-base-border pl-4 text-md"
          onChange={(e) => handleInputChange(e)}
          value={search}
          />
      </form>
    </div>
  )
}