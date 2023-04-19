import React from 'react'
import styled from 'styled-components'
import youTubeLogo from "../assets/youtubeLogo.png"
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import "./css/Menu.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {Button} from "antd"
import { useSelector, useDispatch } from 'react-redux'

const MenuContenar = styled.div`
  flex:1.4;
  background-color:#282828;
  position: sticky;
  top:0;
  height:100vh;
  `;
  
const Menu = () => {
    const {currentUser} = useSelector((state)=>state.user)

    return (
        <MenuContenar>
            <Link to="/">
                <div className="logo">
                    <img src={youTubeLogo}
                        alt=""/>
                    <span>Youtube</span>
                </div>
            </Link>
            {/* <hr /> */}

            <div className="menu-option">
            <Link to="/">
                <div className="home">
                    <HomeIcon/>
                    <span>Home</span>
                </div>
                </Link>
                <Link to="trands">
                <div className="explore">
                    <ExploreIcon/>
                    <span>Explore</span>
                </div>
                </Link>
                <Link to="subs">
                <div className="subscriptions">
                    <SubscriptionsIcon/>
                    <span>Subscriptions</span>
                </div>
                </Link>
                <hr/>
                <div className="library">
                    <VideoLibraryIcon/>
                    <span>Library</span>
                </div>
                <div className="history">
                    <HistoryIcon/>
                    <span>History</span>
                </div>
                <hr/>{(!currentUser) ? <>
                <div className="signin">
                    <div className="signmasage">
                        <span>Sign in to like video comments and subscribe.
                        </span>
                    </div>
                    <Link  to='/login' >
                    <div className="signcontenars">
                        <AccountCircleIcon sx={
                            {fontSize: 25}
                        }/>
                        <span>Sign In</span>
                    </div>
                    </Link>
                </div>
                <hr/></>:null}
                <div className="option-text">
                    <h3>Best of youtube</h3>
                </div>
                <div className="music">
                    <LibraryMusicIcon/>
                    <span>Music</span>
                </div>
                <div className="sports">
                    <SportsBasketballIcon/>
                    <span>Sports</span>
                </div>
                <div className="gaming">
                    <SportsEsportsIcon/>
                    <span>Gaming</span>
                </div>
                <div className="movies">
                    <MovieCreationIcon/>
                    <span>Movies</span>
                </div>
                <div className="news">
                    <ArticleIcon/>
                    <span>News</span>
                </div>
                <div className="live">
                    <LiveTvIcon/>
                    <span>Live</span>
                </div>
                <hr/>
                <div className="setting">
                    <SettingsIcon/>
                    <span>Settings</span>
                </div>
                <div className="report">
                    <FlagIcon/>
                    <span>Report</span>
                </div>

                <div className="help">
                    <HelpOutlineIcon/>
                    <span>Help</span>
                </div>
                <div className="theam">
                     <SettingsBrightnessIcon/>
                     <span>Theam</span>
                </div>

            </div>
        </MenuContenar>
    )
}

export default Menu
