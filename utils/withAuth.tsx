import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';

const withAuth = (WrappedComponent: any) => {
  return () => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      router.replace('/signin');
      return null;
    }

    return <WrappedComponent />;
  };
};

export default withAuth;
