import React, { useState } from 'react';
import AvailabilityList from './AvailabilityList';

const AvailabilitySearch = () => {
  const [availabilityId, setAvailabilityId] = useState('');
  const [searchId, setSearchId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchId(availabilityId);
  };

  return (
    <div className="bg-white p-5 flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label>ID de Disponibilidad:</label>
          <input
            type="text"
            value={availabilityId}
            onChange={(e) => setAvailabilityId(e.target.value)}
            required
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Buscar</button>
      </form>
      {searchId && <AvailabilityList availabilityId={searchId} />}
    </div>
  );
};

export default AvailabilitySearch;
