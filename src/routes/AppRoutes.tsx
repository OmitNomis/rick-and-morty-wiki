import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { Characters, Locations, Episodes } from "@/screens";
import { CharacterProfile } from "@/screens/CharacterProfile/CharacterProfile";
import { LocationProfile } from "@/screens/LocationProfile/LocationProfile";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/characters"} />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterProfile />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationProfile />} />
          <Route path="/Episodes" element={<Episodes />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
