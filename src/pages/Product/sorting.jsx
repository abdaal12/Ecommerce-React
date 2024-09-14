import Dropdown from "./Dropdown";
const Sorting = () => {
    return (
      <div className="flex justify-between mb-6">
        <Dropdown
          label="Category"
          options={[
            { label: 'Living Room', value: 'living-room' },
            { label: 'Bedroom', value: 'bedroom' },
            // Add more categories
          ]}
        />
        <Dropdown
          label="Price"
          options={[
            { label: 'All Price', value: 'all' },
            { label: 'Under $100', value: 'under-100' },
            { label: 'Above $500', value: 'above-500' },
          ]}
        />
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Sort by:</label>
          <select className="p-2 border border-gray-300 rounded">
            <option value="popularity">Popularity</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default Sorting;
  