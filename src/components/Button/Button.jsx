import "./Button.css";

export const Button = ({ children }) => {
  return (
    <button className="button-64">
      <span>{children}</span>
    </button>
  );
};
