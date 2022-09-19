<div id="top"> </div>

<!---- PROJECT LOGO ----> 
<div align="center">

  <h2 align="center"> 
    eSports Duo - Server API
  </h2>
  
  <p align="center">
    The eSports duo server to access application resources, developed with Node.js <br/>
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/eSports-duo-server/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/eSports-duo-server/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
      </ul>
    </li>
    <li><a href="#usage"> Usage </a></li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project

<img src="https://user-images.githubusercontent.com/44311634/178651138-54b1b11c-0776-48d0-8ec8-436671eeab48.png" align="center" align="center" alt="Project Home Page">
The eSports Duo Server API to access all platform features, such as listing all games, creating a new ad, returning all ads per game and the discord of a specific ad. 


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Prisma -->
    <a href="https://www.prisma.io/"> 
      <img align="center" alt="Icon-Prisma" height="35" src="https://user-images.githubusercontent.com/44311634/178335052-08bb4b29-c4da-4100-ae71-8b65cf6cd581.png"> 
    </a> &nbsp;
    <!-- Icon Express --> 
    <a href="https://expressjs.com/"> 
      <img align="center" alt="Icon-Express" height="35" src="https://user-images.githubusercontent.com/44311634/178337147-61b1e696-b4ef-4f78-8151-c3fb2597050a.png"> 
    </a> &nbsp;
    <!-- Icon SQLite --> 
    <a href="https://www.sqlite.org/"> 
      <img align="center" alt="Icon-SQLite" height="38" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"> 
    </a> 
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 16+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. 


### Prerequisites 

Other than node.js installed, no prerequisites are needed to install the application.

### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/eSports-duo-server.git
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   npm install
   ```
3. Create an `.env` file with the database connection configuration 
   ```cmd
   echo "DATABASE_URL='file:../src/database/db.sqlite'" > .env 
   ``` 
4. Run the migrate 
   ```cmd
   npx prisma migrate dev
   ```
 

<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

* Starting the project 
   ```bash
   npm run dev  
   ```
   
* To view the database feedback table in an easy and intuitive way, just use Prisma Studio
  ```
  npx prisma studio 
  ```
<br/>


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/> <br/>


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com 

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
