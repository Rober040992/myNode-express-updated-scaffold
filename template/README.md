# Node ES6 Scaffold

A clean and minimal scaffold to build RESTful APIs using the MEN stack (MongoDB, Express, Node.js) with modern ES6 module support.

This project is ideal for quickly starting backend development with an organized folder structure and essential dependencies already configured.

---

## 📦 Installation

```bash
npm install
```

---

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

## 📁 Folder Structure

```
NODE-ES6-SCAFFOLD/
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