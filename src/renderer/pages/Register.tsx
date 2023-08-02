import styles from '../styles/pages/Register.module.scss';

import registerImage from '../../../assets/registerBackground.png';

import Logo from '../components/Logo';

function Register() {
  return (
    <section className={styles.container}>
      <section className={styles.imageSection}>
        <img src={registerImage} alt="" />
      </section>
      <section className={styles.formSection}>
        <Logo />
        <div>
          <h3>Crea una cuenta</h3>
          <p>
            Tienes cuenta? <a href="/sign-up">Ingresa ahora</a>
          </p>
        </div>
        <form>
          <label htmlFor="name">
            Nombre*
            <input id="name" required />
          </label>
          <label htmlFor="lastName">
            Apellido*
            <input id="lastName" required />
          </label>
          <label htmlFor="email">
            Correo*
            <input id="email" required />
          </label>
          <label htmlFor="phone">
            Teléfono
            <input id="phone" />
          </label>
          <fieldset>
            <legend>Sexo:*</legend>
            <div>
              <input type="radio" id="m" name="sex" value="m" required />
              <label htmlFor="m">M</label>
            </div>
            <div>
              <input type="radio" id="f" name="sex" value="f" required />
              <label htmlFor="f">F</label>
            </div>
          </fieldset>

          <label htmlFor="password">
            Contraseña*
            <input type="password" id="password" required />
          </label>
          <label htmlFor="confirm-password">
            Repetir contraseña*
            <input type="password" id="confirm-password" required />
          </label>
          <div className={styles.termsAndConditionsContainer}>
            <input type="checkbox" id="termsAndConditions" required />
            <label htmlFor="termsAndConditions">
              Acepto los Terminos y Condiciones
            </label>
          </div>
          <button type="submit">Crear</button>

          <label htmlFor="specialty">
            Especialidad*
            <input type="text" id="specialty" required />
          </label>
        </form>
      </section>
    </section>
  );
}

export default Register;
