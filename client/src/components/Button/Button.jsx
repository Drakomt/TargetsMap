import "./Button.css";

const Button = ({ content, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
    </>
  );
};

export default Button;
