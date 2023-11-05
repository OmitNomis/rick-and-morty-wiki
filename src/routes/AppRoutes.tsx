import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import {
  Characters,
  Locations,
  Episodes,
  CharacterProfile,
  EpisodeProfile,
  LocationProfile,
} from "@/screens";
import { ErrorInfo } from "@/components/ErrorInfo";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to={"/characters"} />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterProfile />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationProfile />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeProfile />} />
          <Route path="*" element={<ErrorInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
