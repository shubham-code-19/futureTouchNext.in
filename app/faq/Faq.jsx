import React, {useState, useEffect} from "react";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.webp";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.webp";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.webp";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.webp";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.webp";
import { Link } from "react-router-dom";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Faq = () => {
  useEffect(() => {
    document.title = "FAQ  - Future IT Touch Private Limited";
    window.scrollTo(0, 0);
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Future IT Touch Private Limited is a leading IT solutions provider.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "IT, Technology, Solutions, Future IT Touch";
    document.head.appendChild(metaKeywords);

    // Cleanup function to remove the meta tags when the component unmounts
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);
    const faqs = [
        {
            question: "What benefits can you guarantee",
            answer: "All projects we take up carry the following guarantees:",
            li: "Confidentiality guarantee: All client details will be kept confidential",
            liTwo: "Price guarantee: Minimum 50% cost-saving over on-site development",
            liThree: "Results guarantee: Progress-linked payments weighted toward the end.",
        },
        {
            question: "We are worried about quality how do you assure solid projects",
            answer: "Our developers are dedicated to producing quality code. We have formal processes to keep quality under tight control, including periodic code reviews and design walk-through. We concentrate on being first-time right, and believe the creation-step itself should be strong.",
            li: "Every project goes through the hands of suitable QA/Testing professionals, under stringent test-plans including black-box testing, white-box testing, test regression, usage analysis etc.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "How do you assure confidentiality",
            answer: "All projects we take up carry the following guarantees:",
            li: "We sign NDA and Confidentiality Agreements as required by you. All our employees are full-time employees, and are bound by the company’s Confidentiality and Non-Disclosure clauses.",
            liTwo: "Additionally, for sensitive projects, we create isolated cells disconnected from any public network.",
            liThree: "At a practical level, all CD-Writers need authorization for usage. Internet uploads larger than a threshold also need authorization.",
      
        },
        {
            question: "Why should you trust solution Analysts?",
            answer: "We believe trust and confidence are the foundation for any successful relationship, and develop only after association over time. The following facts may help demonstrate our commitment to our business:",
            li: "We have completed projects for 100+ US/European clients..",
            liTwo: "We have been 12+ years in business, dedicated to the off-shore execution model",
            liThree: "Our list of references/ testimonials.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Can you guarantee time -bound results",
            answer: "Yes; in some cases we bear project risks even before the first payment.",
        },
        {
            question: "Do you offer any discount?",
            answer: "Our pricing is based on a long term relationship aimed at giving maximum benefits to our customers.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
    ];
    const faqsecond = [
        {
            question: "How do we start a near shore / offshore software development project?",
            answer: "Receive client’s requirement",
            li: "Research & Requirement Analysis",
            liTwo: "Prototype Development",
            liThree: "Code Generation",
        },
        {
            question: "Can I contact the appropriate parties working on our project? If so can I communicate via phone?",
            answer: "Sure. We would recommend that you interact primarily with the team leader in order to minimize miscommunications with your team. We are comfortable with communication via phone, email or Skype.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Do you have your own development centre, or do you work on subcontract?",
            answer: "We have our own development centre in Ahmedabad, India and we do not sub-contract.",
           
      
        },
        {
            question: "Would you replace my developer if I am not satisfied with the performance?",
            answer: "Yes. We will certainly replace your developer if we see that there really is a shortcoming on the developer’s end.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Do you provide technical support and maintenance?",
            answer: "Yes. We provide technical support and application maintenance services on request.",
        },
        {
            question: "Are my business secrets and information safe with your company?",
            answer: "All information is kept confidential. Solution Analysts will NOT use this information other than for direct communication between you and the company.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "If I hire a developer, does that mean I have that person dedicated only for me?",
            answer: "Yes. The developer you hire, like all other regular employees, will work full-time (8 hours a day, 5 days a week) dedicating it only to you. ",
        },
        {
            question: "Will I own all of the source code produced by my Offshore Team?",
            answer: "Yes, you will. ALL work projects created by your Offshore Team are considered “work made for hire,” and the intellectual property rights embodied in it are your sole and exclusive property.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Will my hired developers speak english?",
            answer: "Yes, all our developers are speaking English fluently.",
        },
    ];
    const faqThird = [
        {
            question: "What contracts and agreements do you sign? ",
            answer: "We sign NDA before initial discussions, and final contracts are drawn out in details. We are normally bound by the legal framework of our client’s country, and are a registered organization in India.",
            
        },
        {
            question: "We like the idea, but are unsure. Can we do a Pilot Project? ",
            answer: "Solution Analysts welcomes you to try our services. You may choose to have us do a Pilot Project. We have always succeeded in continuing the relationship after demonstration of ability in a pilot project.",
            li: "Our preferred Pilot Project is either the first sub-system of a larger project, or an independent project that completes within itself. Pilot Projects are typically within  2-4 weeks’ duration.",
            liTwo: "We invest the same time and energy in Pilot Projects as real projects. You would find the pilot of sufficient quality to continue on the same code. In this sense, Pilots are very different from prototypes. ",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Can you come on-site? ",
            answer: "Yes we do, whenever required. This may be especially useful in initial requirements gathering, final implementation or other pain points. In such cases, our consultants will work on-site at pre-decided rates."
      
        },
        {
            question: "What is expected from us during the course of the development?",
            answer: "It depends on the situation. We will ask you to provide some information if necessary.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "How do we keep ourselves informed about progress?",
            answer: "We will send you regular project status reports. We use a combination of pre-determined update schedules (normally email) and ad-hoc meetings (usually tele-conferences, or live chat)."
      
        },
        {
            question: "Can I define and enforce our coding standards on your developers?",
            answer: "Yes. Our developers can follow your coding standards in your favor.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
        {
            question: "Can you provide references of your clients?",
            answer: "Yes, we can provide you with our client references. We have built solid relationships with our clients by helping them meet their business objectives and providing servicesand support whenever required. Our clients suggest our name to the other companies for cost effective, high quality and on time web and software development. You can refer to client speak for Testimonial of our customers. ",
     
        },
        {
            question: "Will I be able to access code during the development cycle? If so what version control method would you use to share the code?",
            answer: "You can use Subversion (SVN) or Concurrent Versions System (CVS) to access code during the development cycle.",
            bgColor: "#f9efff", // Adding bgColor property for index 2
            bgColorTwo: "#c7ecff" // Adding bgColor property for index 2
        },
    
    ];
    
    
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
      const [activeIndexSecond, setActiveIndexSecond] = useState(null);
    
      const toggleAnswerSecond = (index) => {
        setActiveIndexSecond(activeIndexSecond === index ? null : index);
      };
      const [activeIndexThird, setActiveIndexThird] = useState(null);
    
      const toggleAnswerThird = (index) => {
        setActiveIndexThird(activeIndexThird === index ? null : index);
      };
  return (
    <>
        <div className="breadcrumb-wrapper relative overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="">
          <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 left-10 sm:left-10 md:left-28 lg:left-40">
            <div className="">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">FAQs</h1>
            </div>
            <div className="text-white font-bold ml-2 mt-2 max-sm:ml-1 sm:mt-2 md:mt-4 lg:mt-6 text-base">
              <span className="mr-1">
                <Link to="https://webency.themejunction.net">Home</Link>
              </span>
              <span className="mr-1"> &gt;</span>
              <span className="">FAQ Page</span>
            </div>
          </div>
        </div>

        <div className="relative px-20">
          <div className="breadcrumb-shape-3 opacity-30 top-20 absolute">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-2 shake-y absolute top-10 opacity-40 left-20">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-5 pulse absolute opacity-40 right-1/4">
            <img src={breadcrumb5} alt="" />
          </div>
          <div className="breadcrumb-shape-4 shake-y absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-1 pulse absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-6 pulse absolute opacity-40 top-52 right-40">
            <img src={breadcrumb6} alt="" />
          </div>
          <div className="breadcrumb-shape-7 shake-y absolute opacity-40 top-0 right-20">
            <img src={breadcrumb7} alt="" />
          </div>
          <div className="breadcrumb-shape-8 pulse absolute opacity-40 top-0 right-20">
            <img src={breadcrumb1} alt="" />
          </div>
        </div>
      </div>



      <div className="max-w-full mx-auto px-32 max-sm:px-5 py-14">
      <h2 className="text-3xl font-bold text-center text-[#050748] uppercase">GENERAL FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
        {faqs.map((faq, index) => (
       
          <div key={index} className={`border bg-gradient-to-t from-[${faq.bgColor}] to-[${faq.bgColorTwo}] border-[#d4f0ff] rounded-lg px-4 py-3`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl font-bold text-[#00baff]">
                {activeIndex === index ? (<FaMinusCircle />) : (<FaPlusCircle />)}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-3">{faq.answer} <br /> {faq.li} <br /> {faq.liTwo}  <br /> {faq.liThree} </p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className="max-w-full mx-auto px-32 max-sm:px-5 py-14">
      <h2 className="text-3xl font-bold text-center text-[#050748] uppercase">HIRE DEVELOPMENT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
        {faqsecond.map((faq, index) => (
       
          <div key={index} className={`border bg-gradient-to-t from-[${faq.bgColor}] to-[${faq.bgColorTwo}] border-[#d4f0ff] rounded-lg px-4 py-3`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswerSecond(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl font-bold text-[#00baff]">
                {activeIndexSecond === index ? (<FaMinusCircle />) : (<FaPlusCircle />)}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                activeIndexSecond === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-3">{faq.answer} <br /> {faq.li} <br /> {faq.liTwo}  <br /> {faq.liThree} </p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className="max-w-full mx-auto px-32 max-sm:px-5 py-14">
      <h2 className="text-3xl font-bold text-center text-[#050748] uppercase">PROJECT DEVELOPMENT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
        {faqThird.map((faq, index) => (
       
          <div key={index} className={`border bg-gradient-to-t from-[${faq.bgColor}] to-[${faq.bgColorTwo}] border-[#d4f0ff] rounded-lg px-4 py-3`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswerThird(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl font-bold text-[#00baff]">
                {activeIndexThird === index ? (<FaMinusCircle />) : (<FaPlusCircle />)}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                activeIndexThird === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-3">{faq.answer} <br /> {faq.li} <br /> {faq.liTwo}  <br /> {faq.liThree} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
             
    </>
  )
}

export default Faq
