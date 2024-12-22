import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SchedulePage() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "TEST 1" },
    { id: 2, name: "TEST 2" },
    { id: 3, name: "TEST 3" },
  ]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [scheduleDate, setScheduleDate] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const toggleEmployeeSelection = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((empId) => empId !== id) : [...prev, id]
    );
  };

  console.log({ selectedEmployees });
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Schedule Employees
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">
            Select Employees:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md"
              >
                <input
                  type="checkbox"
                  id={`employee-${employee.id}`}
                  checked={selectedEmployees.includes(employee.id)}
                  onChange={() => toggleEmployeeSelection(employee.id)}
                  className="text-blue-500 focus:ring focus:ring-blue-300"
                />
                <label
                  htmlFor={`employee-${employee.id}`}
                  className="text-gray-800"
                >
                  {employee.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Schedule Date:
          </label>
          <DatePicker
            selected={scheduleDate}
            onChange={(date) => setScheduleDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Comment :
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={200}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Schedule
        </button>
      </form>
    </div>
  );
}
