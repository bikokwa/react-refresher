import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
        </Routes>
        <Routes>
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
        <Routes>
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
