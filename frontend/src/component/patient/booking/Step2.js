import React, { useState, useEffect } from "react";
import Cards from './Cards';
import { Grid } from "@material-ui/core";


export default function Step2() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
    }, [loading]);
    const [docsData, setdocsData] = useState({});

    const fetchData = async () => {
        let cat = {
            docCat: localStorage.getItem('docCat')
        }
        fetch("http://localhost:3001/user/getDocByCat", {
            method: 'post',
            body: JSON.stringify(cat),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(res => {
            setdocsData(res.data);
            setLoading(true);
        });
    }

    const createCard = () => {
        console.log(docsData)
        let card = []
        docsData.map((item) => {
            return card.push(<Grid item key={item._id} xs={3}><Cards userType={item.userType} firstName={item.firstName} lastName={item.lastName} /></Grid>)
        });
        return card
    }
    if (!loading)
        return <h1>No Data</h1>
    else {
        return (
            <Grid container spacing={4}>
                {createCard()}
            </Grid>
        );
    }
}
