import vinceImg from "../../assets/vince.jpeg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={vinceImg} alt="Stylezed atom" />
      <h1>Vince van Apeldoorn</h1>
      <p>Software Developer Creative Media Technology</p>
    </header>
  );
}
