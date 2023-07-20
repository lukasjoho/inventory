<div align="center" >
    <h1 align="center">Inventory</h1>
    <p>Fully functional CRUD webapp focused on showcasing API routes, form validation and user-friendly response handling.</p>
</div>

![Alt text](https://images.ctfassets.net/wbsnk5ktra07/5jM5l91CFT9Ua5qzthEMbf/3330ac01a7d093818be03da479a0e1be/github_cover.jpg)

<div align="center" >
    <br/> 
    🌐 <a href="https://inventory-crud.vercel.app/">inventory-crud.vercel.app</a>
    <br/>
  
</div>

# Tools

This app uses a limited set of lightweight tools that spins up the skeleton fast to then leave focus for the API implementation.

![Alt text](https://images.ctfassets.net/wbsnk5ktra07/47eWGrH4Y56CMU7e9a5H9T/dc52afbc0c8b4738ff5b6ce356989631/TOOLS_COVER.jpg)

- [NextJS 13](https://nextjs.org/docs): Frontend UI and API routes
- [TailwindCSS](https://tailwindcss.com): CSS Styling
- [ShadcnUI](https://ui.shadcn.com): UI components
- [Prisma](https://www.prisma.io): ORM
- [Supabase](https://supabase.com): Database
- [React Hot Toast](https://react-hot-toast.com): Simple notification toasts
- [React Hook Form](https://www.react-hook-form.com): Form validation including zod

# Setup

You can easily run and deploy your own version of this repository, to dive into its practices or contribute.

## Installation

Get this project up and running in a couple of minutes:

1.  Run the following command to install all dependencies:

    ```sh-session
    npm install
    ```

## Database Setup

1. **Create database** using Supabase. (You can also use other infrastructure. In the end you only need a URI connection string and a PostgreSQL database. But Supabase is recommended here.)

2. **Grab URI connection** string from Supabase database settings GUI and paste in the database password.
3. **Set env variable** in `.env` file at root level
4. **Migrate prisma schema** to database by running the following command:

   ```sh-session
   npx prisma db push
   ```

## Environment Variables

Set only two environment variables in the `.env` file.

```sh-session
DATABASE_URL=postgresql://postgres...
NEXT_PUBLIC_HOST_URL=http://localhost:3000
```

## Run

To run the project locally, use the following command:

```sh-session
npm run dev
```

## Deploy

The project can be easily deployed to Vercel.

- Set the environment variables in the Vercel CLI.

Note that the postinstall script is important as otherwise Vercel will throw a build error.

```sh-session
 "scripts": {
    ...
    "postinstall": "prisma generate"
  },
```

## Acknowledgements

- [@shadcn](https://github.com/shadcn) and contributors for frigging awesome UI library.
