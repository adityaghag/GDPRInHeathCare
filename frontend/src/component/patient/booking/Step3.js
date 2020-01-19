import React, { useEffect, useContext } from "react";
import Cards from './Cards';
import { Grid } from "@material-ui/core";
import Loading from '../../Loading';
import { Context } from '../../../store/Store';


const createCard = (docsData) => {
    let card = []
    docsData.map((item) => {
        return card.push(<Grid item key={item._id} xs={4}><Cards id={item._id} userType={item.userType} firstName={item.firstName} lastName={item.lastName} /></Grid>)
    });
    return card
}


export default function Step3() {

    const [state, dispatch] = useContext(Context);

    useEffect(() => {

        const fetchData = async () => {
            let cat = {
                docCat: state.selectedCat,
                day: state.selectedDay
            }
            const res = await fetch("http://localhost:3001/user/doctors_by_day", {
                method: 'post',
                body: JSON.stringify(cat),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            res.json().then(res => {
                dispatch({ type: 'SET_DOCTOR_DATA', payload: res.data });
                dispatch({ type: 'SET_LOADING', payload: true });
            });
        }
        fetchData();
    }, [dispatch, state.selectedCat, state.selectedDay]);


    return (
        <React.Fragment>
            {state.loading ?
                <Grid container spacing={4}>
                    {createCard(state.doctorData)}
                </Grid> :
                <Loading />

            }
        </React.Fragment>
    );
}