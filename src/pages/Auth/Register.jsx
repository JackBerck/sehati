import { useEffect } from "react";
import Authentication from "../../components/Authentication";
import RegisterForm from "../../components/Authentication/Forms/RegisterForm";

export default function Register() {
  useEffect(() => {
    document.title = "Daftar | Sehati";
  }, []);

  return (
    <main>
      <Authentication
        id="register"
        sideImage="/img/backgrounds/doctor-with-mask.jpg"
        direction="left"
        quote='Kekayaan yang paling utama adalah kesehatan." -Ralph Waldo Emerson'
      >
        <RegisterForm />
      </Authentication>
    </main>
  );
}
