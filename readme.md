# men-api-scaffold

A simple CLI tool to scaffold a modern MEN stack (MongoDB, Express, Node.js) API project using ES6 modules.

## 🚀 Usage

You can use this tool to create a new API project by running:

```bash
npx men-api-scaffold my-api
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

> [!IMPORTANT]
> In case you are not using mongoDB in your pc you will get an `MongooseServerSelectionError: connect ECONNREFUSED`

# ⚠️ MongoDB Connection Requirements

This scaffold uses MongoDB with Mongoose. To run the project successfully, a valid MongoDB connection must be available.

## 🧩 1. Use Local MongoDB (default option)

By default, the scaffold expects MongoDB to be running locally at:
mongodb://localhost:27017

### ✅ Steps to run it locally:

1. **Install MongoDB Community Edition:**
   * https://www.mongodb.com/try/download/community

2. **Start MongoDB:**
   * On Windows (using services):
   ```bash
   net start MongoDB

Or manually:

`bashmongod`

Verify it is running:
`bashmongo`

- Set the .env file:
Create your .env from the example file:
bashcp .env.example .env
Example content:
envMONGO_URI=mongodb://localhost:27017/men-db
PORT=4444

## 🌐 2. Use MongoDB Atlas (cloud)
- If you don't want to install MongoDB locally, use MongoDB Atlas:
✅ Steps:

1. Sign up at: https://www.mongodb.com/cloud/atlas
2. Create a new cluster (Shared Tier is free)
3. Click "Connect" > "Connect your application", and copy the connection string like:
__mongodb+srv://<user>:<password>@<cluster-url>.mongodb.net/<db-name>?retryWrites=true&w=majority__

4. Replace <user>, <password>, <cluster-url>, and <db-name> with your actual values.
5. Paste it into your .env:
`envMONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/my-db
PORT=4444`

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