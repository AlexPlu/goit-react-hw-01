import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";

const App = () => {
  return (
    <Profile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
  );
};

export default App;