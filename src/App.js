import logo from './logo.svg';
import './App.css';
import Matrix from './Matrix';
import { Grid, Paper } from '@mui/material';

function App() {
  return (
    <Grid container sx={{ backgroundColor: '#2196f3',height:'100vh' }}>
      <Grid item xs={12} sm={8} md={6} xl={4}>
        <Paper sx={{margin:'1em',height:'auto',overflow:'none'}}>
          <Matrix/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
