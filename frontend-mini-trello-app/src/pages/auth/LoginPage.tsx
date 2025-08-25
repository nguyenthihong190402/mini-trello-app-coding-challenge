import logo from "../../assets/image/logo.png";
import imgleft from "../../assets/image/imgleft.png";
import imgright from "../../assets/image/imgright.png";
import { Button, Card, Input } from "antd";
export default function LoginPage() {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <Card className="content w-[351px] h-[311px] bg-[#fffeff] rounded-2xl shadow-[0px_0px_2px_0px_#171a1f33]">
        <div className="flex justify-center">
          <img className="w-[56px] h-[55px]" src={logo} alt="Logo" />
        </div>
        <p className="text-[#29354F] font-normal font-[Catamaran] text-[11px] leading-[18px] text-center tracking-[0%] mt-[20px]">
          Log in to continue
        </p>
        <div className="flex flex-col mb-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-[238px] h-[38px] text-center !rounded-sm !border-[1.5px] !border-solid !border-[#565D6D] font-[Catamaran] text-[12px] leading-[19px]"
          ></Input>

          <Button
            type="primary"
            className="!w-[302px] !h-[38px] !bg-[#0E50E1] !mt-1 !rounded-sm leading-[17px] text-[10px]
            active:scale-95 transition duration-200 "
          >
            Continue
          </Button>
        </div>
        <p className="text-center text-[#536488] font-normal font-[Catamaran] text-[11px] leading-[18px] tracking-[0%]">
          Privacy Policy <br />
          This site is protected by reCAPTCHA and the Google Privacy <br />{" "}
          <span className="text-blue-500">
            Policy and Terms of Service apply.
          </span>
        </p>
      </Card>
      <img
        src={imgleft}
        className="absolute w-[306px] bottom-0 left-0 h-1/2 border-[2px]"
        alt="Left"
      />
      <img
        src={imgright}
        className="absolute w-[306px] bottom-0 right-0 h-1/2 border-[2px]"
        alt="Right"
      />
    </div>
  );
}
