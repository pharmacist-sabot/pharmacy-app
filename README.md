# Pharmacy Management System

A modern, responsive web application designed for efficient pharmacy management. Built with **Vue 3**, **Vite**, and **TailwindCSS**, this system provides a streamlined interface for managing inventory, tracking sales, and configuring pharmacy settings.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.x-green.svg)
![Vite](https://img.shields.io/badge/Vite-6.x-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue.svg)

## 🚀 Features

- **📊 Dashboard**: Real-time overview of total sales, low stock alerts, active prescriptions, and product counts.
- **💊 Inventory Management**:
  - View comprehensive medicine lists with categories, stock levels, and prices.
  - Visual status indicators (In Stock, Low Stock, Critical).
  - **Add Medicine**: Easy-to-use modal for adding new products to the inventory.
- **⚙️ Settings**:
  - Configure pharmacy details (Name, Address, Phone).
  - Set custom notification thresholds for low stock alerts.
- **📱 Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **🇹🇭 Localization**: Full Thai language support for the user interface.

## 🛠️ Tech Stack

- **Framework**: [Vue.js 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Icons**: [Lucide Vue](https://lucide.dev/)

## 📂 Project Structure

```
pharmacy-app/
├── src/
│   ├── components/      # Reusable UI components
│   │   └── Layout/      # Layout components (Sidebar, etc.)
│   ├── router/          # Route definitions
│   ├── views/           # Page components (Dashboard, Inventory, Settings)
│   ├── App.vue          # Root component
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles and Tailwind directives
├── public/              # Static assets
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/pharmacist-sabot/pharmacy-app.git
    cd pharmacy-app
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` to view the application.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The output files will be in the `dist` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
