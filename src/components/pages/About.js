import React from "react";

import '../style/About.css';

export default function About () {
    return (
        <main>
            <h2 className="page-title">About</h2>
            <div className="about-para-container">
                <p className="about-para">
                    All credit for this idea should go to ArgonMatrix who created the original Stardew Valley Perfection Randomizer in Google Sheets. You should definitely check out his content on Youtube and check out his Randomizer VODs. 
                </p>

                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=vhIwUqmNx5pux9ht&amp;list=PL6-AYSf47-FsBiWANzLoaIMuTjs3k-XIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <p className="about-para">
                    I decided to take ArgonMatrix's idea and turn it into a full website, as I found the Google Sheet (while totally impressive) a bit cumbersome. Also, there were security pop-ups from Google, which I knew had the potential to scare away some users who may not be as tech/Google Sheets savvy. Once I thought about making it into a website, I had lots of ideas about how I could add to the usability of the randomizer and some fun extra features. I hope you enjoy using the randomizer!
                </p>
            </div>
        </main>
    )
}