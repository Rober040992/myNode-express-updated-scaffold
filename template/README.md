# men-api-scaffold

A clean and minimal scaffold to build RESTful APIs using the MEN stack (MongoDB, Express, Node.js) with modern ES6 module support.

This project is ideal for quickly starting backend development with an organized folder structure and essential dependencies already configured.

---

## 📦 Installation

```bash
npm install
```

---

## .env
- Before run the app, create a `.env` file in our root based on the provided `.env.example` or copy it.

## 🚀 Run the project

```bash
npm run dev
```

By default, the app will run on port `4444`. You can customize the port using a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost/my-database
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

## 📁 Folder Structure

```
my-api/
├── bin/
│   └── www               # Entry point for HTTP server
├── controllers/          # Express controllers
├── lib/
│   └── mongooseConfig.js # MongoDB connection setup
├── middlewares/          # Custom express middlewares
├── models/               # Place your Mongoose models here
├── public/
│   ├── images/           # Static images
│   └── stylesheets/      # Static CSS or other assets
├── routes/
│   └── Routes.js         # Express routes
├── views/                # Optional view engine templates
├── .env                  # Environment variables (ignored)
├── .gitignore            # Files to ignore in git
├── app.js                # Main app setup with Express
├── package.json          # Project metadata and scripts
├── README.md             # This file
└── eslint config files   # Code style configuration
```

---

## 📚 Dependencies Included

Already included in `package.json`:

### Runtime Dependencies
> [!TIP]
> If there is any dependency useless for your project, just delete it from the `package.json`right before use `npm install`

- `express`: Web framework
- `cors`: providing a Connect/Express middleware
- `mongoose`: MongoDB ODM
- `dotenv`: Load environment variables
- `morgan`: HTTP request logger
- `http-errors`: Error handling utility
- `multer`: File upload middleware
- `express-session`: Session middleware
- `connect-mongo`: MongoDB session store
- `jsonwebtoken`: For token-based auth
- `cross-env`: Environment variable support across platforms
- `zod`: validations

### Dev Dependencies

- `eslint` + `standard`: For linting and code style
- `rimraf`, `glob`: Utility tools

---

## ✅ What you get

- Basic Express app with JSON & form body parsing
- MongoDB connection ready via `mongoose`
- Clean `Routes.js` with a sample `GET /` route
- Static file serving (images, CSS)
- `.env` support for environment configuration
- ESLint with StandardJS preconfigured
- Modular folder structure

---

## 📝 License

MIT