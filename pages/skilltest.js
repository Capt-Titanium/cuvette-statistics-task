import * as React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Image from "next/image";
import { Add} from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as TOoltip, Legend as LEgend, ResponsiveContainer } from 'recharts';

import { 
    Chart as ChartJS, 
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';

  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



const SkillTest = () => {
    

    const [open, setOpen] = React.useState(false);
    const [Rank,setRank] = React.useState(10);
    const [Percentile,setPercentile] = React.useState(10);
    const [CurrScore,setCurrScore] = React.useState(10);
    const [finalRank,setfinalRank] = React.useState(10);
    const [finalPercentile,setfinalPercentile] = React.useState(10);
    const [finalScore,setfinalScore] = React.useState(0);
    const [progress,setprogress] = React.useState(0);

    React.useEffect(() => {
		if(finalScore == 0)
		{
			setfinalScore(CurrScore);
		}
			setprogress(finalPercentile);
    }, [finalPercentile,finalScore]);

	const marks = {
		name: finalPercentile,
		pv: 4567,
		amt: 2400,
	};

	const linedata = [
		{
		  name: 0,
		  pv: 1,
		  amt: 2400,
		},
		{
			name: 10,
			pv: 2345,
			amt: 2210,
		},
		{
		  name: 20,
		  pv: 1398,
		  amt: 2210,
		},
		{
			name: 30,
			pv: 1398,
			amt: 2210,
		},
		{
		  name: 40,
		  pv: 3200,
		  amt: 2290,
		},
		{
		  name: 50,
		  pv: 8900,
		  amt: 2000,
		},
		{
		  name: 60,
		  pv: 4800,
		  amt: 2181,
		},
		{
		  name: 70,
		  pv: 2400,
		  amt: 2181,
		},
		{
		  name: 80,
		  pv: 1200,
		  amt: 2181,
		},
		{
		  name: 90,
		  pv: 2300,
		  amt: 2181,
		},
		{
		  name: 100,
		  pv: 1,
		  amt: 2500,
		},
	  ];
	
	  const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length && label == finalPercentile) {
		  return (
			<div className="custom-tooltip">
			  <p className="label">{`${label} % Percentile`}</p>
			  <p className="desc">Your Score</p>
			</div>
		  );
		}
	  
		return null;
	  };


    const data = {
        labels: ['Incorrect', 'Correct'],
        datasets: [
          {
            label: 'Current Score',
            data: [15-finalScore, finalScore],
            backgroundColor: [
              'rgba(67, 138, 246, 0.1)',
              'rgba(67, 138, 246, 1)',
            ],
            borderColor: [
              'rgba(67, 138, 246, 0.1)',
              'rgba(67, 138, 246, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };

    //   const linedata = {
    //             labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
    //             datasets: [
    //                 {
    //                 label: "First dataset",
    //                 data: [33, 53, 85, 20, 44, 65],
    //                 fill: true,
    //                 backgroundColor: "rgba(75,192,192,0.2)",
    //                 borderColor: "rgba(75,192,192,1)"
    //                 },
    //             ],
    //         };
    
    
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCancel = () => {
        setCurrScore(finalScore);
        setPercentile(finalPercentile);
        setRank(finalRank);
        setOpen(false);
    }

    const handleSubmit = () => {
        setfinalScore(CurrScore);
        setfinalPercentile(Percentile);
        setfinalRank(Rank);
        setOpen(false);
    };

    return (
        <div className="skillpage">
            <div className="page-heading">
                Skill Test
            </div>
            <div>
                <Grid container className="skilltest-board">
                    <Grid item xs={8}>
                        <div>
                            <Grid container className="heading-box">
                                <Grid item xs={2}>
                                <Image src="/html.png" height={100} width={100} />
                                </Grid>
                                <Grid item className="skills-headings" xs={8}>
                                    <div className="skill-heading">Hypertext Markup Language</div>
                                    <div className="skill-subheading">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</div>
                                </Grid>
                                <Grid item className="change-button" xs={2}>
                                <Button variant="contained" onClick={handleClickOpen}>Change</Button>
                                <Dialog maxWidth='md' fullWidth='true' open={open} onClose={handleCancel}>
                                    <DialogTitle className='dialogue-title'>
                                        <Grid container>
                                            <Grid item xs={11} className="modal-heading">
                                                Update Skill Scores
                                            </Grid>
                                            <Grid item xs={1}>
                                            <Image src="/html.png" height={60} width={60} />
                                            </Grid>
                                        </Grid>
                                    </DialogTitle>
                                    <DialogContent className='dialogue-content'>
                                        <Grid container className='modal-field'>
                                            <Grid item xs={9} className="input-text">
                                            <span className='number-highlight'>1 </span>
                                            <span className='update-your'> Update your </span>
                                            <span className='varname'> rank </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                            <div className='range-form'>
                                                <Button className='minus' onClick={ ()=>{if(Rank !== 1) setRank(Rank-1) }}><RemoveIcon /></Button>
                                                <span className='field-num'> {Rank} </span>
                                                <Button className='plus' onClick={ ()=>{setRank(Rank+1) }}><Add /></Button>
                                            </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container className='modal-field'>
                                            <Grid item xs={9} className="input-text">
                                            <span className='number-highlight'>2 </span>
                                            <span className='update-your'> Update your </span>
                                            <span className='varname'> percentile </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                            <div className='range-form'>
                                            <Button className='minus' onClick={ ()=>{if(Percentile !== 0) setPercentile(Percentile-10) }}><RemoveIcon /></Button>
                                            <span className='field-num'> {Percentile} </span>
                                                <Button className='plus' onClick={ ()=>{if(Percentile !== 100) setPercentile(Percentile+10) }}><Add /></Button>
                                                
                                            </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container className='modal-field'>
                                            <Grid item xs={9} className="input-text">
                                            <span className='number-highlight'>3 </span>
                                            <span className='update-your'> Update your </span>
                                            <span className='varname'> current score </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                            <div className='range-form'>
                                            <Button className='minus' onClick={ ()=>{if(CurrScore !== 0) setCurrScore(CurrScore-1) }}><RemoveIcon /></Button>
                                                <span className='field-num'>{CurrScore}</span>
                                                <Button className='plus' onClick={ ()=>{if(CurrScore !== 15)setCurrScore(CurrScore+1) }}><Add /></Button>
                                            </div>
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCancel} color="primary" variant="outlined">Cancel</Button>
                                        <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
                                    </DialogActions>
                                </Dialog>
                                </Grid>
                            </Grid>
                        </div>
                        <div className='show-stats'>  
                            <div className='stats-heading'>Quick Statistics</div>
                            <Grid container>
                                <Grid item xs={4} className="stat-section">
                                    <Grid container>
                                        <Grid item className='stat-image' xs={3}>
                                            <Image src="/trophy.png" height={20} width={20} />
                                        </Grid>
                                        <Grid className='stat-info' item xs={9}>
                                            <div className='stat-score'>{finalRank}</div>
                                            <div className='stat-name'>YOUR RANK</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} className="stat-section">
                                <Grid container>
                                        <Grid item className='stat-image' xs={3}>
                                            <Image src="/notepad.png" height={20} width={20} />
                                        </Grid>
                                        <Grid className='stat-info' item xs={9}>
                                            <div className='stat-score'>{finalPercentile} %</div>
                                            <div className='stat-name'>PERCENTILE</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} className="stat-section">
                                <Grid container>
                                        <Grid item className='stat-image' xs={3}>
                                            <Image src="/tick.png" height={20} width={20} />
                                        </Grid>
                                        <Grid className='stat-info' item xs={9}>
                                            <div className='stat-score'>{finalScore} / 15</div>
                                            <div className='stat-name'>CORRECT ANSWERS</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <div className='comparison-section'>
                            <div className='comparison-heading'>Comparison Graph</div>
                            <div className='comparison-subheading'><span className='comparison-bold-subheading'>You scored {finalPercentile} % percentile </span> which is {finalPercentile > 50 ? 'higher' : 'lower'} than the average percentile 50% of all the engineers who took the assessment. </div>
                            <div className='comparison-graph'>
							<ResponsiveContainer width="95%" height={400}>
								<LineChart
								className='line-chart'
								width={1000}
								height={1000}
								data={linedata}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
								>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<TOoltip  content={<CustomTooltip />} />
								<LEgend />
								<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
								</ResponsiveContainer>
							</div>
                        </div>
                    </Grid>
                    <Grid className='right-stats' item xs={4}>
                        
                        <div className='progressbars'>
                            
                            <div className='progress-head'> Syllabus wise Analysis</div>
                            
                            <div className='bar-element'>
                                <div className='progress-title'>HTML Tools, Forms, History</div>
                                <Grid container>
                                    <Grid item sm={10}>
                                    <Box sx={{ width: '80%', mr: 1 }} className="progress-section">
                                    <LinearProgress color='success' className='progress' variant="determinate" value={progress} />
                                </Box>
                                    </Grid>
                                    <Grid item sm={2}>
                                    <Typography className='progress-percentage green-percent'>{progress} %</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            
                            <div className='bar-element'>
                                <div className='progress-title'>Tags & Reference in HTML</div>
                                <Grid container>
                                    <Grid item sm={10}>
                                    <Box sx={{ width: '80%' }} className="progress-section">
                                    <LinearProgress color='secondary' className='progress' variant="determinate" value={progress+20} />
                                </Box>
                                    </Grid>
                                    <Grid item sm={2}>
                                    <Typography className='progress-percentage pink-percent'>{progress+20} %</Typography>
                                    </Grid>
                                </Grid>
                                
                            </div>

                            <div className='bar-element'>
                                <div className='progress-title'>Tables & CSS Basics</div>
                                <Grid container>
                                    <Grid item sm={10}>
                                    <Box sx={{ width: '80%' }} className="progress-section">
                                    <LinearProgress color='success' className='progress' variant="determinate" value={progress-3} />
                                </Box>
                                    </Grid>
                                    <Grid item sm={2}>
                                    <Typography className='progress-percentage green-percent'>{progress-3} %</Typography>
                                    </Grid>
                                </Grid>
                                
                            </div>

                            <div className='bar-element'>
                                <div className='progress-title'>Tables & CSS Basics</div>
                                <Grid container>
                                    <Grid item sm={10}>
                                    <Box sx={{ width: '80%' }} className="progress-section">
                                    <LinearProgress color='secondary' className='progress' variant="determinate" value={progress+30} />
                                </Box>
                                    </Grid>
                                    <Grid item sm={2}>
                                    <Typography className='progress-percentage pink-percent'>{progress+30} %</Typography>
                                    </Grid>
                                </Grid>
                                
                            </div>
                        </div>

                        <div className='donut-chart'>
                            <div className='donut-heading'>Question Analysis <span className='donut-score'>{finalScore} / 15</span></div>
                            <div className='donut-subheading'><span className='bold-subheading'>You scored {finalScore} question correct out of 15. </span>However it still needs some improvements.</div>
                            <div className="donut-merge">
                            <Doughnut className='donut-chart-graph' data={data} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        
     );
}
 
export default SkillTest;