import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { Characters, Locations, Episodes } from "@/screens";
import { CharacterProfile } from "@/screens/CharacterProfile/CharacterProfile";
import { LocationProfile } from "@/screens/LocationProfile/LocationProfile";
import { EpisodeProfile } from "@/screens/EpisodeProfile/EpisodeProfile";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/characters"} />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterProfile />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationProfile />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeProfile />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
