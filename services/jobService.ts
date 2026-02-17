
import { Job } from '../types';

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await fetch('latest_jobs.json'); // Assumes this file is served or available in public/
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    const data = await response.json();

    // Map raw JSON to Job interface if needed, or purely pass through if structure matches
    const jobs: Job[] = data.map((item: any) => ({
      ...item,
      // Ensure nested objects exist
      website_content: item.website_content || {
        title: 'Untitled Job',
        markdown_content: '',
        actual_link: '',
        action: 'Apply'
      },
      // Fallback/Computed fields
      date: new Date().toISOString().split('T')[0], // We might want to add a 'created_at' to backend JSON later
      location: 'Remote', // Placeholder, or extract from content?
      type: 'Full-time'
    }));

    // Sort by ID descending as a proxy for date since we use auto-increment IDs
    jobs.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    return jobs;
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
};

export const getJobById = async (id: string): Promise<Job | undefined> => {
  const jobs = await fetchJobs();
  return jobs.find((job) => job.id === id);
};