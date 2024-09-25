# Galago Full Tilt Atomic Design Library

## Installation

Install the package using Yarn:

```bash
yarn add @galago/full-tilt
```

## Requirements

### TODO: figure out how to make these optional

```bash
Environment Variables
Make sure to export the following environment variables:

STRIPE_API_KEY=your_stripe_api_key_here
MUI_X_DATA_GRID_PREMIUM_KEY=your_mui_x_data_grid_premium_key_here
```

# Development Environment

## Requirements

Node.js >= 16.15.0

# Testing

Run unit tests using:

```bash
yarn test
```

To test a single file:

```bash
yarn test src/path/to/file
```

To test changed files:

```bash
yarn test $(git diff --cached --name-only | grep test.tsx)
```

To reset snapshots:

```bash
yarn test -u
```

# Git Flow

```bash
Follow Conventional Commits for commit messages:

fix: <description> — Bug fixes
feat: <description> — New features
chore: <description> — Maintenance tasks
test: <description> — Adding or updating tests
refactor: <description> — Code improvements without changing functionality
Examples:
```

```bash
git commit -m "fix: responsive issue on mobile devices"
git commit -m "feat: add new user authentication flow"
git commit -m "chore: update dependencies to latest versions"
git commit -m "test: add unit tests for the header component"
git commit -m "refactor: optimize data fetching logic"
Branching Strategy
Create a new branch from main for your task:
```

```bash

git checkout -b feature/your-feature-name
For tasks that depend on another branch, branch off from that branch:
```

```bash
git checkout -b feature/your-dependent-feature
```
