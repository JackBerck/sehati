import { useEffect } from "react";
import Authentication from "../../components/Authentication";
import LoginForm from "../../components/Authentication/Forms/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Masuk | Sehati";
  }, []);

  return (
    <Authentication
      id="login"
      sideImage="/img/backgrounds/dr-teddy.webp"
      direction="right"
      quote="Jaga tubuhmu. Itulah satu-satunya tempat yang kamu miliki untuk hidup.” -Jim Rohn"
    >
      <LoginForm />
    </Authentication>
  );
}
