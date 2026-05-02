// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const topNavbar = document.getElementById('topNavbar');
const mainContent = document.getElementById('mainContent');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        topNavbar.classList.toggle('expanded');
        mainContent.classList.toggle('expanded');
    });
}

// Close sidebar on mobile when clicking outside
document.addEventListener('click', function(event) {
    if (window.innerWidth < 768) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = sidebarToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && !sidebar.classList.contains('collapsed')) {
            sidebar.classList.add('collapsed');
            topNavbar.classList.add('expanded');
            mainContent.classList.add('expanded');
        }
    }
});

// Active nav link highlighting
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.sidebar-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
