import './index.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {

	
	return (
		<div className="bg-gradient-to-b from-neutral-950 via-blue-950/20 to-purple-950 min-h-screen">
			<Navbar />

			<AboutSection />

			<ExperienceSection />

			<ProjectsSection />

			
		</div>
	)
}

export default App