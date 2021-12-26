import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react';
import { Snackbar as Snack } from '@mui/material';
import { Link } from 'react-router-dom';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Snackbar = ({handleClose, open, link, bgColor}) => {

    return (
        <Snack open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%', backgroundColor: bgColor}}>
                Added to <Link to={`/${link}`} style={{color: "white", textDecoration:"underline"}}>{link}</Link>
            </Alert>
        </Snack>
    )
}

export default Snackbar
