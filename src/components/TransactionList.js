import { jsx as _jsx } from "react/jsx-runtime";
import TransactionItem from './TransactionItem';
const TransactionList = ({ transactions, onDelete, onEdit, }) => {
    return (_jsx("div", { className: "space-y-3", children: transactions.map((transaction) => (_jsx(TransactionItem, { transaction: transaction, onDelete: onDelete, onEdit: onEdit }, transaction.id))) }));
};
export default TransactionList;
