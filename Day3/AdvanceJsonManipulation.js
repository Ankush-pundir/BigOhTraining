const employeesData = {
  employees: [
    { employee_id: "E001", name: "John Doe", role: "Developer" },
    { employee_id: "E002", name: "Jane Smith", role: "Designer" },
    { employee_id: "E003", name: "Emily Davis", role: "Project Manager" },
  ],
};

const projectsData = {
  projects: [
    {
      project_id: "P001",
      name: "Project Alpha",
      hours: [
        { employee_id: "E001", hours_worked: 120 },
        { employee_id: "E002", hours_worked: 80 },
      ],
      rating: 4.5,
    },
    {
      project_id: "P002",
      name: "Project Beta",
      hours: [
        { employee_id: "E001", hours_worked: 150 },
        { employee_id: "E003", hours_worked: 200 },
      ],
      rating: 4.7,
    },
    {
      project_id: "P003",
      name: "Project Gamma",
      hours: [
        { employee_id: "E002", hours_worked: 50 },
        { employee_id: "E003", hours_worked: 60 },
      ],
      rating: 4.0,
    },
  ],
};

function generateEmployeeReport(employees, projects) {
  return employees.map((employee) => {
    let total_hours_worked = 0;
    let projectRatings = [];
    let projectsWorked = [];

    for (let project of projects) {
      for (let entry of project.hours) {
        if (entry.employee_id === employee.employee_id) {
          total_hours_worked += entry.hours_worked;
          projectRatings.push(project.rating);
          projectsWorked.push({
            project_id: project.project_id,
            name: project.name,
            hours_worked: entry.hours_worked,
            rating: project.rating,
          });
        }
      }
    }

    let average_project_rating =
      projectRatings.length > 0
        ? projectRatings.reduce((a, b) => a + b, 0) / projectRatings.length
        : 0;

    return {
      ...employee,
      total_hours_worked,
      average_project_rating,
      projects: projectsWorked,
    };
  });
}

const report = generateEmployeeReport(
  employeesData.employees,
  projectsData.projects
);
console.dir(report, { depth: null });
