import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div >
            <header>
                <h1 className='center-pos'>Welcome to Amlan Alok's website</h1>
                <div className='row'>
                    <div className="col-sm-8 justify-txt">

                        <h2>Introduction</h2>
                        <h4>I am currently an international graduate student majoring in Computer Science at University of Texas, Arlington. I am in my final semester and will be graduating on 15th May, 2023.</h4>
                        <h4>I wish to work in the American software industry after I graduate in May 2023 and hence I am looking for job opportunities in USA.</h4>

                        <h2>Industry Experience</h2>
                        <h4>Prior to coming to USA, I was working as a software professional in Bangalore, India with Cognizant Technology Solutions for 3 years. My client was the Australian Telecom company Telstra.</h4>
                        <h4>During these three years, Cognizant and Telstra gave me the opportunity to work on several different technologies, with great colleagues (teammates and seniors), a vibrant work environment with people from India, Ukraine, Australia, Sri Lanka, Malaysia, Indonesia, Phillippines, Singapore, USA and finally, access to an Udemy business account to learn whatever I want.</h4>
                        <h4>This allowed me to explore and learn Backend, Frontend, Databases, Serverless, ETL, CI/CD, AWS, Monolith, Microservice and Serverless architecture, Production deployments, Production support during the initial years of my career.</h4>
                        <h4>My experience taught me about taking accountability, managing high pressure, trying to exceed expectations, mentoring juniors, presenting work to clients, managing time critical production issues, and to be strong in times of crisis.</h4>
                        <h4>But all good things come to an end and my client’s project scope was going to end in December of 2020. Hence, instead of joining a new project I decided to pursue higher education to learn about emerging technologies, broaden my scope of thinking, hone my skills and improve my future prospects.</h4>

                    </div>
                    <div className="col-sm-4 justify-txt">
                        <h2>For Recruiters</h2>
                        <h4>If you are a recruiter or someone who knows of a possible job opportunity, and you believe that my experience and skill set: </h4>

                        <ul>
                            <li><h4>Will be a great fit for a particular role/position, or</h4></li>
                            <li><h4>Can help your/some company to achieve their mission or goals</h4></li>
                        </ul>

                        <h4>Kindly reach out to me.</h4>

                        <h4>You can click the button below to view my resume on my website.</h4>
                        <button className='btn btn-danger' onClick={() => navigate('resume')}>Resume</button>

                        <h4>You can download/view the 1 page PDF version using the buttons below.</h4>

                        <a href='Amlan_Alok_Resume.pdf' download='Amlan_Alok_Resume.pdf'>
                            <button className='btn btn-primary'>Download Resume</button>
                        </a>
                            &emsp;
                            <a href='Amlan_Alok_Resume.pdf' target='_blank' rel="noreferrer">
                            <button className='btn btn-success'>View Resume</button>
                        </a>

                        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                        <h4>You can reach out to me via the below mediums.</h4>

                        <a href='https://www.linkedin.com/in/amlanalok'><img src="icons8-linkedin-48.png" alt='Linkedin' /></a>

                        <a href='mailto:amlanalok.work@gmail.com'><img src="icons8-mail-48.png" alt='Email' /></a>

                        <a href="https://wa.me/4707218870" target="_blank" rel="noreferrer"><img src="icons8-whatsapp-48.png" alt='Whatsapp' /></a>
                    </div>


                </div>
            </header>

        </div>
    );
}

export default Home;
