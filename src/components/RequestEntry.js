import React, { useEffect, useState } from "react";
import { requestById } from "../services/requests";

export const RequestEntry = ({ request, assignActiveRequest }) => {
  // const { binId, uniqueStr } = request;
  const [data, setData] = useState({});

  function changeActiveRequest() {
    assignActiveRequest(request);
  }

  useEffect(() => {
    async function populateData() {
      const requestData = await requestById(request.uniqueStr, request.id);
      setData(requestData);
    }
    populateData();
  }, [request.uniqueStr, request.id]);

  // Format date string
  const dateString = request.created_at;
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "EST",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div 
      onClick={changeActiveRequest}
      className={`flex justify-between py-2 ${
        request.active ? "bg-purple-100" : ""
      } hover:bg-purple-50 hover:cursor-pointer`}
    >
      <p className="mx-4">{formattedDate}</p>
      <p className="text-gray-600 mx-4">
        {Object.keys(data).length > 0 ? `/ ${data.http_method}` : null}
      </p>
    </div>
  );
}

export default RequestEntry;