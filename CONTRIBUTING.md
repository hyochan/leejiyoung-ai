# Contributing

## Concise overview

In this template, we use Next.js version 13 or higher, as it supports React Server Components. The project relies on Prisma for the ORM, and it's crucial to be aware that Prisma does not provide connection pooling by default. This requires extra steps when deploying on Vercel.

Consequently, the main emphasis of the current project is on deploying as a standalone server, utilizing a [Docker image](https://nextjs.org/docs/deployment#docker-image) to achieve this goal.

## Installation

### 1. Prepare Database

Run `yarn migrate:dev` to you local database then when every is done right, you can then run `yarn migrate:prod` to update production database.

### 2. Copy environment variables

```
cp .env.sample .env.local
```

Check the environment variables stated in [Environment variables](#1-environment-variables) and replace to your own.

We recommend to have 2 environments as shown below.
- .env.local
- .env.prod

> Try running `yarn migrate:dev` database to `.env.local` then run `yarn migrate:prod` on `.env.prod` when releasing.

## Environment variables

<details>
<summary>NEXT_PUBLIC_ROOT_URL</summary>

Base url of your web app.
</details>

<details>
<summary>JWT_SECRET</summary>

Used in server-side when you want to encode & decode data when communicating with client.
</details>

<details>
<summary>DATABASE_URL</summary>

Database connection url to access database.

</details>

Copy sample from `.env.sample`.

```sh
cp `.env.sample` `.env.local`
```

### Tips

#### When using yarn berry and TS fails after upgrading packages, try to follow below steps.

1. `yarn set version berry`
1. `yarn`
1. `yarn dlx @yarnpkg/sdks vscode`
1. `yarn plugin import typescript`
1. `yarn dlx @yarnpkg/sdks vscode`
   - Useful when prettier extension is not working.
