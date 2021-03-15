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

### Install dependencies

__nvm__

1. First, ensure nvm is installed (`$ nvm --version`).
If `nvm` is not installed, run the following command to install it. Do not run as `sudo`!

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Next, use `nvm` to install the correct version of `nodejs`.

```bash
nvm use

nvm install 14.15.2
```

2. From inside the project directory, run the following command to install project dependencies. For a recommended version of npm, check `package.json > engines > npm`.

```bash
npm install
```

### Set up Nginx routing

1. Create a directory to host the static HTML content.

```bash
$ sudo mkdir -p /var/www/html/dashboard
```

2. In the site's configuration file, configure all requests to the app's `basePath` to be served from the above directory. In the example below, the app's `basePath` should be set to `/dashboard`.

```bash
  # inside your server directive:

  location /dashboard {
      alias /var/www/html/dashboard;
  }
```

3. Reload the Nginx configuration.

```bash
$ sudo nginx -s reload
```

## Running the development server

1. Launch the server with the following command:

```bash
$ npm run dev
```

2. Access the app opening [http://localhost:3000](http://localhost:3000) with your browser.

- To fech mock data from a local server during development follow the instructions in [Srv_README](srv/README.md) and make sure that `NEXT_PUBLIC_FETCH_MOCK_DATA` in `.env.local` is set as `false`. Otherwise, to fetch mock data from the front-end repository, set `NEXT_PUBLIC_FETCH_MOCK_DATA` as `true`;

## Deployment

To export the application to static HTML, in order to run the app alongside the Django backend server:

1. Set the backend API URI in `.env.local > NEXT_PUBLIC_API_BASE_URL`.

2. Ensure that the `basePath` config option is set correctly in `next.config.js`. For example, if `basePath` is set to `/dashboard`, a corresponding entry will need to be included in the Nginx server directive so that requests to `/dashboard` are not forwarded to the backend server but instead served by Nginx directly. See "Set up Nginx routing" above.

3. Run the following script.

```bash
$ npm run export
```

Files are exported into the `out` directory.

4. Copy the contents of the `out` directory into the directory from where Nginx will serve the static content.

```bash
$ sudo cp -r out/* /var/www/html/dashboard
```
