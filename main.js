
        // Mobile menu toggle functionality
        document.getElementById('leftMenuToggle').addEventListener('click', function() {
            document.getElementById('leftNavbar').classList.toggle('active');
        });
        
        document.getElementById('rightMenuToggle').addEventListener('click', function() {
            document.getElementById('rightNavbar').classList.toggle('active');
        });
        
        // Simulate visitor count (in a real app, this would come from your backend)
        function updateVisitorCount() {
            // Get current count from localStorage or use a random number
            let count = localStorage.getItem('visitorCount') || Math.floor(Math.random() * 5000) + 1000;
            count = parseInt(count) + 1;
            localStorage.setItem('visitorCount', count);
            
            // Format number with commas
            document.getElementById('visitorCount').textContent = count.toLocaleString();
        }
        
        // Initialize visitor count
        updateVisitorCount();
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    
