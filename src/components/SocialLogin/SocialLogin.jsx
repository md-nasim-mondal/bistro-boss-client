import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result?.user?.email,
      };
      axiosPublic.post(`/users`, userInfo).then((res) => {
        console.log(res.data);
        navigate(from);
      });
      })
      .catch(err => {
        console.error(err?.message);
      })
  };

  return (
    <div className='p-8'>
      <div className='divider'></div>
      <div>
        <button onClick={handleGoogleSignIn} className='btn'>
          <FaGoogle className='mr-2' />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
