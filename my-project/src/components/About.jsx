import aboutImg from "../assets/stefanus.JPG"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="borded-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div whileInView={{ opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="flex items-center justify-center">
                    <img width={400} className="rounded-2xl" src={aboutImg} alt="about" />
                </motion.div>
            </div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{ duration: 1}} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 maxw-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
