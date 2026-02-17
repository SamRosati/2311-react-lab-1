import  { useState } from 'react';

const CheckBox = ({ title }) => {
  const [enableItalic, setEnableItalic] = useState(false);

  const styles = {
    backgroundColor: "yellow",
    padding: "1rem"
  };

  return (
    <div style={styles}>
      <input 
        type="checkbox" 
        name="enableItalic" 
        checked={enableItalic} // Use 'checked' for boolean state
        onChange={(e) => setEnableItalic(e.target.checked)} // Use 'onChange'
      />
      <p style={{ fontStyle: enableItalic ? 'italic' : 'normal' }}>{title}</p>
    </div>
  );
};

export default CheckBox;