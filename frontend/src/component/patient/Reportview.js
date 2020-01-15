import React , { useEffect,useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Patient from './Patient';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.default,
    padding: theme.spacing(3),
  },
}));


export default function Reportview() {
  const classes = useStyles();
  const [docsData, setdocsData] = useState({});

  const fetchData = async ()=>{
    const patientId={
      patientId:localStorage.getItem('userId')
    }
    console.log("cattt",patientId)
    fetch("http://localhost:3001/documents/getAllDoc", {
      method: 'post',
      body: JSON.stringify(patientId),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(res => {
      console.log("------",res)
      setdocsData(res)
    });
  }

  useEffect(() => {
    fetchData();
  },[]);

  console.log("docsData.document[0].documentFile",docsData.document)
  
  return (
    <div className={classes.root}>
    < Patient />
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        {/* {docsData.document[0].documentFile} */}
      </Typography>
    </main>
  </div>
  );
}
