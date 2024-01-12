import { Command } from './components/Command';
import { useState } from 'react';

import { CommandList } from './components/CommandList';
import { CommandInput } from './components/CommandInput';
import { CommandOption } from './components/CommandOption';

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
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <h1>Command Key Demostration</h1>
      <button onClick={openModal}>Open modal</button>

      <Command
        open={open}
        onClose={() => setOpen(false)}
        containerClassName="[background: #000000]"
      >
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
