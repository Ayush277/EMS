const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Design Website Layout",
                "task_description": "Create a responsive layout for the homepage.",
                "task_date": "2024-12-20",
                "task_category": "Design",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Fix Login Bug",
                "task_description": "Resolve the issue with login validation.",
                "task_date": "2024-12-18",
                "task_category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Update Inventory Database",
                "task_description": "Add new items to the database with accurate pricing.",
                "task_date": "2024-12-21",
                "task_category": "Data Entry",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Generate Weekly Report",
                "task_description": "Create a report for weekly sales data.",
                "task_date": "2024-12-19",
                "task_category": "Analysis",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Prepare Marketing Campaign",
                "task_description": "Plan and schedule next month's social media posts.",
                "task_date": "2024-12-22",
                "task_category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Conduct Training Session",
                "task_description": "Host a session on customer relationship management.",
                "task_date": "2024-12-20",
                "task_category": "Training",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Test Mobile App Features",
                "task_description": "Ensure all new features work seamlessly on Android and iOS.",
                "task_date": "2024-12-23",
                "task_category": "Testing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Document API Endpoints",
                "task_description": "Write detailed documentation for all RESTful APIs.",
                "task_date": "2024-12-17",
                "task_category": "Documentation",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Schedule Client Meetings",
                "task_description": "Arrange meetings for next quarter.",
                "task_date": "2024-12-25",
                "task_category": "Coordination",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Audit Security Logs",
                "task_description": "Analyze recent security logs for suspicious activity.",
                "task_date": "2024-12-15",
                "task_category": "Security",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(employees, admin)
    return {employees,admin}
}

