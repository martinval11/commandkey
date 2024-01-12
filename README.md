# Command Key

A simple command menu for React.

> [!CAUTION]
> Pre Alpha Stage, Use it at your own risk.

![screenshot](https://github.com/martinval11/commandkey/blob/main/assets/screenshot.png?raw=true)

## Requirements

- [React](https://react.dev/)

## Setup

### Install

```bash
npm install commandkey
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
If you want to see more examples, go to [EXAMPLES.md](EXAMPLES.md)

## Customization

You can use the `style` attribute to customize the component, it's available in all components.

### Syntax
The recommended way is to use the `className` attribute to change the stylesheet using a normal CSS file:
```javascript
<CommandInput className="custom-input" />
```

```css
.custom-input {
  background: #000 !important; /* !important to override the default style */
}
```

Or you can use the `style` attribute to change the stylesheet inline:
```javascript
<CommandInput
  style={{
    // Default Styles
    outline: 'none',
    width: '100%',
    border: 'none',
    borderBottom: '1px solid rgb(39 39 42)',
    backgroundColor: 'rgb(24 24 27)',
    color: '#fff',
    padding: '16px',

    // Styles Added
    background: '#000',
  }}
/>
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

## Coming Soon...

- [x] Add a search filter
- [x] Styles Customization (done)
- [ ] Animations (In Progress)

## License

[MIT](https://github.com/martinval11/commandkey/blob/main/LICENSE)
