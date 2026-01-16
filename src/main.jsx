import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import NotFound from "./components/NotFound.jsx";
import Gallery from "./components/Gallery.jsx";
import Careers from "./components/Careers.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsOfService from "./components/TermsOfService.jsx";
import Accessibility from "./components/Accessibility.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="careers" element={<Careers />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="accessibility" element={<Accessibility />} />
      <Route path="#" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
