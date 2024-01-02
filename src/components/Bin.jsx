import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRequests, requestById } from "../services/requests";
import RequestDetails from "./RequestDetails"
import BinURL from "./BinURL"
import RequestList from "./RequestsList";
import { addCookie } from "../services/cookies";

const Bin = () => {
  const unique_string = useParams().unique_string

  const [requests, setRequests] = useState([])
  const [activeRequest, setActiveRequest] = useState(null);
  addCookie(document, unique_string);

  useEffect(() => {
    async function retrieveRequests() {
      let data = await getRequests(unique_string);
      console.log(data);
      for (const req of data) {
        // const temp = await requestById(unique_string, req.id);
        // console.log(temp);
        const { body, headers } = await requestById(unique_string, req.id);
        req.body = body;
        req.headers = headers;
      }

      console.log(data);
      data.forEach((req) => (req.active = false));
      if (data.length > 0) {
        data[0].active = true;
      }
      data.length > 0 ? setActiveRequest(data[0]) : setActiveRequest(null);
      setRequests(data);
    }
    retrieveRequests();
  }, [unique_string]);

  function assignActiveRequest(requestId) {
    setActiveRequest(requestId);
  }

  return (
    <div className="flex">
      <div className=" h-screen bg-white shadow-sm border-r-gray-200 w-[430px] overflow-y-scroll">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 text-md mt-5 mb-4 block ml-4"
        >
          View all bins
        </Link>
        <hr className="mt-3" />
        <div className="mt-4 mx-4">
          <h2 className="font-bold mb-2">Your Bin</h2>
          <BinURL unique_string={unique_string} />
        </div>
        <div className="mt-6">
          <h2 className="font-bold mb-2 mx-4">All Requests</h2>
          <RequestList
            requests={requests}
            assignActiveRequest={assignActiveRequest}
            activeRequest={activeRequest}
            setRequests={setRequests}
          />
        </div>
      </div>
    <RequestDetails activeRequest={activeRequest}/>
  </div>
  );
}

export default Bin