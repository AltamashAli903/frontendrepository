const Education = () => {
  return (
    <div className="bg-teal-800 py-12">
      <div className="bg-teal-200 w-full max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-lg">

        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 text-center">
          Education
        </h2>

        <div className="space-y-6 text-gray-800 text-base md:text-lg leading-8 tracking-wide">
          
          {/* B.Voc */}
          <div>
            <h3 className="font-semibold text-teal-900 text-center">🏫 Bachelor of Vocation (B.Voc)</h3>
            <h3 className="font-semibold text-teal-900 text-center">(Software Development)</h3>
            <p className="text-center">
              Kamla Nehru Mahavidyalaya, Nagpur<br />
              Batch (2023 – 2026)<br />
              Currently in 5th Semester
            </p>
          </div>

          {/* 12th Grade */}
          <div>
            <h3 className="font-semibold text-teal-900 text-center">🏫 Higher Secondary Education (12th Grade)</h3>
            <p className="text-center">
              Mathuradas Mohota College of Science, Nagpur<br />
              Batch (2021 – 2023)
            </p>
          </div>

          {/* 10th Grade */}
          <div>
            <h3 className="font-semibold text-teal-900 text-center">🏫 Secondary School Education (10th Grade)</h3>
            <p className="text-center">
              Janki Gyan Ganga Convent, Nagpur<br />
              Completed in 2021
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
