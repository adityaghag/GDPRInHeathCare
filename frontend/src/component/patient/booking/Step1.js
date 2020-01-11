import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Booking() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Typography component="h4" variant="h6">Categories</Typography>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="A" {...a11yProps(0)} />
                    <Tab label="B" {...a11yProps(1)} />
                    <Tab label="C" {...a11yProps(2)} />
                    <Tab label="D" {...a11yProps(3)} />
                    <Tab label="E" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Cat1
          </TabPanel>
            <TabPanel value={value} index={1}>
                Cat2
          </TabPanel>
            <TabPanel value={value} index={2}>
                Cat3
          </TabPanel>
            <TabPanel value={value} index={3}>
                Cat4
          </TabPanel>
            <TabPanel value={value} index={4}>
                Cat5
            </TabPanel>
        </React.Fragment>
    );
}
