const API_BASE_URL = "http://localhost:3000/api";

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data.token;
};

export const getEmployees = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/employees`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return await response.json();
};

export const createSchedule = async (scheduleData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(scheduleData),
  });

  if (!response.ok) {
    throw new Error("Failed to create schedule");
  }

  return await response.json();
};
