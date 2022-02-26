import React, {Component, useEffect, useState} from "react";
import './index.css';
import { Divider, Paper, Grid, Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Card, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LockIcon from '@mui/icons-material/Lock';
import data from "../data/data";


var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Oxygen']
  }
});

console.log(data);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)"
};



function JobList() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const stageList = ['Referred','Accepted','Interviewed','Hired'];
    const stageSize = Object.keys(stageList).length;

    // some function written for stage, as data hasnt set for stage yet. The function wont use on demo program.
    const stageBox = (stage) =>{
            if (stage = 'Referred'){
                return(
                    <Card item xs style={{ height: "25vh", width: "50vh",}}>
                        <Grid style={{textAlign:'left'}}>
                            <Typography color="primary" variant="h6" style={{ marginTop: "2vh",marginLeft:'5%' }}>
                            Referred
                            </Typography>
                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                        </Grid>
                        <Grid item xs container direction="row" style={{marginTop:'3vh',height:'8vh',postion:'relative'}}>
                            <Grid item xs={3} style={{marginLeft:'2%'}}  >
                                <Avatar style={{left:'20%'}}/>
                            </Grid>
                            <Grid item xs style={{textAlign:'left'}}>
                                <Typography color="grey" variant="body2" >
                                    No one applied yet - refer now to get a head start!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>                 
                )
            }else{
                return(
                    <Card item xs style={{ height: "20vh", width: "30vh",backgroundColor:'transparent'}}>
                        <Grid style={{textAlign:'left',}}>
                            <Typography color="primary" variant="h6" style={{ marginTop: "2vh",marginLeft:'5%' }}>
                            Referred
                            </Typography>
                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                        </Grid>
                        <Grid item xs container direction="row" style={{marginTop:'3vh',height:'8vh',postion:'relative'}}>
                            <Grid item xs={3} style={{marginLeft:'2%'}}  >
                                <Avatar style={{left:'20%'}}/>
                            </Grid>
                            <Grid item xs style={{textAlign:'left'}}>
                                <Typography color="grey" variant="body2" >
                                    No one applied yet - refer now to get a head start!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card> 
                )

            }
        }
    

    const listItems = data.map(data =>(
    <Box sx={{
        p: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:'0',
        maxWidth: '80%',
        display: 'block',
        overflow: 'auto',
        flexGrow: 1,
        backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            
        }}>
            <Grid container spacing={0}  sx={{ marginBottom:'2%',}}>
                <Grid item xs={2}>
                    <Paper elevation={0}>
                        <img src={`${data.companyLogo}`} style={{width:'40%', marginTop:'0%', height:'auto',objectFit:'contain', borderRadius:'50%'}} />
                    </Paper>
                </Grid>
                
                <Grid xs={10} direction="column" justifyContent="flex-start" alignItems="stretch">
                    {/* Upper Part */}
                    <Grid item xs={10} container direction="row" justifyContent="center" alignItems="center" style={{marginBottom:'2%'}}>
                        {/* Job Title */}
                        <Grid item xs={6} style={{height:'100%', textAlign:"left", maxWidth:'50%'}}>
                            <div class="jobTitle" style={{marginBottom:'4%'}}>{data.jobTitle}</div>
                            <div class="description">{data.oneLineJD}</div>
                        </Grid>

                        {/* HK$ Reward */}
                        <Grid item xs={3} style={{height:'100%', textAlign:'left', marginTop:'0.5%', margin:'0%'}} container spacing={2}>
                            <EmojiEventsIcon  color='primary' style={{margin:'1%'}}/>
                            <div>
                                <div class="bounty" style={{marginBottom:'2%'}}>HK$ {data.bounty} upon hire</div>
                                <div class="bountyBottom">+ HK$500 upon interview</div>
                            </div>
                        </Grid>

                        {/* Refer */}
                        <Grid item xs={2} style={{height:'100%',marginLeft:'-5%' }}>
                            <Button size="large" variant="contained" onClick={handleClickOpen}>Refer now</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                BackdropProps={{ style: { backgroundColor: "white" } }}
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"Use Google's location service?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Testing if ok
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={handleClose} autoFocus>Agree</Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>  
                    </Grid>

                    {/* Lower Part */}
                    <Grid item xs={10} container direction="column" justifyContent="flex-start" alignItems="stretch" direction="column">
                        <Grid item container xs={10} style={{height:'100%', marginTop:'4%', margin:'0.5%'}} direction="row">
                            {/* Divider */}
                            <Grid item xs={11} style={{height:'100%', position:'relative'}} direction="row">
                                <ArrowCircleRightIcon fontSize="small" color='primary' style={{ left:0, position:'absolute', }}/>
                                    <Divider sx={{}} orientation="horizontal" style={{width:'49%',position:'absolute',left:'0.2%',backgroundColor:'white',borderTop:'grey',marginTop:'1%'}} variant="middle" flexItem/>
                                <ArrowCircleRightIcon fontSize="small" color='primary' style={{ left:'50%', position:'absolute'}}/>
                                    <Divider sx={{}} orientation="horizontal" style={{width:'22%',position:'absolute',right:'25%',left:'50%',backgroundColor:'rgb(0,0,0,0)',borderTop:'grey',marginTop:'0%'}} variant="middle" flexItem>
                                        $500
                                    </Divider>
                                <ArrowCircleRightIcon fontSize="small" color='primary' style={{ right:'25%', position:'absolute'}}/>
                                    <Divider sx={{}} orientation="horizontal" style={{width:'25%',position:'absolute',right:'0%',left:'73%',backgroundColor:'rgb(0,0,0,0)',borderTop:'grey',marginTop:'0%'}} variant="middle" flexItem>
                                        ${data.bounty}
                                    </Divider>
                                <CheckCircleIcon fontSize="small" color='primary' style={{ right:0, position:'absolute'}}/>
                            </Grid>
                        </Grid>
                        
                        <Grid item container xs={10} style={{height:'100%', marginTop:'1%', margin:'0.5%'}} direction="row">


                        {/* Stage */}
                        <Grid item container xs={11} style={{height:'100%', marginTop:'4%', margin:'0.5%'}} direction="row">


                                <Grid item container xs={3} style={{}}>
                                    <Card item xs style={{ height: "15vh", width: "auto",margin:'2vh',backgroundColor:'transparent'}}>
                                        <Grid style={{textAlign:'left',}}>
                                            <Typography variant="h6" style={{ fontSize:'100%', marginTop: "2vh",marginLeft:'5%',color:"black" }}>
                                                Referred
                                            </Typography>
                                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                                        </Grid>
                                        <Grid item xs container direction="row" style={{marginTop:'1vh',height:'8vh',postion:'relative'}}>
                                            <Grid item xs={3} style={{marginLeft:'2%',}}  >
                                                <Avatar style={{top:'15%',left:'20%',backgroundColor:'white',border:'dashed grey',width: 24, height: 24}}/>
                                            </Grid>
                                            <Grid item xs style={{textAlign:'left'}}>
                                                <Typography color="grey" variant="caption" >
                                                    No one applied yet - refer now to get a head start!
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Card> 
                                </Grid>


                                <Grid item container xs={3} style={{}}>
                                    <Card item xs style={{ height: "15vh", width: "auto",margin:'2vh',backgroundColor:'#D7D7D7'}}>
                                        <Grid style={{textAlign:'left',}}>
                                            <Typography variant="h6" style={{ fontSize:'100%', marginTop: "2vh",marginLeft:'5%', color:'rgb(140, 140, 140)' }}>
                                                Accepted
                                            </Typography>
                                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                                        </Grid>
                                        <Avatar style={{position:'sticky ',marginTop:'-1.5vh',backgroundColor:'rgb(38,38,38)',left:'40%'}}>
                                            <LockIcon/>
                                        </Avatar>
                                        <Grid item xs container direction="row" style={{marginTop:'1vh',height:'8vh',postion:'relative'}}>
                                            {/* To put icon in */}
                                            <Grid item xs={3} style={{marginLeft:'2%',}}>
                                            </Grid>
                                            <Grid item xs style={{textAlign:'left'}}>
                                                <Typography color="#D7D7D7" variant="caption" >
                                                    No one applied yet - refer now to get a head start!
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>                             
                                </Grid>


                                <Grid item container xs={3} style={{}}>
                                    <Card item xs style={{ height: "15vh", width: "auto",margin:'2vh',backgroundColor:'#D7D7D7'}}>
                                        <Grid style={{textAlign:'left',}}>
                                            <Typography variant="h6" style={{ fontSize:'100%', marginTop: "2vh",marginLeft:'5%', color:'rgb(140, 140, 140)' }}>
                                                Interviewed
                                            </Typography>
                                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                                        </Grid>
                                        <Avatar style={{marginTop:'-1.5vh',backgroundColor:'rgb(38,38,38)',left:'40%'}}>
                                            <LockIcon/>
                                        </Avatar>
                                        <Grid item xs container direction="row" style={{marginTop:'1vh',height:'8vh',postion:'relative'}}>
                                            {/* To put icon in */}
                                            <Grid item xs={3} style={{marginLeft:'2%',}}>
                                            </Grid>
                                            <Grid item xs style={{textAlign:'left'}}>
                                                <Typography color="#D7D7D7" variant="caption" >
                                                    No one applied yet - refer now to get a head start!
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>                             
                                </Grid>

                                <Grid item container xs={3} style={{}}>
                                    <Card item xs style={{ height: "15vh", width: "auto",margin:'2vh',backgroundColor:'#D7D7D7'}}>
                                        <Grid style={{textAlign:'left',}}>
                                            <Typography variant="h6" style={{ fontSize:'100%', marginTop: "2vh",marginLeft:'5%', color:'rgb(140, 140, 140)' }}>
                                                Hired
                                            </Typography>
                                            <Divider style={{ marginTop: "1vh", marginLeft:'5%', width:'90%' }} />          
                                        </Grid>
                                        <Avatar style={{marginTop:'-1.5vh',backgroundColor:'rgb(38,38,38)',left:'40%'}}>
                                            <LockIcon/>
                                        </Avatar>
                                        <Grid item xs container direction="row" style={{marginTop:'1vh',height:'8vh',postion:'relative'}}>
                                            {/* To put icon in */}
                                            <Grid item xs={3} style={{marginLeft:'2%',}}>
                                            </Grid>
                                            <Grid item xs style={{textAlign:'left'}}>
                                                <Typography color="#D7D7D7" variant="caption" >
                                                    No one applied yet - refer now to get a head start!
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>                            
                                </Grid>

                            </Grid>



                        </Grid>
                        
                    
                    </Grid>




                </Grid>
                <Divider  orientation="horizontal" style={{width:'100%',marginLeft:'auto',marginRight:'auto' }} variant="middle" flexItem></Divider>  
            </Grid>

    </Box>


  ))
  return(
    <div>
      {listItems}
    </div>
  );

};

export default JobList;