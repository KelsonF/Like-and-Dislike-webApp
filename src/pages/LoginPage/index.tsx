import { Navigate } from "react-router-dom";
import { useAuth } from "../../core/hooks/useAuth";
import { useRef } from "react";
import { User } from "../../core/interfaces/User";
import style from "./style.module.css";

export const LoginPage = () => {
  const { signin, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/tasks" />;
  }

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = {
      username: userNameInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    console.log(user);
    

    if (user.username !== "Kelsu2003" && user.password !== "1234") {
      alert("Usuario ou Senha incorretos, tente novamente");
      return
    }

    signin(user);
  };

  return (
    <main className={style.main}>
      <form onSubmit={handleLoginSubmit} className={style.main_form}>
        <div className={style.text_form_wrapper}>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" ref={userNameInputRef} />
        </div>
        <div className={style.text_form_wrapper}>
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" ref={passwordInputRef} />
        </div>
        <div className={style.button_wrapper}>
          <input type="submit" value="Logar" />
        </div>
      </form>
    </main>
  );
};
