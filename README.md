# Employee Management Frontend (Angular)

This is the frontend application for managing employees, built with **Angular** and styled using **Angular Material** and **Bootstrap**. It communicates with a .NET Core Web API backend to perform CRUD operations.

---

## 🌟 Features

- **Employee List**: Displays employees in a Material table with pagination and search.
- **Employee Form**: Add and edit employees using a reactive form with validation.
- **CRUD Operations**: Uses `EmployeeService` to interact with the backend API.
- **Routing**: Navigation between list, add, and edit views using `app.routes.ts`.
- **Notifications**: Uses `MatSnackBar` for success and error feedback.

---

## 📦 Packages Used

| Package                  | Description                                      |
|--------------------------|--------------------------------------------------|
| `@angular/core`          | Core Angular framework                           |
| `@angular/common`        | Common directives and pipes                      |
| `@angular/forms`         | For reactive forms and validation                |
| `@angular/router`        | Routing and navigation                           |
| `@angular/material`      | UI components (Table, FormField, Input, etc.)    |
| `@angular/animations`    | Required for Angular Material animations         |
| `rxjs`                   | Reactive programming with Observables            |
| `bootstrap`              | Additional UI styling                            |
| `zone.js`                | Angular change detection support                 |
| `ajv`                    | JSON schema validation (installed, not in use)   |

---

## 🧱 Key Usage

- **Standalone Components**:
  - `EmployeeListComponent`
  - `EmployeeFormComponent`

- **Material Table & Paginator**:
  - Displays employee data with pagination and filtering.

- **Reactive Forms**:
  - Used in add/edit forms with validation.

- **HttpClient**:
  - Communicates with the backend REST API.

- **Router**:
  - Navigates between views (`/employees`, `/employees/add`, `/employees/edit/:id`).

---

## ⚙️ Configuration & Tooling

- **Angular CLI**: Used to scaffold and manage the project.
- **TypeScript**: With strict type checking enabled.
- **EditorConfig**: Ensures consistent code style.
- **VSCode Tasks & Launch Settings**: Preconfigured for serving and testing.

---

## 🗂️ Project Structure Overview

src/
├── app/
│   ├── employees/
│   │   ├── employee-list/        → EmployeeListComponent
│   │   ├── employee-form/        → EmployeeFormComponent
│   │   └── employee.service.ts   → EmployeeService
│   ├── app.routes.ts             → Angular routing
│   └── app.component.ts          → Main layout shell


---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/employee-frontend.git
cd employee-frontend 
```

### 2. Install Dependencies
- npm install


###  3. Run the Development Server

- ng serve -o

The app will be available at: 

- http://localhost:4200

📂 Key Files to Explore
employee-list.component.ts: Display and delete employees.

employee-form.component.ts: Add and update employee data.

employee.service.ts: Manages all API calls.

app.routes.ts: Configures application routes.

🧑‍💻 Author
Rawan Qandel – Angular & .NET Developer Candidate
