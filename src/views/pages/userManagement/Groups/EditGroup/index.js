import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Icon from "../../../../../@core/components/icon";
// import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../components/loader";



const EditGroup = () => {
  // const [permissionTabs, setPermissionTabs] = useState([]);

  const rolesArr = [
    'User Management',
    'Content Management',
    'Disputes Management',
    'Database Management',
    'Financial Management',
    'Reporting',
    'API Control',
    'Repository Management',
    'Payroll'
  ]
  

  // useEffect(() => {
  //   const allModules = [
  //     ...new Set(permissionsData.permission.map((perm) => perm.module)),
  //   ];
  //   setPermissionTabs(allModules);
  // }, [permissionsData.permission]);

  // console.log(permissionTabs)

  const [selectedCheckbox, setSelectedCheckbox] = useState([])
  const [isIndeterminateCheckbox, setIsIndeterminateCheckbox] = useState(false)
 

  const togglePermission = id => {
    const arr = selectedCheckbox
    if (selectedCheckbox.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
      setSelectedCheckbox([...arr])
    } else {
      arr.push(id)
      setSelectedCheckbox([...arr])
    }
  }

  const handleSelectAllCheckbox = () => {
    if (isIndeterminateCheckbox) {
      setSelectedCheckbox([])
    } else {
      rolesArr.forEach(row => {
        const id = row.toLowerCase().split(' ').join('-')
        togglePermission(`${id}-read`)
        togglePermission(`${id}-write`)
        togglePermission(`${id}-create`)
      })
    }
  }
  useEffect(() => {
    if (selectedCheckbox.length > 0 && selectedCheckbox.length < rolesArr.length * 3) {
      setIsIndeterminateCheckbox(true)
    } else {
      setIsIndeterminateCheckbox(false)
    }
  }, [selectedCheckbox])



  //Goback history
  let history = useNavigate();


    //Loader 
    const [progressLoading, setProcessLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setProcessLoading(false);
      }, 800);
    }, []);

 
//   const renderNoResult = (
//     <Box
//       sx={{
//         mt: 8,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         "& svg": { mr: 2 },
//       }}
//     >
//       <Icon fontSize="1.5rem" icon="tabler:alert-circle" />
//       <Typography variant="h5">No Results Found!!</Typography>
//     </Box>
//   );

  console.log(rolesArr);

  return (

    <>
    {progressLoading ? (
      <Loader/>
    ):(
    
  
       <Grid style={{}}>
        <DialogTitle
          component='div'
          sx={{
            textAlign: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(5)} !important`]
          }}
        >
          {/* <Typography variant='h3'>{`${dialogTitle} Group`}</Typography> */}
          <Typography variant='h3'>{`Edit Group`}</Typography>

          <Typography color='text.secondary'>Set Group Permissions</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            justifyContent:"center",
            width:"100%",
            pb: theme => `${theme.spacing(5)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`]
          }}
        >
          <Grid sx={{ my: 4 }}>
            <FormControl fullWidth>
              <TextField fullWidth label='Group Name' placeholder='Enter Role Name' />
            </FormControl>
          </Grid>
          <Typography variant='h4'>Role Permissions</Typography>
          <TableContainer>
            <Table size='small' sx={{ width: '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: '0 !important' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        alignItems: 'center',
                        textTransform: 'capitalize',
                        '& svg': { ml: 1, cursor: 'pointer' },
                        color: theme => theme.palette.text.secondary,
                        fontSize: theme => theme.typography.h6.fontSize
                      }}
                    >
                      Administrator Access
                      <Tooltip placement='top' title='Allows a full access to the system'>
                        <Box sx={{ display: 'flex' }}>
                          <Icon icon='tabler:info-circle' fontSize='1.25rem' />
                        </Box>
                      </Tooltip>
                    </Box>
                  </TableCell>
                  <TableCell colSpan={3}>
                    <FormControlLabel
                      label='Select All'
                      sx={{ '& .MuiTypography-root': { textTransform: 'capitalize', color: 'text.secondary' } }}
                      control={
                        <Checkbox
                          size='small'
                          onChange={handleSelectAllCheckbox}
                          indeterminate={isIndeterminateCheckbox}
                          checked={selectedCheckbox.length === rolesArr.length * 3}
                        />
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rolesArr.map((i, index) => {
                  const id = i.toLowerCase().split(' ').join('-')
                  return (
                    <TableRow key={index} sx={{ '& .MuiTableCell-root:first-of-type': { pl: '0 !important' } }}>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          fontSize: theme => theme.typography.h6.fontSize
                        }}
                      >
                        {i}
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          label='Read'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              size='small'
                              id={`${id}-read`}
                              onChange={() => togglePermission(`${id}-read`)}
                              checked={selectedCheckbox.includes(`${id}-read`)}
                            />
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          label='Write'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              size='small'
                              id={`${id}-write`}
                              onChange={() => togglePermission(`${id}-write`)}
                              checked={selectedCheckbox.includes(`${id}-write`)}
                            />
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          label='Create'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                          control={
                            <Checkbox
                              size='small'
                              id={`${id}-create`}
                              onChange={() => togglePermission(`${id}-create`)}
                              checked={selectedCheckbox.includes(`${id}-create`)}
                            />
                          }
                        />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box className='demo-space-x'>
          <Button
            color="error"
            variant="contained"
            onClick={() => history(-1)}
            size="medium"
          >
            Cancel 
          </Button>       
          <Button
            sx={{ marginLeft: 5 }}
            variant="contained"
            onClick={() => history(-1)}
            size="medium"
          >
            Submit 
          </Button>
          </Box>
        </DialogActions>
      </Grid>
   
    )}
    </>
  );
};

export default EditGroup;


