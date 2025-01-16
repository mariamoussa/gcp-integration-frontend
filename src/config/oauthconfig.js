const OAUTH_BASE_URL = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount";

const OAUTH_PARAMS = {
  access_type: "offline",
  scope: [
    "https://www.googleapis.com/auth/cloud-platform",
    "https://www.googleapis.com/auth/compute",
    "https://www.googleapis.com/auth/devstorage.read_write",
    "https://www.googleapis.com/auth/datastore",
    "https://www.googleapis.com/auth/sqlservice.admin",
    "https://www.googleapis.com/auth/firebase",
  ].join(" "), 
  prompt: "consent",
  include_granted_scopes: "true",
  response_type: "code",
  client_id: "866849130143-rlp06lc6a39jue097ok1s754m181hfi1.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000",
  service: "lso",
  o2v: "2",
  ddm: "1",
  flowName: "GeneralOAuthFlow",
};

export const getGoogleOAuthURL = () => {
  const params = new URLSearchParams(OAUTH_PARAMS);
  return `${OAUTH_BASE_URL}?${params.toString()}`;
};
