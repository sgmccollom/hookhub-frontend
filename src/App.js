import { Routes, Route } from 'react-router-dom'
import BinsList from "./components/BinsList"
import Bin from './components/Bin'
import TopNav from './components/TopNav'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect } from 'react';

const WS_URL = 'ws://localhost:8000';

function App() {
  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established');
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage();
    }
  }, [readyState]);

  // want to reload page each time get a new request sent to my gather
  // api endpoint. Do I use the server side event to trigger?
  // no right? I want to do it from the client side?
  // how?

  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<BinsList />}/>
        <Route path="/:unique_string" element={<Bin />}/>
      </Routes>
    </>
  );
}

export default App