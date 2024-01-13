# Command Key

A simple command menu for React.

![commandKeyLogo](https://github.com/martinval11/commandkey/blob/main/assets/favicon-256.png?raw=true)

> [!WARNING]
> Beta Stage, this may have some bugs, so if you find one, please report an issue.

![screenshot](https://github.com/martinval11/commandkey/blob/main/assets/screenshot.png?raw=true)

## Setup

### Install

```bash
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

```bash
git clone https://github.com/martinval11/commandkey.git
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
- [TypeScript](https://www.typescriptlang.org/)

## To Do

- [x] Add a search filter
- [x] Styles Customization
- [x] Animations
- [x] Landing Page with Docs [https://commandkey.vercel.app/](https://commandkey.vercel.app/)

## License

[MIT](https://github.com/martinval11/commandkey/blob/main/LICENSE)
