import { getProjectById, getProjects } from "@/services/project.service";

export function listProjectCards() {
  return getProjects();
}

export function getProjectDetail(id?: string) {
  if (!id) {
    return undefined;
  }

  return getProjectById(id);
}
