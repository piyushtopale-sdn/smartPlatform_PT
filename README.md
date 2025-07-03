# smartPlatform-MERN

SmartPlatformMERN is a modular MERN stack project (MongoDB, Express.js, React, Node.js) designed for scalability, maintainability, and reusability. It adopts a pods-based architecture, where each feature is encapsulated as an independent micro frontend (pod). The platform includes a shared service layer, reusable UI components, centralized theming, and an efficient routing system. This structure enables seamless integration, faster development, and clear separation of concerns across features.

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
- **Frontend (React):** Inside `shell/src/` and individual pods like `login-pod/frontend/component-a`.
- **Shared Services:** Common components, styling, and logic are housed under `shell`.
- **Backend:** Inside `shared-services/` with shared `api-gateway` for backend service routing.

# 🧩 smartPods (Feature Modules)
Pods are self-contained feature modules.  
Each pod contains its own screens, navigation, and logic.  
Example: The `login-pod` contains all authentication-related screens and navigation.

# 🚀 Get Started

```bash
# Run the app
docker compose up --build

# Stop the app
docker compose down
```

<!-- 
# Run Build
npm run build
-->

# 📦 Adding a New Pod
- Create a new pod inside `smartPods/` (e.g., `smartPods/profile-pod/`)
- Add the new pod reference in `docker-compose.yaml`
- Define the frontend entry point in `shell/webpack.config.js`
- Expose frontend module path in the pod’s `webpack.config.js`
- Update any necessary `.env` variables

# 🤝 Contributing
- Keep UI components generic and reusable
- Encapsulate feature logic within pods
