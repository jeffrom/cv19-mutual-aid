# COVID-19 Mutual Aid Directory

This repository is the source of the [CV19 Mutual Aid Directory](https://cv19-mutual-aid.now.sh).

The goal of this project is to provide a simple, reliable system for sharing information about mutual aid for the COVID-19 pandemic that is accessible on many devices.

## If you want to make changes to the directory

The primary development goal of this project is to make managing resources easy and accessible for non-technical people. If there's anything missing from this documentation, please create an issue.

### Add a resource

To add a resource, [create an issue](https://github.com/jeffrom/cv19-mutual-aid/issues/new) with information about your resource, including the region served and URL. If you feel comfortable writing code, please feel free to make a pull request. However, if you want to make changes beyond basic adding or editing of resources, please make an issue first so your plans can be discussed.

## Develop

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

### Deploy

When a change is pushed to the master branch, a site deploy will be triggered.
