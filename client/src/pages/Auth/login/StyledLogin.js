import { styled, CircularProgress, Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";


export const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100px",
  background: "rgba(225, 225, 225, 0.15)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(8.5px)",
  borderRadius: "10px",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.4rem",
  [theme.breakpoints.down("sm")]: {
    width: "80vw",
    // minHeight: "80vh",
    letterSpacing: "0.1rem",
    fontSize: "small",
  },
  [theme.breakpoints.down("md")]: {
    width: "80vw",
    // minHeight: "80vh",
  },
  [theme.breakpoints.down("lg")]: {
    width: "60vw",
    // minHeight: "50vh",
  },
}));

export const LoginText = styled("h2")(({ theme }) => ({
  margin: "3rem 0 2rem 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
  },
}));
export const SignInText = styled("h2")(({ theme }) => ({
  margin: "3rem 0 2rem 0",
  color: "#091130",
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
  },
}));
export const InputForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "40%",
  width: "100%",
}));
export const Input = styled("input")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: " 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  borderRadius: "2rem",
  width: "80%",
  height: "3rem",
  padding: "1rem",
  border: "none",
  outline: "none",
  color: "#3c354e",
  fontSize: "1rem",
  fontWeight: "bold",
  margin: "10px 0 10px 0",
  "&:focus": {
    display: "inline-block",
    boxShadow: "0 0 0 0.2rem #b9abe0",
    backdropFilter: " blur(12rem)",
    borderRadius: "2rem",
  },
  "&::placeholder": {
    color: "grey",
    fontWeight: "300",
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
    "&::placeholder": {
      fontWeight: "300",
      fontSize: "small",
    },
    width: "80%",
    height: "2rem",
    margin: "7px 0 7px 0",
  },
}));
export const ButtonContainer = styled("div")(({ theme }) => ({
  margin: "1rem 0 2rem 0",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const Button = styled("button")(({ theme }) => ({
  background:
    "linear-gradient(115deg, rgba(255,255,255,1) 0%, rgba(71,90,164,1) 0%, rgba(18,22,48,1) 100%)",
  textTransform: "uppercase",
  letterSpacing: " 0.2rem",
  width: "65%",
  height: "3rem",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "2rem",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    width: "60%",
    height: "1.5rem",
    letterSpacing: " 0.1rem",
  },
}));
export const LoginWith = styled("h5")(({ theme }) => ({
  cursor: "pointer",
}));
export const HorizontalRule = styled("hr")(({ theme }) => ({
  width: " 90%",
  height: "0.3rem",
  borderRadius: "0.8rem",
  border: "none",
  margin: "1.5rem 0 1rem 0",
  background:
    "linear-gradient(115deg, rgba(255,255,255,1) 0%, rgba(71,90,164,1) 0%, rgba(18,22,48,1) 100%)",
  backdropFilter: "blur(25px)",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.3rem",
  },
}));
export const SignInHorizontalRule = styled("hr")(({ theme }) => ({
  width: " 90%",
  height: "0.3rem",
  borderRadius: "0.8rem",
  border: "none",
  background:
    "linear-gradient(115deg, rgba(255,255,255,1) 0%, rgba(71,90,164,1) 0%, rgba(18,22,48,1) 100%)",
  backdropFilter: "blur(25px)",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.3rem",
  },
}));
export const IconsContainer = styled("h4")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  margin: "2rem 0 3rem 0",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
    margin: "1rem 0 2rem 0",
  },
}));
export const ForgotPassword = styled("h4")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const CreateNewAcc = styled("h4")(({ theme }) => ({
  cursor: "pointer",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
  },
}));
export const AlreadyHaveAcc = styled("h4")(({ theme }) => ({
  cursor: "pointer",
  marginBottom: "1rem",
  color: "#091130",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

export const CircularLoading = styled(CircularProgress)(({ theme }) => ({
  color: "white",
  height: "20px !important",
  width: "20px !important",
}));


// type TransitionProps = Omit<SlideProps, "direction">;


// export const TransitionRight = (props: TransitionProps) => {
//   return <Slide {...props} direction="right" />;
// };
