document.addEventListener('DOMContentLoaded', function () {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Initialize the dashboard on load
    function init() {
        updateDashboard();
        renderTransactionHistory();
        renderCharts();
        attachEventListeners();
    }

    // Add event listeners for form submission
    function attachEventListeners() {
        document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);
    }

    // Handle form submission for adding new transactions
    function handleFormSubmit(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const transaction = {
            id: Date.now(),
            amount,
            category,
            description,
            date: new Date().toLocaleDateString()
        };

        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));

        updateDashboard();
        renderTransactionHistory();
        renderCharts();
        
        document.getElementById('transaction-form').reset();
    }

    // Update budget overview section
    function updateDashboard() {
        const totalIncome = transactions.filter(t => t.category === 'income')
                                         .reduce((acc, t) => acc + t.amount, 0);
        const totalExpenses = transactions.filter(t => t.category === 'expense')
                                          .reduce((acc, t) => acc + t.amount, 0);

        const balance = totalIncome - totalExpenses;

        document.getElementById('total-income').textContent = `Ksh.${totalIncome.toFixed(2)}`;
        document.getElementById('total-expenses').textContent = `Ksh.${totalExpenses.toFixed(2)}`;
        document.getElementById('balance').textContent = `Ksh.${balance.toFixed(2)}`;
    }

    // Render the transaction history dynamically
    function renderTransactionHistory() {
        const transactionList = document.getElementById('transaction-list');
        transactionList.innerHTML = '';

        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>Ksh.${transaction.amount.toFixed(2)}</td>
                <td>${transaction.category}</td>
                <td>${transaction.description}</td>
                <td>${transaction.date}</td>
            `;
            transactionList.appendChild(row);
        });
    }

    // Render the charts dynamically
    function renderCharts() {
        const ctx1 = document.getElementById('income-expense-chart').getContext('2d');
        const incomeData = transactions.filter(t => t.category === 'income').map(t => t.amount);
        const expenseData = transactions.filter(t => t.category === 'expense').map(t => t.amount);

        const incomeExpenseData = {
            labels: transactions.map(t => t.date),
            datasets: [{
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        };

        new Chart(ctx1, {
            type: 'bar',
            data: incomeExpenseData,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        const totalIncome = incomeData.reduce((acc, val) => acc + val, 0);
        const totalExpenses = expenseData.reduce((acc, val) => acc + val, 0);
        const remainingBudget = totalIncome - totalExpenses;
        const monthlyLimit = 35000; // You can set this dynamically if needed

        const ctx2 = document.getElementById('budget-summary-chart').getContext('2d');
        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Spent', 'Remaining'],
                datasets: [{
                    label: 'Budget',
                    data: [totalExpenses, monthlyLimit - totalExpenses],
                    backgroundColor: ['red', 'green'],
                    borderColor: ['red', 'green'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%'
            }
        });
    }


    // Call the init function to kickstart the dashboard
    init();
});