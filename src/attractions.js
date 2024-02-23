import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import bgimage from "./assets/bgimage.jpg";
import "./herocss.css";
import nainital from "./assets/nainital1.jpg";
import nainital3 from "./assets/nainital3.jpg";
import rish2 from "./assets/rish2.jpg";
import rish from "./assets/rish.jpg";
import mus1 from "./assets/mus1.jpg";
import mus2 from "./assets/mus2.jpg";
import Jim1 from "./assets/Jim1.jpg";
import Jim2 from "./assets/Jim2.jpg";
import auli from "./assets/auli.jpg";
import auli2 from "./assets/auli2.jpg";

export default function (attractions) {
  return (
    <>
      <Hero
        cName="about"
        heroalt="attractions"
        image={bgimage}
        heading="Attractions"
      />

      <h2 className="attTitle" style={{ fontSize: "40x", color: "blue" }}>
        Top 5 Tourist Attractions places in Uttarakhand
      </h2>
      <p className="attDesc" style={{ fontSize: "20px" }}>
        Uttarakhand, nestled in the foothills of the Himalayas, is a treasure
        trove of natural beauty, spiritual significance, and cultural
        richness.Here are top 5 captivating destinations that offer diverse
        experiences:
      </p>
      <div className="desc">
        <ol>
          <li>
            <div className="Nai">
              <h2>
                Nainital:Where Tranquility Meets Adventure in the Kumaon Hills
              </h2>
              <p>
                Imagine a breathtaking panorama of emerald hills cradling a
                shimmering lake, its surface reflecting the azure sky. The
                gentle breeze carries the fragrance of pine forests, mingling
                with the aroma of freshly brewed tea wafting from quaint cafes.
                This idyllic picture comes alive in Nainital, the "Lake
                Paradise" nestled amidst the Kumaon Hills of Uttarakhand.
                <br />
                Nainital, named after the mythological goddess Naina Devi, is a
                hill station steeped in charm and legend. Founded in 1841 by the
                British, it quickly gained popularity for its captivating beauty
                and refreshing climate. Today, it remains a favored getaway for
                travelers seeking a perfect blend of serenity, adventure, and
                cultural immersion.
                <br />
                <h4>Enchanting Embrace of the Lake:</h4>
                The heart of Nainital throbs around the mesmerizing Naini Lake,
                a crescent-shaped body of water stretching for 2 miles. Take a
                leisurely boat ride, soaking in the sun-dappled waters and the
                majestic backdrop of the hills. Paddle your way across the calm
                surface, or simply lose yourself in the tranquility as you rent
                a shikara, a traditional boat adorned with vibrant flowers.
                <br />
                <h4>Thrilling Trails and Scenic Vistas:</h4>
                <span>
                  Nainital isn't just about serene lakes. Adventure seekers can
                  embark on invigorating hikes up to Tiffin Top or Snow View
                  Point, offering panoramic vistas of the Himalayas. The trek to
                  Dorothy's Seat, believed to be the inspiration for Ruskin
                  Bond's stories, takes you through verdant forests and rewards
                  you with breathtaking views of the valley below.
                </span>
                <h4>A Glimpse into History and Heritage:</h4>
                <span>
                  Nainital boasts a rich colonial past, evident in its charming
                  architecture. Stroll down the Mall Road, a pedestrian-only
                  zone lined with heritage buildings housing shops, cafes, and
                  restaurants. The Governor's House, now a museum showcasing
                  colonial artifacts, stands as a testament to the town's
                  history.
                </span>
                <h4>Beyond the Tourist Trail:</h4>
                <span>
                  For a taste of local life, delve into the bustling Bhotia
                  Market, known for its Tibetan handicrafts and souvenirs. Seek
                  spiritual solace at the Naina Devi Temple, a revered Hindu
                  shrine perched on the Naina Peak. In the evening, witness the
                  mesmerizing Ganga Aarti ceremony on the lakeshore, as lamps
                  illuminate the serene waters.
                </span>
                <h4>Culinary Delights:</h4>
                <span>
                  Nainital's culinary scene caters to diverse palates. Savor
                  steaming momos and thukpa at Tibetan eateries, indulge in
                  North Indian delicacies, or grab a quick bite at a street
                  vendor offering local favorites like aloo tikki and samosas.
                  Don't miss the chance to try Kumaoni cuisine, known for its
                  use of local spices and ingredients.
                </span>
              </p>
              <div className="imga">
                <img alt="nainital" className="nainital" src={nainital} />
                {/* <img alt="nainital" className="nainital" src={nainital2} /> */}
                <img alt="nainital" className="nainital" src={nainital3} />
                <br />
                {/* <img alt="nainital" className="nainital" src={nainital4} /> */}
              </div>
            </div>
          </li>
          <br />
          <li>
            <div className="Rish">
              <h2>
                Rishikesh: Where Spirituality Flows with Adventure in the
                Himalayas
              </h2>
              <p>
                Imagine the holy Ganges River, its emerald waters chanting
                ancient secrets as they flow around verdant hills. Add the aroma
                of incense from ashrams mingling with the crisp mountain air,
                and you've arrived in Rishikesh, the "Yoga Capital of the
                World." This vibrant town offers a unique blend of spiritual
                awakening, adventure thrills, and cultural immersion for every
                kind of traveler.
                <br />
                <h4>Dive into Tranquility:</h4>
                <span>
                  Immerse yourself in the heart of Rishikesh - the ghats.
                  Witness the mesmerizing Ganga Aarti ceremony as hundreds of
                  diyas illuminate the river at dusk, creating a spellbinding
                  spectacle. Join yoga classes or meditation sessions at an
                  ashram, finding inner peace amidst the serenity.
                </span>
                <h4>Embrace the Adventurer Within:</h4>
                <span>
                  Adrenaline junkies can conquer white-water rapids on the
                  Ganges, their excitement echoing through the canyons. Hike to
                  hidden waterfalls like Neer Garh, their cascading beauty
                  washing away daily worries. Bungee jump off Mohan Chatti or
                  try zip-lining across the valley, feeling the wind rush
                  through your hair as you experience Rishikesh's wild side.
                </span>
                <h4>Explore History and Culture:</h4>
                <span>
                  Delve into Rishikesh's rich past at the Beatles Ashram, where
                  the Fab Four found inspiration in the 1960s. Wander through
                  vibrant markets, bargaining for handcrafted souvenirs and
                  indulging in local delicacies like jalebis and samosas. Visit
                  ancient temples like Triveni Ghat, feeling the spiritual pulse
                  of this sacred city.
                </span>
                <h4>Indulge in Culinary Delights:</h4>
                <span>
                  From rooftop cafes with stunning river views to hidden gems
                  serving authentic North Indian fare, Rishikesh caters to every
                  taste bud. Don't miss the chance to try herbal teas and
                  healthy dishes at cafes along the ghats, soaking in the
                  vibrant atmosphere.
                </span>
                <h4>A Heaven for All:</h4>
                <span>
                  Whether you're a yoga enthusiast, an adventure seeker, or
                  simply looking for a peaceful retreat, Rishikesh has something
                  for you. Choose from cozy guesthouses with breathtaking views
                  to luxurious riverside resorts, all offering a comfortable
                  haven after a day of exploration.
                </span>
              </p>
              <div className="imgb">
                <img alt="Rishikesh" className="Rishikesh" src={rish}></img>
                <img alt="Rishikesh" className="Rishikesh" src={rish2}></img>
              </div>
            </div>
          </li>
          <br />
          <li>
            <div className="Mus">
              <h2>
                Mussoorie: Where Colonial Echoes Mingle with Mountain Majesty
              </h2>
              <p>
                Imagine a colonial-era hill station where history whispers from
                charming bungalows, vibrant Mall Road bustles with life, and
                breathtaking Himalayan vistas stretch as far as the eye can see.
                This is Mussoorie, the "Queen of Hills," where nostalgia meets
                adventure, creating an unforgettable experience.
                <br />
                <h4>Echoes of a Bygone Era:</h4>
                <span>
                  Step back in time as you stroll down the pedestrian-only Mall
                  Road, lined with heritage buildings housing quaint cafes,
                  bookstores, and colonial architecture. The Governor's House,
                  now a museum, whispers stories of its British past, while the
                  Tibetan market adds a touch of exotic charm.
                </span>
                <h4>Embrace the Thrill of Nature:</h4>
                <span>
                  Adventure lurks around every corner in Mussoorie. Take a ride
                  on the iconic ropeway, soaring above the valley for
                  breathtaking panoramic views. Embark on a scenic hike to
                  Camel's Back Road, known for its horse riding opportunities
                  and stunning vistas. Challenge yourself with a trek to Gun
                  Hill, the highest point in Mussoorie, accessible by ropeway or
                  a thrilling climb.
                </span>
                <h4>Unwind in Tranquil Beauty:</h4>
                <span>
                  Escape the hustle and bustle at Company Garden, a haven of
                  serenity boasting diverse flora and fauna. Rent a paddleboat
                  on the serene Municipal Lake, its reflective surface mirroring
                  the majesty of the surrounding hills. Breathe in the crisp
                  mountain air as you wander through Happy Valley, a picturesque
                  picnic spot adorned with waterfalls and lush greenery.
                </span>
                <h4>Delve into Local Delights:</h4>
                <span>
                  Mussoorie's culinary scene offers a tantalizing mix of
                  flavors. Savor steaming momos and thukpa at Tibetan eateries,
                  indulge in North Indian delicacies like kebabs and curries, or
                  grab a quick bite at a street vendor offering local favorites
                  like aloo tikki and samosas. Don't miss the chance to try
                  Garhwali cuisine, known for its use of fresh herbs and spices.
                </span>
              </p>
              <div className="imgc">
                <img alt="Mussoorie" className="Mussoorie" src={mus1}></img>
                <img alt="Mussoorie" className="Mussoorie" src={mus2}></img>
              </div>
            </div>
          </li>
          <br />
          <li>
            <div className="Jim">
              <h2>
                Jim Corbett National Park: Where Tigers Roam and Adventure
                Awakens
              </h2>
              <p>
                Imagine the thrill of spotting a majestic Bengal tiger prowling
                through dense forests, the echoing chirps of exotic birds
                filling the air, and the lush embrace of nature painting a
                verdant canvas around you. This is Jim Corbett National Park,
                India's oldest and most celebrated wildlife sanctuary, beckoning
                you to embark on an unforgettable adventure.
                <br />
                <h4>Thrilling Encounters with Wildlife:</h4>
                <span>
                  Step into a land teeming with diverse life. Embark on jeep
                  safaris, traversing dusty trails in anticipation of spotting
                  the elusive Royal Bengal tiger, leopards basking in the sun,
                  playful elephants trumpeting their presence, and countless
                  deer grazing in clearings. With over 500 species of birds
                  singing their melodies, nature's orchestra awaits you at every
                  turn.
                </span>
                <h4>Beyond the Safari:</h4>
                <span>
                  Jim Corbett isn't just about thrilling encounters. Hike
                  through the picturesque landscape, spotting hidden waterfalls
                  and soaking in the serenity of nature. Visit the Dhikala
                  Forest Lodge, a historic haven nestled within the park,
                  offering unique overnight stay experiences amidst the
                  wilderness. At night, witness the mesmerizing dance of
                  fireflies under the starlit sky, creating a magical ambiance.
                </span>
                <h4>A Glimpse into History:</h4>
                <span>
                  Delve into the legacy of Jim Corbett, the legendary
                  hunter-turned-conservationist who played a pivotal role in
                  establishing the park. Visit the Corbett Museum, showcasing
                  his life and contributions to wildlife protection. Learn about
                  the park's rich tribal heritage and immerse yourself in the
                  local culture.
                </span>
                <h4>Culinary Delights:</h4>
                <span>
                  After a day of exploring, savor delicious North Indian cuisine
                  at park-approved restaurants and resorts. Indulge in local
                  specialties like Kumaoni curries and fresh river fish, while
                  enjoying breathtaking views of the landscape.
                </span>
              </p>
              <div className="imgd">
                <img alt="Jim" className="Jimi" src={Jim1}></img>
                <img alt="Jim" className="Jimi" src={Jim2}></img>
              </div>
            </div>
          </li>
          <br />
          <li>
            <div className="Auli">
              <h2>Auli: Where Snowy Slopes Meet Adventure in the Himalayas</h2>
              <p>
                Imagine carving fresh tracks down pristine powder, snowflakes
                swirling around you as you conquer exhilarating slopes. Or
                picture yourself nestled in a cozy chalet, sipping hot chocolate
                by a crackling fireplace, gazing at snow-capped peaks under a
                starlit sky. This is Auli, India's premier skiing destination,
                where winter wonderland meets adventure playground, offering an
                unforgettable experience for all travelers.
                <br />
                <h4>Thrills on the Slopes:</h4>
                <span>
                  Embrace the adrenaline rush as you ski or snowboard down
                  Auli's well-maintained slopes, suitable for both beginners and
                  experienced skiers. Learn the ropes with qualified
                  instructors, or test your skills on steeper challenges,
                  enjoying breathtaking views of the Himalayas with every turn.
                  The Garhwal Mandal Vikas Nigam (GMVN) operates ski lifts and
                  rentals, making everything easily accessible.
                </span>
                <h4>Beyond the Ski Slopes:</h4>
                <span>
                  Auli isn't just for winter sports enthusiasts. Hike through
                  snow-laden forests, following trails carpeted in white, with
                  crisp mountain air filling your lungs. Take a breathtaking
                  ride on the Asia's longest ropeway, soaring over valleys and
                  offering panoramic vistas of the Nanda Devi and Nar Parvat
                  peaks. Or simply relax in a hammock, soaking in the
                  tranquility of the snow-covered landscape.
                </span>
                <h4>Cultural Charm and Spiritual Solace:</h4>
                <span>
                  Immerse yourself in the local culture. Visit traditional
                  villages, like Joshimath, the winter home of Lord Badrinath,
                  and experience the warmth and hospitality of the mountain
                  people. Explore ancient temples like Nanda Devi Temple,
                  perched amidst the grandeur of the Himalayas, and seek
                  spiritual solace amidst the serene atmosphere.
                </span>
                <h4>Cozy havens and Delicious Delights:</h4>
                <span>
                  After a day of adventure, retreat to cozy guesthouses or
                  luxurious resorts nestled amidst the snow. Savor steaming mugs
                  of hot chocolate or local favorites like Garhwali Thukpa and
                  Aloo Tikki, warming your soul from within. In the evenings,
                  gather around crackling fireplaces, sharing stories and
                  laughter with fellow travelers.
                </span>
              </p>
              <div className="imge">
                <img alt="auli" className="auli-img" src={auli}></img>
                <img alt="auli" className="auli-img" src={auli2}></img>
              </div>
            </div>
          </li>
        </ol>
        <span style={{color:'orange'}}>Note:-Please Navigate to Accomodation section through Navigation bar to know about the Accomodations in these beautiful places of Uttarakhand</span>
      </div>
    </>
  );
}
