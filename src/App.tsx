import './index.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection';
import EducationTimeline from './components/EducationTimeline';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';


function App() {

	
	return (
		<div className="bg-gradient-to-b from-neutral-950 via-blue-950/20 to-purple-950/20 min-h-screen">
			<Navbar />

			<AboutSection />

			<ExperienceSection />

			<TechnologiesSection />

			<ProjectsSection />

			<EducationTimeline />

			<ContactSection />

			<FooterSection />

		</div>
	)
}

export default App