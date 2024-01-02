import axios from "axios";

async function getRequests(unique_string) {
  const response = await axios.get(`/api/bins/${unique_string}/requests`);
  return response.data;
}

async function requestById(unique_string, requestId) {
  const response = await axios.get(`/api/bins/${unique_string}/requests/${requestId}`);
  return response.data;
}

export { getRequests, requestById };