import useUserStore from "../store/useUserStore";

const ProtectedPage = () => {
  const { user, logout } = useUserStore();

  if (!user) {
    return <div>شما اجازه دسترسی ندارید. لطفاً وارد شوید.</div>;
  }

  return (
    <div>
      <h2>خوش آمدی {user.name}!</h2>
      <p>این صفحه فقط برای کاربران لاگین‌شده قابل مشاهده است.</p>
      <button onClick={logout}>خروج از حساب</button>
    </div>
  );
};

export default ProtectedPage;