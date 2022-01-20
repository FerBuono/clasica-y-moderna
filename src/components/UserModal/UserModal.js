import { useContext, useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import SignInModal from './SignInModal/SignInModal';
import JoinModal from './JoinModal/JoinModal';
import { useSnackbar } from 'notistack';
import { UserContext } from '../../context/UserContext';

const UserModal = ({handleClose, open}) => {

    const {findUser, createUser, user} = useContext(UserContext);
    const [modal, setModal] = useState('sign in');
    const [loading, setLoading] = useState(false);
    const [signIn, setSignIn] = useState({});
    const [join, setJoin] = useState({cart: [], wishlist: []});
    const {enqueueSnackbar} = useSnackbar();
    const [campsFilled, setCampsFilled] = useState(false);

    const handleChange = (e, setState, state) => {
        setState({...state, [e.target.id]: e.target.value});
    };

    const logIn = (e) => {
        e.preventDefault();
        setLoading(true);
        findUser(signIn.email, signIn.password);
    };

    const register = (e) => {
        e.preventDefault();
        
        setLoading(true);
        setTimeout(() => {
            createUser(join);
            setLoading(false);
            setModal('sign in');
            enqueueSnackbar('User creeated succesfully. Sign in to continue.', {
                variant: 'success',
            });
        }, 2000);
    };

    useEffect(() => {
        setModal('sign in');
    }, [open]);

    useEffect(() => {
        setSignIn({});
        setJoin({});
    }, [modal])
    
    useEffect(() => {
        open &&
            setTimeout(() => {
                if (user.length > 0) {
                    setLoading(false);
                    handleClose();
                    enqueueSnackbar('Signed in successfully.', {
                        variant: 'success',
                    });
                } else {
                    setLoading(false);
                    enqueueSnackbar('Incorrect email or password. Please try again.', {
                        variant: 'error',
                    });
                };
            }, 2000);
    }, [user]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <>
                {
                    modal === 'sign in' 
                        ? <SignInModal 
                            logIn={logIn}
                            signIn={signIn}
                            setSignIn={setSignIn}
                            handleChange={handleChange}
                            setModal={setModal}
                            loading={loading}
                            setCampsFilled={setCampsFilled}
                            campsFilled={campsFilled}
                            /> 
                        : <JoinModal 
                            register={register}
                            join={join}
                            setJoin={setJoin}
                            handleChange={handleChange}
                            setModal={setModal}
                            loading={loading}
                            setCampsFilled={setCampsFilled}
                            campsFilled={campsFilled}
                        />
                }
            </>
        </Modal>
    )
}

export default UserModal
