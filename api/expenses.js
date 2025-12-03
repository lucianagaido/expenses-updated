let expenses = [];

// Serverless function handler
export default function handler(req, res) {
  // Handling GET request to fetch all expenses
  if (req.method === 'GET') {
    return res.status(200).json(expenses);
  }

  // Handling POST request to add a new expense
  if (req.method === 'POST') {
    const { amount, description, category, date } = req.body;

    // Error handling for missing fields
    if (!amount || !description || !category || !date) {
      return res.status(400).json({ error: 'All fields (amount, description, category, date) are required.' });
    }

    // Add the new expense to the memory array
    const newExpense = { amount, description, category, date };
    expenses.push(newExpense);

    return res.status(201).json(newExpense);
  }

  // Handle unsupported methods
  res.status(405).json({ error: 'Method Not Allowed' });
}
