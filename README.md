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

If you want to see more examples, go to [EXAMPLES.md](https://github.com/martinval11/commandkey/blob/main/EXAMPLES.md)

## Customization

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

> [!CAUTION]
> It's not recommended to use the `style` attribute. Because it will ignore all the default styles and you will have an unstyled button.
> If you want to maintain the default button structure, use the `className` attribute.

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

## Animations

To add animations, you can use the `className` attribute to add an annimation using CSS:

```javascript
<Command className="command">
  {/* ... */}
</Command>
```

```css
.command {
  animation: fadein 0.2s ease-in-out forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
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

## To Do

- [x] Add a search filter
- [x] Styles Customization
- [x] Animations
- [ ] Landing Page with Docs

## License

[MIT](https://github.com/martinval11/commandkey/blob/main/LICENSE)
