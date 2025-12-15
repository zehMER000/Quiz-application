// Quiz Application
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isReviewMode = false;
        this.questionCount = 6;
        this.difficulty = 'medium';
        this.category = 'general';
        this.timer = null;
        this.timeLeft = 15;
        this.categoryNames = {
            'general': 'General Knowledge',
            'science': 'Science',
            'history': 'History',
            'geography': 'Geography',
            'technology': 'Technology',
            'sports': 'Sports',
            'entertainment': 'Entertainment',
            'random': 'Random Mix'
        };
        this.difficultyNames = {
            'easy': 'Easy',
            'medium': 'Medium',
            'hard': 'Hard',
            'mixed': 'Mixed'
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.enableStartButton();
        this.addConfettiEffect();
    }
    
    initializeElements() {
        // Get DOM elements
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.questionContainer = document.getElementById('questionContainer');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.questionText = document.getElementById('questionText');
        this.questionNumber = document.getElementById('questionNumber');
        this.answersContainer = document.getElementById('answersContainer');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.startBtn = document.getElementById('startBtn');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.reviewBtn = document.getElementById('reviewBtn');
        this.homeBtn = document.getElementById('homeBtn');
        this.headerHomeBtn = document.getElementById('headerHomeBtn');
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreText = document.getElementById('scoreText');
        this.performanceMessage = document.getElementById('performanceMessage');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.categoryBadge = document.getElementById('categoryBadge');
        this.difficultyBadge = document.getElementById('difficultyBadge');
        this.timerElement = document.getElementById('timer');
        
        // Settings elements
        this.questionCountSelect = document.getElementById('questionCount');
        this.difficultySelect = document.getElementById('difficulty');
        this.categorySelect = document.getElementById('category');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
        this.homeBtn.addEventListener('click', () => this.goHome());
        this.headerHomeBtn.addEventListener('click', () => this.goHome());
        
        // Settings change handlers
        this.questionCountSelect.addEventListener('change', () => this.updateSettings());
        this.difficultySelect.addEventListener('change', () => this.updateSettings());
        this.categorySelect.addEventListener('change', () => this.updateSettings());
        
        // Add hover effects to answer options
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('answer-option')) {
                e.target.style.transform = 'translateY(-5px)';
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('answer-option') && !e.target.classList.contains('selected')) {
                e.target.style.transform = 'translateY(0)';
            }
        });
    }
    
    enableStartButton() {
        // Enable the start button
        this.startBtn.disabled = false;
        // Initialize settings from the UI
        this.updateSettings();
    }
    
    updateSettings() {
        this.questionCount = parseInt(this.questionCountSelect.value);
        this.difficulty = this.difficultySelect.value;
        this.category = this.categorySelect.value;
        console.log('Settings updated:', {
            questionCount: this.questionCount,
            difficulty: this.difficulty,
            category: this.category
        });
    }
    
    startQuiz() {
        // Add loading effect
        this.showLoadingSpinner();
        
        // Simulate loading time for better UX
        setTimeout(() => {
            // Update settings before starting quiz
            this.updateSettings();
            
            console.log('Starting quiz with settings:', {
                questionCount: this.questionCount,
                difficulty: this.difficulty,
                category: this.category
            });
            
            this.generateQuestions();
            this.currentQuestion = 0;
            this.score = 0;
            this.userAnswers = [];
            this.isReviewMode = false;
            
            this.welcomeScreen.style.display = 'none';
            this.questionContainer.style.display = 'block';
            this.resultsContainer.style.display = 'none';
            
            // Show header home button
            this.headerHomeBtn.style.display = 'inline-block';
            
            this.displayQuestion();
            this.startTimer();
            
            // Hide loading spinner
            this.hideLoadingSpinner();
        }, 1200);
    }
    
    showLoadingSpinner() {
        this.loadingSpinner.style.display = 'flex';
        this.startBtn.style.display = 'none';
    }
    
    hideLoadingSpinner() {
        this.loadingSpinner.style.display = 'none';
        this.startBtn.style.display = 'block';
    }
    
    generateQuestions() {
        this.generateEnhancedSampleQuestions();
    }
    
    generateEnhancedSampleQuestions() {
        // Enhanced question database with difficulty levels
        const questionSets = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the largest mammal in the world?",
                        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "How many continents are there?",
                        options: ["5", "6", "7", "8"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What do you call a baby kangaroo?",
                        options: ["Cub", "Pup", "Joey", "Calf"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which is the largest ocean on Earth?",
                        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the tallest mammal?",
                        options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "How many sides does a triangle have?",
                        options: ["2", "3", "4", "5"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What color do you get when you mix red and yellow?",
                        options: ["Orange", "Green", "Purple", "Pink"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which animal is known as 'man's best friend'?",
                        options: ["Cat", "Horse", "Dog", "Bird"],
                        correct: 2,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "Which ocean is the largest?",
                        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Won", "Yuan", "Yen", "Baht"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which animal is known as the 'King of the Jungle'?",
                        options: ["Tiger", "Lion", "Leopard", "Cheetah"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "In which year did the Titanic sink?",
                        options: ["1910", "1912", "1915", "1920"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the main ingredient in guacamole?",
                        options: ["Tomato", "Avocado", "Onion", "Pepper"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which is the longest river in the world?",
                        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the capital of Canada?",
                        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which planet is known as the 'Red Planet'?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Liver", "Brain", "Skin", "Heart"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                        correct: 2,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "What is the hardest natural substance?",
                        options: ["Gold", "Iron", "Diamond", "Platinum"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["United States", "Russia", "China", "Brazil"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the fastest land animal?",
                        options: ["Lion", "Cheetah", "Leopard", "Tiger"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which planet is closest to the Sun?",
                        options: ["Venus", "Mercury", "Earth", "Mars"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Liver", "Brain", "Skin", "Heart"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the only mammal capable of true flight?",
                        options: ["Flying Squirrel", "Bat", "Flying Fox", "Sugar Glider"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which element has the highest melting point?",
                        options: ["Tungsten", "Iron", "Platinum", "Gold"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the capital of Bhutan?",
                        options: ["Kathmandu", "Dhaka", "Thimphu", "Islamabad"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which is the only vowel on a standard keyboard that is not on the top line of letters?",
                        options: ["A", "E", "I", "O"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the study of mushrooms called?",
                        options: ["Mycology", "Bacteriology", "Virology", "Parasitology"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which metal is liquid at room temperature?",
                        options: ["Iron", "Mercury", "Lead", "Silver"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the smallest bone in the human body?",
                        options: ["Stirrup", "Hammer", "Anvil", "Femur"],
                        correct: 0,
                        difficulty: "hard"
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is the speed of light in vacuum?",
                        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which gas makes up most of Earth's atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the smallest unit of matter?",
                        options: ["Molecule", "Atom", "Proton", "Electron"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What force keeps us on the ground?",
                        options: ["Magnetism", "Friction", "Gravity", "Inertia"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is H2O commonly known as?",
                        options: ["Salt", "Sugar", "Water", "Alcohol"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What do plants need from the sun to make food?",
                        options: ["Heat", "Light", "Wind", "Rain"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the solid form of water?",
                        options: ["Steam", "Ice", "Vapor", "Liquid"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What gas do humans breathe out?",
                        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "How many bones are in an adult human body?",
                        options: ["206", "300", "150", "100"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the chemical symbol for oxygen?",
                        options: ["O", "O2", "OX", "OXY"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the process by which plants make food?",
                        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                        correct: 1,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "Which organ produces insulin?",
                        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the process by which plants make food?",
                        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "CO2", "NaCl", "O2"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the study of fungi called?",
                        options: ["Bacteriology", "Mycology", "Virology", "Parasitology"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the unit of electrical resistance?",
                        options: ["Volt", "Ampere", "Ohm", "Watt"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which blood type is known as the universal donor?",
                        options: ["A", "B", "AB", "O"],
                        correct: 3,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the freezing point of water in Celsius?",
                        options: ["0°C", "32°C", "100°C", "-10°C"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Which vitamin is produced when skin is exposed to sunlight?",
                        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                        correct: 3,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the study of heredity called?",
                        options: ["Physiology", "Anatomy", "Genetics", "Ecology"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the largest planet in our solar system?",
                        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
                        correct: 1,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "Which blood type is known as the universal donor?",
                        options: ["A", "B", "AB", "O"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the freezing point of water in Celsius?",
                        options: ["0°C", "32°C", "100°C", "-10°C"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which vitamin is produced when skin is exposed to sunlight?",
                        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the study of living organisms called?",
                        options: ["Physics", "Chemistry", "Biology", "Geology"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which element has the atomic number 1?",
                        options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the speed of sound in air?",
                        options: ["343 m/s", "299,792,458 m/s", "150 m/s", "500 m/s"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the pH of pure water?",
                        options: ["0", "7", "14", "10"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which gas is most abundant in the Earth's atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which scientist developed the theory of relativity?",
                        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
                        correct: 1,
                        difficulty: "hard"
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "In which year did World War II end?",
                        options: ["1944", "1945", "1946", "1947"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Who was the first person to walk on the moon?",
                        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which ancient wonder was located in Alexandria?",
                        options: ["Hanging Gardens", "Lighthouse", "Colossus", "Temple of Artemis"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which country gave the Statue of Liberty to the USA?",
                        options: ["England", "France", "Germany", "Italy"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "In which year did the Titanic sink?",
                        options: ["1910", "1912", "1915", "1920"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which empire built the Colosseum?",
                        options: ["Greek", "Persian", "Roman", "Byzantine"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which war was fought between the North and South regions of the United States?",
                        options: ["World War I", "World War II", "Civil War", "Revolutionary War"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Who invented the telephone?",
                        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which ancient civilization built the pyramids?",
                        options: ["Romans", "Greeks", "Egyptians", "Mesopotamians"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "In which year did Christopher Columbus reach America?",
                        options: ["1492", "1500", "1485", "1510"],
                        correct: 0,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "Who wrote the Declaration of Independence?",
                        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "In which century did the Renaissance begin?",
                        options: ["13th", "14th", "15th", "16th"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which empire built the Colosseum?",
                        options: ["Greek", "Persian", "Roman", "Byzantine"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Caligula", "Augustus", "Nero"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "In which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which document did Abraham Lincoln sign to free the slaves?",
                        options: ["Declaration of Independence", "Bill of Rights", "Emancipation Proclamation", "Constitution"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Who was the British Prime Minister during World War II?",
                        options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which ancient civilization developed democracy?",
                        options: ["Romans", "Egyptians", "Greeks", "Persians"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "In which year did the French Revolution begin?",
                        options: ["1776", "1789", "1804", "1815"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Who discovered America in 1492?",
                        options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which treaty ended World War I?",
                        options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Utrecht"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Who was the first woman to fly solo across the Atlantic?",
                        options: ["Bessie Coleman", "Amelia Earhart", "Sally Ride", "Valentina Tereshkova"],
                        correct: 1,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Caligula", "Augustus", "Nero"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "In which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which pharaoh's tomb was discovered by Howard Carter in 1922?",
                        options: ["Ramses II", "Tutankhamun", "Cleopatra", "Akhenaten"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
                        options: ["Santa Maria", "Mayflower", "Nina", "Pinta"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which battle is considered the turning point of the American Civil War?",
                        options: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Bull Run", "Battle of Vicksburg"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Who was the leader of the Soviet Union during World War II?",
                        options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which ancient city was buried under volcanic ash in 79 AD?",
                        options: ["Athens", "Sparta", "Pompeii", "Rome"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What was the name of the first artificial satellite launched into space?",
                        options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which treaty ended the American Revolutionary War?",
                        options: ["Treaty of Paris 1783", "Treaty of Ghent", "Treaty of Versailles", "Treaty of Tordesillas"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Who was the first person to circumnavigate the globe?",
                        options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which ancient wonder of the world was located in Babylon?",
                        options: ["Hanging Gardens", "Great Pyramid", "Lighthouse of Alexandria", "Temple of Artemis"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What was the name of the first programmable computer?",
                        options: ["ENIAC", "Colossus", "UNIVAC", "EDVAC"],
                        correct: 1,
                        difficulty: "hard"
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "Which is the largest ocean on Earth?",
                        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the longest river in the world?",
                        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["Russia", "United States", "China", "Brazil"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the capital of Australia?",
                        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which is the smallest continent?",
                        options: ["Europe", "Australia", "Antarctica", "South America"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                        correct: 3,
                        difficulty: "easy"
                    },
                    {
                        question: "Which country is known as the Land of the Rising Sun?",
                        options: ["China", "Thailand", "Japan", "South Korea"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the highest mountain in the world?",
                        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which is the largest country in the world?",
                        options: ["Canada", "United States", "China", "Russia"],
                        correct: 3,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the capital of Brazil?",
                        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which river flows through London?",
                        options: ["Thames", "Seine", "Danube", "Rhine"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the capital of Egypt?",
                        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
                        correct: 0,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which mountain range separates Europe and Asia?",
                        options: ["Alps", "Himalayas", "Ural", "Andes"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the capital of Australia?",
                        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which country is known as the Land of a Thousand Lakes?",
                        options: ["Sweden", "Finland", "Norway", "Canada"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the driest continent on Earth?",
                        options: ["Africa", "Asia", "Australia", "Antarctica"],
                        correct: 3,
                        difficulty: "medium"
                    },
                    {
                        question: "Which is the deepest ocean trench in the world?",
                        options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which country has the longest coastline in the world?",
                        options: ["Russia", "Canada", "United States", "Australia"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the capital of Turkey?",
                        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which is the largest island in the world?",
                        options: ["Australia", "Greenland", "New Guinea", "Borneo"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which country is completely surrounded by South Africa?",
                        options: ["Botswana", "Zimbabwe", "Lesotho", "Swaziland"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the capital of Canada?",
                        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which is the most populous country in Africa?",
                        options: ["Ethiopia", "Nigeria", "Egypt", "Democratic Republic of Congo"],
                        correct: 1,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "Which country is known as the Land of a Thousand Lakes?",
                        options: ["Sweden", "Finland", "Norway", "Canada"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the driest continent on Earth?",
                        options: ["Africa", "Asia", "Australia", "Antarctica"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "Which is the only country that is completely surrounded by another country?",
                        options: ["Monaco", "Vatican City", "San Marino", "Lesotho"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the capital of Bhutan?",
                        options: ["Kathmandu", "Dhaka", "Thimphu", "Islamabad"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which is the longest continental mountain range in the world?",
                        options: ["Himalayas", "Andes", "Rocky Mountains", "Alps"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has the most natural lakes?",
                        options: ["United States", "Canada", "Russia", "Finland"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the largest coral reef system in the world?",
                        options: ["Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef", "Andros Barrier Reef"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which is the southernmost capital city in the world?",
                        options: ["Wellington", "Canberra", "Santiago", "Cape Town"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["United States", "Russia", "China", "France"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the largest archipelago in the world?",
                        options: ["Philippines", "Indonesia", "Japan", "Malaysia"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which is the highest waterfall in the world?",
                        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has the most volcanoes?",
                        options: ["Indonesia", "Japan", "United States", "Italy"],
                        correct: 0,
                        difficulty: "hard"
                    }
                ]
            },
            technology: {
                easy: [
                    {
                        question: "What does CPU stand for?",
                        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which company developed the iPhone?",
                        options: ["Samsung", "Google", "Apple", "Microsoft"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What does HTML stand for?",
                        options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which company created the Android operating system?",
                        options: ["Apple", "Microsoft", "Google", "Samsung"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What does Wi-Fi stand for?",
                        options: ["Wireless Fidelity", "Wireless Finding", "Wireless Fixing", "Wireless Filing"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which social media platform is known for tweets?",
                        options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the brain of the computer called?",
                        options: ["RAM", "CPU", "Hard Drive", "Motherboard"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which company developed Windows operating system?",
                        options: ["Apple", "Google", "Microsoft", "IBM"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What does USB stand for?",
                        options: ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "Universal Storage Bus"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "Which device is used to point and click on a computer screen?",
                        options: ["Keyboard", "Scanner", "Mouse", "Printer"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the primary function of a router?",
                        options: ["Store data", "Print documents", "Connect to the internet", "Manage network traffic"],
                        correct: 3,
                        difficulty: "easy"
                    },
                    {
                        question: "Which of these is a web browser?",
                        options: ["Photoshop", "Chrome", "Word", "Excel"],
                        correct: 1,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "Which programming language was created by Guido van Rossum?",
                        options: ["Java", "Python", "C++", "JavaScript"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What does URL stand for?",
                        options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Which company developed the Android operating system?",
                        options: ["Apple", "Microsoft", "Google", "Samsung"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the name of the first electronic computer?",
                        options: ["ENIAC", "UNIVAC", "EDVAC", "COLOSSUS"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "What does DNS stand for?",
                        options: ["Domain Name System", "Digital Network Service", "Data Naming System", "Direct Network Security"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Which protocol is used to send emails?",
                        options: ["HTTP", "FTP", "SMTP", "TCP"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the maximum length of a tweet on Twitter?",
                        options: ["140 characters", "280 characters", "160 characters", "240 characters"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which company developed the JavaScript programming language?",
                        options: ["Microsoft", "Netscape", "Sun Microsystems", "Apple"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What does HTTP stand for?",
                        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HyperText Transport Protocol"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Which cloud service is provided by Amazon?",
                        options: ["Azure", "Google Cloud", "AWS", "Dropbox"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the primary language used for web development?",
                        options: ["Java", "Python", "JavaScript", "C++"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which company developed the React library?",
                        options: ["Google", "Facebook", "Microsoft", "Apple"],
                        correct: 1,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "What is the name of the first electronic computer?",
                        options: ["ENIAC", "UNIVAC", "EDVAC", "COLOSSUS"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What does DNS stand for?",
                        options: ["Domain Name System", "Digital Network Service", "Data Naming System", "Direct Network Security"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which algorithm is used for finding the shortest path in a graph?",
                        options: ["Dijkstra's Algorithm", "Binary Search", "Merge Sort", "Quick Sort"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the time complexity of binary search?",
                        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which data structure uses LIFO principle?",
                        options: ["Queue", "Tree", "Stack", "Graph"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the Turing test used for?",
                        options: ["Testing computer speed", "Testing artificial intelligence", "Testing network security", "Testing database performance"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which encryption algorithm is used in Bitcoin?",
                        options: ["RSA", "AES", "SHA-256", "DES"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the name of the first computer programmer?",
                        options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "John von Neumann"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which programming paradigm is based on lambda calculus?",
                        options: ["Object-oriented", "Procedural", "Functional", "Logic"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the maximum value that can be represented by a 32-bit signed integer?",
                        options: ["2,147,483,647", "4,294,967,295", "1,073,741,824", "32,767"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which company developed the Kotlin programming language?",
                        options: ["Google", "JetBrains", "Microsoft", "Apple"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the name of the first computer bug?",
                        options: ["Moth", "Fly", "Beetle", "Ant"],
                        correct: 0,
                        difficulty: "hard"
                    }
                ]
            },
            sports: {
                easy: [
                    {
                        question: "How many players are on a basketball team on the court?",
                        options: ["4", "5", "6", "7"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which country won the FIFA World Cup in 2018?",
                        options: ["Germany", "Brazil", "France", "Argentina"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "In tennis, what score comes after 40?",
                        options: ["Game", "Deuce", "Advantage", "Set"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "How many rings are in the Olympic symbol?",
                        options: ["4", "5", "6", "7"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which sport is played at Wimbledon?",
                        options: ["Golf", "Tennis", "Cricket", "Rugby"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "How many players are on a volleyball team?",
                        options: ["4", "6", "8", "10"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "In which sport would you perform a slam dunk?",
                        options: ["Tennis", "Basketball", "Football", "Baseball"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "How many minutes are in a regulation NBA basketball game?",
                        options: ["40", "48", "60", "90"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which country hosted the 2016 Summer Olympics?",
                        options: ["China", "Brazil", "United Kingdom", "Russia"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "In baseball, how many strikes make an out?",
                        options: ["1", "2", "3", "4"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which sport uses a puck?",
                        options: ["Basketball", "Hockey", "Soccer", "Tennis"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "How many holes are there in a standard golf course?",
                        options: ["16", "18", "20", "22"],
                        correct: 1,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "How many rings are in the Olympic symbol?",
                        options: ["4", "5", "6", "7"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which sport is played at Wimbledon?",
                        options: ["Golf", "Tennis", "Cricket", "Rugby"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "How many players are on a volleyball team?",
                        options: ["4", "6", "8", "10"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which country has won the most Olympic gold medals in swimming?",
                        options: ["Russia", "China", "United States", "Australia"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "In which sport would you perform a slam dunk?",
                        options: ["Tennis", "Basketball", "Football", "Baseball"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which boxer was known as 'The Greatest'?",
                        options: ["Mike Tyson", "Muhammad Ali", "Sugar Ray Robinson", "Joe Louis"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "How many players are on a cricket team?",
                        options: ["9", "10", "11", "12"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which country won the first FIFA World Cup in 1930?",
                        options: ["Argentina", "Brazil", "Uruguay", "Italy"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "In which sport is the Stanley Cup awarded?",
                        options: ["Basketball", "Baseball", "Hockey", "Football"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which tennis player has won the most Grand Slam singles titles?",
                        options: ["Rafael Nadal", "Novak Djokovic", "Roger Federer", "Pete Sampras"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "How long is a marathon in kilometers?",
                        options: ["40.195 km", "42.195 km", "45.195 km", "50.195 km"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which sport is known as 'America's pastime'?",
                        options: ["Basketball", "Football", "Baseball", "Hockey"],
                        correct: 2,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "Which country has won the most Olympic gold medals in swimming?",
                        options: ["Russia", "China", "United States", "Australia"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "In which sport would you perform a slam dunk?",
                        options: ["Tennis", "Basketball", "Football", "Baseball"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which athlete has won the most Olympic medals?",
                        options: ["Michael Phelps", "Larisa Latynina", "Paavo Nurmi", "Mark Spitz"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "In which year were the Summer Olympics first held in Los Angeles?",
                        options: ["1932", "1984", "1996", "2008"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has won the most FIFA World Cups?",
                        options: ["Germany", "Brazil", "Argentina", "Italy"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Who holds the record for the most home runs in Major League Baseball?",
                        options: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which Formula One driver has won the most World Championships?",
                        options: ["Ayrton Senna", "Alain Prost", "Michael Schumacher", "Lewis Hamilton"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "In which sport would you perform a triple axel?",
                        options: ["Gymnastics", "Figure Skating", "Diving", "Skiing"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country won the first Cricket World Cup in 1975?",
                        options: ["Australia", "England", "West Indies", "India"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Who was the first person to run a mile in under 4 minutes?",
                        options: ["Roger Bannister", "John Landy", "Wes Santee", "Jim Ryun"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which sport is played on the largest field?",
                        options: ["Football", "Rugby", "Soccer", "American Football"],
                        correct: 3,
                        difficulty: "hard"
                    },
                    {
                        question: "Which country has won the most medals in Winter Olympics history?",
                        options: ["United States", "Norway", "Germany", "Canada"],
                        correct: 1,
                        difficulty: "hard"
                    }
                ]
            },
            entertainment: {
                easy: [
                    {
                        question: "Which movie won the Academy Award for Best Picture in 2020?",
                        options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Who directed the movie 'Inception'?",
                        options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which streaming service produced 'Stranger Things'?",
                        options: ["Hulu", "Amazon Prime", "Netflix", "Disney+"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Who wrote the Harry Potter book series?",
                        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which band sang 'Bohemian Rhapsody'?",
                        options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the highest-grossing film of all time?",
                        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which actor played the character Neo in The Matrix?",
                        options: ["Keanu Reeves", "Will Smith", "Johnny Depp", "Leonardo DiCaprio"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "In which city is the Hollywood Walk of Fame located?",
                        options: ["New York", "Las Vegas", "Los Angeles", "Chicago"],
                        correct: 2,
                        difficulty: "easy"
                    },
                    {
                        question: "Which animated movie features a character named Simba?",
                        options: ["Finding Nemo", "The Lion King", "Aladdin", "Beauty and the Beast"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Who is known as the 'King of Pop'?",
                        options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
                        correct: 1,
                        difficulty: "easy"
                    },
                    {
                        question: "Which movie features the character Jack Sparrow?",
                        options: ["Pirates of the Caribbean", "Indiana Jones", "Treasure Island", "Blackbeard"],
                        correct: 0,
                        difficulty: "easy"
                    },
                    {
                        question: "What is the name of the fictional wizarding school in Harry Potter?",
                        options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
                        correct: 0,
                        difficulty: "easy"
                    }
                ],
                medium: [
                    {
                        question: "Who wrote the Harry Potter book series?",
                        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which band sang 'Bohemian Rhapsody'?",
                        options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the highest-grossing film of all time?",
                        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which actor played the character Neo in The Matrix?",
                        options: ["Keanu Reeves", "Will Smith", "Johnny Depp", "Leonardo DiCaprio"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "In which city is the Hollywood Walk of Fame located?",
                        options: ["New York", "Las Vegas", "Los Angeles", "Chicago"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which movie director is known for the 'Three Laws of Robotics'?",
                        options: ["Stanley Kubrick", "Ridley Scott", "Isaac Asimov", "James Cameron"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "What was the first feature-length animated movie ever released?",
                        options: ["Pinocchio", "Fantasia", "Snow White and the Seven Dwarfs", "Bambi"],
                        correct: 2,
                        difficulty: "medium"
                    },
                    {
                        question: "Which movie franchise features characters named Darth Vader and Luke Skywalker?",
                        options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "E.T."],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Who played the lead role of Forrest Gump?",
                        options: ["Tom Hanks", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "Which movie won the first Academy Award for Best Picture?",
                        options: ["Wings", "The Jazz Singer", "Sunrise", "7th Heaven"],
                        correct: 0,
                        difficulty: "medium"
                    },
                    {
                        question: "What is the name of the fictional continent where Game of Thrones takes place?",
                        options: ["Middle-earth", "Westeros", "Narnia", "Hyrule"],
                        correct: 1,
                        difficulty: "medium"
                    },
                    {
                        question: "Which actress played the lead role in the movie 'Breakfast at Tiffany's'?",
                        options: ["Marilyn Monroe", "Audrey Hepburn", "Grace Kelly", "Elizabeth Taylor"],
                        correct: 1,
                        difficulty: "medium"
                    }
                ],
                hard: [
                    {
                        question: "Which actor played the character Neo in The Matrix?",
                        options: ["Keanu Reeves", "Will Smith", "Johnny Depp", "Leonardo DiCaprio"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "In which city is the Hollywood Walk of Fame located?",
                        options: ["New York", "Las Vegas", "Los Angeles", "Chicago"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which movie director is known for the 'Three Laws of Robotics'?",
                        options: ["Stanley Kubrick", "Ridley Scott", "Isaac Asimov", "James Cameron"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "What was the first feature-length animated movie ever released?",
                        options: ["Pinocchio", "Fantasia", "Snow White and the Seven Dwarfs", "Bambi"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which movie franchise features characters named Darth Vader and Luke Skywalker?",
                        options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "E.T."],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "Who played the lead role of Forrest Gump?",
                        options: ["Tom Hanks", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which movie won the first Academy Award for Best Picture?",
                        options: ["Wings", "The Jazz Singer", "Sunrise", "7th Heaven"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the name of the fictional detective created by Sir Arthur Conan Doyle?",
                        options: ["Hercule Poirot", "Sam Spade", "Sherlock Holmes", "Philip Marlowe"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which author wrote the novel '1984'?",
                        options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Philip K. Dick"],
                        correct: 2,
                        difficulty: "hard"
                    },
                    {
                        question: "Which movie director is known for films like 'Pulp Fiction' and 'Kill Bill'?",
                        options: ["Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "Steven Spielberg"],
                        correct: 1,
                        difficulty: "hard"
                    },
                    {
                        question: "What is the name of the fictional wizarding school in Harry Potter?",
                        options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
                        correct: 0,
                        difficulty: "hard"
                    },
                    {
                        question: "Which movie features the quote 'Here's looking at you, kid'?",
                        options: ["Casablanca", "Gone with the Wind", "The Wizard of Oz", "Citizen Kane"],
                        correct: 0,
                        difficulty: "hard"
                    }
                ]
            }
        };

        // Select questions based on category and difficulty
        // Now each category has enough questions to fulfill any request without pulling from other categories
        let selectedQuestions = [];
        
        // For specific category
        const categoryQuestions = questionSets[this.category] || questionSets.general;
        if (this.difficulty === 'mixed') {
            // For mixed difficulty, include all difficulties from the category
            Object.values(categoryQuestions).forEach(difficultyQuestions => {
                selectedQuestions.push(...difficultyQuestions);
            });
        } else {
            // For specific difficulty, include only that difficulty
            selectedQuestions = categoryQuestions[this.difficulty] || categoryQuestions.medium || [];
        }

        // Ensure we have enough questions
        const availableQuestions = selectedQuestions.length;
        console.log(`Available questions: ${availableQuestions} for category: ${this.category}, difficulty: ${this.difficulty}`);
        
        // Shuffle questions using Fisher-Yates algorithm
        const shuffled = [...selectedQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // Take only the requested number of questions (no repetition)
        this.questions = shuffled.slice(0, this.questionCount);
        
        console.log(`Generated ${this.questions.length} unique questions for ${this.category} category with ${this.difficulty} difficulty (requested: ${this.questionCount})`);
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        
        this.questionText.textContent = question.question;
        this.questionNumber.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;
        this.categoryBadge.textContent = this.categoryNames[this.category] || 'General Knowledge';
        this.difficultyBadge.textContent = this.difficultyNames[this.difficulty] || 'Medium';
        
        // Clear previous answers
        this.answersContainer.innerHTML = '';
        
        // Create answer options
        question.options.forEach((option, index) => {
            const answerElement = document.createElement('button');
            answerElement.className = 'answer-option';
            answerElement.textContent = option;
            answerElement.dataset.index = index;
            
            // Check if this answer was previously selected
            if (this.userAnswers[this.currentQuestion] === index) {
                answerElement.classList.add('selected');
            }
            
            // In review mode, show correct/incorrect answers
            if (this.isReviewMode) {
                if (index === question.correct) {
                    answerElement.classList.add('correct');
                } else if (this.userAnswers[this.currentQuestion] === index && index !== question.correct) {
                    answerElement.classList.add('incorrect');
                }
                answerElement.disabled = true;
            } else {
                answerElement.addEventListener('click', () => this.selectAnswer(index));
            }
            
            this.answersContainer.appendChild(answerElement);
        });
        
        this.updateNavigationButtons();
    }
    
    selectAnswer(selectedIndex) {
        // Remove previous selection
        const previousSelected = this.answersContainer.querySelector('.answer-option.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
        
        // Add selection to clicked option
        const selectedOption = this.answersContainer.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Store the answer
        this.userAnswers[this.currentQuestion] = selectedIndex;
        
        this.updateNavigationButtons();
        
        // Removed auto-advance functionality - user must click Next button
    }
    
    startTimer() {
        this.timeLeft = 15;
        this.timerElement.textContent = this.timeLeft;
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerElement.textContent = this.timeLeft;
            
            // Add visual effect when time is running low
            if (this.timeLeft <= 5) {
                this.timerElement.style.color = '#e53e3e';
                this.timerElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.timerElement.style.transform = 'scale(1)';
                }, 300);
            } else {
                this.timerElement.style.color = '#2d3748';
            }
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                // Auto-select if no answer was chosen
                if (this.userAnswers[this.currentQuestion] === undefined) {
                    this.selectAnswer(-1); // -1 indicates no answer
                }
                // User still needs to click Next button to proceed
            }
        }, 1000);
    }
    
    updateNavigationButtons() {
        const hasAnswer = this.userAnswers[this.currentQuestion] !== undefined;
        const isLastQuestion = this.currentQuestion === this.questions.length - 1;
        
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = !hasAnswer;
        
        // Always show the Next button when an answer is selected
        this.nextBtn.style.display = 'inline-flex';
        
        // Show Submit button only on the last question when an answer is selected
        if (isLastQuestion && hasAnswer) {
            this.submitBtn.style.display = 'inline-flex';
        } else {
            this.submitBtn.style.display = 'none';
        }
    }
    
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
            this.startTimer();
        } else if (this.currentQuestion === this.questions.length - 1) {
            // On the last question, show the submit button
            this.updateNavigationButtons();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
            this.startTimer();
        }
    }
    
    submitQuiz() {
        clearInterval(this.timer);
        this.calculateScore();
        this.showResults();
    }
    
    calculateScore() {
        this.score = 0;
        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                this.score++;
            }
        });
    }
    
    showResults() {
        this.questionContainer.style.display = 'none';
        this.resultsContainer.style.display = 'block';
        
        // Ensure header home button is visible
        this.headerHomeBtn.style.display = 'inline-block';
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.scorePercentage.textContent = `${percentage}%`;
        this.scoreText.textContent = `${this.score} out of ${this.questions.length}`;
        
        // Display performance message
        let message = '';
        if (percentage >= 90) {
            message = '🎉 Outstanding! You have excellent knowledge in this area!';
        } else if (percentage >= 70) {
            message = '👍 Great job! You have good knowledge with room for improvement.';
        } else if (percentage >= 50) {
            message = '📚 Not bad! Consider reviewing the material to improve your score.';
        } else {
            message = '💪 Keep studying! Practice makes perfect.';
        }
        this.performanceMessage.textContent = message;
        
        // Add confetti effect for high scores
        if (percentage >= 70) {
            this.triggerConfetti();
        }
    }
    
    retakeQuiz() {
        clearInterval(this.timer);
        this.startQuiz();
    }
    
    goHome() {
        // Reset all states
        clearInterval(this.timer);
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isReviewMode = false;
        this.questions = [];
        
        // Show welcome screen and hide others
        this.welcomeScreen.style.display = 'block';
        this.questionContainer.style.display = 'none';
        this.resultsContainer.style.display = 'none';
        
        // Hide header home button
        this.headerHomeBtn.style.display = 'none';
        
        // Reset timer
        this.timeLeft = 15;
        this.timerElement.textContent = this.timeLeft;
        this.timerElement.style.color = '#2d3748';
        
        // Remove any back to results button if it exists
        const backBtn = document.querySelector('.back-to-results');
        if (backBtn) {
            backBtn.remove();
        }
    }
    
    reviewAnswers() {
        clearInterval(this.timer);
        this.isReviewMode = true;
        this.currentQuestion = 0;
        
        this.questionContainer.style.display = 'block';
        this.resultsContainer.style.display = 'none';
        
        this.displayQuestion();
        
        // Update navigation for review mode
        this.nextBtn.disabled = false;
        this.prevBtn.disabled = false;
        this.submitBtn.style.display = 'none';
        this.nextBtn.style.display = 'inline-flex';
        
        // Add back to results button
        this.quizControls = document.querySelector('.quiz-controls');
        if (!this.quizControls.querySelector('.back-to-results')) {
            const backBtn = document.createElement('button');
            backBtn.className = 'btn btn-secondary back-to-results';
            backBtn.textContent = 'Back to Results';
            backBtn.addEventListener('click', () => this.showResults());
            this.quizControls.appendChild(backBtn);
        }
    }
    
    addConfettiEffect() {
        // Create confetti container
        const confettiContainer = document.createElement('div');
        confettiContainer.id = 'confetti-container';
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '1000';
        confettiContainer.style.display = 'none';
        document.body.appendChild(confettiContainer);
    }
    
    triggerConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        if (!confettiContainer) return;
        
        confettiContainer.style.display = 'block';
        confettiContainer.innerHTML = '';
        
        // Create confetti pieces
        const colors = ['#667eea', '#764ba2', '#ff6b6b', '#ffa500', '#28a745', '#20c997', '#0dcaf0', '#6f42c1'];
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 12 + 5 + 'px';
            confetti.style.height = Math.random() * 12 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = Math.random();
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            confettiContainer.appendChild(confetti);
            
            // Animate confetti
            const animation = confetti.animate([
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${Math.random() * 100 - 50}px, 100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }
        
        // Hide confetti after animation
        setTimeout(() => {
            confettiContainer.style.display = 'none';
        }, 5000);
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});

// Add keyboard navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const quiz = window.quizApp;
        if (!quiz) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                if (!quiz.prevBtn.disabled) {
                    quiz.previousQuestion();
                }
                break;
            case 'ArrowRight':
                if (!quiz.nextBtn.disabled) {
                    quiz.nextQuestion();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                const options = document.querySelectorAll('.answer-option:not([disabled])');
                if (options[optionIndex]) {
                    options[optionIndex].click();
                }
                break;
        }
    });
}

// Initialize keyboard navigation
addKeyboardNavigation();