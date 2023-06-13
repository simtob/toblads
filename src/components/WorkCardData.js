import HCI_report from "../assets/Interaction_design_report.jpg"
import HumanPerception_poster from "../assets/Human-perception-Poster.jpg"
import ResearchMethodology from "../assets/Research_methodologt-Final_Report_SimonToblad_EdrisHakimzada_00001.jpg"
import zoopark from "../assets/zoopark.jpg"
import moviemap from "../assets/moviemap.png"
import oldweb from "../assets/oldweb.png"

const ProjectCardData = [
    {   
        imgsrc: oldweb,
        title: "My Old WordPress Website",
        text: "My first website that I made multiple years ago for fun with WordPress (Elementor, HMTL)",
        view: "toblad.se",
        source: "toblad.se",
    },
    {   
        imgsrc: moviemap,
        title: "MovieMap",
        text: "An interactive visualization website for any one interested in the financial aspects of movies and movie making i.e. directors or producers, looking to see how much a particular movie or genre of movies cost to make, ROI of the movie, etc. (JS React, CSS, HTML)",
        view: "https://moviemap-vis.web.app/",
        source: "https://github.com/simtob/watchbook",
    },
    {   
        imgsrc: zoopark,
        title: "Zoopark in Python",
        text: "Animal park with different functionalities for the user, with error handling (Python)",
        view: "https://moviemap-vis.web.app/",
        source: "https://github.com/simtob/djurparken/blob/main/Djurparken.py",
    },
    {
        imgsrc: HCI_report,
        title: "Spotify Podcast Redesign Prototype (Mobile)",
        text: "HCI Project in Figma, where we sought out to redesign the Spotify Podcast section to improve functionality and UX based on user testing and interviews.",
        view: "https://drive.google.com/file/d/1NURWbsyGV_jCBKSxCGKqYoyt2BJqeNPf/view?usp=sharing",
        source: "https://www.figma.com/proto/bF9YU0kdUkK8znYEGrnHHf/spotify-remake-prototype?page-id=0%3A1&node-id=2-158&viewport=241%2C48%2C0.21&scaling=min-zoom&starting-point-node-id=1%3A288",
    },
    {
        imgsrc: HumanPerception_poster,
        title: "Do We, Uh, Percieve Hesitations in Speech?",
        text: "Project from the course in Human Perception, where our group explored how changes in fundamental frequency affects the perception of fillers in synthetic speech.",
        view: "https://drive.google.com/file/d/1Fnuwygzqa5fhvLgS1y1Y8chb9DEUdUXn/view?usp=sharing",
        source: "https://drive.google.com/file/d/1LONKwPKoJKQZyRG7fCVLnX6HQCqExgGb/view?usp=sharing",
    },
    {
        imgsrc: ResearchMethodology,
        title: "User Interface Analysis Between Two Online Stockbrokers",
        text: "This study looked at which of Avanza and Nordnet have the finest user interface and is the most user-friendly for investors.",
        view: "https://drive.google.com/file/d/19aExSYGSyFRKWMu1YbJSNN15VFKQ1-ht/view?usp=sharing",
        source: "https://drive.google.com/file/d/102ObqC60GpMMVoMeywhCUeD6qcuXPIjM/view?usp=sharing",
    }
]

export default ProjectCardData;