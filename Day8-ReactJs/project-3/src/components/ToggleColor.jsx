import { useEffect, useState } from 'react';

function ToggleColor() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);
  console.log(isDark);
  return (
    <div>
      <h1>Dark/Light mode toggle</h1>
      <button onClick={toggleMode}>
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </button>
    </div>
  );
}

export default ToggleColor;
