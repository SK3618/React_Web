import React from "react";
import navbar from "./navbar";
import Hero from "./hero";
import travel_tips from "./assets/travel tips.jpg";
export default function (suggestions) {
  return (
    <>
      <Hero
        cName="suggestions"
        heroalt="suggestions"
        image={travel_tips}
        heading="Travel Tips"
      />
      <h2 style={{ color: "purple" }}>
        Here are some of the most useful travel tips which will come in handy
        when you plan your trip to the places we mentioned in Uttarakhand:
      </h2>
      <ol>
        <li>
          <h4>Planning and Preparation:</h4>
          <br />
          <h5>Choose the right season:</h5>
          <span>
            Each place has its ideal time to visit. Rishikesh and Nainital are
            best between March-June or Sept-Nov. Auli shines during winters
            (Dec-Feb) for skiing. Jim Corbett is open Nov-June, with March-May
            offering the best wildlife sightings. Mussoorie is pleasant
            year-round, but avoid peak summer crowds.
          </span>
          <h5>Book accommodations in advance:</h5>
          <span>
            {" "}
            Popular destinations like Nainital and Mussoorie can get crowded,
            especially during holidays. Book hotels or guesthouses well in
            advance, especially for peak seasons.
          </span>
          <h5>Pack appropriately:</h5>{" "}
          <span>
            Pack layers for varying weather in different locations. Carry
            essentials like sunscreen, hat, sunglasses, comfortable walking
            shoes, and rain gear depending on the season.
          </span>
          <br />
        </li>
        <br />
        <li>
          <h4>Exploring the Destinations:</h4>
          <h5>Embrace the spiritual vibe in Rishikesh:</h5>{" "}
          <span>
            Attend yoga classes, participate in Ganga Aarti, or visit ashrams
            for meditation. Respect local traditions and dress modestly.
          </span>
          <h5>Adventure awaits in Auli:</h5>{" "}
          <span>
            Enjoy skiing, snowboarding, or trekking through the stunning
            Himalayan landscape. Dress warmly and rent appropriate gear if
            needed.
          </span>
          <h5>Go on a wildlife safari in Jim Corbett:</h5>{" "}
          <span>
            Book jeep or elephant safaris in advance to maximize your chances of
            spotting tigers and other animals. Maintain silence and follow park
            rules.
          </span>
          <h5>Experience the charm of Nainital:</h5>{" "}
          <span>
            Boat on the Naini Lake, enjoy scenic walks, or visit historical
            sites like Governor's House. Be prepared for crowds and bargain
            politely at markets.
          </span>
          <h5>Unwind in the "Queen of Hills" - Mussoorie:</h5>{" "}
          <span>
            Take a ride on the ropeway, explore Camel's Back Road, or shop at
            the Mall Road. Respect the colonial heritage and avoid littering.
          </span>
        </li>
        <br />
        <li>
          <h4>Additional Tips:</h4>
          <h5>Respect the local culture:</h5>
          <span>
            {" "}
            Dress modestly, especially when visiting religious sites. Learn
            basic Hindi phrases for better interaction with locals.
          </span>
          <h5>Be responsible tourists:</h5>
          <span>
            {" "}
            Dispose of waste properly, avoid littering, and conserve water and
            energy. Support local businesses and communities.
          </span>
        </li>
        <br />
        <li>
          <h4>Bonus Tip:</h4>{" "}
          <span>
            Consider purchasing the "Uttarakhand Tourism Development Board
            (UTDB)" tourist card for discounts and ease of travel across
            different destinations in the state.
          </span>
        </li>
      </ol>
    </>
  );
}
