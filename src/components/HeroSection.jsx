import { useNavigate } from 'react-router-dom'

function HeroSection(props) {
const navigate = useNavigate()

return (
    <div className="hero">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <p>{props.intro}</p>

        <button onClick={() => navigate('/projects')}>
        View Projects
        </button>
    </div>
)
}

export default HeroSection