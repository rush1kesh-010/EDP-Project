import Logo from "../Images/color.svg";
import '../Css/loading.css';
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-20 h-20 logo rotating">
        <img src={Logo} alt="logo" />
      </div>
      <h1 className="text-3xl font-bold text-[#0174cf]">FlowPro</h1>
    </div>
  );
}
