/* eslint-disable @next/next/no-img-element */
import styles from "@/app/lib/css/about.module.css"
import Link from "next/link"

function page() {
  return (
    <div className={`max-w-5xl mx-auto px-4 py-8 ${styles.aboutContainer}`}>
      <div>
      <h1 className="text-2xl font-bold mb-4">About Myself</h1>
        <img src="/zijie2.jpg" alt="zijie" className={styles.aboutImage} />
          <div>
            <p className="text-lg mb-4">
              Hi! I am Zi Jie, an aspiring web developer. My journey began in 2024 when I set out to fulfill a goal I set for myself to nurture my passion for web development.
              I attended a web development bootcamp for 9 weeks in 2024, where I started learning Ruby, SQL, HTML, CSS, Javascript, Bootstrap and Ruby on Rails
              as the main framework. It included a capstone project, where I and a team of 4 others created a full stack application for enthusiastic plant users to
              be able to identify plant species or illnesses through a snap of the camera, and an active marketplace where the community can actively trade plants through the app!
              It was immensely fulfilling to see the application we made take shape!
            </p>

            <p className="text-lg mb-4">
              After the course, I set off to learn more programming languages in Python, Javascript, and frameworks like nextJS and React.
              I applied my learning through making demo websites such as this website (Shopify Clone) and a Movie Hunt Website!
            </p>

            <p className="text-lg mb-4">
              My short 5 month journey has been eye-opening and led me to appreciate the intricacies and technicalities in web development. I will continue to grow and learn more 
              about web development and hope to be given opportunities to hone my skills even further.
            </p>
          </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">More about this demo E-commerce App that I created</h2>
      <p className="text-lg mb-4">
        I created this E-commerce App, Shopify Clone, mainly to learn more on the <span className="font-bold">CRUD operations using nextJS framework, Typescript and utilizing nextJS server side actions.</span>
      </p>

      <p className="text-lg mb-4">
        Users can do the following tasks:
      </p>

      <li className="text-lg mb-2">
          Browse thrugh the selection of products through search or sort.
        </li>

        <li className="text-lg mb-2">
          Add/delete/update items in the cart
        </li>

        <li className="text-lg mb-2">
          Submit orders in the cart
        </li>

        <li className="text-lg mb-2">
          View their purchased orders in a page for a quick overview
        </li>

      <br></br>
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
          <span className="font-semibold">nextJS:</span> nextJS is an excellent framework that integrates seamlessly with Tailwind CSS and TypeScript, providing a streamlined and easy setup from the initial boilerplate.
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
        If you have any feedback, you may drop me an email @ ng_zi_jie@hotmail.com
      </p>

      <p className="text-lg mb-4">
        Visit my other website and check out my other projects!
      </p>
        <ul className="list-disc list-inside mb-4">
        {/* <li className="text-lg mb-2">
        <Link href="https://airbnb-zi-7ea9278fda78.herokuapp.com/" passHref legacyBehavior><a target="_blank"><span className={styles.linkText}>Airbnb Clone</span></a></Link>
        </li> */}

        <li className="text-lg mb-2">
        <Link href=" https://fullstack-next-js-mu.vercel.app/" passHref legacyBehavior><a target="_blank"><span className={styles.linkText}>Movie Hunt!</span></a></Link>
        <br></br><span className={styles.description}>Movie Hunt is a website that uses the TMDB API to search for movies. nextJS was also used, but for the DB, Vercel was used and it was written in plain Javascript. </span>
        </li>
      </ul>

      <p className="text-lg mb-4">
        To know more about me, please visit my socia media accounts!
      </p>

      <div className="flex">
        <div className="me-3">
          <Link href="https://www.facebook.com/zi.jie.581" passHref legacyBehavior><a target="_blank"><img src="/facebook.svg" alt='facebook' className={styles.mediaLogo}></img></a></Link>
        </div>

        <div className="me-3">
          <Link href="https://www.linkedin.com/in/ng-zi-jie-3065b79a/" passHref legacyBehavior><a target="_blank"><img src="/linkedin.svg" alt='linkedin' className={styles.mediaLogo}></img></a></Link>
        </div>

        <div className="me-3">
          <Link href="https://github.com/ngzijie1989" passHref legacyBehavior><a target="_blank"><img src="/github.svg" alt='facebook' className={styles.mediaLogo}></img></a></Link>
        </div>
      </div>

      <p className="text-lg mt-4">
        Thank you for visiting my humble Website in <span className="font-semibold">Shopify Clone</span>!
      </p>
    </div>
  )
}

export default page
