# Command Key

## Example Usage
```
import { Command } from 'commandkey';
import { useState } from 'react';

import { CommandList } from 'commandkey';
import { CommandInput } from 'commandkey';
import { CommandOption } from 'commandkey';

const itemList = [
  'Apple',
  'Orange',
  'Banana',
  'Cherry',
  'Milk',
  'Peanuts',
  'Butter',
  'Tomato',
];

function App() {
  const [open, setOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event: any) => {
    const query = event.target.value;
    let updatedList = [...itemList];

    updatedList = updatedList.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

  return (
    <>
      <h1>Command Key Demostration</h1>

      <button onClick={() => setOpen(true)}>Open modal</button>

      <Command open={open} onClose={() => setOpen(false)}>
        <CommandInput placeholder="Search" onChange={filterBySearch} />

        <CommandList>
          {filteredList.map((item, index) => (
            <CommandOption
              key={index}
              value={item}
              onClick={() => console.log(item)}
            >
              {item}
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  );
}

export default App;
```
