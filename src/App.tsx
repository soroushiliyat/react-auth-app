import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  return (
    <div>
      <h1>ثبت‌نام</h1>
      <SignupForm />
      <hr />
      <h1>ورود</h1>
      <LoginForm />
      <hr />
      <ProtectedPage />
    </div>
  );
}

export default App;