# men-api-scaffold

A simple CLI tool to scaffold a modern MEN stack (MongoDB, Express, Node.js) API project using ES6 modules.

## 🚀 Usage

You can use this tool to create a new API project by running:

```bash
npm init men-api
```

Or using `npx`:

```bash
npx create-men-api my-api
```

This will create a new folder `my-api/` with the full project structure, including all configuration files and dependencies defined.

---

## 📁 What you get

- Express app with ES6 module support
- MongoDB integration via Mongoose
- Static file setup and middleware preconfigured
- `.env.example` and linting ready
- Modular folder structure for scalability

---

## 📝 Next steps

After generation:

```bash
cd my-api
npm install
```
- make sure to __create .env based on the provided .example__ or copy it as logs show right before launch.

finally

```bash
npm run dev
```

---

## 📦 Project structure

The generated project includes:

```
my-api/
├── bin/
├── lib/
├── models/
├── public/
├── routes/
├── views/
├── app.js
├── .env.example
├── package.json
├── README.md
└── ...
```

---

## 🛠 Maintained by

Roberto Gomez Fabrega  
[GitHub Repository](https://github.com/Rober040992/myNode-express-updated-scaffold)