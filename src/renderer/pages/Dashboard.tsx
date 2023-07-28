import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import TextFieldView from '../components/TextFieldView';

import styles from '../styles/pages/Dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <section className={styles.dashboardContent}>
        <Navbar />
        <h2>Pacientes &gt; &gt; Daniel Rojas</h2>
        <div className={styles.box}>
          <h3>Información General</h3>

          <div className={styles.fieldContainer}>
            <TextFieldView field="Nombre" value="Daniel" />
            <TextFieldView field="Apellido" value="Rojas" />
            <TextFieldView field="Genero" value="M" />
            <TextFieldView
              field="Fecha de nacimiento"
              value="21/05/1999 (24)"
            />
            <TextFieldView field="Estado civil" value="Casado" />
            <TextFieldView field="Nacionalidad" value="República Dominicana" />
            <TextFieldView field="Lugar de nacimiento" value="Santo Domingo" />
            <TextFieldView field="Telefono" value="8098737341" />
            <TextFieldView field="Celular" value="8098737341" />
            <TextFieldView
              field="Dirección"
              value="Santo Domingo, Distrito Nacional, Enriquillo"
              longFormat
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
