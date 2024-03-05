import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './schedule.css'

function TabPanel(props) {
    const { children, value, index, background, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{
                width: '100%',
                backgroundImage: `url(${background})`,
                backgroundSize: '100% 100%', // Stretch the background image
                backgroundPosition: 'center',
                minHeight: '200px', // Adjust as needed
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    background: PropTypes.string, // New prop for background image URL
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs2() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, width: '100%', margin: 'auto', bgcolor: 'black', display: 'flex', height: 450 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dance Club" {...a11yProps(0)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dramatics" {...a11yProps(1)} />
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Music" {...a11yProps(2)} /> */}
                <Tab sx={{ margin: '5px', color: 'white' }} label="Debating" {...a11yProps(2)} />
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Quest" {...a11yProps(4)} /> */}
                <Tab sx={{ margin: '5px', color: 'white' }} label="Rajbhasha" {...a11yProps(3)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Animation" {...a11yProps(4)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Fine Arts" {...a11yProps(5)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="movies" {...a11yProps(6)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Photography" {...a11yProps(7)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="RLC" {...a11yProps(8)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Fashion" {...a11yProps(11)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Sanskriti" {...a11yProps(9)} />
            </Tabs>
            <TabPanel value={value} index={0} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099448/Untitled%20design%20%281%29/6_b3gudd.png">
                <div className='each'>

                    <div>
                        <h1 className='heads'>BEAT THE STREET</h1>
                        <p className='para'>Venue:NIGHT CANTEEN </p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>
                    <div>
                        <h1 className='heads'>BHANGRA FIESTA</h1>
                        <p className='para'>Venue:CENTRAL SEMINAR HALL </p>
                        <p className='para'>Time:11:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={1} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099427/Untitled%20design%20%281%29/39_shnbzr.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>Monocat</h1>
                        <p className='para'>Venue:Central Lawn </p>
                        <p className='para'>Time:03:00 PM</p>

                    </div>



                </div>
            </TabPanel>
            <TabPanel value={value} index={2} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099397/Untitled%20design%20%281%29/15_z5hied.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>DEBATE LEAGUE</h1>
                        <p className='para'>Venue:IT Conference Hall+LT </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={3} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099409/Untitled%20design%20%281%29/13_ozzgkf.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>Patrokar Babu</h1>
                        <p className='para'>Venue:SCIENCE BLOCK </p>
                        <p className='para'>Time:10:30 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={4} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099421/Untitled%20design%20%281%29/23_r9zyne.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>COSCON</h1>
                        <p className='para'>Venue:MBH-GROUND </p>
                        <p className='para'>Time:04:00 PM</p>

                    </div>
                    <div>
                        <h1 className='heads'>EXHIBITION</h1>
                        <p className='para'>Venue:SB-LOBBY </p>
                        <p className='para'>Time:ALL DAY</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={5} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099393/Untitled%20design%20%281%29/21_nif7dy.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>PEBBLE PAINTING EXTRAVAGANZA</h1>
                        <p className='para'>Venue:Lawn Tenis</p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>
                    <div>
                        <h1 className='heads'>10 MINUTE CHALLENGE</h1>
                        <p className='para'>Venue: DRAWING HALL </p>
                        <p className='para'>Time:11:30 AM</p>

                    </div>
                    <div>
                        <h1 className='heads'>ART BEYOND SIGHT</h1>
                        <p className='para'>Venue: DRAWING HALL </p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>

                    <div>
                        <h1 className='heads'>ART EXHIBITION</h1>
                        <p className='para'>Venue:IT BUILDING </p>
                        <p className='para'>Time:ALL DAY</p>

                    </div>


                </div>
            </TabPanel>
            <TabPanel value={value} index={6} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099427/Untitled%20design%20%281%29/39_shnbzr.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>MAD-ADS</h1>
                        <p className='para'>Venue: LT/IT BUILDING </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={7} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099450/Untitled%20design%20%281%29/19_vdibph.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>DRISHYA</h1>
                        <p className='para'>Venue:IT BUILDING </p>
                        <p className='para'>Time:09:00 AM</p>

                    </div>
                    <div>
                        <h1 className='heads'>CINEPULSE (WEEKEND DIARY) </h1>
                        <p className='para'>Venue: IT BUILDING </p>
                        {/* <p className='para'>Time:02:00 PM</p> */}

                    </div>


                </div>
            </TabPanel>
            <TabPanel value={value} index={8} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099454/Untitled%20design%20%281%29/1_kpoel6.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>FOLK SINGING</h1>
                        <p className='para'>Venue:OAT </p>
                        <p className='para'>Time:04:00 PM</p>

                    </div>

                </div>
            </TabPanel>
           
            <TabPanel value={value} index={10} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099450/Untitled%20design%20%281%29/7_bi3tow.png">
                <div className='each'>
                    <div>
                        <h1 className='heads'>CULTURAL EXHIBITION</h1>
                        <p className='para'>Venue:CENTRAL LAWN / NIGHT CANTEEN</p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel sx={{ blur: '10%' }} value={value} index={9} background="https://res.cloudinary.com/dpgxz1q1x/image/upload/v1709099419/Untitled%20design%20%281%29/11_pok1fm.png">
                <div className='each'>

                    <div>
                        <h1 className='heads'>Panache</h1>
                        {/* <p className='para '>Venue:Open Air Theater</p> */}
                        <p className='para'>Time:06:00 PM</p>
                    </div>

                </div>
            </TabPanel>
            {/* Include other TabPanel components with their respective background images */}
        </Box>
    );
}
