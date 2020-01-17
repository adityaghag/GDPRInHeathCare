import React, { useState, useEffect } from "react";
import Cards from './Cards';
import { Grid } from "@material-ui/core";
import Loading from '../../Loading';

export default function Step3() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
    }, [loading]);
    const [docsData, setdocsData] = useState({});

    const fetchData = async () => {
        let cat = {
            docCat: localStorage.getItem('docCat'),
            day: localStorage.getItem('day')
        }
        fetch("http://localhost:3001/user/doctors_by_day", {
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
        let card = []
        docsData.map((item) => {
            return card.push(<Grid item key={item._id} xs={4}><Cards id={item._id} userType={item.userType} firstName={item.firstName} lastName={item.lastName} /></Grid>)
        });
        return card
    }

    return (
        <React.Fragment>
            {!loading ?
                <Loading /> :
                <Grid container spacing={4}>
                    {createCard()}
                </Grid>
            }
        </React.Fragment>
    );
}