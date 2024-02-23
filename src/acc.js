import React from "react";
import Hero from "./hero";
import navbar from "./navbar";
import accomodation from "./assets/accomodation.jpg";
import acc1 from "./assets/acc1.jpg";
import acc2 from "./assets/acc2.jpg";
import acc3 from "./assets/acc3.jpeg";
import acc4 from "./assets/acc4.jpg";

export default function (accomodations) {
  return (
    <>
      <Hero
        cName="accomodations"
        heroalt="accomodations"
        image={accomodation}
        heading="Accomodations"
      />
      <h4 style={{ color: "Green" }}>
        Planning a trip to Uttarakhand? Get ready to explore breathtaking
        landscapes, spiritual havens, and thrilling adventures. To help you find
        the perfect place to rest your head after your explorations, here's a
        detailed guide to accommodation options in five popular destinations:-
      </h4>
      <ol>
        <li>
          <h4>Mussoorie:</h4>
          <ul>
            <li>
              <h5>Luxury:</h5>
              Rokeby Manor: This heritage hotel built in 1830 offers colonial
              charm, stunning valley views, and impeccable service. JW Marriott
              Mussoorie Walnut Grove Resort & Spa: Luxurious amenities,
              breathtaking valley views, and a range of recreational activities
              await at this upscale resort.{" "}
            </li>
            <li>
              <h5>Mid-range:</h5>
              Classic Hotel: Affordable luxury with modern amenities and
              stunning mountain views. Country Inn & Suites by Radisson:
              Comfortable rooms, excellent location, and budget-friendly options
              make this a popular choice.
            </li>
            <li>
              <h5>Budget:</h5>
              Hotel Sun N Snow: Friendly staff, clean rooms, and a central
              location at a pocket-friendly price. Youth Hostel Mussoorie: A
              great option for backpackers and solo travelers, offering
              dormitories and private rooms with a communal atmosphere.
            </li>
          </ul>
        </li>
        <li>
          <h4>Auli:</h4>
          <ul>
            <li>
              <h5>Luxury:</h5>
              The Himalayan: Nestled amidst snow-capped peaks, this hotel offers
              luxurious rooms, a spa, and breathtaking views. Cliffhanger Guest
              House: Ski-in/ski-out access, cozy fireplace, and panoramic views
              make this a unique and luxurious experience.
            </li>
            <li>
              <h5>Mid-range:</h5>
              Sun n Snow Auli: Comfortable rooms, delicious food, and ski
              rentals offered on-site at a reasonable price. GMVN Tourist Rest
              House: A budget-friendly option with basic amenities and
              convenient location near the slopes.
            </li>
            <li>
              <h5>Budget:</h5>
              Homestays: Immerse yourself in local culture with a homestay
              experience offering affordable rates and authentic meals. Camping:
              Pitch a tent for a truly adventurous experience under the stars.
              Remember to obtain permits and follow safety guidelines.
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <h4>Jim Corbett National Park:</h4>
          <ul>
            <li>
              <h5>Luxury:</h5>
              Taj Corbett Resort & Spa: Luxurious tents, exquisite dining, and
              jungle safaris create an unforgettable experience. The River
              Lodge: Stunning riverside location, spacious villas with private
              pools, and personalized service for a high-end stay.
            </li>
            <li>
              <h5>Mid-range:</h5>
              Namasthe Corbett Retreat: Comfortable cottages, Ayurvedic spa, and
              wildlife sighting opportunities at an affordable price. Jungle
              Lore Resorts: Eco-friendly resort with comfortable stay options
              amidst nature, offering jeep safaris and nature walks.
            </li>
            <li>
              <h5>Budget:</h5>
              Forest Rest Houses: Managed by the forest department, offering
              basic but clean accommodations within the park at economical
              rates. Campsites: Enjoy an adventurous stay amidst nature at
              designated campsites within the park boundaries.
            </li>
          </ul>
        </li>
        <li>
          <h4>Rishikesh:</h4>
          <ul>
            <li>
              <h5>Luxury:</h5>
              Ananda in the Himalayas: A wellness retreat offering luxurious
              accommodations, spa treatments, and yoga classes in a serene
              setting. Taj Rishikesh: Modern luxury hotel with stunning Ganges
              views, swimming pool, and spa facilities.
            </li>
            <li>
              <h5>Mid-range:</h5>
              Rishikesh Yogpeeth Ashram: Offers comfortable rooms, yoga classes,
              and ayurvedic treatments in a spiritual atmosphere. Sattva Yoga
              Shala: Comfortable budget-friendly rooms with access to yoga
              classes and workshops.
            </li>
            <li>
              <h5>Budget:</h5>
              Guesthouses: Numerous guesthouses offer basic but clean
              accommodations in Rishikesh at affordable prices. Ashram
              dormitories: Many ashrams offer dormitory beds or rooms at very
              low costs, often in exchange for volunteering.
            </li>
          </ul>
        </li>
        <li>
          <h4>Nainital</h4>
          <ul>
            <li>
              <h5>Luxury:</h5>
              The Naini Retreat by Leisure Hotels Group: Offers a heritage vibe
              with modern amenities, stunning lake views, and a renowned
              restaurant. Shervani Hilltop: Nestled amidst hills, this hotel
              boasts spacious rooms, panoramic views, and a swimming pool. Manu
              Maharani Regency by Royal Collection Hotels: Experience regal
              charm with luxurious rooms, personalized service, and a central
              location.
            </li>
            <li>
              <h5>Mid-range:</h5>
              India Hotel - Mall Road Nainital: Lake-view rooms, rooftop terrace
              with sweeping views, and a relaxed atmosphere at a reasonable
              price. Lakeside Inn: Classic hotel on Mall Road with comfortable
              rooms, balconies offering lake views, and a rooftop restaurant.
              The Earl's Court by Leisure Hotels Group: Heritage charm,
              comfortable rooms, and a convenient location near Mall Road.
            </li>
            <li>
              <h5>Budget:</h5>
              Naini R.R. Residency: Family-run with friendly atmosphere, clean
              rooms, and budget-friendly prices. Paradise Homestay: Immerse
              yourself in local culture with comfortable rooms, delicious
              home-cooked meals, and a welcoming environment. GoSTOPS Nainital:
              Vibrant hostel offering simple dorms and private rooms, social
              spaces, and lake views.
            </li>
          </ul>
        </li>
      </ol>
      <div className="accimg">
        <img alt="acc" className="Ac" src={acc1}></img>
        {/* <img alt="acc" className="Ac" src={acc2}></img> */}
        <img alt="acc" className="Ac" src={acc3}></img>
        {/* <img alt="acc" className="Ac" src={acc4}></img> */}
      </div>
    </>
  );
}
