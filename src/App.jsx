import './App.css';
import CheckBox from './CheckBox';
import FontChooser from './FontChooser';

export default function App() {
  const styles = {
    container: {
      backgroundColor: '#b0d8e6',
      padding: "1.5rem 1rem 1rem",
      width: "fit-content",
      margin: "1rem auto"
    },
    title: {
      textAlign: "center",
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Style and font</h1>
      <CheckBox title="Check the box to style the paragraph in italic"/>
      <FontChooser title="Font Chooser" text="Choose one of the following fonts:"/>
    </div>
  );
}

