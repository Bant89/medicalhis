import styles from './styles.module.scss';

function TextFieldView({ field, value, longFormat = false }) {
  return (
    <div
      className={longFormat ? styles.longContainer : styles.defaultContainer}
    >
      <p>{field}</p>
      <p>{value}</p>
    </div>
  );
}
export default TextFieldView;
