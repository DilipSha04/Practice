import React from "react";

const Testimonial = ({userName}) => {
  return (
    <div className="bg-slate-900 text-white w-full h-[100dvh] flex justify-center item-center">
      <div class="mx-auto max-w-4xl my-auto ">
        <div class="md:flex md:items-center md:justify-center md:space-x-14">
          <div class="relative h-48 w-48 flex-shrink-0">
            <img
              class="relative h-48 w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
            />
          </div>
          <div class="mt-10 md:mt-0">
            <blockquote>
              <p class="text-xl text-slate-200">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam aliquam repellat laborum minima tempore deserunt
                explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p class="mt-7 text-lg font-semibold text-slate-300">{userName}</p>
            <p class="mt-1 text-base text-gray-400">
              Frontend Developer at DevUI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
