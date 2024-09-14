const Dropdown = ({ options, label }) => {
    return (
      <div className="mb-4">
        <label className="block mb-2 font-semibold">{label}</label>
        <select className="block w-full p-2 border border-gray-300 rounded">
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
              
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;
  