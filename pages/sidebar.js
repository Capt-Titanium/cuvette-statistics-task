import { Drawer, Grid, Toolbar,Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const SideBar = () => {
    return ( 
            <div className='sidebar'>
				<Box className='side-box'>
					<div className='section-list'>
						<ListItem className='listitem' button key={'Dashboard'}>
							<ListItemIcon>
								<BarChartIcon />
							</ListItemIcon>
							<ListItemText primary={'Dashboard'} />
						</ListItem>
						<ListItem button className='active listitem' key={'Skill Test'}>
							<ListItemIcon>
								<WorkspacePremiumIcon color='primary' />
							</ListItemIcon>
							<ListItemText primary={'Skill Test'} />
						</ListItem>
						<ListItem button className='listitem' key={'Internships'}>
							<ListItemIcon>
								<InsertDriveFileIcon />
							</ListItemIcon>
							<ListItemText primary={'Internships'} />
						</ListItem>
					</div>
				</Box>
			</div>
     );
}
 
export default SideBar;