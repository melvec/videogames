import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import style from './Detail.module.css';

const apiKey = "413179f7b37044a3b53b63db111fda8c";
const apiURL = "https://api.rawg.io/api/games";

const Detail = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchGameDetail() {
      try {
        console.log("connecting to axios");
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}`,
          {
            params: {
              key: apiKey,
            },
          }
        );

        const gameData = response.data;
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    }

    fetchGameDetail();
  }, [id]);

  return (
    <div className={style.cardContainer}>
      <div className={style.cardleft}>
        <h2>Game Id: {id}</h2>
        <h2>Name: {game.name}</h2>
        <h2>Released: {game.released}</h2>
        <h2>Ratings: {game.rating}</h2>
        <div className={style.description}>
          Description:
          <div dangerouslySetInnerHTML={{ __html: game.description }} />
        </div>
        <h2>Platforms:</h2>
        <div className={style.platforms}>
          {game.platforms && game.platforms.map(platform => (
            <div key={platform.platform.id} className={style.platform}>
              {platform.platform.name}
            </div>
          ))}
        </div>
      </div>
      <div className={style.cardright}>
        <img src={game.background_image} alt="Game Cover" />
      </div>
    </div>
  );
};

export default Detail;
