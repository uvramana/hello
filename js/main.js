// Main JavaScript for Telugu Learning Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    setupNavigation();
    setupSmoothScroll();
});

/**
 * Setup navigation active state
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if the link matches the current page
        if (link.href.includes(currentPage) || 
            (currentPage.endsWith('/') && link.href.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Track lesson completion (for future implementation)
 */
function markLessonComplete(lessonId) {
    // Store in localStorage for persistence
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    
    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }
    
    return completedLessons;
}

/**
 * Get learning progress
 */
function getProgress() {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    const totalLessons = 6; // Initial beginner lessons
    
    return {
        completed: completedLessons.length,
        total: totalLessons,
        percentage: Math.round((completedLessons.length / totalLessons) * 100)
    };
}

/**
 * Play pronunciation audio (for future audio implementation)
 */
function playPronunciation(word) {
    // Placeholder for future audio feature
    console.log('Playing pronunciation for:', word);
    
    // Future implementation: use Web Audio API or text-to-speech
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'te-IN'; // Telugu language
        window.speechSynthesis.speak(utterance);
    }
}

/**
 * Initialize practice quiz (for future implementation)
 */
function startQuiz(quizId) {
    console.log('Starting quiz:', quizId);
    // Future implementation: interactive quizzes
}

/**
 * Record and save user's voice (for future implementation)
 */
async function recordPronunciation(duration = 5000) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            // Save or compare with reference audio
            console.log('Recording saved:', blob);
        };

        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), duration);
    } catch (error) {
        console.error('Could not access microphone:', error);
        alert('Please enable microphone access to use pronunciation recording features.');
    }
}

/**
 * Toggle mobile menu (for future mobile optimization)
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * Keyboard navigation helper
 */
document.addEventListener('keydown', function(event) {
    // Alt + L: Go to lesson list
    if (event.altKey && event.key === 'l') {
        window.location.href = 'pages/beginner.html';
    }
    
    // Alt + H: Go to home
    if (event.altKey && event.key === 'h') {
        window.location.href = '/';
    }
});

// Export functions for external use
window.TeluguLearning = {
    markLessonComplete,
    getProgress,
    playPronunciation,
    startQuiz,
    recordPronunciation,
    toggleMobileMenu
};
