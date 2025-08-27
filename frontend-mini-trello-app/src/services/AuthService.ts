import axios from "../api/axios";
import { AuthCheckEmailRequest, AuthCheckEmailResponse, AuthLoginResponse, AuthRequest, AuthResponse, AuthSendEmail } from "../types/Auth";

const loginApi = async (data: AuthRequest): Promise<AuthLoginResponse> => {
  const response = await axios.post("/auth/signin", data);
  return response.data;
};

const register = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await axios.post("/auth/signup", data);
  return response.data;
};

const checkEmail = async (data: AuthCheckEmailRequest): Promise<AuthCheckEmailResponse> => {
  const response = await axios.post("/auth/check-email", data);
  return response.data;
};

const sendEmail = async (data: AuthSendEmail) => {
   const response = await axios.post("/auth/send-email", data)
   return response.data
}

const AuthService = { loginApi , sendEmail, register,checkEmail};

export default AuthService;
