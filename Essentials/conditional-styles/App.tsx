import "./App.css";

const employees = [
  { id: 1, name: "John Doe", isManager: true },
  { id: 2, name: "Jane Smith", isManager: false },
];

function App() {
  return (
    <div>
      {employees.map((employee) => (
        <p key={employee.id} className="employee">
          <span>{employee.name}: </span>
          <span className={employee.isManager ? "is-manager" : undefined}>
            {employee.isManager ? "Manager" : "Employee"}
          </span>
        </p>
      ))}
    </div>
  );
}

export default App;
