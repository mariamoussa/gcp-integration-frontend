import React, { useState } from "react";

const ProjectSelectionPopup = ({ projects, onCancel, onConfirm }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select GCP Project</h2>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.projectId}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedProject?.projectId === project.projectId
                  ? "bg-purple-100 border-purple-600"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">ID: {project.projectId}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedProject)}
            disabled={!selectedProject}
            className={`px-4 py-2 rounded-md ${
              selectedProject
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSelectionPopup;
