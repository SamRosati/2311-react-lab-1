import { useState } from 'react';
/* Updated by Michael */
const FontChooser = ({ title, text }) => {
  const [font, setFont] = useState('arial');

  const styles = {
    container: {
      backgroundColor: "white",
      padding: "1rem",
      fontFamily: font, 
    },
    title: {
      textAlign: "center",
    },
    list: {
      padding: 0,
      listStyle: "none",
      display: "flex",
      justifyContent: "space-around"
    },
  };

  return (
    <div style={{ ...styles.container, fontFamily: font }}>
      <h2 style={styles.title}>{title}</h2>
      <p>{text}</p>
      <ul style={styles.list}>
        <li> <button onClick={() => setFont('arial')}>Arial</button></li>
        <li> <button onClick={() => setFont('serif')}>Serif</button></li>
        <li> <button onClick={() => setFont('verdana')}>Verdana</button></li>
        <li> <button onClick={() => setFont('Montserrat')}>Montserrat</button></li>
        <li> <button onClick={() => setFont('Garamond')}>Garamond</button></li>
        <li> <button onClick={() => setFont('cursive')}>Cursive</button></li>
      </ul>
    </div>
  );
};
// On FontChooser.js, edit a button with a new font OR add a button with a new font

export default FontChooser;