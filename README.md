# smartPlatform-MERN

smartPlatform-MERN is a modular MERN stack project (MongoDB, Express.js, React, Node.js) designed for scalability, maintainability, and reusability. It adopts a pods-based architecture, where each feature is encapsulated as an independent micro frontend (pod). 

The platform includes a shared service layer, reusable UI components, centralized theming, and an efficient routing system. This structure enables seamless integration, faster development, and clear separation of concerns across features.

![Docker](https://img.shields.io/badge/containerized-Docker-blue)
![Node.js](https://img.shields.io/badge/backend-Express-green)
![React](https://img.shields.io/badge/frontend-React-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 📚 Table of Contents
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Key Highlights for MERN](#-key-highlights-for-mern)
- [smartPods (Feature Modules)](#-smartpods-feature-modules)
- [Get Started](#-get-started)
- [Adding a New Pod](#-adding-a-new-pod)
- [Sample .env File](#-sample-env-file)
- [Contributing](#-contributing)
<!-- - [Code Quality](#-code-quality) -->

# 🛠️ Tech Stack
- **Frontend:** React `18.x`, Webpack 5, Babel
- **Backend:** Node.js `18.x`, Express.js
- **Database:** MongoDB
- **Architecture:** Microfrontend (Module Federation), Pod-based
- **Containerization:** Docker, Docker Compose

# 📁 Folder Structure

<details>
<summary>smartPlatform/</summary>

```
├── .env
├── .gitignore
├── README.md
├── docker-compose.yaml
```

<details>
<summary>├── shared-services/</summary>

```
│   └── api-gateway/
│       ├── Dockerfile
│       ├── config/
│       │   └── index.js
│       ├── index.js
│       └── package.json
```
</details>

<details>
<summary>├── shell/</summary>

```
│   ├── Dockerfile
│   ├── babel.config.js
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Bootstrap.js
│   │   ├── index.js
│   │   ├── logo.svg
│   │   └── store.js
│   └── webpack.config.js
```
</details>

<details>
<summary>├── smartPods/</summary>

<details>
<summary>│   ├── custom-pod/</summary>

<details>
<summary>│   │   ├── backend/user-service-a/</summary>

```
│   │   │   ├── Dockerfile
│   │   │   ├── index.js
│   │   │   └── package.json
```
</details>

<details>
<summary>│   │   └── frontend/user-component-a/</summary>

```
│   │       ├── babel.config.js
│   │       ├── package.json
│   │       ├── public/
│   │       │   └── index.html
│   │       ├── src/
│   │       │   ├── App.js
│   │       │   ├── Bootstrap.js
│   │       │   ├── index.js
│   │       │   └── logo.svg
│   │       └── webpack.config.js
```
</details>
</details>

<details>
<summary>│   └── login-pod/</summary>

<details>
<summary>│       ├── backend/</summary>

<details>
<summary>│       │   ├── service-a/</summary>

```
│       │   │   ├── Dockerfile
│       │   │   ├── index.js
│       │   │   └── package.json
```
</details>

<details>
<summary>│       │   └── service-b/</summary>

```
│       │       ├── Dockerfile
│       │       ├── index.js
│       │       └── package.json
```
</details>
</details>

<details>
<summary>│       └── frontend/</summary>

<details>
<summary>│           ├── component-a/</summary>

```
│           │   ├── babel.config.js
│           │   ├── package.json
│           │   ├── public/
│           │   │   └── index.html
│           │   ├── src/
│           │   │   ├── App.js
│           │   │   ├── Bootstrap.js
│           │   │   ├── index.js
│           │   │   └── logo.svg
│           │   └── webpack.config.js
```
</details>

<details>
<summary>│           └── component-b/</summary>

```
│               ├── babel.config.js
│               ├── package.json
│               ├── public/
│               │   └── index.html
│               ├── src/
│               │   ├── App.js
│               │   ├── Bootstrap.js
│               │   ├── index.js
│               │   └── logo.svg
│               └── webpack.config.js
```
</details>
</details>
</details>

</details>
</details>

# 🧩 Key Highlights for MERN:
- **Frontend:** Inside `shell/src/` and individual pods like `login-pod/frontend/component-a`.
- **Backend:** Inside `shared-services/` and individual pods like `login-pod/backend/service-a`.

# 🧩 smartPods (Feature Modules)
- Pods are self-contained feature modules.  
- Each pod contains its own screens, navigation, and logic.  
- Example: The `login-pod` contains all authentication-related screens and navigation.

# 🚀 Get Started

```bash
# Run the app
docker compose up --build

# Stop the app
docker compose down

# Build the app locally
npm run build

# Serve the built app (requires 'serve' package)
npm run serve
```

# 📦 Adding a New Pod
- Create a new pod inside `smartPods/` (e.g., `smartPods/profile-pod/`)
- Add the new pod reference in `docker-compose.yaml`
- Define the frontend entry point in `shell/webpack.config.js`
- Expose frontend module path in the pod’s `webpack.config.js`
- Update any necessary `.env` variables

# 🔐 Sample .env File

```
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/smartPlatform
JWT_SECRET=your_jwt_secret
API_GATEWAY_URL=http://localhost:3000
```

# 🤝 Contributing
- Keep UI components generic and reusable
- Encapsulate feature logic within pods
- Follow consistent naming conventions across both frontend (React) and backend (Node.js):

<details>
<summary><strong>📌 Naming Conventions (React + Node.js)</strong></summary>

| Type                  | Convention            | React Example        | Node.js Example         |
|-----------------------|-----------------------|-----------------------|--------------------------|
| Component / Class     | PascalCase            | `UserCard.jsx`        | `UserService.js`         |
| Hook (React only)     | use + camelCase       | `useAuth.js`          | —                        |
| Function / Method     | camelCase             | `handleClick()`       | `getUserData()`          |
| Variable / Const      | camelCase             | `userName`            | `dbClient`               |
| Constant              | UPPER_SNAKE_CASE      | `MAX_ATTEMPTS`        | `DB_URL`                 |
| File Name             | kebab-case            | `user-profile.jsx`    | `user-service.js`        |
| Folder Name           | kebab-case            | `user-profile/`       | `middleware/`            |
| Redux Slice File      | camelCase             | `authSlice.js`        | —                        |
| Route File            | kebab-case (plural)   | —                     | `users.js`               |
| Environment Variable  | UPPER_SNAKE_CASE      | `REACT_APP_API_URL`   | `JWT_SECRET`             |
| Middleware Function   | camelCase             | —                     | `authMiddleware()`       |
| Config File           | kebab-case            | —                     | `db-config.js`           |

</details>


<!-- # 🧹 Code Quality
- Linting: ESLint 
- Formatting: Prettier
- Commit Convention: Conventional Commits (recommended for CI/CD) -->
