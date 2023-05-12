import Skill from './Skill';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import node from '../public/assets/skills/node.png';
import nextjs from '../public/assets/skills/nextjs.png';
import mongo from '../public/assets/skills/mongo.png';
import github from '../public/assets/skills/github.png';
// import express from '../public/assets/skills/express.png';
import python from '../public/assets/skills/python.png';
import django from '../public/assets/skills/django.png';
import postgresql from '../public/assets/skills/postgresql.png';
import git from '../public/assets/skills/git.png';
// import heroku from '../public/assets/skills/heroku.png';
import bootstrap from '../public/assets/skills/bootstrap.png';
import tailwind from '../public/assets/skills/tailwind.png';


const Skills = () => {
    return (
        <div id='skills' className="w-full py-16">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-pink">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
                    <Skill skill='HTML' skillImg={html} />
                    <Skill skill='CSS' skillImg={css} />
                    <Skill skill='JavaScript' skillImg={javascript} />
                    <Skill skill='React' skillImg={react} />
                    <Skill skill='Next.js' skillImg={nextjs} />
                    <Skill skill='Tailwind CSS' skillImg={tailwind} />
                    <Skill skill='Node' skillImg={node} />
                    <Skill skill='MongoDB' skillImg={mongo} />
                    <Skill skill='GitHub' skillImg={github} />
                    {/* <Skill skill='Express' skillImg={express} /> */}
                    <Skill skill='Python' skillImg={python} />
                    <Skill skill='Django' skillImg={django} />
                    <Skill skill='PostgreSQL' skillImg={postgresql} />
                    <Skill skill='Git' skillImg={git} />
                    <Skill skill='Bootstrap' skillImg={bootstrap} />
                    {/* <Skill skill='Heroku' skillImg={heroku} /> */}
                </div>
            </div>
        </div>
    );
}

export default Skills;