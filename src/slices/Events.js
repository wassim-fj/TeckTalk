import { createSlice } from "@reduxjs/toolkit";
import CSImage from "./../assets/imgs/events.cover/CSGO.jpg";
import LoL from "./../assets/imgs/events.cover/Lol.jpg";
import Wow from "./../assets/imgs/events.cover/WOW.jpg";
import Valorant from "./../assets/imgs/events.cover/Valorant.jpg";

const initialState = {
  value: [
    {
      id: 1,
      name: "CS:GO",
      date: "16/4/2023",
      mission: "50 HeadShot",
      Ladders: "7 cartes",
      parrinage: "2 invités",
      cover: CSImage,
    },
    {
      id: 2,
      name: "LoL",
      date: "27/5/2023",
      mission: "160 HeadShot",
      Ladders: "11 cartes",
      parrinage: "5 invités",
      cover: LoL,
    },
    {
      id: 3,
      name: "We are VALORANT",
      date: "13/3/2023",
      mission: "130 HeadShot",
      Ladders: "9 cartes",
      parrinage: "4 invités",
      cover: Wow,
    },
    {
      id: 4,
      name: "WoW",
      date: "5/7/2023",
      mission: "280 HeadShot",
      Ladders: "7 cartes",
      parrinage: "7 invités",
      cover: Valorant,
    },
    {
      id: 5,
      name: "CS:GO part 2",
      date: "16/7/2023",
      mission: "100 HeadShot",
      Ladders: "3 cartes",
      parrinage: "6 invités",
      cover: CSImage,
    },
  ],
};

export const Events = createSlice({
  name: "Events",
  initialState,
  reducers: {},
});

export default Events;
