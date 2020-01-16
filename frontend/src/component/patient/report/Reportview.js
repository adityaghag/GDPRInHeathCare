import React, { useEffect, useState } from 'react';
import Reports from './AllReports';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Patient from '../Patient';
import Loading from '../../Loading';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  const [loading, setLoading] = useState(false);
  const [docsData, setdocsData] = useState({});

  const fetchData = async () => {
    const patientId = {
      patientId: localStorage.getItem('userId')
    }
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
      setdocsData(res.document)
      setLoading(true);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const createCard = () => {
    let card = []
    docsData.map((item) => {
      return card.push(<Grid item key={item._id} xs={4}><Reports id={item._id} fileName={item.fileName} documentFile={item.documentFile} comments={item.comments} /></Grid>)
    });
    return card
  }
  return (
    <div className={classes.root}>
      < Patient />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          !loading ? <Loading /> : <Grid container spacing={4}>
            {createCard()}
          </Grid>
        }
      </main>
    </div>
  );
}