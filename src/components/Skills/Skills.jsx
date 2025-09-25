const Skills = () => {
  return (
    <div className="bg-teal-500 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center block pr-10 gap-5 pt-5 md:flex max-sm:gap-10 max-sm:left-10">
      

<div className="sm:grid md:ml-5 md:text-sm text-black md:w-full max-sm:items-center max-sm:justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src="https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png" alt="java" />
    
    <div className="p-5">
    
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-700  text-center dark:text-white">React     </h5>
        
        <p className="mb-3 text-base font-normal text-gray-700 dark:text-gray-400  md:text-left ">I use React to create dynamic web applications through a component-based architecture, allowing for reusable, maintainable code.
             I work with core concepts like JSX, state, props, and hooks (useState, useEffect, etc.), and integrate tools like React Router for navigation and context or state management libraries for scalable app logic.</p>
      
    </div>
</div>


<div className="max-w-sm m-5 md:min-h-96 md:w-full bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg w-full md:h-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbGhJJCDC-L27qSTZuLFWaSnOdwFShWdA3Q&s" alt="java" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-teal-700 dark:text-white">HTML/CSS</h5>
    
        <p className="mb-3 md:text-sm font-normal text-gray-700 dark:text-gray-400">HTML (HyperText Markup Language) is the foundation of all web content. 
                                                                             I use semantic HTML5 to create well-structured, accessible, and SEO-friendly web pages.
                                                                             My approach includes using correct tag hierarchy, form elements, 
                                                                             and metadata to ensure best practices in modern web development.</p>
         <p className="mb-3 md:text-sm font-normal text-gray-700 dark:text-gray-400"> I use modern CSS3 features to create responsive, visually engaging interfaces — 
            from custom components to full-page layouts — using techniques like Flexbox and Grid, along with animations and transitions for interactivity.</p>                                                                       
      
    </div>
</div>


<div className="max-w-sm md:w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <img className="rounded-t-lg md:h-48" src="https://www.jquery-az.com/wp-content/uploads/2023/10/JavaScript.png" alt="java" />
    
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-700 dark:text-white text-center">JavaScript</h5>
    
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 ">I use modern JavaScript (ES6+) to build interactive, dynamic web applications. 
                                                                             My experience includes working with event handling, asynchronous operations (like fetch & async/await),
                                                                            and modular, clean code using functions and objects. 
                                                                             I also use JavaScript as the foundation for libraries and frameworks like React.</p>
       
    </div>
</div>

      
    </div>
  )
}

export default Skills
