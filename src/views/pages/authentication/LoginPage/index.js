// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Card, CardContent, Checkbox, TextField, Typography, Stack } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
// import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button';
// import LoginPassword from './Component/Login'
import { useState, useEffect } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import AnimateButton from 'ui-component/extended/AnimateButton';
// import Badge from '@mui/material/Badge';
import Logo from 'ui-component/Logo';
// import Google from '../../../../assets/images/icons/social-google.svg';
// ** Third Party Components
// import clsx from 'clsx';
// import { useKeenSlider } from 'keen-slider/react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LoginPage = () => {
  //** state functions */
  const [loginShow, setLoginShow] = useState(true);
  const [otpShow, setOtpShow] = useState(false);
  const [forgetShow, setForgetShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  //** textfield validation */
  const [email, setEmail] = useState('');
  const [forgetEmail, setForgetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showForgetEmailError, setShowForgetEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [showRememberMeError, setShowRememberMeError] = useState(false);

  const validateEmail = (input) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  const validateForgetEmail = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  const validatePassword = (input) => {
    // Basic password validation (at least 6 characters)
    return /^(?=.*[!@#$%^&*])/.test(input);
  };

  const validateOtp = (input) => {
    // Simple validation: OTP must be exactly 6 digits
    return /^\d{6}$/.test(input);
  };

  const handleLoginClick = () => {
    // Validate email
    if (!validateEmail(email)) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    // Validate password
    if (!validatePassword(password)) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }

    // Validate "Remember Me"
    if (!rememberMe) {
      setShowRememberMeError(true);
    } else {
      setShowRememberMeError(false);
    }

    // Check if email and password are not empty
    if (email.trim() === '' || password.trim() === '' || !rememberMe) {
      console.log('Please enter both email and password and check "Remember Me"');
    } else if (showEmailError || showPasswordError || showRememberMeError) {
      console.log('Please correct the email and password, and "Remember Me"fields');
    } else {
      console.log('Logging in...');

      setLoginShow(false);
      setOtpShow(true);
      setForgetShow(false);
      setConfirmShow(false);
    }
  };
  const handleOtpClick = () => {
    // Validate OTP (if OTP show is active)
    if ( !validateOtp(otp)) {
      setOtpError(true);
      console.log("Incorrect")
    } else {
      setOtpError(false);
    }

    // Check if email and password are not empty
    if ( otp.trim() === '') {
      console.log('Please enter OTP');
      setOtpError(true);
    } else if ( otpError) {
      console.log('Please correct OTP fields');
    } else {
      console.log('Logging in...');
      setOtpShow(false);
      setLoginShow(true);
      // setForgetShow(false);
      // setConfirmShow(false);
    }
  };

  const handleForgetClick = () => {
    // Validate email
    if (!validateForgetEmail(forgetEmail)) {
      setShowForgetEmailError(true);
    } else {
      setShowForgetEmailError(false);
    }
    // Check if email and password are not empty
    if (forgetEmail.trim() === '') {
      console.log('Please enter  email');
    } else if (showForgetEmailError) {
      console.log('Please correct the email fields');
    } else {
      console.log('Logging in...');

      setLoginShow(false);
      setOtpShow(false);
      setForgetShow(false);
      setConfirmShow(true);
    }
  };

  const handleConfirmClick = () => {
    setLoginShow(false);
    setOtpShow(false);
    setForgetShow(true);
    setConfirmShow(false);
  };

  const theme = useTheme();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  //** Otp & timer  */
  // const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const handleChange = (newValue) => {
    const numericValue = newValue.replace(/\D/g, '');
    setOtp(numericValue);
  };
  const resendOTP = () => {
    // setMinutes(1);
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {loginShow && (
            <Grid item xs={12} md={6} sm={6} sx={{ minHeight: '84vh', display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Box className="content-center">
                  <Card>
                    <CardContent>
                      {/* <Box sx={{ mb: 6 }}>
                      <Typography variant="h4" sx={{ mb: 1.5 }}>
                        Welcome to, LOGIN
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>Please sign-in to your account and start the adventure</Typography>
                    </Box> */}
                      <Grid container spacing={2} alignItems="center" justifyContent="center" item sx={{ mt: 1 }}>
                        <Link to="#">
                          <Logo />
                        </Link>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                          <Grid item sx={{ mt: 3 }}>
                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                              <Typography color={theme.palette.secondary.main} variant="h2">
                                Hi, Welcome
                              </Typography>
                              <Typography variant="caption" fontSize="16px">
                                Enter your credentials to continue
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* <AnimateButton>
                        <Button
                          disableElevation
                          fullWidth
                          // onClick={googleHandler}
                          size="large"
                          variant="outlined"
                          sx={{
                            color: 'grey.700',
                            backgroundColor: theme.palette.grey[50],
                            borderColor: theme.palette.grey[100],
                            mt: 3
                          }}
                        >
                          <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                            <img src={Google} alt="google" width={16} height={16} />
                          </Box>
                          Sign in with Google
                        </Button>
                      </AnimateButton>

                      <Grid item xs={12}>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                          <Button
                            variant="outlined"
                            sx={{
                              cursor: 'unset',
                              m: 2,
                              py: 0.5,
                              px: 7,
                              borderColor: `${theme.palette.grey[100]} !important`,
                              color: `${theme.palette.grey[900]}!important`,
                              fontWeight: 500,
                              borderRadius: 10
                            }}
                            disableRipple
                            disabled
                          >
                            OR
                          </Button>

                          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        </Box>
                      </Grid> */}

                      {/* <Grid item xs={12} container alignItems="center" justifyContent="center">
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle1">Sign in with Email address</Typography>
                        </Box>
                      </Grid> */}

                      <Grid sx={{ mt: 3 }}>
                        <TextField
                          autoFocus
                          fullWidth
                          id="email"
                          label="Email"
                          type="email"
                          sx={{ mb: 4 }}
                          placeholder="john.doe@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          error={showEmailError}
                          helperText={showEmailError ? 'Please enter a valid email' : ''}
                        />
                        <TextField
                          fullWidth
                          sx={{ mb: 1.5 }}
                          label="Password"
                          value={password}
                          id="auth-login-password"
                          placeholder="············"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          error={showPasswordError}
                          helperText={showPasswordError ? 'Password must contain at least one special character' : ''}

                          // type={values.showPassword ? 'text' : 'password'}
                          // InputProps={{
                          //   endAdornment: (
                          //     <InputAdornment position='end'>
                          //       <IconButton
                          //         edge='end'
                          //         onClick={handleClickShowPassword}
                          //         onMouseDown={e => e.preventDefault()}
                          //         aria-label='toggle password visibility'
                          //       >
                          //         <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          //       </IconButton>
                          //     </InputAdornment>
                          //   )
                          // }}
                        />
                      </Grid>

                      <Box
                        sx={{
                          mb: 1.75,
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box>
                          <FormControlLabel
                            control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
                            label="Remember Me"
                          />
                          {/* Show error message for "Remember Me" */}
                          {showRememberMeError && (
                            <Typography variant="body2" color="error" sx={{ mb: 1 }}>
                              Please check &quot;Remember Me&quot;
                            </Typography>
                          )}
                        </Box>

                        <Button variant="text" onClick={handleConfirmClick}>
                          Forgot Password?
                        </Button>
                      </Box>

                      <Box>
                        <AnimateButton>
                          <Button fullWidth type="submit" color="secondary" variant="contained" sx={{ mb: 4 }} onClick={handleLoginClick}>
                            Login
                          </Button>
                        </AnimateButton>
                      </Box>
                      {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                        <Typography>Create an account</Typography>
                      </Box> */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          )}

          {otpShow && (
            <Grid item xs={12} md={6} sm={6} sx={{ minHeight: '84vh', display: 'flex', justifyContent: 'center' }}>
              <Grid container sx={{ pl: 12, pr: 12 }} spacing={2} alignItems="center" justifyContent="center">
                <Box className="content-center">
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center" justifyContent="center" item sx={{ mt: 1 }}>
                        <Link to="#">
                          <Logo />
                        </Link>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                          <Grid item sx={{ mt: 3 }}>
                            <Stack sx={{ mb: 4 }} alignItems="center" justifyContent="center" spacing={1}>
                              <Typography color={theme.palette.secondary.main} variant="h2" sx={{ mb: 1.5 }}>
                                Two-Step Verification 💬
                              </Typography>
                              <Typography>
                                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
                              </Typography>
                              <Typography variant="h4">******9763</Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Typography sx={{ mb: 3 }} variant="h5" color={theme.palette.primary.main}>
                        Type your 6 digit security code
                      </Typography>

                      <MuiOtpInput
                        length={6}
                        autoFocus
                        width={'100%'}
                        value={otp}
                        onChange={handleChange}
                        error={otpError}
                        helperText={otpError ? 'Please enter a valid 6-digit OTP' : ''}
                      />

                      <div className="countdown-text">
                        {seconds > 0 || minutes > 0 ? (
                          <p>
                            Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                          </p>
                        ) : (
                          <p>Didn&apos;t recieve code?</p>
                        )}

                        <Button
                          disabled={seconds > 0 || minutes > 0}
                          style={{
                            color: seconds > 0 || minutes > 0 ? '#DFE3E8' : '#673AB7'
                          }}
                          onClick={resendOTP}
                        >
                          Resend OTP
                        </Button>
                      </div>

                      <AnimateButton>
                        <Button fullWidth type="submit" color="secondary" variant="contained" sx={{ mb: 4 }} onClick={handleOtpClick}>
                          Verify My Account
                        </Button>
                      </AnimateButton>

                      {/* <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'text.secondary' }}>Didnt get the code?</Typography>
                        <Typography href="/">Resend</Typography>
                      </Box> */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          )}

          {forgetShow && (
            <Grid item xs={12} md={6} sm={6} sx={{ minHeight: '84vh', display: 'flex', justifyContent: 'center' }}>
              <Grid container sx={{ pl: 12, pr: 12 }} spacing={2} alignItems="center" justifyContent="center">
                <Box className="content-center">
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center" justifyContent="center" item sx={{ mt: 1 }}>
                        <Link to="#">
                          <Logo />
                        </Link>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                          <Grid item sx={{ mt: 3 }}>
                            <Stack sx={{ mb: 6 }} alignItems="center" justifyContent="center" spacing={1}>
                              <Typography variant="h2" color={theme.palette.secondary.main} sx={{ mb: 1.5 }}>
                                Forgot Password? 🔒
                              </Typography>
                              <Typography sx={{ color: 'text.secondary' }}>
                                Enter your email and we&prime;ll send you instructions to reset your password
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>

                      <TextField
                        autoFocus
                        fullWidth
                        id="email"
                        label="Email"
                        type="email"
                        sx={{ mb: 4 }}
                        placeholder="john.doe@gmail.com"
                        value={forgetEmail}
                        onChange={(e) => setForgetEmail(e.target.value)}
                        error={showForgetEmailError}
                        helperText={showForgetEmailError ? 'Please enter a valid email' : ''}
                      />

                      <AnimateButton>
                        <Button fullWidth type="submit" color="secondary" variant="contained" sx={{ mb: 4 }} onClick={handleForgetClick}>
                          Send
                        </Button>
                      </AnimateButton>
                      {/* <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                      
                        <Icon fontSize="1.25rem" icon="tabler:chevron-left" />
                        <span>Back to login</span>
                        
                      </Typography> */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          )}

          {confirmShow && (
            <Grid item xs={12} md={6} sm={6} sx={{ minHeight: '84vh', display: 'flex', justifyContent: 'center' }}>
              <Grid container sx={{ pl: 1, pr: 1 }} spacing={2} alignItems="center" justifyContent="center">
                <Box className="content-center">
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center" justifyContent="center" item sx={{ mt: 1 }}>
                        <Link to="#">
                          <Logo />
                        </Link>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                          <Grid item sx={{ mt: 3 }}>
                            <Stack sx={{ mb: 6 }} alignItems="center" justifyContent="center" spacing={1}>
                              <Typography variant="h2" color={theme.palette.secondary.main} sx={{ mb: 1.5 }}>
                                Change your Password 🔒
                              </Typography>
                              <Typography sx={{ color: 'text.secondary' }}>
                                Enter your new password and we&prime;ll reset your password
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>

                      <TextField
                        autoFocus
                        fullWidth
                        type="password"
                        label="New Password"
                        sx={{ display: 'flex', mb: 4 }}
                        placeholder="5srdf@#h8"
                      />

                      <TextField
                        autoFocus
                        fullWidth
                        type="password"
                        label="Confirm New Password"
                        sx={{ display: 'flex', mb: 4 }}
                        placeholder=""
                      />

                      <AnimateButton>
                        <Button fullWidth type="submit" color="secondary" variant="contained" sx={{ mb: 4 }} onClick={handleConfirmClick}>
                          Save Changes
                        </Button>
                      </AnimateButton>
                      {/* <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                        <Icon fontSize="1.25rem" icon="tabler:chevron-left" />
                        <span>Back to login</span>
                      </Typography> */}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          )}

          <Grid
            item
            xs={6}
            bgcolor={theme.palette.secondary.main}
            sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
              <Typography variant="h1" color={'white'}>
                {' '}
                Get Started !
              </Typography>
            </Grid>

            <Grid sx={{ pl: 5, pr: 5, mt: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Slider {...settings}>
                <Box>
                  <img
                    width={'100%'}
                    src="https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg"
                    alt="1"
                  />
                </Box>
                <Box>
                  <img
                    width={'100%'}
                    src="https://s3-ap-southeast-2.amazonaws.com/geg-gug-webapp/images/1557364192-work_while_you_study_banner.jpg"
                    alt="2"
                  />
                </Box>
                <Box>
                  <img width={'100%'} src="https://blog.college.ch/wp-content/uploads/2021/05/Untitled-design-40-1024x576.jpg" alt="3" />
                </Box>
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
