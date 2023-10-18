import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/characters"} />} />
          <Route path="/characters" element={<div>Characters</div>} />
          <Route path="/Locations" element={<div>Locations</div>} />
          <Route path="/Episodes" element={<div>Episodes</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
