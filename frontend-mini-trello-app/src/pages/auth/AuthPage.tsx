/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Input, Spin } from "antd";
import imgleft from "../../assets/image/imgleft.png";
import imgright from "../../assets/image/imgright.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import React, { useCallback, useState } from "react";
import { isBlank, isCode } from "@utils/ValidateUtil";
import AuthService from "@services/AuthService";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE, LOGIN_PAGE } from "../../contants/Page";
import { toast } from "react-toastify";
import axios from "axios";
export default function AuthPage() {
  const email = useSelector((state: RootState) => state.user.email);
  const [verifycationCode, setVerifycationCode] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChangeVerifycationCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setVerifycationCode(value);
      if (isBlank(value)) {
        setErrorCode("Code is require");
      }
      if (!isCode(value)) {
        setErrorCode("Enter the 6 digit number sent to your email");
      } else {
        setErrorCode("");
      }
    },
    [verifycationCode]
  );

  const onSubmit = async () => {
    const payload = {
      email: email,
      verificationCode: verifycationCode,
    };
    if (verifycationCode !== "") {
        setLoading(true)
      try {
        const existingEmail = await AuthService.checkEmail({ email: email });
        if (existingEmail.exist) {
          const data = await AuthService.loginApi(payload);
          localStorage.setItem("authToken", data.accessToken);
          navigate(HOME_PAGE);
          toast.success("Login successfull");
        } else {
          await AuthService.register(payload);
          navigate(LOGIN_PAGE);
          toast.success(
            "You have successfully created an account. Now start logging in."
          );
        }
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error:", error.response?.data || error.message);
        }
      }
    } else {
      toast.error("Please enter verifycation code");
    }
  };
  return (
    <div className="relative flex justify-center items-center h-screen">
      <Card className="content w-[351px] h-[311px] bg-[#fffeff] rounded-2xl shadow-[0px_0px_2px_0px_#171a1f33]">
        <div className="flex justify-center">
          <h3>Email Verification </h3>
        </div>
        <p className="text-[#29354F] font-normal font-[Catamaran] text-[11px] leading-[18px] text-center tracking-[0%] mt-[20px]">
          Please enter your code that send to your email address
        </p>
        <div className="flex flex-col mb-4">
          <Input
            type="text"
            value={verifycationCode}
            placeholder="Enter code verifycation"
            className="w-[238px] h-[38px] text-center !rounded-sm !border-[1.5px] !border-solid !border-[#565D6D] font-[Catamaran] text-[12px] leading-[19px]"
            onChange={handleChangeVerifycationCode}
          />
          {errorCode && <p className="text-red-700">{errorCode}</p>}
          <Button
            type="primary"
            className="!w-[302px] !h-[38px] !bg-[#0E50E1] !mt-1 !rounded-sm leading-[17px] text-[10px]
            active:scale-95 transition duration-200 "
            onClick={onSubmit}
          >
            Submit
          </Button>
          <div
            className="flex justify-center items-center"
            style={{ display: loading ? "flex" : "none" }}
          >
            <Spin size="small" className="text-center" />
          </div>
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
