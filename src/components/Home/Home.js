import { useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <header>
                <p>Welcome to Amlan Alok's website</p>
                <p>Website is under development</p>
                <p>Will launch very soon</p>
            </header>
            <button onClick={() => navigate('resume')}>Resume</button>
        </div>
    );
}

export default Home;
