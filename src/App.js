import { Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  const [contests, setContests] = useState([]);

  let initialContests = useRef([]);

  const contestFilter = (site, status) => {
    if (status) {
      const filteredContests = contests.filter(
        (contest) => contest.site === site
      );
      setContests(filteredContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const liveFilter = (contests, status) => {
    if (status) {
      const liveContests = contests.filter(
        (contest) => contest.in_24_hours === "Yes"
      );
      setContests(liveContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const onLiveFilter = (contests, status) => {
    if (status) {
      const liveContests = contests.filter(
        (contest) => contest.status === "CODING"
      );
      setContests(liveContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const fetchAPI = async () => {
    const response = await fetch("https://kontests.net/api/v1/all");
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const fetchContests = async () => {
      const contestsFromAPI = await fetchAPI();
      initialContests.current = [...contestsFromAPI];

      setContests(contestsFromAPI);
    };
    fetchContests();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contests"
            element={
              <Flex justifyContent="space-between" gap={"2.5em"}>
                <FilterSection
                  contests={contests}
                  filter={contestFilter}
                  initialContests={initialContests.current}
                  liveFilter={liveFilter}
                  onLiveFilter={onLiveFilter}
                />
                <SearchSection contests={contests} />
              </Flex>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
