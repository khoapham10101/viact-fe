/** @jsxImportSource @emotion/react */

import CircularProgress from "@mui/material/CircularProgress";
import { PATH } from "constants/path";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthService } from "services/auth";

import { VerifyAccountStyle } from "./index.style";

const VerifyAccount = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(Object.fromEntries(searchParams.entries()));

  const handleVerify = async () => {
    try {
      const { token } = Object.fromEntries(searchParams.entries());
      await AuthService.verifyAccount({ token });
      navigate(PATH.login);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <div css={VerifyAccountStyle.self}>
      <CircularProgress />
    </div>
  );
};

export default VerifyAccount;
