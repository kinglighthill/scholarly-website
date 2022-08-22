import { useEffect, useRef, useState } from "react";
import { FilterQueries } from "../types/components/outlets/filter";
import { Outlet, OutletLocation } from "../types/data";

export default function useSearchFilter(outlets: Outlet[]) {
  const [filteredOutlets, setFilteredOutlets] = useState<undefined | Outlet[]>();
  const [filterQueries, setFilterQueries] = useState<FilterQueries>({});
  // I used useRef instead of useState to store the value of queryList because I do not require it to cause a re-render
  // since no part of the UI consumes its value. It merely serves as a means to store and persist data across re-renders
  // without causing a re-render itself when its value is updated.
  const queryList = useRef<FilterQueries>({});
  const [triggerEffect, setTriggerEffect] = useState<boolean>(false);
  const runApplyFilter = useRef<boolean>(false);

  useEffect(() => {
    if (runApplyFilter.current) applyFilter();
  }, [triggerEffect])

  const updateQueryList = (id: string, value: string[], trigger?: 'chip') => {
    if (trigger === 'chip') {
      runApplyFilter.current = true;
      setTriggerEffect(!triggerEffect);
    }

    if (value.length === 0) {
      // If the value of the checkbox group is an empty array, remove the corresponding property entirely from the filterQueries to prevent having object property values with empty arrays.
      // This is important to ensure accuracy of the applyFilter function.
      const { [id]: discarded, ...rest } = queryList.current;
      queryList.current = rest;
      return;
    }

    queryList.current = {...queryList.current, [id]: value};
  }

  const applyFilter = () => {
    // If no filter query is selected, set filteredOutlets to undefined so that all the outlets will be displayed.
    if (Object.entries(queryList.current).length === 0) {
      setFilteredOutlets(undefined);
    }

    else {
      // Filter the oulets based on the selected queries.
      const result = outlets.filter(outlet => {
        for (let key in queryList.current) {
          // Check if the value of the different location properties (city, state, lgas, & country) of the outlets matches any of the values of their corresponding properties in the filter queries.
          if (queryList.current[key].includes(outlet.location[key as keyof OutletLocation].toLowerCase())) {
            return true;
          }
        }
      })
      setFilteredOutlets(result);
    }

    setFilterQueries(queryList.current);
  }

  return {
    applyFilter,
    filteredOutlets,
    filterQueries,
    updateQueryList
  };
}
