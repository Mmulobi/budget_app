Personal Budget App
Overview
The Personal Budget App is a simple, dynamic, and interactive web application designed to help users track their income and expenses, visualize their financial data, and manage their personal budget effectively. The app features an intuitive dashboard that displays key financial summaries, a transaction history, and a visual representation of the user's spending patterns.

Features
Real-time Budget Tracking: Track total income, total expenses, and the current balance dynamically.
Add and Manage Transactions: Easily add, edit, and delete income or expense transactions with a detailed description.
Interactive Dashboard: Visualize financial summaries through progress bars and charts.
Transaction History: View all past transactions with the ability to edit or delete them.
Responsive UI: The app adjusts seamlessly across devices to provide a great user experience on both desktop and mobile.
Modern Design: Featuring a sleek, modern user interface with a sidebar, categories, calendar, and intuitive navigation.
Technology Stack
Frontend: HTML5, CSS3, JavaScript
Libraries/Tools:
Chart.js for generating dynamic charts.
LocalStorage for persistent data storage on the user's browser.
Screenshots
Dashboard Overview

Add New Transaction

Transaction History

How to Run
Clone the repository:

bash
Copy code
git clone https://github.com/Mmulobi/personal-budget-app.git
cd personal-budget-app
Open the project:

Simply open index.html in your browser to start using the app.
Note:

The app relies on the browser's LocalStorage to save transactions and user data. All data will persist between sessions as long as the browser’s LocalStorage is not cleared.
File Structure
bash
Copy code
├── index.html           # Main HTML file
├── dashboard.html       # Dashboard page
├── css/
│   ├── styles.css       # General styles
│   └── dashboard.css    # Dashboard-specific styles
├── scripts/
│   ├── dashboard.js     # Handles dashboard functionality and logic
│   └── charts.js        # Contains chart logic for visual representation
└── README.md            # Project documentation
Key Components
1. Dashboard
Displays total income, expenses, and balance.
Includes a form to add new transactions.
Shows a detailed transaction history.
2. Transaction Form
Users can enter the amount, select the category (income/expense), and add a description.
Submitting the form updates the transaction history and recalculates the budget.
3. Transaction History
Displays all transactions in a table format.
Includes options to edit or delete specific transactions.
4. Charts and Visualization
Bar charts display expenses and income over time.
Circular progress bars provide a visual representation of budget allocation.
Future Enhancements
User Authentication: Add support for multiple users with authentication and personalized budgets.
Category Management: Enable users to create custom categories for expenses and income.
Export/Import: Allow users to export their transaction history to a CSV file and import previous data.
License
This project is licensed under the MIT License. See the LICENSE file for more details.