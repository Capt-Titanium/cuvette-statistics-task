import { AppBar, Box, Button, Grid} from "@material-ui/core";
import Image from "next/image";

const Navbar = () => {
    return (  
        <AppBar position="static" className="navbar">
            <Box sx={{ flexGrow: 1 }} className="navbox">
                <Grid container spacing={0} className="navcontainer">
                    <Grid item xs={10} className="logo">
                        <Image src="/logo.png" className="logo-photo" height={35}  width={150} />
                    </Grid>
                    <Grid item xs={2} className="profile">
                        <Button variant="outlined" className="profile-box">
                            <Image src="/profilepic.png" height={30} width={30} />
                            <div className="name">Siddharth Jain</div>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </AppBar>
    );
}
 
export default Navbar;