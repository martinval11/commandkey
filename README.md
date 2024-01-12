# Command Key
Pre Alpha Stage, DO NOT USE

## Requirements
- React 18
- TailwindCSS

## Setup

### Install
```
npm install commandkey
```

### Setup TailwindCSS if you don't already have it
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/commandkey/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css (Your global CSS file in your project)
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage
```
import { Command } from 'commandkey';
import { CommandList } from 'commandkey';
import { CommandInput } from 'commandkey';
import { CommandOption } from 'commandkey';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Command open={open} onClose={() => setOpen(false)}>
        <CommandInput placeholder="Search" />

        <CommandList>
          <CommandOption>Apple</CommandOption>
          <CommandOption>Orange</CommandOption>
          <CommandOption>Pear</CommandOption>
        </CommandList>
      </Command>
    </>
  );
}
```

## Example Usage with a Search Filter
```
import { Command } from 'commandkey';
import { CommandList } from 'commandkey';
import { CommandInput } from 'commandkey';
import { CommandOption } from 'commandkey';
import { useState } from 'react';

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

export default function App() {
  const [open, setOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event) => {
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
```
