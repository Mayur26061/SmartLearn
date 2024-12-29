"use client";
import React from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, TextField, Card, Typography } from "@mui/material";
// import { userState } from "../../stores/atoms/user";
// import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
//   const setUser = useSetRecoilState(userState);
  const router = useRouter();
//   const [searchParams] = useSearchParams();
  const handleLogin = async () => {
//     const response = await loginAction(email, password);
//     if (response.error) {
//       console.log(response.message);
//     } else {
//       if (response.user) {
//         setUser({
//           isLoading: false,
//           user: response.user,
//         });
//         if (searchParams.get("courseId")) {
//           router(`/course/${searchParams.get("courseId")}`);
//         } else {
//           router.push("/courses");
//         }
//       }
//     }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Typography variant="h6">Sign in</Typography>
      <br />
      <Card className="p-6 w-72" variant="outlined">
        <TextField
          fullWidth={true}
          className="!mb-2.5"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          type="password"
          fullWidth={true}
          className="!mb-2.5"
          label="Password"
          variant="outlined"
          autoComplete="true"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className="mt-3 flex flex-col items-center justify-center">
          <Button variant="contained" size="small" onClick={handleLogin}>
            Signin
          </Button>
          <div className="mt-3">
            New user?{" "}
            <Button onClick={() => router.push("/signup")} size="small">
              Sign up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
