import React, { useEffect, useState } from "react";
import axios from 'axios';
import NBABoxScore from '../components/NBABoxScore'

const NBAGamePage = () => {
  return (
    <div>
        NBAGamePage
        <NBABoxScore/>
    </div>
  )
}

export default NBAGamePage