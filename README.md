# Command Key
A simple command menu for React.

> [!CAUTION]
> Pre Alpha Stage, Use it at your own risk.

![screenshot](https://github.com/martinval11/commandkey/blob/main/assets/screenshot.png?raw=true)

## Requirements
- React
- TailwindCSS

## Setup

### Install
```bash
npm install commandkey
```

### Setup TailwindCSS if you don't already have it
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

tailwind.config.js
```js
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
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage
```js
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
```js
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

## Contributing
1. Fork and clone the repository:
```bash
git clone git@github.com:martinval11/commandkey.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or 
bun install
```

3. Run [vite](https://vitejs.dev/):
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or 
bun dev
```
- Open [localhost:3000](http://localhost:3000) in your browser to see the app.

## Tech Stack
- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)

## Coming Soon...
- [x] Add a search filter
- [ ] Tailwind Customization
- [ ] Animations

## License
[MIT](https://github.com/martinval11/commandkey/blob/main/LICENSE)
