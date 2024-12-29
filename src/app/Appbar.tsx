"use client";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { userounter.push } from "react-router-dom";
// import { userState } from "../../stores/atoms/user";
// import { useSetRecoilState, useRecoilValue } from "recoil";
// import { userOnlyState } from "../../stores/selectors/userEmail";
// import { userLoadingState } from "../../stores/selectors/isUserLoading";
// import { logOutAction } from "./fetch";

const Appbar = () => {
  // const setUser = useSetRecoilState(userState);
  // const userEmail = useRecoilValue(userOnlyState);
  // const isLoading = useRecoilValue(userLoadingState);
  // const userEmail = useState(null)
  // const isLoading = useState(false);
  const rounter = useRouter();
  const onLogOut = async () => {
    // await logOutAction();
    // setUser({
    //   isLoading: false,
    //   user: null,
    // });
    // navigate("/signin");
  };
  return (
    <div className="flex justify-between p-2 bg-black sticky top-0 z-10">
      <div onClick={() => rounter.push("/")}>
        <Typography variant="h6">SmartLearn</Typography>
      </div>
      {/* {!isLoading && (
        <> */}
          <div>
            <div className="flex items-center gap-2">
              <a
                className="py-1 px-1.5 text-blue-700 border border-blue-700"
                href="http://localhost:8000/"
                target="_blank"
              >
                Be an Instrutor
              </a>
              {/* {!userEmail && ( */}
                {/* <> */}
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => rounter.push("/signup")}
                  >
                    Sign Up
                  </Button>
                  <Button size="small" onClick={() => rounter.push("/signin")}>
                    Sign In
                  </Button>
                {/* </>
              )}
              {userEmail && ( */}
                <Button size="small" variant="contained" onClick={onLogOut}>
                  Logout
                </Button>
              {/* )} */}
            </div>
          </div>
        {/* </> */}
      {/* )} */}
    </div>
  );
};

export default Appbar;
