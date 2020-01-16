import React, { useEffect, useState } from 'react';
import Reports from './AllReports';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Patient from '../Patient';

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
    console.log("cattt", patientId)
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
      console.log("------", res)
      setdocsData(res.document)
      setLoading(true);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("docsData.document[0].documentFile", docsData)

  const createCard = () => {
    let card = []
    docsData.map((item) => {
      return card.push(<Grid item key={item._id} xs={4}><Reports id={item._id} fileName={item.fileName} documentFile={item.documentFile} comments={item.comments} /></Grid>)
    });
    return card
  }
  if (!loading)
    return <h1>No Data</h1>
  else {
    return (
      <div className={classes.root}>
        < Patient />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={4}>
            {createCard()}test
          </Grid>
        </main>
      </div>
    );
  }
}