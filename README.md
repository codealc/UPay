
# UPay

Developed a full-stack digital payment platform with separate interfaces for users and
merchants, enabling seamless transactions and account management.


## Tech Stack

**Client:** React, Next.js, TailwindCSS

**Server:** Node, Express , Typescript

**Database:** Postgres, Prisma


## Features

- **Digital Payment Platform:** Developed a full-stack digital payment platform with separate interfaces for users and merchants, enabling seamless transactions and account management.
- **Monorepo:** Utilized Turborepo for efficient monorepo management, streamlining development workflows. 
- **Prisma:** Implemented Prisma as a type-safe ORM for seamless database interactions
- **Authentication:** Implemented OAuth authentication with NextAuth.js to allow users to sign in using their Google
accounts.





## Setup

- Clone the repo

```jsx
git clone https://github.com/codealc/UPay
```

- npm install
- Run postgres either locally or on the cloud

```jsx
docker run -e POSTGRES_PASSWORD=pg_password -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice

