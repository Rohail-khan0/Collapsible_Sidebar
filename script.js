// Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = toggleBtn.querySelector('i');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Check if sidebar state is stored in localStorage
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    // Apply initial state
    if (isCollapsed) {
        sidebar.classList.add('collapsed');
        updateToggleIcon();
    }
    
    // Toggle button click handler
    toggleBtn.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        } else {
            sidebar.classList.toggle('collapsed');
            
            // Store state in localStorage
            const isNowCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isNowCollapsed);
            
            // Update toggle button icon
            updateToggleIcon();
            
            // Add smooth animation class
            sidebar.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Remove transition after animation completes
            setTimeout(() => {
                sidebar.style.transition = '';
            }, 300);
        }
    });
    
    // Mobile menu button click handler
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenuBtn.addEventListener('click', openSidebar);
    
    // Overlay click handler
    overlay.addEventListener('click', closeSidebar);
    
    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
    }
    
    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    }
    
    // Function to update toggle button icon
    function updateToggleIcon() {
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.className = 'fas fa-chevron-right';
        } else {
            toggleIcon.className = 'fas fa-chevron-left';
        }
    }
    
    // Add hover effects for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!sidebar.classList.contains('collapsed')) {
                this.style.transform = 'translateX(8px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click effects for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Store active section in localStorage
            const section = this.getAttribute('data-section');
            if (section) {
                localStorage.setItem('activeSection', section);
                switchContent(section);
            }
            
            // Close sidebar on mobile when navigation link is clicked
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Function to switch content based on active section
    function switchContent(section) {
        const contentWrapper = document.querySelector('.content-wrapper');
        
        // Add fade out effect
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            switch(section) {
                case 'dashboard':
                    showDashboardContent();
                    break;
                case 'users':
                    showUsersContent();
                    break;
                case 'settings':
                    showSettingsContent();
                    break;
                case 'help':
                    showHelpContent();
                    break;
                default:
                    showDashboardContent();
            }
            
            // Add fade in effect
            contentWrapper.style.opacity = '1';
            contentWrapper.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Dashboard content
    function showDashboardContent() {
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.innerHTML = `
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your projects, track analytics, and stay organized with our powerful dashboard tools.</p>
            
            <!-- Quick Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-content">
                        <h3>2,847</h3>
                        <p>Active Users</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="stat-content">
                        <h3>+12.5%</h3>
                        <p>Growth Rate</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-tasks"></i>
                    </div>
                    <div class="stat-content">
                        <h3>156</h3>
                        <p>Tasks Completed</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="stat-content">
                        <h3>$45,230</h3>
                        <p>Revenue</p>
                    </div>
                </div>
            </div>

            <!-- Feature Cards -->
            <div class="demo-content">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-rocket"></i>
                        <h3>Project Management</h3>
                    </div>
                    <p>Create, organize, and track your projects with our intuitive project management tools. Set deadlines, assign tasks, and monitor progress in real-time.</p>
                    <button class="card-btn">Get Started</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-chart-pie"></i>
                        <h3>Analytics Dashboard</h3>
                    </div>
                    <p>Get detailed insights into your business performance with interactive charts, real-time data visualization, and customizable reports.</p>
                    <button class="card-btn">View Analytics</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Security Center</h3>
                    </div>
                    <p>Monitor your system security, manage user permissions, and receive alerts for any suspicious activities or potential threats.</p>
                    <button class="card-btn">Security Check</button>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="activity-section">
                <h2>Recent Activity</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-user-plus"></i>
                        </div>
                        <div class="activity-content">
                            <h4>New User Registration</h4>
                            <p>Rohail Khan joined the platform</p>
                            <span class="activity-time">2 minutes ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-file-upload"></i>
                        </div>
                        <div class="activity-content">
                            <h4>File Uploaded</h4>
                            <p>Project proposal.pdf was uploaded</p>
                            <span class="activity-time">15 minutes ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Task Completed</h4>
                            <p>Website redesign milestone achieved</p>
                            <span class="activity-time">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Reinitialize dashboard functionality
        initializeDashboardFeatures();
    }
    
    // Users content
    function showUsersContent() {
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.innerHTML = `
            <h1>User Management</h1>
            <p>Manage your team members, view user profiles, and control access permissions.</p>
            
            <!-- User Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <div class="stat-content">
                        <h3>1,234</h3>
                        <p>Active Users</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-user-clock"></i>
                    </div>
                    <div class="stat-content">
                        <h3>89</h3>
                        <p>Pending Invites</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-user-shield"></i>
                    </div>
                    <div class="stat-content">
                        <h3>45</h3>
                        <p>Admin Users</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <div class="stat-content">
                        <h3>+23</h3>
                        <p>New This Month</p>
                    </div>
                </div>
            </div>

            <!-- User Management Cards -->
            <div class="demo-content">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-user-plus"></i>
                        <h3>Add New User</h3>
                    </div>
                    <p>Invite new team members to join your platform. Send personalized invitations with role-based access permissions.</p>
                    <button class="card-btn">Invite User</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-users-cog"></i>
                        <h3>Manage Roles</h3>
                    </div>
                    <p>Configure user roles and permissions. Set up custom access levels and control what each user can see and do.</p>
                    <button class="card-btn">Configure Roles</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-user-edit"></i>
                        <h3>User Profiles</h3>
                    </div>
                    <p>View and edit user profiles, update contact information, and manage user preferences and settings.</p>
                    <button class="card-btn">View Profiles</button>
                </div>
            </div>

            <!-- Recent User Activity -->
            <div class="activity-section">
                <h2>Recent User Activity</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-user-edit"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Profile Updated</h4>
                            <p>Sarah Johnson updated her profile picture</p>
                            <span class="activity-time">5 minutes ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-user-check"></i>
                        </div>
                        <div class="activity-content">
                            <h4>User Activated</h4>
                            <p>Mike Chen activated his account</p>
                            <span class="activity-time">1 hour ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-user-shield"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Role Changed</h4>
                            <p>Admin role assigned to Lisa Park</p>
                            <span class="activity-time">2 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Reinitialize dashboard features
        initializeDashboardFeatures();
    }
    
    // Settings content
    function showSettingsContent() {
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.innerHTML = `
            <h1>System Settings</h1>
            <p>Configure your application settings, manage integrations, and customize your experience.</p>
            
            <!-- Settings Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <div class="stat-content">
                        <h3>24</h3>
                        <p>Active Integrations</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="stat-content">
                        <h3>100%</h3>
                        <p>Security Status</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <div class="stat-content">
                        <h3>2.3GB</h3>
                        <p>Storage Used</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-sync"></i>
                    </div>
                    <div class="stat-content">
                        <h3>99.9%</h3>
                        <p>Uptime</p>
                    </div>
                </div>
            </div>

            <!-- Settings Cards -->
            <div class="demo-content">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-palette"></i>
                        <h3>Appearance</h3>
                    </div>
                    <p>Customize the look and feel of your dashboard. Choose themes, colors, and layout preferences.</p>
                    <button class="card-btn">Customize Theme</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-bell"></i>
                        <h3>Notifications</h3>
                    </div>
                    <p>Configure notification preferences, set up email alerts, and manage push notification settings.</p>
                    <button class="card-btn">Notification Settings</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-plug"></i>
                        <h3>Integrations</h3>
                    </div>
                    <p>Connect third-party services, manage API keys, and configure external integrations.</p>
                    <button class="card-btn">Manage Integrations</button>
                </div>
            </div>

            <!-- System Activity -->
            <div class="activity-section">
                <h2>System Activity</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-download"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Backup Completed</h4>
                            <p>System backup completed successfully</p>
                            <span class="activity-time">30 minutes ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-sync"></i>
                        </div>
                        <div class="activity-content">
                            <h4>System Update</h4>
                            <p>Application updated to version 2.1.0</p>
                            <span class="activity-time">2 hours ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-shield-check"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Security Scan</h4>
                            <p>Security scan completed - no threats found</p>
                            <span class="activity-time">4 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Reinitialize dashboard features
        initializeDashboardFeatures();
    }
    
    // Help content
    function showHelpContent() {
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.innerHTML = `
            <h1>Help & Support Center</h1>
            <p>Find answers to common questions, access documentation, and get support when you need it.</p>
            
            <!-- Help Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stat-content">
                        <h3>156</h3>
                        <p>Help Articles</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="stat-content">
                        <h3>24</h3>
                        <p>Video Tutorials</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <div class="stat-content">
                        <h3>98%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="stat-content">
                        <h3>< 2hr</h3>
                        <p>Response Time</p>
                    </div>
                </div>
            </div>

            <!-- Help Cards -->
            <div class="demo-content">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-search"></i>
                        <h3>Search Help</h3>
                    </div>
                    <p>Search through our comprehensive knowledge base to find answers to your questions quickly and efficiently.</p>
                    <button class="card-btn">Search Articles</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-comments"></i>
                        <h3>Live Chat</h3>
                    </div>
                    <p>Connect with our support team in real-time for immediate assistance with any issues or questions.</p>
                    <button class="card-btn">Start Chat</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-envelope"></i>
                        <h3>Contact Support</h3>
                    </div>
                    <p>Send us a detailed message and we'll get back to you with a personalized solution within 2 hours.</p>
                    <button class="card-btn">Send Message</button>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="activity-section">
                <h2>Frequently Asked Questions</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="activity-content">
                            <h4>How do I reset my password?</h4>
                            <p>Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.</p>
                            <span class="activity-time">Most Common</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="activity-content">
                            <h4>How can I invite team members?</h4>
                            <p>Go to the Users section and click "Add New User" to send invitations to your team members.</p>
                            <span class="activity-time">Popular Question</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="activity-content">
                            <h4>What are the system requirements?</h4>
                            <p>Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge.</p>
                            <span class="activity-time">Technical</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Reinitialize dashboard features
        initializeDashboardFeatures();
    }
    
    // Initialize dashboard features after content switch
    function initializeDashboardFeatures() {
        // Re-add event listeners for new content
        setTimeout(() => {
            // Card buttons
            const cardButtons = document.querySelectorAll('.card-btn');
            cardButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const cardTitle = this.closest('.card').querySelector('h3').textContent;
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                    showNotification(`Opening ${cardTitle}...`);
                });
            });
            
            // Stat cards
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('.stat-icon i');
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('.stat-icon i');
                    icon.style.transform = 'scale(1) rotate(0deg)';
                });
            });
            
            // Activity items
            const activityItems = document.querySelectorAll('.activity-item');
            activityItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 200);
            });
            
            // Counter animations
            const statNumbers = document.querySelectorAll('.stat-content h3');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const isPercentage = finalValue.includes('%');
                        const isCurrency = finalValue.includes('$');
                        const isNumber = !isNaN(parseInt(finalValue.replace(/[$,%]/g, '')));
                        
                        if (isNumber) {
                            const numericValue = parseInt(finalValue.replace(/[$,%]/g, ''));
                            animateCounter(target, 0, numericValue, isPercentage, isCurrency);
                        }
                    }
                });
            });
            
            statNumbers.forEach(stat => observer.observe(stat));
        }, 100);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + B to toggle sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
            e.preventDefault();
            toggleBtn.click();
        }
        
        // Escape key to close sidebar on mobile
        if (e.key === 'Escape' && window.innerWidth <= 768) {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Close sidebar on mobile when switching to desktop
        if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
            closeSidebar();
        }
        
        // Auto-collapse sidebar on small screens if it was expanded (desktop behavior)
        if (window.innerWidth <= 768 && window.innerWidth > 480 && !sidebar.classList.contains('collapsed')) {
            sidebar.classList.add('collapsed');
            localStorage.setItem('sidebarCollapsed', 'true');
            updateToggleIcon();
        }
    });
    
    // Add smooth scroll behavior for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Smooth scroll to top of main content
            const mainContent = document.querySelector('.main-content');
            mainContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Load the active section from localStorage
        const activeSection = localStorage.getItem('activeSection') || 'dashboard';
        const activeLink = document.querySelector(`[data-section="${activeSection}"]`);
        
        if (activeLink) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to the stored section
            activeLink.classList.add('active');
            
            // Switch to the correct content
            switchContent(activeSection);
        }
    });
});

// Add CSS for ripple effect and active states
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        background: linear-gradient(135deg, #667eea, #764ba2) !important;
        color: white !important;
        transform: translateX(4px) !important;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-link {
        position: relative;
        overflow: hidden;
    }
    
    body.loaded .sidebar {
        animation: slideInFromLeft 0.5s ease-out;
    }
    
    @keyframes slideInFromLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    /* Tooltip for collapsed sidebar */
    .sidebar.collapsed .nav-link {
        position: relative;
    }
    
    .sidebar.collapsed .nav-link::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        margin-left: 10px;
        z-index: 1001;
    }
    
    .sidebar.collapsed .nav-link:hover::after {
        opacity: 1;
    }
`;

document.head.appendChild(style);

    // Add tooltips to navigation links
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-link');
        const navTexts = document.querySelectorAll('.nav-text');
        
        navLinks.forEach((link, index) => {
            const text = navTexts[index].textContent;
            link.setAttribute('data-tooltip', text);
        });
    });
    
    // Add functionality to card buttons
    document.addEventListener('DOMContentLoaded', function() {
        const cardButtons = document.querySelectorAll('.card-btn');
        
        cardButtons.forEach(button => {
            button.addEventListener('click', function() {
                const cardTitle = this.closest('.card').querySelector('h3').textContent;
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Show notification
                showNotification(`Opening ${cardTitle}...`);
            });
        });
    });
    
    // Add hover effects to stat cards
    document.addEventListener('DOMContentLoaded', function() {
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.stat-icon i');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.stat-icon i');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    });
    
    // Add animation to activity items
    document.addEventListener('DOMContentLoaded', function() {
        const activityItems = document.querySelectorAll('.activity-item');
        
        activityItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 200);
        });
    });
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Add counter animation to stats
    document.addEventListener('DOMContentLoaded', function() {
        const statNumbers = document.querySelectorAll('.stat-content h3');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    const isPercentage = finalValue.includes('%');
                    const isCurrency = finalValue.includes('$');
                    const isNumber = !isNaN(parseInt(finalValue.replace(/[$,%]/g, '')));
                    
                    if (isNumber) {
                        const numericValue = parseInt(finalValue.replace(/[$,%]/g, ''));
                        animateCounter(target, 0, numericValue, isPercentage, isCurrency);
                    }
                }
            });
        });
        
        statNumbers.forEach(stat => observer.observe(stat));
    });
    
    function animateCounter(element, start, end, isPercentage, isCurrency) {
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            let displayValue = current;
            
            if (isCurrency) {
                displayValue = '$' + current.toLocaleString();
            } else if (isPercentage) {
                displayValue = '+' + current + '%';
            } else {
                displayValue = current.toLocaleString();
            }
            
            element.textContent = displayValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }