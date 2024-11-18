import React from 'react';
import item1 from '../assets/banner1.jpg'
import item2 from '../assets/banner2.jpg'
import 'animate.css';

const AdventureExperience = ({data}) => {
   console.log(data);
      return (
        <section className="py-10 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500
                    to-purple-400  mb-8">Adventure Experiences</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map((adventure) => (
              <div key={adventure.id} className="card bg-white shadow-md hover:shadow-lg">
                <figure>
                  <img src={item1} alt={adventure.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl font-semibold text-gray-700">{adventure.title}</h3>
                  <ul className="mt-2 text-sm text-gray-600">
                    {adventure.eco_friendly_features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='border border-gray-400 p-4'>
                  <h4 className='animate__animated animate__headShake 
                  animate__infinite  animate__delay-2s animate__slower text-xl font-semibold
                   text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 '>{adventure.location}  {adventure.duration}</h4>
                  </div>
                  <div className="card-actions mt-2">
                    <a href={adventure.link} className="btn text-black font-semibold text-xl bg-gradient-to-r from-indigo-300 to-purple-400 ">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
};

export default AdventureExperience;