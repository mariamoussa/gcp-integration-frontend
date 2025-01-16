import React, { useState, useEffect } from "react";
import OnboardingPopup from "../components/Popup/OnBoardingPopup";
import ProjectSelectionPopup from "../components/Popup/ProjectSelectionPopup";

const MainPage = ({ selectedOption }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {

      fetch("http://localhost:8000/api/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          setAccessToken(data.access_token); 
          fetchProjects(data.access_token); 
        })
        .catch((error) => console.error("Error fetching token:", error));
    }
  }, []);

  const fetchProjects = (token) => {
    console.log("Fetching GCP Projects...");
    fetch("https://cloudresourcemanager.googleapis.com/v1/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Projects:", data.projects); 
        setProjects(data.projects || []); 
        setShowPopup(true); 
      })
      .catch((error) => console.error("Error fetching projects:", error));
  };

  const handlePopupCancel = () => setShowPopup(false);
  const handlePopupConfirm = (project) => {
    setSelectedProject(project);
    setShowPopup(false);
    console.log("Selected Project:", project); 
  };

  return (
    <div className="p-6">
      {selectedOption === "Starter guide" && <OnboardingPopup />}

      {showPopup && (
        <ProjectSelectionPopup
          projects={projects}
          onCancel={handlePopupCancel}
          onConfirm={handlePopupConfirm}
        />
      )}

      {selectedProject && (
        <div className="mt-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-lg font-medium">Selected Project</h3>
          <p>Project Name: {selectedProject.name}</p>
          <p>Project ID: {selectedProject.projectId}</p>
        </div>
      )}
    </div>
  );
};

export default MainPage;
