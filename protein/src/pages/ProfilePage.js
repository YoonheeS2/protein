import React from 'react';
import AppHeader from '../components/common/AppHeader';
import UserProfile from '../main/UserProfile';
import SettingsIconsPage from '../main/SettingsIconsPage'; 


const ProfilePage = () => {
  return (
    <div>
      <AppHeader title={"profile"} />
      <UserProfile /> {/* Use the UserProfile component */}
      <SettingsIconsPage icontype={"alarm"}></SettingsIconsPage> {/* Use the SettingsIconsPage */}
    </div>
  );
};

export default ProfilePage;