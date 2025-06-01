import { execSync } from 'child_process';

export function getLastCommitDate(): string {
  try {
    // Get the last commit date in ISO format
    const lastCommitDate = execSync('git log -1 --format=%cI').toString().trim();
    return new Date(lastCommitDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error getting last commit date:', error);
    return 'Unknown';
  }
} 