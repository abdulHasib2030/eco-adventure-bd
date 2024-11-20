import { useContext, useEffect, useId, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import userIcon from '../assets/user.png'
import ReactStars from "react-rating-stars-component";


const Testimonials = () => {
    const {review} = useContext(AuthContext)
    review.map(data=> console.log(data.id))
    return (
        <div>
                <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="my-10 py-10 w-full overflow-hidden bg-gray-100"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <h4 className="text-center font-semibold text-xl ">Guests review</h4>
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500
               to-purple-400  mb-8">What Our Visitors Say</h1>
        <div
          className="flex md:w-[300%] lg:w-[200%]  w-[400%] gap-4 pr-4"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div className="flex flex-1 gap-4 " key={index}>
              {review.map((item, _index) => (
                <div className="flex-1" key={item.id}>
                  <div className=" h-full max-w-60 rounded-xl bg-neutral-100 p-2 text-neutral-600 dark:bg-neutral-800 p-6">
                    <div className="flex items-center gap-2 ">
                      <div className="size-6 rounded-full bg-neutral-500/40" ><img src={userIcon} alt="" /></div>
                      <p className=" font-semibold text-neutral-600 text-xs dark:text-neutral-400">
                       {
                        item.user_name
                       }
                      </p>
                    </div>
                    <p className="mt-2 text-neutral-600 text-sm dark:text-neutral-300">
                     {
                         item.review_text
                     }
                    </p>
                   <div className="flex items-center justify-between mt-2">
                   <ReactStars
                            count={5}
                            value={item.rating}
                            size={30}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p className=" bg-gray-300 rounded-full py-1 px-2">{item.rating}</p>
                   </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
        </div>
    );
};

export default Testimonials;
