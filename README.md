# Smart Expense Tracker (SET)

A modern, responsive web application for tracking income and expenses with advanced filtering, search, and analytics capabilities.

## Features

### Core Features
- ✅ **Add Transactions** - Easily record income and expense entries
- ✅ **Edit & Delete** - Modify or remove transactions
- ✅ **Comprehensive Details** - Track type, title, amount, category, date, and notes
- ✅ **Summary Dashboard** - View total balance, income, and expenses at a glance
- ✅ **Advanced Filtering** - Filter by category, type, and date range
- ✅ **Search Functionality** - Search transactions by title or notes
- ✅ **Analytics** - View monthly trends and category breakdowns with charts
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

### UI Components
- Header with app branding
- Summary cards (Balance, Income, Expenses)
- Transaction form with validation
- Transaction list with edit/delete actions
- Filter bar with multiple criteria
- Search bar with real-time filtering
- Empty state messaging
- Navigation with routing

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── SummaryCards.tsx
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── TransactionItem.tsx
│   ├── SearchBar.tsx
│   ├── FilterBar.tsx
│   ├── EmptyState.tsx
│   └── index.ts
├── pages/               # Page components
│   ├── Dashboard.tsx    # Main dashboard
│   └── Analytics.tsx    # Charts and reports
├── types.ts             # TypeScript interfaces
├── utils.ts             # Helper functions
├── App.tsx              # Main app component
├── App.css              # Global styles
└── main.tsx             # Entry point
```

## Data Structure

Each transaction contains:
- `id`: Unique identifier
- `type`: 'income' or 'expense'
- `title`: Transaction description
- `amount`: Numeric amount
- `category`: One of the predefined categories
- `date`: ISO format date string
- `note`: Optional additional notes

### Predefined Categories
- Food
- Transport
- Bills
- Shopping
- Health
- Salary
- Freelance
- Entertainment

## Getting Started

### Prerequisites
- Node.js 16+ and npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Lint code

## Key Features Explained

### Transaction Management
- Add new transactions with all details
- Edit existing transactions
- Delete transactions with confirmation
- View all transactions in a sortable list

### Filtering & Search
- Search by transaction title or note
- Filter by category
- Filter by type (income/expense)
- Filter by date range
- Reset all filters at once

### Analytics Dashboard
- Monthly income vs. expense trends
- Category-wise spending breakdown
- Summary statistics
- Visual charts using Recharts

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Grid layout that adapts from 1 to 3 columns
- Touch-friendly buttons and inputs
- Optimized font sizes for all devices

## Styling Highlights

- Clean, modern UI with Tailwind CSS
- Consistent color scheme:
  - Primary (Blue): #3b82f6
  - Income (Green): #10b981
  - Expense (Red): #ef4444
- Smooth transitions and hover effects
- Accessible focus states
- Professional shadow and spacing

## Future Enhancements

- [ ] Budget creation and tracking
- [ ] Recurring transactions
- [ ] Export to CSV/PDF
- [ ] Dark mode
- [ ] User authentication
- [ ] Cloud sync with backend API
- [ ] Transaction tags
- [ ] Budget alerts
- [ ] Multi-currency support
- [ ] Advanced reporting

## Component Props

All components are typed with TypeScript. Key props include:

- **SummaryCards**: `balance`, `totalIncome`, `totalExpense`
- **TransactionForm**: `onSubmit`, `initialValues`
- **TransactionList**: `transactions`, `onDelete`, `onEdit`
- **FilterBar**: Multiple filter state and handlers
- **SearchBar**: `value`, `onChange`, `placeholder`

## Calculations

The app includes utility functions for:
- `calculateBalance()` - Income minus expenses
- `calculateTotalIncome()` - Sum of all income
- `calculateTotalExpense()` - Sum of all expenses
- `filterTransactions()` - Apply all filter criteria
- `getMonthlySummary()` - Monthly aggregation
- `getCategoryBreakdown()` - Category totals

## License

MIT

## Support

For issues or feature requests, please create an issue in the repository.

---

Built with ❤️ for managing your finances better.