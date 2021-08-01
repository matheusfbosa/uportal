import APPS_URL from "../config";

type App = {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
};

const listApps = async (): Promise<App[]> => {
  try {
    const response = await fetch(`${APPS_URL}`);
    const { applications } = await response.json();
    return applications;
  } catch (error) {
    throw new Error("An error has occurred while fetching apps.");
  }
};

export default listApps;
