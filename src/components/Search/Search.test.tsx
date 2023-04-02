import React,{useState} from "react";
import { render, screen ,fireEvent} from "@testing-library/react";
import { Search } from "./SearchInput";

const SearchInputEvene = ()=>{
    const [inputValue, setInputValue] = useState(localStorage.getItem("value") || '');
    return (
        <Search inputValue={inputValue} setInputValue={setInputValue} />
    )
}

describe('Search component', () => {
    it('renders search input and updates state when typing', () => {
      render(<SearchInputEvene/>);
      const input = screen.getByPlaceholderText('Search..') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'typescirpt' } });
      expect(input.value).toBe("typescirpt");
    });
});