import styles from '../styles/pages/Login.module.scss';

function Login() {
  return (
    <section className={styles.container}>
      <section className={styles.formSection}>
        <div>
          <h3>Ingresa a tu cuenta</h3>
          <p>
            No tienes cuenta? <a href="/sign-up">Crear cuenta</a>
          </p>
        </div>

        <form>
          <label htmlFor="user">
            Usuario
            <input id="user" />
          </label>

          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" />
          </label>
          <button type="submit">Continuar</button>
        </form>
      </section>
      <section className={styles.imageSection}>
        <p>Miscellaneous Text</p>
      </section>
    </section>
  );
}

export default Login;
