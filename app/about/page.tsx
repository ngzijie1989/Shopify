/* eslint-disable @next/next/no-img-element */
import styles from "@/app/lib/css/about.module.css"

function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">About Myself</h1>
      <div className="flex">
        <img src="/zijie2.jpg" alt="zijie" className={styles.aboutImage} />
        <div className="ms-5">
        <p className="text-lg mb-4">
          Hi! I am Zi Jie, an aspiring web developer whom set a goal to myself to fulfill my passion for web development in the year of 2024.
          I attended a web development bootcamp for 9 weeks in 2024, where i started learning Ruby, SQL, HTML, CSS, Javascript, Bootstrap and Ruby on Rails
          as the main framework. It included a capstone project, where a team of 5 created a full stack application for enthusiastic plant users
        </p>

        <p className="text-lg mb-4">
          After which, i set off to learn more programming languages in Python, Javascript
        </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">More about this demo E-commerce App that I created</h2>
      <p className="text-lg mb-4">
        I created this E-commerce App, Shopify Clone, mainly to learn more on the CRUD operations using nextJS framework, typescript and server side actions.
        And to be very honest, this site was created to showcase to potential employers the skills i have developed 
        Please feel free to go through the App to check out th
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg mb-2">
          <span className="font-semibold">nextJS:</span> nextJS is the tech framework that I am using to create this site. In this site, i am also using the 
          tailwind CSS, typescript as well, which nextJS has conveniently did the setup for me during the very initial boilerplate.
        </li>
        <li className="text-lg mb-2">
          <span className="font-semibold">MongoDB:</span> MongoDB Atlas. Previously i used Vercel PostgreSQL as my database, and i like to try to use other sources.
          MongoDB is another popular choice, hence i set off to try to use it! Lucky me that MongoDB provided 1 x free use for test runs, or junior developers like me!
        </li>
        <li className="text-lg mb-2">
          <span className="font-semibold">Prisma:</span> Prisma as the ORM relational mapping between MongoDB and my main application. Prisma is also good to add seed data
           and schema along with tables into my main App!
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch with me!</h2>
      <p className="text-lg mb-4">
        If you have any feedbacks, you may drop me an email on possibly improvement or 
      </p>

      <p className="text-lg">
        Thank you for visiting my humble Website in <span className="font-semibold">Shopify Clone</span>!
      </p>
    </div>
  )
}

export default page
