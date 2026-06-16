import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Transaction, TransactionFormValues } from '../types';
import { CATEGORIES } from '../utils';

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  initialValues?: Transaction;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<TransactionFormValues>(
    initialValues
      ? {
          type: initialValues.type,
          title: initialValues.title,
          amount: initialValues.amount.toString(),
          category: initialValues.category,
          date: initialValues.date,
          note: initialValues.note,
        }
      : {
          type: 'expense',
          title: '',
          amount: '',
          category: 'Food',
          date: new Date().toISOString().split('T')[0],
          note: '',
        }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.title || !values.amount) {
      alert('Please fill in all required fields');
      return;
    }

    onSubmit({
      type: values.type,
      title: values.title,
      amount: parseFloat(values.amount),
      category: values.category,
      date: values.date,
      note: values.note,
    });

    setValues({
      type: 'expense',
      title: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
      note: '',
    });
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition"
        >
          <Plus size={20} />
          Add Transaction
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            {initialValues ? 'Edit Transaction' : 'Add New Transaction'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type *
              </label>
              <select
                name="type"
                value={values.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="Enter transaction title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount *
              </label>
              <input
                type="number"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={values.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Note
            </label>
            <textarea
              name="note"
              value={values.note}
              onChange={handleChange}
              placeholder="Add a note (optional)"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              {initialValues ? 'Update' : 'Add'} Transaction
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-6 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TransactionForm;
