const About = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 p-6 md:p-12 items-center justify-center max-w-6xl mx-auto bg-teal-700">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48"
          alt="Frontend Developer"
          className="w-full max-w-md md:max-w-full rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gradient-to-br from-teal-50 to-white p-8 md:p-10 rounded-2xl shadow-lg border border-teal-100 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 text-center mb-4">
            About Me
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-8 tracking-wide text-justify">
            I'm a <span className="font-semibold text-teal-700">frontend developer</span> with a strong foundation in programming using 
            <span className="font-semibold text-teal-700"> C</span> and 
            <span className="font-semibold text-teal-700"> Java</span>, and a passion for building responsive, user-friendly web interfaces with 
            <span className="font-semibold text-teal-700"> React</span>.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-8 tracking-wide text-justify">
            I specialize in creating clean, maintainable code and interactive UI experiences. My background in low-level programming gives me a deeper understanding of performance and problem-solving, while my React work reflects modern web development practices. I'm always eager to learn, improve, and contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
