import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8001',
});

const stringifyDetail = (detail) => {
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) {
    return detail
      .map((item) => (typeof item === 'string' ? item : JSON.stringify(item)))
      .join(' | ');
  }
  if (typeof detail === 'object' && detail !== null) {
    try {
      return JSON.stringify(detail);
    } catch {
      return String(detail);
    }
  }
  return String(detail);
};

export const postPrediction = async (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);

  try {
    const response = await apiClient.post('/predict', formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const backendDetail = error.response?.data?.detail;
      const message = backendDetail
        ? stringifyDetail(backendDetail)
        : error.response?.statusText || error.message || 'Unknown network error';
      throw new Error(message);
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export default apiClient;
