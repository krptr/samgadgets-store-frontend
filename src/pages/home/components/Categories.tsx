import laptop from "../../../assets/category/laptop.png";
import phone from "../../../assets/category/phones.png";
import audio from "../../../assets/category/audio.png";
import watch from "../../../assets/category/watch.png";

function Categories() {
  return (
    <section className="mx-8 md:mx-12 lg:mx-24 xl:mx-32 py-8 md:py-16 lg:py-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-tech tracking-wide">
          Explore our Entire Collection
        </h1>

        <p className="text-lg md:text-xl mt-3">
          From everyday essentials to premium technology, find the right devices
          for the way you live and work.
        </p>
      </div>

      {/* <span className="block mt-3 uppercase text-[11px] tracking-wide font-bold text-primary">
        Find your next device ↓
      </span> */}

      <div className="grid grid-cols-1">
        {/* Category 1 container */}
        <div className="grid lg:grid-cols-2">
          <div>
            <h1>Performance without limits</h1>
            <p>
              From everyday productivity to demanding workloads, explore
              brand-new and certified-refurbished laptops built to keep you
              moving.
            </p>
            <div>
              <h3>Feature Highlights:</h3>
              <ul className="list-disc pl-5">
                <li>Latest-generation processors</li>
                <li>Fast SSD storage</li>
                <li>High-resolution displays</li>
                <li>Configurations with different RAM capacities</li>
              </ul>
            </div>
            <button></button>
          </div>
          <div>
            <img src={laptop} />
          </div>
        </div>

        {/* Category 2 container */}
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block">
            <img src={phone} />
          </div>
          <div>
            <h1>Your next phone starts here</h1>
            <p>
              Discover the latest smartphones from trusted brands, with options
              ranging from everyday essentials to premium flagship performance.
            </p>
            <div>
              <h3>Feature Highlights:</h3>
              <ul className="list-disc pl-5">
                <li>Advanced camera systems</li>
                <li>High-refresh-rate displays</li>
                <li>Fast charging and long-lasting batteries</li>
                <li>Powerful processors</li>
              </ul>
            </div>
            <button></button>
          </div>

          {/* for mobile */}
          <div className="block lg:hidden">
            <img src={phone} />
          </div>
        </div>

        {/* Category 3 container */}
        <div className="grid lg:grid-cols-2">
          <div>
            <h1>Experience Better Sound</h1>
            <p>
              Explore headphones and earbuds with rich sound, crystal-clear
              calls and noise cancellation for a more immersive listening
              experience.
            </p>
            <div>
              <h3>Feature Highlights:</h3>
              <ul className="list-disc pl-5">
                <li>Immersive sound quality</li>
                <li>Crystal-clear calls</li>
                <li>Active noise cancellation</li>
              </ul>
            </div>
            <button></button>
          </div>
          <div>
            <img src={audio} />
          </div>
        </div>

        {/* Category 4 container */}
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block">
            <img src={watch} />
          </div>
          <div>
            <h1>Stay connected to your day</h1>
            <p>
              Discover smartwatches and fitness trackers that help you monitor
              activity, track workouts and stay on top of everyday
              notifications.
            </p>
            <div>
              <h3>Feature Highlights:</h3>
              <ul className="list-disc pl-5">
                <li>Activity and fitness tracking</li>
                <li>Health monitoring sensors</li>
                <li>Smart notifications</li>
              </ul>
            </div>
            <button></button>
          </div>

          {/* for mobile */}
          <div className="block lg:hidden">
            <img src={watch} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Categories };
