# Bug Tracker - Issue Management System

A complete, modern Bug Tracking System built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**.

## 🎨 Features

### Core Pages
- **Login Page** (`login.html`) - Clean authentication interface
- **Dashboard** (`dashboard.html`) - Overview with statistics and charts
- **Projects** (`projects.html`) - Project management with modals
- **Issues List** (`issues.html`) - Bug list with advanced filters
- **Issue Detail** (`issue-detail.html`) - Detailed view with tabs (Details, Comments, Activity, Attachments)
- **Create Issue** (`create-issue.html`) - Comprehensive bug report form
- **My Tasks** (`my-tasks.html`) - Personal task management
- **Reports** (`reports.html`) - Analytics and export options
- **Users** (`users.html`) - User management (Admin)
- **Settings** (`settings.html`) - Profile, security, and preferences

### Design Features
- ✅ Modern, clean UI with Bootstrap 5
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Collapsible sidebar navigation
- ✅ Color-coded status badges
- ✅ Interactive charts (Chart.js)
- ✅ Modal dialogs for forms
- ✅ Tab-based interfaces
- ✅ Professional dashboard layout

### Status Colors
- **Open** → Blue
- **In Progress** → Orange
- **Resolved** → Green
- **Closed** → Gray
- **Reopened** → Red

### Priority Colors
- **Critical** → Red
- **High** → Orange
- **Medium** → Yellow
- **Low** → Green

## 📁 Project Structure

```
public/
├── login.html              # Login page
├── dashboard.html          # Main dashboard
├── projects.html           # Projects management
├── issues.html             # Issues list
├── issue-detail.html       # Issue detail view
├── create-issue.html       # Bug report form
├── my-tasks.html           # User tasks
├── reports.html            # Reports & analytics
├── users.html              # User management
├── settings.html           # Settings page
├── css/
│   └── style.css          # Custom styles
└── js/
    └── main.js            # Main JavaScript
```

## 🚀 Getting Started

### Method 1: Direct File Access
1. Open `login.html` in your browser
2. Login with any credentials (demo mode)
3. Navigate through the application

### Method 2: Local Web Server
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (http-server)
npx http-server
```

Then open: `http://localhost:8000/login.html`

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Custom styling and animations
- **Bootstrap 5.3** - UI framework
- **Bootstrap Icons 1.11** - Icon library
- **JavaScript (Vanilla)** - Interactivity and navigation
- **Chart.js 4.4** - Data visualization

## 📋 Features by Page

### Dashboard
- Statistics cards (Total, Open, In Progress, Resolved, Closed)
- Pie chart for bug status distribution
- Bar chart for bugs by priority
- Recent activity feed

### Projects
- Table view with project details
- Create/Edit modal
- Status tracking
- Date management

### Issues
- Advanced filtering (Project, Status, Priority)
- Search functionality
- Color-coded badges
- Quick actions (View, Edit)

### Issue Detail
- Tabbed interface (Details, Comments, Activity, Attachments)
- Comment system
- Activity timeline
- File attachments

### Create Issue
- Comprehensive form
- Required field validation
- Steps to reproduce
- Expected vs Actual results
- File upload area

### My Tasks
- Personal task cards
- Quick status updates
- Filter by status
- Due date tracking

### Reports
- Filter options (Date, Project, Type)
- Key metrics cards
- Export options (PDF, Excel, CSV)
- Performance analytics

### Users (Admin)
- User table with roles
- Add/Edit user modal
- Role assignment
- Status management

### Settings
- Profile management
- Password change
- Notification preferences
- Data export
- Account deletion

## 🎯 Key Components

### Sidebar Navigation
- Collapsible sidebar
- Active page highlighting
- Responsive on mobile
- Icon-based menu items

### Top Navbar
- Search bar
- Notification bell with badge
- User profile dropdown
- Logout button

### Modals
- Project creation/editing
- User management
- Responsive design

### Forms
- Bootstrap validation
- Required field indicators
- Date pickers
- Dropdown selects

## 💡 Customization

### Colors
Edit `css/style.css` to change colors:
```css
:root {
    --bs-primary: #2563eb;
    /* Add more custom colors */
}
```

### Layout
- Modify sidebar width in `.sidebar` class
- Adjust navbar height in `.top-navbar` class
- Change content padding in `.main-content` class

## 📱 Responsive Design

- **Desktop**: Full sidebar + expanded content
- **Tablet**: Collapsible sidebar
- **Mobile**: Hidden sidebar with toggle button

## 🔒 Security Notes

This is a **frontend demo** with no backend authentication.  
For production use:
- Implement proper user authentication
- Add CSRF protection
- Validate all inputs server-side
- Use HTTPS
- Implement role-based access control

## 📝 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to customize and extend this project for your needs!

---

**Built with ❤️ using HTML, CSS, Bootstrap, and JavaScript**
