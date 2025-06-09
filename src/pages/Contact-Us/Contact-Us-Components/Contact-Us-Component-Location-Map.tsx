import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 py-6">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-6">
        <div className="rounded-2xl shadow-2xl overflow-hidden w-full">
          <iframe
            title="Naipunayam Foundation Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.051759569391!2d77.09545741137306!3d30.90911185197361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f87f725df66b1%3A0x714226300168abe5!2sNaipunayam%20Foundation!5e1!3m2!1sen!2sus!4v1746945573931!5m2!1sen!2sus"
            width="100%"
            height="420"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
