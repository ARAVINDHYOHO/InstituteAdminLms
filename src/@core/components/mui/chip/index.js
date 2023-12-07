// ** MUI Imports
import MuiChip from '@mui/material/Chip'

// ** Third Party Imports
import clsx from 'clsx'

// ** Hooks Imports
import useBgColor from "../../../hooks/useBgColor"

const Chip = props => {
  // ** Props
  const { sx, skin, color, rounded,label } = props

  // ** Hook
  const bgColors = useBgColor()

  const colors = {

    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
   
  }
  const propsToPass = { ...props }
  propsToPass.rounded = undefined

  return (
    <MuiChip
      {...propsToPass}
      variant='filled'
      className={clsx({
        'MuiChip-rounded': rounded,
        'MuiChip-light': skin === 'light'
      })}
      sx={label === 'light' && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}

export default Chip
