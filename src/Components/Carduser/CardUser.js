import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardUser.css";

const CardUser = ({ data }) => {
  return (
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="card-area">
          <CardMedia
            component="img"
            image={data.avatar_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Nickname: {data.login}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Real Name: {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              location: {data.location}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Perfil: {data.html_url}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardUser;
