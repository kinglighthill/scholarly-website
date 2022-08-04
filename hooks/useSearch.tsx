import { useState } from "react";

export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const updateSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update search query to filter results when the user has entered up to 3 characters in the search field.
    // Reset it to default (i.e. display all results) when the search field is empty or erased.
    if (value.length === 0) setSearchQuery('');
    else if (value.length >= 3) setSearchQuery(value);
    return;
  }

  return (
    {
      searchQuery,
      updateSearchQuery
    }
  )
}
