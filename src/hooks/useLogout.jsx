import { auth } from "../Firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("utloggad");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
