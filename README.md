# Power Guard Monitor Dashboard

## Stack

- Typescript
- Next.js
- Front-end
  - React
  - Chart.js
- CSS
  - Tailwind
- Testing
  - Jest
  - React Testing Library
- Tools
  - ESlint

## Getting Started

First, run the development server:

1. Install [nvm](https://github.com/nvm-sh/nvm) and set up the appropriate node version for this project by running one of these commands.In case of Windows OS, you can use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.

```bash
nvm use

nvm install 14.15.2
```

2. Install project dependencies. For a recommended version of npm, check `package.json > engines > npm`.

```bash
npm install
```

3. Run the development server.

```bash
npm run dev
```

4. Access the app opening [http://localhost:3000](http://localhost:3000) with your browser.

- To fech mock data from a local server during development follow the instructions in [Srv_README](srv/README.md) and make sure that `NEXT_PUBLIC_FETCH_MOCK_DATA` in `.env.local` is set as `false`. Otherwise, to fetch mock data from the front-end repository, set `NEXT_PUBLIC_FETCH_MOCK_DATA` as `true`;

## Deployment

To export the application to static HTML, in order to run the app standalone without the need of a Node.js server:

1. Set the backend API URI in `.env.local > NEXT_PUBLIC_API_BASE_URL`.

2. Run the following script.

```bash
npm run export
```

Files are exported into the `out` directory.
