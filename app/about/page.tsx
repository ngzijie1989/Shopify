/* eslint-disable @next/next/no-img-element */
import styles from "@/app/lib/css/about.module.css"
import Link from "next/link"

function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div>
      <h1 className="text-2xl font-bold mb-4">About Myself</h1>
        <img src="/zijie2.jpg" alt="zijie" className={styles.aboutImage} />
          <div>
            <p className="text-lg mb-4">
              Hi! I am Zi Jie, an aspiring web developer whom set a goal to myself to fulfill my passion for web development in the year of 2024.
              I attended a web development bootcamp for 9 weeks in 2024, where i started learning Ruby, SQL, HTML, CSS, Javascript, Bootstrap and Ruby on Rails
              as the main framework. It included a capstone project, where a team of 5 created a full stack application for enthusiastic plant users where users 
              can identify plant species or illnesses through a snap of the camera, and an active marketplace where the community can actively trade plants through the app!
              It was immensely fulfilling to see the application we made take shape!
            </p>

            <p className="text-lg mb-4">
              After the course, i set off to learn more programming languages in Python, Javascript, and frameworks like nextJS and React.
              I applied my learning through making demo websites such as this website (Shopify) and a Movie Hunt Website!
            </p>

            <p className="text-lg mb-4">
              Though my journey has only been 5 months, but it was immensely fulfilling and i hope that i can continue to grow and learn more 
              about the web development world!
            </p>
          </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">More about this demo E-commerce App that I created</h2>
      <p className="text-lg mb-4">
        I created this E-commerce App, Shopify Clone, mainly to learn more on the <span className="font-bold">CRUD operations using nextJS framework, Typescript and utilize nextJS server side actions.</span>
      </p>

      <p className="text-lg mb-4">
        To be very honest, this site was created to showcase to potential employers the skills i have developed throughout my journey.
        Please feel free to go through the App and let me know what you think! 
      </p>

      <p className="text-lg mb-4">
        You may use this dummy account to log in to explore its functions
      </p>

      <ul className="font-bold">
        <li>
          Email: usertest1@email.com
        </li>

        <li>
        Password: password1
        </li>
      </ul>

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

        <li className="text-lg mb-2">
          <span className="font-semibold">Typescript</span> Learning to use Typescript in this demo website. It helps to identify potential errors early on and save a lot of time in future as we should have already handled those 
          exceptions that we may have missed out handling!
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch with me!</h2>
      <p className="text-lg mb-4">
        If you have any feedbacks, you may drop me an email @ ng_zi_jie@hotmail.com .
      </p>

      <p className="text-lg mb-4">
        To know more about me, please visit my socia media accounts!
      </p>

      <div className="flex">
        <div className="me-3">
          <Link href="https://www.facebook.com/zi.jie.581" passHref legacyBehavior><a target="_blank"><img src="/facebook.svg" alt='facebook' className={styles.mediaLogo}></img></a></Link>
        </div>

        <div className="me-3">
          <Link href="https://www.linkedin.com/in/ng-zi-jie-3065b79a/"><img src="/linkedin.svg" alt='linkedin' className={styles.mediaLogo}></img></Link>
        </div>

        <div className="me-3">
          <Link href="https://github.com/ngzijie1989"><img src="/github.svg" alt='facebook' className={styles.mediaLogo}></img></Link>
        </div>
      </div>

      <p className="text-lg mt-4">
        Thank you for visiting my humble Website in <span className="font-semibold">Shopify Clone</span>!
      </p>
    </div>
  )
}

export default page
