const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getFriendlyMessage = (status, message) => {
    switch (status) {
        case 401:
            return "Your session has expired. Please log in again.";
        case 403:
            return "You do not have permission to perform this action.";
        case 404:
            return "Course not found.";
        case 500:
            return "Something went wrong. Please try again later.";
        default:
            return message || "An unexpected error occurred.";
    }
};

const apiRequest = async (endpoint, options = {}, token) => {
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await res.json();

    if (!res.ok) {
        const message = getFriendlyMessage(res.status, data.message);
        throw new Error(message);
    }

    return data;
};

export const getInstructors = async () => {
  const res = await fetch(`${API_URL}/api/instructors`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load instructors");
  }

  return data.data || [];
};

export const getCourses = async (token, { search = "", page = 1, limit = 10 } = {}) => {
    const params = new URLSearchParams();
    if (search) {
        params.set("search", search);
    }
    params.set("page", String(page));
    params.set("limit", String(limit));

    return apiRequest(`/api/courses?${params.toString()}`, {}, token);
};

export const getCourse = async (id, token) => {
    return apiRequest(`/api/courses/${id}`, {}, token);
};

export const createCourse = async (course, token) => {
    return apiRequest("/api/courses", {
        method: "POST",
        body: JSON.stringify(course),
    }, token);
};

export const updateCourse = async (id, course, token) => {
    return apiRequest(`/api/courses/${id}`, {
        method: "PUT",
        body: JSON.stringify(course),
    }, token);
};

export const deleteCourse = async (id, token) => {
    return apiRequest(`/api/courses/${id}`, {
        method: "DELETE",
    }, token);
};

export const register = async (userData) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Registration failed");
    }
    return data;
};

export const login = async (credentials) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }
    return data;
};

export const getProfile = async (token) => {
    return apiRequest("/api/profile", {}, token);
};
