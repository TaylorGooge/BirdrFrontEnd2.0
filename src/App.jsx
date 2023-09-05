import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Mappage from './Pages/Map';
import Aboutpage from './Pages/About';
import Contactpage from './Pages/Contact';
import Profilepage from './Pages/Profile';
import ProfileSettingspage from "./Pages/ProfileSettings";
import TrackingHistoryPage from "./Pages/TrackingHistory";
import { AuthenticationGuard } from "./Components/AuthGuard/AuthenticationGuard";
import Errorpage from "./Pages/Error";
import Helppage from "./Pages/Help";
import Learnpage from "./Pages/Learn/LearnPage";
import Datapage from './Pages/Data';
import LearnArticleListPage from './Pages/Learn/LearnArticleListPage'
import LearnArticleBodyPage from './Pages/Learn/LearnArticleBodyPage'
import CheckListsPage from './Pages/Learn/CheckListsPage'
import SingleCheckListPage from './Pages/Learn/SingleCheckListPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<AuthenticationGuard component={Mappage} />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/profile" element={<AuthenticationGuard component={Profilepage} />} />
        <Route path="/login" element={<AuthenticationGuard />} />
        {/* <Route path="/profile-settings" element={<AuthenticationGuard component={ProfileSettingspage} />} /> */}
        <Route path="/tracking-history" element={<AuthenticationGuard component={TrackingHistoryPage} />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/help" element={<Helppage />} />
        <Route path="/learn/:birdId?" element={<Learnpage />} />
        <Route path="/learn/checklists" element={<CheckListsPage />} />
        <Route path="/learn/checklists/single/:item?" element={<AuthenticationGuard component={SingleCheckListPage} />} />
        <Route path="/learn/blog" element={<LearnArticleListPage />} />
        <Route path="/learn/blog/:topic?" element={<LearnArticleBodyPage />} />
        <Route path="/data" element={<Datapage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  )
}