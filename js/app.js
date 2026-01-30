// ===================================
// Angular App Initialization
// ===================================
var app = angular.module('holidayCaravan', ['ngAnimate']);

// ===================================
// Main Controller
// ===================================
app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    
    // Modal state
    $scope.modalImage = null;

    // ===================================
    // Features Data
    // ===================================
    $scope.features = [
        {
            icon: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.75-.93-6-4.79-6-9V8.3l6-3.27 6 3.27V11c0 4.21-2.25 8.07-6 9z',
            title: 'Safe & Secure',
            description: 'Located in a peaceful, family-friendly holiday park with 24/7 security'
        },
        {
            icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            title: 'Prime Location',
            description: 'Easy access to local attractions, beaches, and entertainment venues'
        },
        {
            icon: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
            title: 'Fully Equipped',
            description: 'Modern kitchen, comfortable bedrooms, spacious living area, and private patio'
        },
        {
            icon: 'M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z',
            title: 'Book with Ease',
            description: 'Simple booking process with flexible dates for 2026 season'
        }
    ];

    // ===================================
    // Exterior Images Data
    // ===================================
    $scope.exteriorImages = [
        { 
            src: './data/images/frontalview.jpg', 
            alt: 'Frontal View of Holiday Caravan' 
        },
        { 
            src: './data/images/sideview.jpg', 
            alt: 'Side View of Caravan' 
        },
        { 
            src: './data/images/607295468_3336085309901587_7821637476024097109_n.jpg', 
            alt: 'Exterior View' 
        },
        { 
            src: './data/images/605223774_3336085483234903_9022047593420434258_n.jpg', 
            alt: 'Caravan Exterior' 
        },
        { 
            src: './data/images/607687752_3336085886568196_1730067545753158373_n.jpg', 
            alt: 'External Features' 
        },
        { 
            src: './data/images/patio.jpg', 
            alt: 'Private Patio Area' 
        },
        { 
            src: './data/images/patio2.jpg', 
            alt: 'Patio with Seating' 
        }
    ];

    // ===================================
    // Interior Images Data
    // ===================================
    $scope.interiorImages = [
        { 
            src: './data/images/livingspace.jpg', 
            alt: 'Living Space Overview' 
        },
        { 
            src: './data/images/living_space.jpg', 
            alt: 'Comfortable Living Area' 
        },
        { 
            src: './data/images/living_space2.jpg', 
            alt: 'Spacious Living Room' 
        },
        { 
            src: './data/images/kitchen.jpg', 
            alt: 'Fully Equipped Modern Kitchen' 
        },
        { 
            src: './data/images/dining.jpg', 
            alt: 'Dining Area' 
        },
        { 
            src: './data/images/masterbed.jpg', 
            alt: 'Master Bedroom' 
        },
        { 
            src: './data/images/bedroom.jpg', 
            alt: 'Second Bedroom' 
        },
        { 
            src: './data/images/shower.jpg', 
            alt: 'Modern Shower Room' 
        },
        { 
            src: './data/images/hallway.jpg', 
            alt: 'Interior Hallway' 
        },
        { 
            src: './data/images/asasas.jpg', 
            alt: 'Interior Detail' 
        }
    ];

    // ===================================
    // Pricing Options Data
    // ===================================
    $scope.pricingOptions = [
        {
            title: 'Weekend Break',
            price: '£225',
            duration: 'Friday - Monday',
            features: [
                'Perfect for quick getaway',
                '3 nights included',
                'Full access to facilities',
                'Flexible check-in times'
            ]
        },
        {
            title: 'Midweek Stay',
            price: '£300',
            duration: 'Monday - Friday',
            features: [
                'Peaceful weekday retreat',
                '4 nights included',
                'Great value for longer stays',
                'Quieter park atmosphere'
            ]
        },
        {
            title: 'Full Week',
            price: '£500',
            duration: 'Saturday - Saturday',
            features: [
                'Complete weekly experience',
                '7 nights included',
                'Best value option',
                'Ideal for families'
            ],
            excludes: 'Excludes Summer Holidays'
        },
        {
            title: 'Summer Holiday',
            price: '£600',
            duration: '18th July - 29th August',
            features: [
                'Premium summer season',
                'Saturday to Saturday only',
                '7 nights included',
                'Peak holiday experience'
            ],
            isSummer: true
        }
    ];

    // ===================================
    // Modal Functions
    // ===================================
    $scope.openModal = function(imageSrc) {
        $scope.modalImage = imageSrc;
        // Prevent body scroll when modal is open
        angular.element(document.body).css('overflow', 'hidden');
    };

    $scope.closeModal = function() {
        $scope.modalImage = null;
        // Restore body scroll
        angular.element(document.body).css('overflow', 'auto');
    };

    // ===================================
    // Smooth Scroll Function
    // ===================================
    $scope.scrollToSection = function(sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    // ===================================
    // Analytics & Tracking (Optional)
    // ===================================
    $scope.trackEvent = function(category, action, label) {
        // Placeholder for analytics tracking
        // Can integrate Google Analytics, Facebook Pixel, etc.
        console.log('Event tracked:', category, action, label);
    };

    // ===================================
    // Keyboard Navigation for Modal
    // ===================================
    angular.element($window).on('keydown', function(event) {
        if (event.key === 'Escape' && $scope.modalImage) {
            $scope.$apply(function() {
                $scope.closeModal();
            });
        }
    });

    // ===================================
    // Initialize
    // ===================================
    $scope.init = function() {
        console.log('Holiday Caravan App Initialized');
        console.log('Total Exterior Images:', $scope.exteriorImages.length);
        console.log('Total Interior Images:', $scope.interiorImages.length);
        console.log('Pricing Options:', $scope.pricingOptions.length);
    };

    // Call initialization
    $scope.init();
}]);

// ===================================
// Directives
// ===================================

// Lazy Load Images Directive
app.directive('lazyLoad', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.getAttribute('ng-src');
                        observer.unobserve(img);
                    }
                });
            });
            observer.observe(element[0]);
        }
    };
});

// Fade In on Scroll Directive
app.directive('fadeInOnScroll', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        element.addClass('fade-in-up');
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(element[0]);
        }
    };
}]);

// ===================================
// Filters
// ===================================

// Price Filter
app.filter('currency', function() {
    return function(input) {
        if (!input) return input;
        return '£' + parseFloat(input).toFixed(2);
    };
});

// ===================================
// Services (for future expansion)
// ===================================

// Booking Service
app.service('BookingService', function() {
    this.createBooking = function(bookingData) {
        // Placeholder for booking logic
        // Could integrate with backend API
        console.log('Booking created:', bookingData);
        return bookingData;
    };

    this.validateDates = function(startDate, endDate) {
        // Date validation logic
        return startDate < endDate;
    };

    this.calculatePrice = function(startDate, endDate, pricePerNight) {
        var days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return days * pricePerNight;
    };
});

// Contact Service
app.service('ContactService', function() {
    this.sendMessage = function(messageData) {
        // Placeholder for contact form submission
        console.log('Message sent:', messageData);
        return true;
    };
});

// ===================================
// Run Block
// ===================================
app.run(['$rootScope', function($rootScope) {
    // Global app configuration
    $rootScope.appName = 'Luxury Holiday Caravan';
    $rootScope.currentYear = new Date().getFullYear();
    
    // SEO and meta tags
    document.title = 'Luxury Holiday Caravan - Coastal Retreat';
    
    console.log('Holiday Caravan App Running');
}]);
