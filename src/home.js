import React from "react";
import bgImage from "./assets/BgVideo.mp4";

export default function (home) {
  return (
    <>
      {/* <div className="container"> */}
      <div className="Background">
        {/* <div className="overlay"></div> */}
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>

        <div className="content">
          <h1
            className="title"
            style={{ color: "yellow", textShadow: "2px 2px red" }}
          >
            Uttarakhand: Where Adventure Meets Tranquility
          </h1>
          <br />
          <section>
            <p className="intro" style={{ color: "white", fontSize: "18px", textShadow:'2px 2px black' }}>
              Welcome to Uttarakhand, the land where snow-capped peaks pierce
              the sky, emerald valleys unfurl like carpets, and ancient
              traditions whisper through the ages. Immerse yourself in the
              majesty of the Himalayas, from the heart-stopping thrill of
              trekking to the soul-stirring serenity of meditation amidst
              nature's grandeur.
            </p>
          </section>
          <br />

          <p style={{ color: "white", fontSize: "18px", textAlign:'justify', textShadow:'2px 2px black' }}>
            <ul>Explore a land of boundless possibilities:</ul>
            <li>
              Adventure: Embark on exhilarating treks through Nanda Devi
              National Park, conquer the rapids of the Ganges, or scale towering
              peaks like Kedarnath and Badrinath.
            </li>
            <li>
              Spirituality: Find solace in the serenity of ancient temples like
              Gangotri and Yamunotri, delve into the wisdom of yoga in
              Rishikesh, or embark on a soul-searching pilgrimage along the Char
              Dham Yatra.
              <li>
                Nature: Hike through verdant forests teeming with wildlife,
                cruise on serene lakes like Naini Tal and Bhimtal, or simply
                bask in the beauty of cascading waterfalls like Govindghat.
              </li>
            </li>
            <li>
              Culture: Immerse yourself in the vibrant tapestry of Uttarakhandi
              traditions, witness captivating folk dances, savor delectable
              local cuisine, and discover the warmth of its people.
            </li>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
