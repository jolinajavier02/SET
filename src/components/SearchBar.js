import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from 'lucide-react';
const SearchBar = ({ value, onChange, placeholder = 'Search transactions...', }) => {
    return (_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-3 text-gray-400", size: 20 }), _jsx("input", { type: "text", value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, className: "w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] }));
};
export default SearchBar;
