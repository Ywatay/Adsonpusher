import { observer } from "mobx-react-lite";
import { CircularProgress, Box, Alert, Button } from "@mui/material";
import { useUsersQuery } from "../../hooks/useUsersQuery";
import { userStore } from "../../store/userStore";
import UserItem from "../UserItem/UserItem";

const UserList = observer(() => {
  const { data, isLoading, isError } = useUsersQuery();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (isError) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <Alert severity="error">Failed to load users. Please try again later.</Alert>
      </Box>
    );
  }

  let users = [...(data || []), ...userStore.addedUsers];

  if (userStore.showFavoritesOnly) {
    users = users.filter(user => userStore.favorites.has(user.id));
  }

  users.sort((a, b) => 
    userStore.sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <Box mt={3}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="outlined" onClick={() => userStore.toggleSortOrder()}>
          Сортувати {userStore.sortAsc ? "Z-A" : "A-Z"}
        </Button>
      </Box>

      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </Box>
  );
});

export default UserList;



