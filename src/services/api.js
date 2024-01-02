import axios from "axios"
const API_URL = "http://localhost:3001/api"

/* Actual functions commented out so we can use example data. */
/*

const getBins = async () => {
  return axios.get(`${API_URL}/bins`).then(response => response.data)
}

const createBin = async (source) => {
  return axios.post(`${API_URL}/bins`, {source}).then(response => response.data)
}

const deleteBin = async (binUniqueStr) => {
  return axios.delete(`${API_URL}/bins/${binUniqueStr}`).then(response => response.data)
}

const getRequests = async (binUniqueStr) => {
  return axios.get(`${API_URL}/bins/${binUniqueStr}/requests`).then(response => response.data)
}

const getLog = async (binUniqueStr, logId) => {
  return axios.get(`${API_URL}/bins/${binUniqueStr}/requests/${logId}`).then(response => response.data)
}

*/

/* Fake functions with example data: */

let bins = [
  {
    id: 1,
    source: "github.com",
    uniqueStr: "423ed2f55848bfafe8bc84cc73a6f9",
    createdAt: new Date("September 11, 2023 03:24:00"),
  },
  {
    id: 2,
    source: "slack.com",
    uniqueStr: "285c73424b77b9c3c66f2766faa8da",
    createdAt: new Date("September 12, 2023 05:27:00"),
  },
  {
    id: 3,
    source: "discord.com",
    uniqueStr: "ecedd2ebee27fa7c78118ed3c7eecb",
    createdAt: new Date("September 12, 2023 08:24:00"),
  }
];

const getBins = async () => {
  return Promise.resolve(bins);
}

const deleteBin = async (binUniqueStr) => {
  bins = bins.filter(bin => bin.uniqueStr !== binUniqueStr)
}

const createBin = async (source) => {
  return Promise.resolve({
    id: 4,
    source: "discord.com",
    uniqueStr: "e83a7f7d9e19359fdfb65a1344bd78",
    createdAt: new Date("September 15, 2023 08:24:00"),
  })
}

const requests = {
  "423ed2f55848bfafe8bc84cc73a6f9": [
    {
      id: 1,
      binId: 1,
      mongoId: 1,
      httpMethod: "GET",
      httpPath: "/hello",
      time: new Date("September 12, 2023 10:24:00"),
    },
    {
      id: 2,
      binId: 1,
      mongoId: 2,
      httpMethod: "POST",
      httpPath: "/byte",
      time: new Date("September 12, 2023 09:13:00"),
    },
    {
      id: 3,
      binId: 1,
      mongoId: 3,
      httpMethod: "PATCH",
      httpPath: "/ok",
      time: new Date("September 13, 2023 10:13:00"),
    },
  ],
  "285c73424b77b9c3c66f2766faa8da": [],
  "ecedd2ebee27fa7c78118ed3c7eecb": [],
  "e83a7f7d9e19359fdfb65a1344bd78": [],
}

const logs = {
  1: {
    _id: 1,
    binId: 1,
    payload: {
      headers: {
        "host": "enb9vnfs1q11f.x.pipedream.net",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0"
      },
      params: {
        "a": "b",
        "c": "d"
      }
    }
  },
  2: {
    _id: 2,
    binId: 1,
    payload: {
      headers: {
        "host": "enb9vnfs1q11f.x.pipedream.net",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
        "content-type": "application/json"
      },
      body: {
        aKey: "value",
        anotherKey: "another value"
      }
    }
  },
  3: {
    _id: 3,
    payload: {}
  }
}

const logs2 = {
  "id": 10,
  "http_method": "POST",
  "created_at": "2023-01-27T09:22:16.342Z",
  "bin_id": 1,
  "headers": {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.30.0",
      "accept": "*/*",
      "postman-token": "ba188d98-ac36-4bb9-a92a-ab412a22134a",
      "host": "localhost:3001",
      "accept-encoding": "gzip, deflate, br",
      "connection": "keep-alive",
      "content-length": "39"
  },
  "body": "{\r\n    \"mesage\": \"Hello to the bin!\"\r\n}"
};

const getRequests = async binUniqueStr => {
  return Promise.resolve(requests[binUniqueStr])
}

const getLog = async (requestId) => {
  return Promise.resolve(logs2);
};

/* End example data */

const api = {
  getBins, 
  createBin, 
  deleteBin, 
  getRequests, 
  getLog,
};
export default api;

