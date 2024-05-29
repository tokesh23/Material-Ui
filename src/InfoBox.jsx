import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function InfoBox({ info }) {
    let INIT_URL = "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=600"
    const HOT_URL = "https://images.pexels.com/photos/6262672/pexels-photo-6262672.jpeg?auto=compress&cs=tinysrgb&w=600"
    const Cold_URL = " https://images.pexels.com/photos/4969837/pexels-photo-4969837.jpeg?auto=compress&cs=tinysrgb&w=600"
    const Rain_URL = "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=600"

    // let info = {
    //     city: "Wonderkand",
    //     feelslike: 24.84,
    //     temp: 25.05,
    //     tempmin: 25.05,
    //     humidity: 47.,
    //     weather: 'Haze'

    // }
    return (
        <div className="InfoBox">

            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? Rain_URL : info.temp > 15 ? HOT_URL: Cold_URL}

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ?   Rain_URL : info.temp > 15 ? HOT_URL: Cold_URL}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p >temperature ={info.temp}&deg:c</p>
                            <p >Humidity ={info.humidity}&deg;c</p>
                            <p>min temp ={info.tempmin}7deg:container</p>
                            <p>the weather is described as ${info.weather} and feels like {info.feelslike}&deg;c</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );

}
export default InfoBox