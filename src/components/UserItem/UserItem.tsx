import { observer } from "mobx-react-lite";
import { Box, Button } from "@mui/material";
import { IUser, userStore } from "../../store/userStore";

interface Props {
  user: IUser;
}

const UserItem = observer(({ user }: Props) => {
  const isFavorite = userStore.favorites.has(user.id);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <div>{user.name} ({user.email})</div>
      <Button
        variant="outlined"
        color={isFavorite ? "secondary" : "primary"}
        onClick={() => userStore.toggleFavorite(user.id)}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </Button>
    </Box>
  );
});

export default UserItem;
