import { useEffect, useState } from "react";
import { normalizeSrt } from "../services/utils";

interface useSearchProps {
  data: any[];
  search: string;
  searchFields: string;
}

export default function useSearch(props: useSearchProps) {
  const [search, setSearch] = useState(props.search);
  const [filteredData, setFilteredData] = useState(props.data);
  const cols = "nombre";

  useEffect(() => {
    setSearch(props.search);
  }, [props.search]);

  useEffect(() => {
    if (search === "") {
      setFilteredData(props.data);
    } else {
      setFilteredData(
        props.data.filter((item: any) =>
          cols
            .split(" ")
            .some((key) =>
              normalizeSrt(item[key].toString()).includes(
                normalizeSrt(search ?? "")
              )
            )
        )
      );
    }
  }, [search, props.data]);

  return filteredData;
}
