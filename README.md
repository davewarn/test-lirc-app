# Test LIRC App

This is a test to make LIRC node calls from a simple SvelteKit application.

## Requirements

This project was initially tested with Node v20.11.0.

## Developing

To start the development server, run the following commands in a terminal:

```bash
npm install
npm run dev
```

Then open your browser to [localhost:5173](http://localhost:5173).

## Quick Start

Take a look at the following two files:

- `src/routes/+page.svelte`
- `src/routes/send_signal/+server.ts`

The first file is the SvelteKit page that will be rendered in the browser. The second file is the server-side code that will be executed when sending a signal from the browser.

## Dependencies

This project uses the following dependencies:

- [lirc_node](https://github.com/alexbain/lirc_node)
- [svelte](https://svelte.dev/)
