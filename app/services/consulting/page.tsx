"use client"

export default function AboutPage() {
    return (
        <div className="flex w-screen h-screen px-14 pt-10">
            <div className="w-1/3 p-4"></div>
            <div className="w-1/3 p-4">
                At DiSy, we believe in a personalized approach to consulting. Every project begins with a free,
                no-obligation consultation—something we offer to all our clients, whether we are developing your project
                or simply providing expert guidance. This initial consultation is your opportunity to ask any technical
                or non-technical questions you may have, as well as for us to gain a deep understanding of your
                business, its current state, and its future goals.
                <br/><br/>
                If we are consulting, this session helps us understand where your company is now and where you want it
                to be. From there, subsequent consultations will focus on providing strategic advice and actionable
                steps to get you there.
                <br/><br/>
                If we are developing your project, this initial consultation is crucial for defining the scope, ensuring
                we are on the same page, and discussing key elements such as budget, design, and functionality.
                Following this, our second consultation will be where we present a detailed plan for execution—including
                the tech stack, development timeline, iteration cycles, and post-launch maintenance. All subsequent
                consultations will serve as progress updates as we move toward delivering your solution.
                <br/><br/>
                For those who only need expert guidance, we offer a flexible ‘time bank’ of consultation hours, allowing
                you to access our expertise as needed. Whatever your needs, we are here to provide the knowledge,
                strategy, and technical insight to help your business thrive.
            </div>
            <div className="w-1/3 p-4">
                <p>
                    MILANO<br/>
                    Viale Caldara, 11<br/>
                    20122<br/>
                    milano@diorama.eu<br/>
                    +39 02 36745 68<br/>
                    <br/><br/>
                    PARIS<br/>
                    37 Rue Vital<br/>
                    75016<br/>
                    paris@diorama.eu<br/>
                    +33 6 78 84 84 90<br/>
                    <br/><br/>
                    ADMINISTRATION<br/>
                    accounts@diorama.eu<br/>
                    Diorama SRL<br/>
                    P. IVA - 09464930966<br/>
                    C.Sociale - 10.000 iv<br/>
                </p>
            </div>
        </div>

    );
}
//
// <div className="container mx-auto p-8">
//     {/*<motion.div*/}
//     {/*    initial={{y: -200, opacity: 0}}*/}
//     {/*    animate={{y: 0, opacity: 1}}*/}
//     {/*    transition={{duration: 0.7, ease: "easeInOut"}}*/}
//     {/*    className="left-0 w-full extra-bold-text  text-[#EAEAEC] xs:text-xl  sm:text-xl md:text-5xl lg:text-7xl w-2/3 pt-10 md:">*/}
//     {/*    <DrawCircleText/>*/}
//     {/*</motion.div>*/}
//
//
// </div>