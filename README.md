# Electron Task Verse

A modern desktop productivity app with a **glassmorphism-inspired UI**, built with **Electron**, **React**, and **TypeScript**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Architecture](#architecture)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Features

**_Beautiful UI_**

- Glass / blur effects inspired by modern macOS
- Focused, minimal layout for tasks and projects
- Smooth transitions and micro-interactions

**_Smart Task Management_**

- Organize tasks into multiple views and categories
- Easy navigation between different task groups
- Designed to stay fast even as your task list grows

**_Desktop-First Experience_**

- Native desktop app built with Electron
- Not just a browser wrapper – tailored for keyboard and mouse
- Cross-platform potential (macOS, Windows, Linux)

**_Developer Friendly_**

- Fully typed with TypeScript
- Clear, modern React patterns (hooks, functional components)
- Clean architecture that’s easy to contribute to and extend

---

## Tech Stack

- **Desktop Shell:** Electron
- **Framework:** React 19 + TypeScript
- **UI Library:** Chakra UI
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Build Tooling:** Vite
- **Icons:** React Icons

---

## Screenshots

> Add real screenshots here to show off the UI.

- `![Glass UI with transparent effects](docs/screenshots/glass-ui.png)`
- `![Task management interface](docs/screenshots/tasks.png)`
- `![Smooth animations and transitions](docs/screenshots/animations.png)`

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Yarn (or npm / pnpm if you prefer and update commands accordingly)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/electron-task-verse
cd electron-tm

# Install dependencies
yarn install
```

### Development

```bash
yarn dev
```

This will start the development environment for both the Electron main process and the React renderer.

### Production Build

```bash
yarn build
# After build completes
yarn start
```

---

## Architecture

At a high level, the app is split into **Electron main** and **renderer** processes:

- **Main process**

  - Creates and manages application windows
  - Handles native menus, tray, and OS-level integration
  - Bridges between the OS and the renderer via IPC

- **Renderer (React + Chakra UI)**
  - Implements the glass UI and all task management views
  - Uses **Zustand** for predictable, centralized state
  - Uses **Framer Motion** for smooth component-level animations

This structure keeps the UI layer clean while allowing future extensions like multiple windows, offline storage, or background sync.

---

## Contributing

This project is being built with open-source in mind. Once the initial foundation is stable, contributions will be very welcome:

1. **Fork** the repository
2. Create a new branch for your feature or fix
3. Commit and push your changes
4. Open a **Pull Request** with a clear description and screenshots (if UI-related)

Issues and suggestions are also appreciated – they help shape the roadmap and improve the overall user experience.

---

## License

This project is planned to be released under an open-source license (for example, **MIT**). The final license text will be added to a `LICENSE` file before the first public release.
