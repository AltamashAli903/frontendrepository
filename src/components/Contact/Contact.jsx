const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <form
        className="bg-white rounded-3xl shadow-xl max-w-md w-full p-10"
        onSubmit={(e) => {
          e.preventDefault();
          // Add login logic here
          alert("Logging in...");
        }}
      >
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-md">
          Welcome 
        </h2>

        <div className="mb-8">
          <label
            className="block mb-2 text-center text-lg font-semibold text-blue-700"
          >
            Contact Number
          </label>
          <input
            type="text"
           value={9834588923}
            required
            disabled
            className="text-black text-center text-xl w-full px-5 py-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-center text-lg font-semibold text-blue-700"
          >
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={"sayyadaltamash26@gmail.com"}
            disabled
            className="text-black text-center text-xl w-full px-5 py-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>


        <div className="mb-10">
          <label
            
            className="block text-center mb-2 text-lg font-semibold text-blue-700"
          >
            Address
          </label>
          <input
            type="text"
           value={"Adarsh Nagar,Nagpur,Maharashtra."}
            required
            disabled
            className="text-black text-center text-xl w-full px-5 py-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        
      </form>
    </div>
  );
};

export default Contact;
