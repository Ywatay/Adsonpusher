import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { userStore } from "../../store/userStore";
import { emailRegex } from "../../constants";

const AddUserForm = observer(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isFormValid = name.trim() !== "" && email.trim() !== "";

  const handleAdd = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) return;

    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Wrong email");
      return;
    }

    const newUser = { id: Date.now(), name: trimmedName, email: trimmedEmail };
    userStore.addUser(newUser);

    setName("");
    setEmail("");
    setEmailError("");
  };

  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        error={!!emailError}
        helperText={emailError}
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) setEmailError("");
        }}
      />
      <Button
        variant="contained"
        onClick={handleAdd}
        disabled={!isFormValid}
      >
        Add
      </Button>
    </Box>
  );
});

export default AddUserForm;
