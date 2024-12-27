import { Typography, Button, Grid2 } from "@mui/material";
import Link  from "next/link"
// import image from "../../assets/professor.jpeg";
import Image from "next/image";
import image from "./professor.jpeg"

// import { useRecoilValue } from "recoil";
// import { userOnlyState } from "../../stores/selectors/userEmail";
// import { userLoadingState } from "../../stores/selectors/isUserLoading";

function Landing() {
  // const userEmail = useRecoilValue(userOnlyState);
  // const isLoading = useRecoilValue(userLoadingState);
  return (
    <div>
      <Grid2 container className="p-20">
        <Grid2>
          {/* {!isLoading && ( */}
            <div className="mt-20">
              <Typography variant={"h2"}>SmartLearn</Typography>
              <Typography variant={"h5"}>
                A place to learn, earn and grow
              </Typography>
              {/* {!userEmail && ( */}
                <div className="p-1">
                  <Link className="m-1" href="/signup">
                    <Button variant="contained">Signup</Button>
                  </Link>
                  <Link className="m-1" href="/signin">
                    <Button variant="contained">Signin</Button>
                  </Link>
                </div>
              {/* )} */}
            </div>
          {/* )} */}
        </Grid2>
        <Grid2  >
          <Image src={image} alt="Image"  height="500" width="500"/>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Landing;
