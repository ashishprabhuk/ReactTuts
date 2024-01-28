const List = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  // Assuming data is an array of objects with keys that represent table columns
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.entries(item).map(([key, value]) => (
              <td key={key}>{JSON.stringify(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
