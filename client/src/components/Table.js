const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const { id, email, first_name, last_name } = item;
          return (
            <tr key={id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
