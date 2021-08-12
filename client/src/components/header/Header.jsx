import { header, logo } from "./Header.module.scss";

export default function Header() {
  return (
    <div className={header}>
      <h1 className={logo}>Incode group finance</h1>
    </div>
  );
}
