import { Container } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import ToggleFavorites from "./components/ToggleFavorites/ToggleFavorites";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={
          <>
            <ToggleFavorites />
            <AddUserForm />
            <UserList />
          </>
        } />
      </Routes>
    </Container>
  );
}

export default App;
