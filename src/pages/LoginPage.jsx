import FreeTrialBanner from '../components/FreeTrialBanner';
import Login from '../components/Login';


function LoginPage() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <FreeTrialBanner />
      
      <Login />
    </div>
    </>
  );
}

export default LoginPage;
