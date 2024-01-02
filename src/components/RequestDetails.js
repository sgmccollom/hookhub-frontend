function RequestDetails({ activeRequest }) {
  if (!activeRequest) {
    return <></>;
  }
  console.log('incoming active request')
  console.log(activeRequest)
  
  // Date Formatting
  const dateString = activeRequest.created_at;
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
    <div className="mx-auto bg-white shadow-lg rounded-md border-gray-200 max-h-[720px] w-[672px] mt-24 p-6 overflow-y-scroll">
      <div className="flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <p className=" text-gray-900 font-bold text-lg">{formattedDate}</p>
        </div>
        <p className="text-gray-500">{`/ ${activeRequest.http_method}`}</p>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">Headers</h2>
        <div className="overflow-x-auto ">
          <table className="w-full">
            {Object.keys(activeRequest.headers).map((key) => (
              <tr className="border-b border-b-gray-300">
                <td className="font-bold align-top pr-16 py-3">{key}:</td>
                <td className="align-top text-wrap py-3">
                  {activeRequest.headers[key]}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-lg mb-4">Body</h2>
        <div className="whitespace-pre bg-gray-200 p-4 rounded overflow-x-scroll">
          {activeRequest.body}
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;