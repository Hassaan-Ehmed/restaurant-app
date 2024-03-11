import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import  { handleClose } from '../../redux/slices/products';
import DialogCard from './DialogCard';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  '& .MuiPaper-root':{
    width:'100%',
    // backgroundColor:"yellow"
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function MUIDialog(){

    const storeState:any = useAppSelector( state => state.products );
    const dispatch:any = useAppDispatch(); 

  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={()=>dispatch(handleClose())}
        aria-labelledby="customized-dialog-title"
        open={storeState.isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 ,opacity:0}} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>dispatch(handleClose())}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
     <DialogCard/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>dispatch(handleClose())}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}