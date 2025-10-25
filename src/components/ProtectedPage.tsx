import useUserStore from "../store/useUserStore";

const ProtectedPage = () => {
  const { user, logout } = useUserStore();

  if (!user) {
    return <div>You do not have access. Please log in.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>This page is only visible to logged-in users.</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default ProtectedPage;
