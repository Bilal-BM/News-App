import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


async function signOutUser() {
  const auth = getAuth();
  try {
    await signOut(auth);
   
  } catch (error) {
    // An error happened
  }
}
toast.success("Signout successfully!");