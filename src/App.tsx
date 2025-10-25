import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm />
      <hr />
      <h1>Login</h1>
      <LoginForm />
      <hr />
      <ProtectedPage />
    </div>
  );
}

export default App;
