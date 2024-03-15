import "./button.css"
const Button = ({ txt, className, type }) => {
  return (
    <div className={className}>
      <button type={type} class="btn btn-primary">{txt}</button>
    </div>
  );
};
export default Button;
