export const projectData = [
    {
        id:1,
        project_img: "/bonafiyet-img.png",
        github: "https://github.com/sumeyyesever/BonAfiyet",
        demo: "https://bonafiyet.netlify.app/",
        project_par: `
            I started a small project to get familiar with <b>Tailwind CSS</b> and <b>Next.js</b>. My goal was to create a simple recipe website using an API. But since I didn't want it to be a single-page website, I used another completely random API endpoint for the homepage.
            I know there are many points I need to work on, but Tailwind CSS started to wear me out after a while, so I'm leaving it as is for now. I'll come back to it later.<span class="project-date">(13.10.24)</span><br />
            For those gonna search for recipes on BonAfiyet, here are a few recipe suggestions (since TheMealDB api offers very few recipes): Kumpir, Key Lime Pie and Ratatouille. (There isn’t even a Tiramisu recipe available there)<br /><br />
            Important points that need improvement:<br />
            • Adding responsiveness<br />
            • Showing suggestions below the recipe search box as the user types<br /><br />
            The design could be much better, but I think it's cute like this anyway.👻
        `
    },
    {
        id:2,
        project_img: "/Tickit.png",
        github: "https://github.com/sumeyyesever/Tickit",
        demo: "https://tickit-five.vercel.app/",
        project_par: `
            I used <b>Next.js</b> for the frontend part of the project. It was easy for me. To be honest the only advantage Next.js currently has over React, in my opinion, is the module.css feature. Other than that if I had to choose between Next.js and React, I would choose <b>React.</b> I hope this doesn't make me a bad developer.<br/>
            For the database I decided to use <b>MongoDB</b> to review my previous knowledge and also it makes deploying the project easier. And then the authentication part... At first I tried using <b>NextAuth</b>, but I struggled so much with it that it literally gave me hell. While researching alternatives to NextAuth I came across <b>iron-session</b>. The developers of iron-session have no idea how much I love them. It truly saved my life. No joke. Authentication was the part I disliked most in any project but with iron-session I was able to handle it so easily that I couldn’t believe it. 🩷iron-session🩷<br />
            But the documentation for iron-session is written in TypeScript and I couldn't manage to convert it to JavaScript. As a result, the project ended up being a mix of <b>TypeScript</b> and <b>JavaScript.</b> Could I have converted the whole project to TypeScript? Unfortunately, no. After struggling enough with NextAuth if I had also taken on TypeScript I probably would have needed to take a long break from the project.<br /><br />
            Important points that need improvement:<br />
            • Font styles. Using a slightly more charming ones, especially for the logo would be nice.<br />
            • After adding a to-do to the list, it would be helpful to clear the input field.<br />
            • The image in the home page gives shabby vibe(not in a good way) because of its' width. I might be changing it in the future.<br /><br />
            Overall I'm really happy with this project.✔️ 
        `
    },
    {
        id:3,
        project_img: "/myfavs.png",
        github: "https://github.com/sumeyyesever/myfavs-backend",
        demo: "",
        project_par: `
            A simple project using <b>React</b> and <b>PostgreSQL.</b> Among the three projects this one was the easiest and took the least amount of my time. It has two pages: one is a 'write' page for adding posts, and the other is the homepage where posts are retrieved from the database and displayed. The only issue I encountered in this project was during the deployment stage. Although not in this project, I struggled a lot with deployment in another project where I also used PostgreSQL (the backend version of my personal website). When it came to deploying that project it was quite challenging.<br />
            There were two hosting platforms where I could deploy the database I created with PostgreSQL: Railway and Render. I had tried Render before and since it was incredibly slow I gave up on it, thinking it would be even worse if a database was involved. I tried deploying with Railway but migrating the database there and handling authentication was very difficult and time-consuming. In the end I couldn’t do it.<br />
            Because of those challenges in that project I decided not to bother with deploying this one. Of course, I could have easily deployed it using MongoDB and Vercel but the main purpose of this project was for me to work with PostgreSQL, so for now, it remains undeployed. However deployment is definitely on my mind. I really like the idea of entering things I enjoy to this website and keeping them in there like a notebook.<br /><br />
            Important points that need improvement:<br />
            • Deployment. <br />
            • Those edit and delete buttons poking me in the eye a little bit.<br /><br />
            I am satisfied with this project. And it gave me the idea that I might actually like blogging.🤔
        `
    }
]