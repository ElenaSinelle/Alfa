import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router basename="/Alfa">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
