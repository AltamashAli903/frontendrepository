const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4">
      <div className="w-full md:w-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaH_37OjVlzxQbV3LiGvWvJhSvT5XN5y-5f6AoYnQoVy68ME81T0gks2BFZvA_qnNXlnI&usqp=CAU"
          alt="Java Full Stack"
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className="w-full md:w-1/2 text-justify text-2xl p-10">
        <p className="text-gray-800 text-base gap-10 leading-relaxed text-black bg-teal-200 rounded-xl text-2xl">
          Versatile and detail-oriented Full Stack Developer with experience in
          developing and deploying scalable web applications. Proficient in both
          front-end and back-end technologies, including HTML, CSS, JavaScript (React),
          Node.js, Java, and databases like MySQL.
        </p>
        <p className="text-gray-800 text-base gap-10 leading-relaxed text-black mt-4 bg-teal-200 rounded-xl text-2xl">
          Strong understanding of RESTful APIs, version control (Git), CI/CD pipelines,
          and cloud platforms (AWS, Azure, or GCP). Adept at collaborating with
          cross-functional teams to deliver high-quality software solutions with a focus
          on performance, security, and user experience. Passionate about continuous
          learning and staying current with emerging technologies.
        </p>
      </div>
    </div>
  );
};

export default About;