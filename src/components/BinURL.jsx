import React, { useState } from "react";

function BinURL({ unique_string }) {
  const REACT_APP_HOST = 'reqbin';
  const [copyURL, setCopyURL] = useState(false);

  const copy = () => {
    const url = `${REACT_APP_HOST}/${unique_string}`;
    const textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopyURL(true);

    setTimeout(() => {
      setCopyURL(false);
    }, 2000);
  };

  return (
    <div className="flex w-64 border border-gray-300 shadow-sm rounded-md px-4 py-3 justify-between">
      <p>
        {`${REACT_APP_HOST}/${unique_string}`}
      </p>
      <button
        className="text-primary-500 font-medium hover:primary-400"
        onClick={copy}
      >
        {copyURL ? "copied!" : "copy"}
      </button>
    </div>
  );
}

export default BinURL;