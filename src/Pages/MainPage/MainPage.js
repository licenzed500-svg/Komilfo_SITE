import React, { Component } from 'react';
import "./MainPage.css"
import video from "./Videos/video.mp4"
class MainPage extends Component {
    render() {
        return (
            <div>
                <video loop autoPlay>
                    <source
                    src= {video}
                    type="video/mp4"
                  
                    />
                    Your browser does not support the video tag.
                    <h1> Самый вкусный кофе в севастополе</h1>
                </video>
                
            </div>
        );
    }
}

export default MainPage;