import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isUserExist = localStorage.getItem("user");
  useEffect(() => {
    if (isUserExist) {
      navigate("/app", { state: { user: JSON.parse(isUserExist) } });
    }
  });

  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:5000/user/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        const user = jwtDecode(res.data.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/app", { state: { user } });
      })
      .catch((err) => setFormError(err.response.data));
  };

  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Grid container>
        <Grid item md={6}>
          <Paper
            square
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              height: "100%",
              display: "flex",
              alignItems: "center",

              //  boder:(theme)=>console.log(theme)
            }}
          >
            <Box sx={{ p: 5, textAlign: "center" }}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  width="50"
                  height="50%"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="114"
                    stroke="#FFF"
                    strokeWidth="20"
                    fill="none"
                  />
                  <path
                    d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"
                    fill="#FFF"
                  />
                </svg>

                <svg
                  width="50"
                  height="25%"
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="0" r="2" fill="currentColor"></circle>

                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="18" ry="4.5"></ellipse>

                    <ellipse rx="18" ry="4.5" transform="rotate(60)"></ellipse>

                    <ellipse rx="18" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
              </Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "600", mt: 3 }}
              >
                Talk-A-tive
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, at. Quisquam hic mollitia nulla doloribus nisi?
                Aliquam, ipsum. Alias aliquid omnis odit unde excepturi
                repudiandae quis tenetur, debitis voluptas? Aut?
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item md={6}>
          <Paper
            square
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{ p: 5 }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: "500" }}>
                Login
              </Typography>
              <TextField
                sx={{ mb: 3 }}
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: true,
                  message: "Email is required",
                })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                sx={{ mb: 3 }}
                {...register("password", {
                  required: true,
                  message: "Password is required",
                })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />
              <Button
                type="submit"
                fullWidth
                sx={{ py: 2 }}
                variant="contained"
              >
                Login
              </Button>
              <Button sx={{ mt: 1 }}>Forgot Password</Button>
            </Box>
            <Box sx={{ p: 1, textAlign: "center" }}>-</Box>

            <Box sx={{ textAlign: "right", pr: 4 }}>
              <Typography variant="body2">
                {" "}
                Don't have an account?
                <Button onClick={() => navigate("/register")}>
                  Create Account
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* <Grid item md={6}>
          <Paper
            square
            sx={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          ></Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};
export default Login;
