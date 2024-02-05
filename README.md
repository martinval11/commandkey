# Command Key

A simple command palette for React.

![commandKeyLogo](https://github.com/martinval11/commandkey/blob/main/assets/favicon-256.png?raw=true)

![screenshot](https://github.com/martinval11/commandkey/blob/main/assets/screenshot.png?raw=true)

## Setup

### Install Tailwind CSS
To use CommandKey, you need to install Tailwind CSS for styling.

```sh
npm install -D tailwindcss postcss autoprefixer tailwind-merge
npx tailwindcss init -p
```

Configure tailwindcss:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/commandkey/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add directives to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### Install CommandKey

```sh
npm install commandkey
```

## Usage

```js
import { Command, CommandList, CommandInput, CommandOption } from 'commandkey';
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

If you want more details. Check the [documentation](https://commandkey.vercel.app/docs)

## Contributing

1. Clone the repository:

```sh
git clone https://github.com/martinval11/commandkey.git
```

2. Install dependencies:

```sh
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run [vite](https://vitejs.dev/):

```sh
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
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)

## License

[MIT](https://github.com/martinval11/commandkey/blob/main/LICENSE)
