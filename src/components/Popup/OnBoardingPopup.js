import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard"; 
import { getGoogleOAuthURL } from "../../config/oauthconfig"; 
import { File, Key, Users } from "lucide-react";

const OnboardingPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGoogleRedirect = () => {
    const oauthURL = getGoogleOAuthURL(); 
    window.location.href = oauthURL; 
  };

  const tasks = [
    {
      title: "Assemble your team",
      description: "Security is a team sport. Bring your key contributors into Rovera.",
      subText: "Connect Google Workspace · 2 min",
      completed: "0 of 1 complete",
      buttonText: "Connect",
      buttonAction: handleGoogleRedirect,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <Users cx="9" cy="7" r="4" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Unlock integration",
      description: "Rovera's integrations help you collect a list of assets and relevant compliance evidence without manual work.",
      subText: "Connect GCP · 5 min",
      completed: "0 of 1 complete",
      buttonText: "Connect GCP",
      buttonAction: handleGoogleRedirect,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 2L11.4 11.6" />
          <Key cx="7.5" cy="15.5" r="5.5" />
          <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6 border bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      {/* Popup Header */}
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Onboarding Guide</h1>
        <p className="text-sm text-gray-500">
          Get started quickly by completing these essential tasks. They will set a
          solid foundation and help you make the most of Rovera from the start.
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}

        <TaskCard
          title="Upload HR & Risk policies (Optional)"
          description="Policies are the foundation of your security program. Upload existing policies, and we can help you with what is missing."
          subText="Getting Started with Policies (coming soon)"
          completed="0 of 4 complete"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
        <path d="M21 2L11.4 11.6" />
          <File cx="7.5" cy="15.5" r="5.5" />
          <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
            </svg>
          }
          isExpandable
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {[
            "Human Resources",
            "Code of Conduct",
            "Third Party Management",
            "Risk Management",
          ].map((policy, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-t last:border-b"
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border border-gray-400"></div>
                <span className="text-sm text-gray-600">{policy}</span>
              </div>
              <button className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                Upload policy
              </button>
            </div>
          ))}
        </TaskCard>
      </div>
    </div>
  );
};

export default OnboardingPopup;
