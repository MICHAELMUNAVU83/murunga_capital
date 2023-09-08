import React from "react";

const Founder = () => {
  return (
    <div className="py-8 w-[90%] mx-auto ">
      <div className="flex justify-between w-[100%] border-t-2 border-black">
        <div className="w-[50%]">
          <img
            src="/founder.svg"
            className="h-[750px] w-[100%] object-cover "
          />
        </div>
        <div className="w-[50%] flex  flex-col gap-4 px-8">
          <div className="flex w-[100%] justify-end">
            <p>OUR FOUNDER</p>
          </div>

          <p>
            Our Principal Benedict Murunga, served as a Peace Corps Response
            Volunteer in Rwanda for 3 years. He holds an MBA in Corporate
            Finance from the University of Notre Dame South Bend, Indiana in the
            USA and a BA in Economics and Linguistics from the University of
            Nairobi in Nairobi, Kenya. He speaks 5 languages and has over 25
            years’ experience in strategy, finance, and marketing across Europe,
            Middle East, Asia, US, and Africa. He recently closed a $10 million
            renewable project in Rwanda. He has served on several boards
            including the board of the Interfaith Children’s Movement in
            Atlanta, an advocacy organization on behalf of children, the board
            of AIESEC Egerton in Kenya, an organization focused on developing
            leadership and management talent of the youth, and the board of the
            American Chamber of Commerce In Rwanda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
