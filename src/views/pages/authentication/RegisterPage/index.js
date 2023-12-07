// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
// import InputAdornment from '@mui/material/InputAdornment'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// ** Icon Imports
import Icon from '../../../../@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './components/StepperCustomDot'
// import TextField from '../../../../@core/components/mui/text-field
import { TextField } from '@mui/material'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Styled Component
import StepperWrapper from '../../../../@core/styles/mui/stepper'


// import FormControl from '@mui/material/FormControl'
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup'
// import FormLabel from '@mui/material/FormLabel'
// import FormControlLabel from '@mui/material/FormControlLabel'
import { useDropzone } from 'react-dropzone'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import InputAdornment from '@mui/material/InputAdornment'
// import CustomChip from '../../../../@core/components/mui/chip'
// import { display } from '@mui/system'
// import Divider from '@mui/material/Divider'


const steps = [
  {
    title: 'Organisation Registrationer',
    subtitle: 'Organisation Information'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links'
  },
  {
    title: 'Upload',
    subtitle: 'Upload Documents'
  },
  {
    title: 'Create Password',
    subtitle: 'Add Social Links'
  }
]



const RegisterPage = () => {


  const [loginShow, setLoginShow] = useState(true);
  // const [otpShow, setOtpShow] = useState(false);
  // const [forgetShow, setForgetShow] = useState(false);

  // const handleLoginClick = () => {
  //   setLoginShow(true);
  //   setOtpShow(false);
  //   setForgetShow(false);
  // };
  const handleOtpClick = () => {
    setLoginShow(false);
    setOtpShow(true);
    setForgetShow(false);
  };

  // const handleForgetClick = () => {
  //   setLoginShow(false);
  //   setOtpShow(false);
  //   setForgetShow(true);
  // };

  // const [otp, setOtp] = useState('');
  // // const handleChange = () => setCode(code);

  // const handleChange = (newValue) => {
  //   setOtp(newValue);
  // };


  // ** State
  const [files, setFiles] = useState([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <Icon icon='tabler:file-description' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    <ListItem key={file.name} sx={{ justifyContent: 'space-between' }}>
      <div className='file-details' >
        <div>
          <div className='file-preview'>{renderFilePreview(file)}</div>
          <div>
            <Typography className='file-name'>{file.name}</Typography>
            <Typography className='file-size' variant='body2'>
              {Math.round(file.size / 100) / 10 > 1000
                ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
                : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
            </Typography>
          </div>

        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='tabler:x' fontSize={20} />
      </IconButton>
    </ListItem >
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }


  // ** States
  // const [email, setEmail] = useState('')
  const [pinterest, setPinterest] = useState('')
  // const [officialEmail, setOfficialEmail] = useState('')
  const [twitter, setTwitter] = useState('')
  const [username, setUsername] = useState('')
  const [showUserNameError, setShowUserNameError] = useState('')

  // const [streetAddress, setStreetAddress] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [showStreetAddressError, setShowStreetAddressError] = useState('')

  const [streetAddressLine2, setStreetAddressLine2] = useState('')
  const [showStreetAddressLine2Error, setShowStreetAddressLine2Error] = useState('')

  const [city, setCity] = useState('')
  const [showCityError, setShowCityError] = useState('')

  const [state, setState] = useState('')
  const [showStateError, setShowStateError] = useState('')
  // const [recentEducation, setRecentEducation] = useState('')

  const [pinCode, setPinCode] = useState('')
  const [showPinCodeError, setShowPinCodeError] = useState('')

  // const [phoneNumber, setPhoneNumber] = useState('')
  // const [phoneNumber1, setPhoneNumber1] = useState('')
  // const [relation, setRelation] = useState('')
  // const [email, setEmail] = useState('')

  const [category, setCategory] = useState('')
  const [showCategoryError, setShowCategoryError] = useState('')

  const [type, setType] = useState('')
  const [showTypeError, setShowTypeError] = useState('')
  // const [contactNumber, setContactNumber] = useState('')



  const [phoneNumber, setPhoneNumber] = useState('')
  const [showPhoneNumberError, setShowPhoneNumberError] = useState('')

  const [alternateNumber, setAlternateNumber] = useState('')
  const [showAlternateNumberError, setShowAlternateNumberError] = useState('')

  const [area, setArea] = useState('')
  const [showAreaError, setShowAreaError] = useState('')
  const [description, setDescription] = useState('')

  const [organisationName, setOrganisationName] = useState('')
  const [showOrganisationNameError, setShowOrganisationNameError] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [registerNumber, setRegisterNumber] = useState('')
  // const [firstName, setFirstName] = useState('')
  const [activeStep, setActiveStep] = useState(0)
  // const [language, setLanguage] = useState([])
  // const [date, setDate] = useState(null) 

const[registrationDate,setRegistrationDate] = useState('');
const [showRegistrationDateError,setShowRegistrationDateError] = useState('');


  //** textfield validation */
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  // const [showPasswordError, setShowPasswordError] = useState(false);

  // const validateEmail = (input) => {
    // Basic email validation
    // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  // };
  // const validateInput = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };

  // const validateOrganisationName = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };  

  // const validateStreetAddress = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };

  // const validateStreetAddressLine2 = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };  

  // const validateAlternateNumber = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };  


  // const validatePhoneNumber = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };  

  // const validatePinCode = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // }; 

  // const validateCategory = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // }; 


  // const validateState = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // }; 

  // const validateCity = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };
// 
  // const validateType = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // }; 

  // const validateArea = (input) => {
    // Basic email validation
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };
 
  // const validateRegistrationDate = (input) => {
    // Basic email validation
  //   return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input);
  // };
  const handleLoginClick = () => {


    // Validate email
    if (!validateEmail(email) || !validateInput(username) || !validateOrganisationName(organisationName) || !validateStreetAddress(streetAddress) || !validateStreetAddressLine2(streetAddressLine2) || !validateAlternateNumber(alternateNumber) || !validatePhoneNumber(phoneNumber)  || !validatePinCode(pinCode)  || !validateCategory(category)  || !validateState(state) || !validateCity(city) || !validateType(type) || !validateArea(area) || !validateRegistrationDate(registrationDate) ) {
      setShowEmailError(true);
      setShowUserNameError(true);
      setShowOrganisationNameError(true);
      setShowStreetAddressError(true);
      setShowStreetAddressLine2Error(true);
      setShowAlternateNumberError(true);
      setShowPhoneNumberError(true);
      setShowPinCodeError(true);
      setShowCategoryError(true);
      setShowStateError(true);
      setShowCityError(true);
      setShowTypeError(true);
      setShowAreaError(true);
      setShowRegistrationDateError(true);

    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
      if (activeStep === steps.length - 1) {
        toast.success('Form Submitted')
      }
      setShowEmailError(false);
      setShowUserNameError(false);
      setShowOrganisationNameError(false);
      setShowStreetAddressError(false);
      setShowStreetAddressLine2Error(false);
      setShowAlternateNumberError(false);
      setShowPhoneNumberError(false);
      setShowPinCodeError(false);
      setShowCategoryError(false);
      setShowStateError(false);
      setShowCityError(false);
      setShowTypeError(false);
      setShowAreaError(false);
      setShowRegistrationDateError(false);
    }



    // Check if email and password are not empty
    if (email.trim() === '' || password.trim() === '') {
      console.log('Please enter both email and password');
    } else if (showEmailError || showPasswordError) {
      console.log('Please correct the email and password fields');
    } else {
      console.log('Logging in...');

      handleNext(true);

    }
  }

  // const [state, setState] = useState({
  //   password: '',
  //   password2: '',
  //   showPassword: false,
  //   showPassword2: false
  // })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleReset = () => {
    setEmail('')
    setGoogle('')
    setCountry('')
    setTwitter('')
    setUsername('')
    setLastName('')
    setFacebook('')
    setLinkedIn('')
    setLanguage([])
    setFirstName('')
    setActiveStep(0)
    setState({ ...state, password: '', password2: '' })
  }

  // // Handle Password
  // const handlePasswordChange = prop => event => {
  //   setState({ ...state, [prop]: event.target.value })
  // }

  // const handleClickShowPassword = () => {
  //   setState({ ...state, showPassword: !state.showPassword })
  // }

  // // Handle Confirm Password
  // const handleConfirmChange = prop => event => {
  //   setState({ ...state, [prop]: event.target.value })
  // }

  // const handleClickShowConfirmPassword = () => {
  //   setState({ ...state, showPassword2: !state.showPassword2 })
  // }

  // Handle Language
  // const handleSelectChange = event => {
  //   setLanguage(event.target.value)
  // }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Organisation Name  '
                value={organisationName}
                // placeholder='carterLeonard'
                onChange={e => setOrganisationName(e.target.value)}
                error={showOrganisationNameError}
                helperText={showOrganisationNameError ? ' organisationName field is Required' : ''}
              />
              <Box sx={{ mt: 1 }} >


                <Chip color="primary" skin="light" rounded variant="outlined" label='arunbalaji0023' sx={{ borderRadius: 5, mr: 1 }} />

                <Chip color="primary" skin="light" rounded variant="outlined" label='arun110' sx={{ borderRadius: 5, mr: 1 }} />

                <Chip color="primary" skin="light" rounded variant="outlined" label='arunbb111' sx={{ borderRadius: 5 }} />

              </Box>
              <Box sx={{ mt: 1 }} >

                <TextField
                  fullWidth
                  label='User Name  '
                  value={username}
                  // placeholder='carterLeonard'
                  onChange={e => setUsername(e.target.value)}
                  error={showUserNameError}
                  helperText={showUserNameError ? 'userName field is required' : ''}
                />

              </Box>

            </Grid>


            <Grid item xs={12} sm={6}>

              <TextField rows={6}
                multiline
                label='Description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                fullWidth id='textarea-outlined-static' />

            </Grid>
            {/* 
            <Grid item xs={12} sm={6}>
             


            </Grid> */}

            <Grid item xs={12} sm={6}>
              {/* <TextField
                  fullWidth
                  label='Email Address(official)'
                  value={officialEmail}
                  type='email'
                  onChange={e => setOfficialEmail(e.target.value)}
                /> */}


              <TextField
                autoFocus
                fullWidth
                id="email"
                label="Email"
                type='email'
                sx={{ mb: 4 }}
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={showEmailError}
                helperText={showEmailError ? 'Please enter a valid email' : ''}

              />

            </Grid>

            <Grid item xs={12} sm={6}>
              {/* <DatePicker
                  selected={date}
                  showYearDropdown
                  showMonthDropdown
                  id='form-layouts-tabs-date'
                  placeholderText='MM-DD-YYYY'
                  customInput={<CustomInput />}
                  onChange={date => setDate(date)}
                /> */}
              {/* <DatePicker label="Basic date picker" /> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker']}> */}
                <DatePicker sx={{ width: '100%' }} 
                value={registrationDate}   
                 onChange={e => setRegistrationDate(e.target.value)}
                 error={showRegistrationDateError}
                 helperText={showRegistrationDateError ? 'RegistrationDate field is required' : ''}
                
                label="Registration Date" />
                {/* </DemoContainer> */}
              </LocalizationProvider>

            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Street Address Line  '
                value={streetAddress}
                // placeholder='carterLeonard'
                onChange={e => setStreetAddress(e.target.value)}
                  error={showStreetAddressError}
                  helperText={showUserNameError ? 'StreetAddress field is required' : ''}
              />

            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Registration Number(if Registered) '
                value={registerNumber}
                // placeholder='carterLeonard'
                onChange={e => setRegisterNumber(e.target.value)}
              />

            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Street Address Line2  '
                value={streetAddressLine2}
                // placeholder='carterLeonard'
                onChange={e => setStreetAddressLine2(e.target.value)}
                error={showStreetAddressLine2Error}
                helperText={showStreetAddressLine2Error ? 'StreetAddressLine2 field is required' : ''}
              />

            </Grid>


            <Grid item xs={12} sm={6}>


              <TextField
                select
                fullWidth
                label='Category'
                error={showCategoryError}
                helperText={showCategoryError ? 'Category field is required' : ''}
                SelectProps={{
                  value: category,
                  onChange: e => setCategory(e.target.value)
                }}
              >
                <MenuItem value='Digiphonics'>Digiphonics</MenuItem>
                <MenuItem value='Yoho'>Yoho</MenuItem>
                <MenuItem value='Patron'>Patron</MenuItem>
                <MenuItem value='Chill Out'>Chill Out</MenuItem>
              </TextField>

            </Grid>



            <Grid item xs={12} sm={6} container spacing={6} sx={{ display: "flex" }}>
              <Grid item xs={6}>


                <TextField
                  select
                  fullWidth
                  label='State'
                  error={showStateError}
                  helperText={showStateError ? 'State field is required' : ''}
                  SelectProps={{
                    value: state,
                    onChange: e => setState(e.target.value)
                  }}
                >
                  <MenuItem value='Tamil Nadu'>Tamil Nadu</MenuItem>
                  <MenuItem value='Kerala'>Kerala</MenuItem>
                  <MenuItem value='Karnataka'>Karnataka</MenuItem>
                  <MenuItem value='Andhra Pradesh'>Andhra Pradesh</MenuItem>
                </TextField>

              </Grid>

              <Grid item xs={6}>

                <TextField
                  select
                  fullWidth
                  label='City'
                  error={showCityError}
                  helperText={showCityError ? 'City field is required' : ''}
                  SelectProps={{
                    value: city,
                    onChange: e => setCity(e.target.value)
                  }}
                >
                  <MenuItem value='Chennai'>Chennai</MenuItem>
                  <MenuItem value='Coimbatore'>Coimbatore</MenuItem>
                  <MenuItem value='Bangalore'>Bangalore</MenuItem>
                  <MenuItem value='Pondichery'>Pondichery</MenuItem>
                </TextField>
              </Grid>


            </Grid>

            <Grid item xs={12} sm={6}>


              <TextField
                select
                fullWidth
                label='Type'
                error={showTypeError}
                helperText={showTypeError ? 'Type field is required' : ''}
                SelectProps={{
                  value: type,
                  onChange: e => setType(e.target.value)
                }}
              >
                <MenuItem value='Pallavaram'>Development</MenuItem>
                <MenuItem value='Velachery'>Testing</MenuItem>
                <MenuItem value='Chrompet'>UI/UX</MenuItem>
                <MenuItem value='Ramapuram'>AWS</MenuItem>
              </TextField>

            </Grid>

            <Grid item xs={12} sm={6} container spacing={6} sx={{ display: "flex" }}>
              <Grid item xs={6}>


                <TextField
                  select
                  fullWidth
                  label='Area'
                  error={showAreaError}
                  helperText={showAreaError ? 'Area field is required' : ''}
                  SelectProps={{
                    value: area,
                    onChange: e => setArea(e.target.value)
                  }}
                >
                  <MenuItem value='Pallavaram'>Pallavaram</MenuItem>
                  <MenuItem value='Velachery'>Velachery</MenuItem>
                  <MenuItem value='Chrompet'>Chrompet</MenuItem>
                  <MenuItem value='Ramapuram'>Ramapuram</MenuItem>
                </TextField>

              </Grid>

              <Grid item xs={6}>

                <TextField
                  fullWidth
                  label='Pincode'
                  value={pinCode}
                  onChange={e => setPinCode(e.target.value)}
                  error={showPinCodeError}
                  helperText={showPinCodeError ? 'phoneNumber field is required' : ''}
                />
              </Grid>


            </Grid>


            <Grid item xs={12} sm={6} container spacing={6} sx={{ display: "flex" }}>


              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type='number'
                  label='Phone Number'
                  placeholder='123-456-7890'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  error={showPhoneNumberError}
                  helperText={showPhoneNumberError ? 'phoneNumber field is required' : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Icon fontSize='1.25rem' icon='tabler:phone' />
                      </InputAdornment>
                    )
                  }}
                />

              </Grid>


              <Grid item xs={6}>
                {/* <TextField
                  fullWidth
                  label='Alternate Number '
                  value={alternateNumber}
                  onChange={e => setAlternateNumber(e.target.value)}
                /> */}

                <TextField
                  fullWidth
                  type='number'
                  label='Alternate Number'
                  placeholder='123-456-7890'
                  value={alternateNumber}
                  onChange={e => setAlternateNumber(e.target.value)}
                  // onChange={e => setStreetAddressLine2(e.target.value)}
                  error={showAlternateNumberError}
                  helperText={showAlternateNumberError ? 'alternateNumber field is required' : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Icon fontSize='1.25rem' icon='tabler:phone' />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>



            </Grid>





          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Twitter'
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
                placeholder='https://twitter.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Facebook'
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                placeholder='https://facebook.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Pinterest'
                value={pinterest}
                onChange={e => setPinterest(e.target.value)}
                placeholder='https://plus.pinterest.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Instagram'
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
                placeholder='https://instagram.com/carterLeonard'
              />
            </Grid>
          </Fragment>
        )
      case 2:
        return (


          <Grid rowSpacing={2} sx={{ display: 'flex' }}>

            <Grid item xs={3}>




              <Grid sx={{}}>
                <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
                  <input {...getInputProps()} />
                  <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        mb: 8.75,
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
                      }}
                    > 
                         
                         

                      <Icon icon='tabler:upload' fontSize='1.75rem' />
                    </Box> 

                    <Typography variant='h4' sx={{ mb: 2.5 }} >
                       Registration Certificate
                    </Typography>
                    <Typography variant='h4' sx={{ mb: 2.5 }}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      (This is just a demo drop zone. Selected files are not actually uploaded.)
                    </Typography>
                  </Box>
                </Grid>
                {files.length ? (
                  <Box sx={{ width: '100%', alignItems: 'center' }}>
                    <List>{fileList}</List>
                    <div className='buttons'>
                      <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                      </Button>
                      <Button variant='contained'>Upload Files</Button>
                    </div>
                  </Box>
                ) : null}
              </Grid>

            </Grid>


            <Grid item xs={3}>




              <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
                <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
                  <input {...getInputProps()} />
                  <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        mb: 8.75,
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
                      }}
                    >
                      <Icon icon='tabler:upload' fontSize='1.75rem' />
                    </Box> 
                    
                    <Typography variant='h4' sx={{ mb: 2.5 }} >
                       Pan Card
                    </Typography>

                    <Typography variant='h4' sx={{ mb: 2.5 }}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      (This is just a demo drop zone. Selected files are not actually uploaded.)
                    </Typography>
                  </Box>
                </Grid>
                {files.length ? (
                  <Box sx={{ width: '100%', alignItems: 'center' }}>
                    <List>{fileList}</List>
                    <div className='buttons'>
                      <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                      </Button>
                      <Button variant='contained'>Upload Files</Button>
                    </div>
                  </Box>
                ) : null}
              </Grid>

            </Grid>



            <Grid item xs={3}>




              <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
                <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
                  <input {...getInputProps()} />
                  <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        mb: 8.75,
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
                      }}
                    >
                      <Icon icon='tabler:upload' fontSize='1.75rem' />
                    </Box>

                    <Typography variant='h4' sx={{ mb: 2.5 }} >
                      GST
                    </Typography>

                    <Typography variant='h4' sx={{ mb: 2.5 }}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      (This is just a demo drop zone. Selected files are not actually uploaded.)
                    </Typography>
                  </Box>
                </Grid>
                {files.length ? (
                  <Box sx={{ width: '100%', alignItems: 'center' }}>
                    <List>{fileList}</List>
                    <div className='buttons'>
                      <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                      </Button>
                      <Button variant='contained'>Upload Files</Button>
                    </div>
                  </Box>
                ) : null}
              </Grid>

            </Grid>


            <Grid item xs={3}>




              <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
                <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
                  <input {...getInputProps()} />
                  <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        mb: 8.75,
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
                      }}
                    >
                      <Icon icon='tabler:upload' fontSize='1.75rem' />
                    </Box> 

                    <Typography variant='h4' sx={{ mb: 2.5 }} >
                       Others Documents
                    </Typography>

                    <Typography variant='h4' sx={{ mb: 2.5 }}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      (This is just a demo drop zone. Selected files are not actually uploaded.)
                    </Typography>
                  </Box>
                </Grid>
                {files.length ? (
                  <Box sx={{ width: '100%', alignItems: 'center' }}>
                    <List>{fileList}</List>
                    <div className='buttons'>
                      <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                      </Button>
                      <Button variant='contained'>Upload Files</Button>
                    </div>
                  </Box>
                ) : null}
              </Grid>

            </Grid>

          </Grid>

        )

      case 3:
        return (
          <>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {loginShow && (
                  <Grid item xs={6}>
                    <Box className="content-center">
                      <Card>
                        <CardContent>
                          <Box sx={{}}>
                            {/* <Typography variant="h4" sx={{ mb: 1.5 }}>
                            Welcome to, LOGIN
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Please sign-in to your account and start the adventure</Typography> */}
                          </Box>

                          <TextField autoFocus fullWidth id="email" label="Create New Password" sx={{ mb: 4 }} />
                          <TextField
                            fullWidth
                            sx={{ mb: 1.5 }}
                            label="Confirm New Password"
                            // value={values.password}
                            id="auth-login-password"
                            placeholder="············"

                          />
                          {/* <Box
                          sx={{
                            mb: 1.75,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <FormControlLabel control={<Checkbox />} label="Remember Me" />
                          <Button variant="text" onClick={handleForgetClick}>
                            Forgot Password?
                          </Button>
                        </Box> */}
                          <Button fullWidth type="submit" variant="contained" sx={{ mt: 4 }} onClick={handleOtpClick}>
                            Submit
                          </Button>


                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                )}


                <Grid item xs={6}>
                <img
                    width={'100%'}
                    src="https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg"
                    alt="1"
                  />
                </Grid>
              </Grid>
            </Box>
          </>

          // <Grid rowSpacing={2} sx={{display:'flex' }}>

          // <Grid item xs={3}>




          //   <Grid sx={{ }}>
          //     <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
          //       <input {...getInputProps()} />
          //       <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          //         <Box
          //           sx={{
          //             mb: 8.75,
          //             width: 48,
          //             height: 48,
          //             display: 'flex',
          //             borderRadius: 1,
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
          //           }}
          //         >
          //           <Icon icon='tabler:upload' fontSize='1.75rem' />
          //         </Box>
          //         <Typography variant='h4' sx={{ mb: 2.5 }}>
          //           Drop files here or click to upload.
          //         </Typography>
          //         <Typography sx={{ color: 'text.secondary' }}>
          //           (This is just a demo drop zone. Selected files are not actually uploaded.)
          //         </Typography>
          //       </Box>
          //     </Grid>
          //     {files.length ? (
          //       <Box sx={{ width: '100%', alignItems: 'center' }}>
          //         <List>{fileList}</List>
          //         <div className='buttons'>
          //           <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
          //             Remove All
          //           </Button>
          //           <Button variant='contained'>Upload Files</Button>
          //         </div>
          //       </Box>
          //     ) : null}
          //   </Grid>

          //   </Grid>  


          //    <Grid item xs={3}>




          //   <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
          //     <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
          //       <input {...getInputProps()} />
          //       <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          //         <Box
          //           sx={{
          //             mb: 8.75,
          //             width: 48,
          //             height: 48,
          //             display: 'flex',
          //             borderRadius: 1,
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
          //           }}
          //         >
          //           <Icon icon='tabler:upload' fontSize='1.75rem' />
          //         </Box>
          //         <Typography variant='h4' sx={{ mb: 2.5 }}>
          //           Drop files here or click to upload.
          //         </Typography>
          //         <Typography sx={{ color: 'text.secondary' }}>
          //           (This is just a demo drop zone. Selected files are not actually uploaded.)
          //         </Typography>
          //       </Box>
          //     </Grid>
          //     {files.length ? (
          //       <Box sx={{ width: '100%', alignItems: 'center' }}>
          //         <List>{fileList}</List>
          //         <div className='buttons'>
          //           <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
          //             Remove All
          //           </Button>
          //           <Button variant='contained'>Upload Files</Button>
          //         </div>
          //       </Box>
          //     ) : null}
          //   </Grid>

          //   </Grid> 



          //     <Grid item xs={3}>




          //   <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
          //     <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
          //       <input {...getInputProps()} />
          //       <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          //         <Box
          //           sx={{
          //             mb: 8.75,
          //             width: 48,
          //             height: 48,
          //             display: 'flex',
          //             borderRadius: 1,
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
          //           }}
          //         >
          //           <Icon icon='tabler:upload' fontSize='1.75rem' />
          //         </Box>
          //         <Typography variant='h4' sx={{ mb: 2.5 }}>
          //           Drop files here or click to upload.
          //         </Typography>
          //         <Typography sx={{ color: 'text.secondary' }}>
          //           (This is just a demo drop zone. Selected files are not actually uploaded.)
          //         </Typography>
          //       </Box>
          //     </Grid>
          //     {files.length ? (
          //       <Box sx={{ width: '100%', alignItems: 'center' }}>
          //         <List>{fileList}</List>
          //         <div className='buttons'>
          //           <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
          //             Remove All
          //           </Button>
          //           <Button variant='contained'>Upload Files</Button>
          //         </div>
          //       </Box>
          //     ) : null}
          //   </Grid>

          //   </Grid>  


          //     <Grid item xs={3}>




          //   <Grid sx={{ alignItems: "center", justifyContent: 'center', width: '100%' }}>
          //     <Grid {...getRootProps({ className: 'dropzone' })} sx={{ mx: "auto", alignItems: 'center', flex: 1 }}>
          //       <input {...getInputProps()} />
          //       <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          //         <Box
          //           sx={{
          //             mb: 8.75,
          //             width: 48,
          //             height: 48,
          //             display: 'flex',
          //             borderRadius: 1,
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`
          //           }}
          //         >
          //           <Icon icon='tabler:upload' fontSize='1.75rem' />
          //         </Box>
          //         <Typography variant='h4' sx={{ mb: 2.5 }}>
          //           Drop files here or click to upload.
          //         </Typography>
          //         <Typography sx={{ color: 'text.secondary' }}>
          //           (This is just a demo drop zone. Selected files are not actually uploaded.)
          //         </Typography>
          //       </Box>
          //     </Grid>
          //     {files.length ? (
          //       <Box sx={{ width: '100%', alignItems: 'center' }}>
          //         <List>{fileList}</List>
          //         <div className='buttons'>
          //           <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
          //             Remove All
          //           </Button>
          //           <Button variant='contained'>Upload Files</Button>
          //         </div>
          //       </Box>
          //     ) : null}
          //   </Grid>

          //   </Grid>

          //   </Grid>

        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant='tonal' color='secondary' disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant='contained' onClick={handleLoginClick}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ mt: 4 }}>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </Fragment>
  )
}

export default RegisterPage

