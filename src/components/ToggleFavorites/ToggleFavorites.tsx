import { observer } from "mobx-react-lite";
import { FormControlLabel, Switch } from "@mui/material";
import { userStore } from "../../store/userStore";

const ToggleFavorites = observer(() => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={userStore.showFavoritesOnly}
          onChange={() => userStore.toggleShowFavorites()}
        />
      }
      label="Show Favorites Only"
    />
  );
});

export default ToggleFavorites;
