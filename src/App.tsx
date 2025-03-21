import './index.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {

	
	return (
		<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 min-h-screen">
			<Navbar />

			<AboutSection />

			<ExperienceSection />

			<ProjectsSection />

			
		</div>
	)
}

export default App