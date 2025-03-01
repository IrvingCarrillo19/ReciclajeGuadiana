import { useEffect, useState } from "react";
import { Input } from "./editModal";
import { Label, Select } from "flowbite-react";

export default function Combofetch(
  props: Input & { onChange?: (e: any) => void }
) {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    async function fetchItems() {
      if (!props.fetch) return;
      const res = await props.fetch();
      setItems(res);
      setValue(res[0]);
    }
    fetchItems();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
  };

  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label value={props.label} />
      </div>
      <Select
        name={props.name}
        required={props.required}
        value={value ?? ""}
        onChange={handleChange}
      >
        {items?.map((item: any) => {
          return (
            <option key={`combo_fetch_${item}`} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </div>
  );
}
