import React, { useEffect, useState } from "react";
import axios from 'axios';
import NBABoxScore from '../components/NBABoxScore'

const NBAGamePage = () => {
  return (
    <div className="">
        <section className="section-NBABoxScore">
          <NBABoxScore/>
        </section>
    </div>
  )
}

export default NBAGamePage