const userMessage = [
    ["hi", "hey", "hello", "howdy", "hi there"],
    ["sure", "yes", "no", "maybe", "definitely"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you", "appreciate it", "thank you so much"],
    ["what", "why", "how", "where", "when", "who"],
    ["what is cybersecurity", "what is cyber security", "explain cybersecurity", "define cybersecurity"],
    ["what are the common cyber threats", "list cyber threats", "types of cyber threats"],
    ["how can I protect my computer from hackers", "computer security tips", "protect computer from hackers"],
    ["what is phishing", "how to identify phishing emails", "phishing definition"],
    ["what is malware", "types of malware", "define malware"],
    ["what is encryption", "how does encryption work", "explain encryption"],
    ["gdpr", "privacy policy", "data protection", "gdpr compliance","what is gdpr", "explain gdpr", "gdpr definition"],
    ["why is gdpr important", "importance of gdpr", "gdpr significance"],
    ["what are my rights under gdpr", "gdpr rights", "rights under gdpr"],
    ["gdpr compliance tips", "ensure gdpr compliance"],
    ["what is a privacy policy", "importance of a privacy policy", "create a privacy policy", "privacy policy definition"],
    ["why do websites ask for consent", "cookie consent", "websites asking for consent"],
    ["how to protect my privacy online", "online privacy tips", "protect privacy online"],
    ["what is personal data", "define personal data", "types of personal data"],
    ["what is data protection", "importance of data protection", "data protection definition"],
    ["how does GDPR affect businesses", "GDPR for businesses", "impact of GDPR on companies"],
    ["how can I protect my personal data", "data protection tips", "privacy protection methods"],
    ["why is data privacy important", "importance of privacy", "value of data protection"],
    ["can you explain consent under GDPR", "GDPR consent rules", "understanding consent"],
    ["what is the difference between GDPR and other data protection laws", "comparing GDPR with other privacy laws"],
    ["tell me about privacy by design", "privacy by design principles", "implementing privacy by design"],
    ["how does GDPR affect social media", "GDPR and social media platforms", "social media under GDPR rules"],
    ["what is the role of a Data Protection Officer (DPO)", "DPO responsibilities", "hiring a DPO"],
    ["GDPR and artificial intelligence", "AI and GDPR compliance", "GDPR implications for AI technologies"],
];

const botReply = [
    ["Hello!", "Hi there!", "Hey!", "Hi!", "Greetings!"],
    ["Alright", "Got it", "Sure thing", "Understood", "Absolutely"],
    ["I am just a bot", "I am a bot. What are you?", "I'm a bot here to help"],
    ["What about?", "Once upon a time...", "Tell me more", "Interesting!"],
    ["You're welcome", "No problem", "Anytime", "Glad to help"],
    ["Hmm...", "Interesting question", "Let's think about that", "That's a tough one"],
    ["Cybersecurity refers to the practice of protecting systems and networks with important data from digital attacks."],
    ["Common cyber threats include malware, phishing, ransomware, and DDoS attacks."],
    ["You can protect your computer by using strong passwords, keeping software updated, and using antivirus software."],
    ["Phishing is a type of cyber attack where attackers impersonate legitimate entities to trick individuals into revealing sensitive information."],
    ["Malware is malicious software designed to disrupt, damage, or gain unauthorized access to computer systems."],
    ["Encryption is the process of converting data into a code to prevent unauthorized access. It works by using cryptographic algorithms to scramble data."],
    ["GDPR stands for General Data Protection Regulation. It's a regulation that aims to protect the personal data and privacy of individuals within the European Union and the European Economic Area."],
    ["GDPR is important because it gives individuals more control over their personal data and requires organizations to handle data more responsibly to protect privacy."],
    ["Under GDPR, individuals have rights such as the right to access, rectification, erasure, and portability of their personal data."],
    ["To ensure GDPR compliance, organizations should implement measures such as obtaining consent for data processing, implementing data protection measures, and appointing a Data Protection Officer (DPO) if necessary."],
    ["A privacy policy is a legal document that explains how a website or app collects, uses, shares, and protects the personal information of its users. It's essential for transparency and GDPR compliance."],
    ["Websites ask for consent to comply with regulations like GDPR and inform users about the types of cookies used, their purposes, and how users can manage them."],
    ["To protect your privacy online, you can use strong, unique passwords, enable two-factor authentication, regularly update your software, and avoid sharing sensitive information on public networks. Remember to be cautious about the information you share online and review privacy settings on social media platforms and other online accounts."],
    ["Personal data is any information that relates to an identified or identifiable individual, such as name, email address, phone number, or IP address."],
    ["Data protection is the process of safeguarding important information from corruption, compromise, or loss, ensuring its integrity and confidentiality."],
    ["GDPR affects businesses by requiring them to implement measures to protect the personal data they process, obtain consent for data processing, and adhere to principles of data protection."],
    ["You can protect your personal data by using strong passwords, enabling two-factor authentication, being cautious about sharing personal information online, and reviewing privacy settings on websites and apps."],
    ["Data privacy is important because it helps protect individuals' rights, maintains trust in organizations, and prevents misuse of personal information."],
    ["Consent under GDPR requires clear, informed, and unambiguous agreement from individuals for their data to be processed."],
    ["A privacy policy is a legal document that explains how a website or app collects, uses, shares, and protects the personal information of its users."],
    ["GDPR defines personal data as any information relating to an identified or identifiable natural person."],
    ["GDPR penalties for non-compliance can include fines of up to €20 million or 4% of annual global turnover, whichever is higher."],
    ["To make your website GDPR compliant, you can implement measures such as obtaining consent for data processing, updating privacy policies, and securing user data."],
    ["Consent under GDPR requires clear, informed, and unambiguous agreement from individuals for their data to be processed."],
    ["While GDPR shares similarities with other data protection laws, it offers stronger protections for individuals' privacy rights and imposes stricter requirements on organizations."],
    ["Privacy by design is an approach to system design that prioritizes privacy and data protection from the outset, rather than as an afterthought."],
    ["GDPR affects social media platforms by requiring them to obtain consent for data processing, provide privacy settings, and ensure transparency in data practices."],
    ["A Data Protection Officer (DPO) is responsible for overseeing an organization's data protection strategy, ensuring compliance with GDPR, and acting as a point of contact for data subjects and supervisory authorities."],
    ["GDPR poses challenges and opportunities for AI technologies, requiring organizations to ensure transparency, accountability, and fairness in AI-driven decision-making processes."],
];



const alternative = [
    "Hmm, interesting. Tell me more.",
    "I'm not sure I understand. Can you clarify?",
    "That's a great question! Let me find the answer for you.",
    "I'm here to help with any GDPR or privacy-related questions you have.",
    "Let's explore this topic further.",
    "I'm listening. Go ahead.",
    "That's a complex issue. Let's break it down together.",
];

const options = {
    "Cybersecurity": [
        "What are the common cyber threats",
        "How can I protect my computer from hackers",
        "What is phishing",
        "What is ransomware",
        "How do firewalls enhance cybersecurity",
        "What are the best practices for password security",
        "What is two-factor authentication",
        "How does antivirus software work",
        "What is social engineering",
        "How to secure my Wi-Fi network",
        "What are the dangers of public Wi-Fi",
        "How to recognize and avoid online scams",
        "What is a VPN and how does it improve online security",
        "How does data encryption contribute to cybersecurity",
        "What are the risks of IoT devices",
        "How to secure my smartphone from cyber threats",
        "What are the steps to take after a data breach",
        "How to create a strong cybersecurity culture in an organization",
        "What is penetration testing and why is it important",
        "How to securely dispose of electronic devices",
        "What are the security implications of cloud computing",
        "What is end-to-end encryption and why is it important",
        "How to detect and prevent insider threats",
        "What are the security considerations for remote work",
        "How to stay safe while browsing the internet"
    ],
    "Malware": [
        "How to remove malware",
        "How does malware spread",
        "Signs of malware infection"
    ],
    "Encryption": [
        "What is encryption",
        "How does encryption work",
        "Types of encryption algorithms",
        "Importance of encryption"
    ],
    "General Information": [
        "Tell me about GDPR",
        "What are my rights under GDPR",
        "Why is data privacy important",
    ],
    "Business Compliance": [
        "How does GDPR affect businesses",
        "How can I make my website GDPR compliant",
        "GDPR certification",
    ],
    "Consumer Rights": [
        "How can I protect my personal data",
        "How do I report a GDPR violation",
        "GDPR and social media platforms",
    ],
    "Technical Aspects": [
        "How does GDPR define personal data",
        "What is the role of a Data Protection Officer (DPO)",
        "GDPR and artificial intelligence",
    ],
};

const optionsAnswer = {
    "How to remove malware": "To remove malware from your computer, you can follow these steps:\n1. Update your antivirus software and run a full system scan.\n2. Use a malware removal tool recommended by security experts.\n3. Boot your computer into Safe Mode and run another scan.\n4. Manually delete any suspicious files or programs.\n5. Reset your web browsers to remove any malware-related extensions or settings.\n6. Restore your system to a previous clean state using system restore points (if available).\n7. After removing the malware, ensure your system is fully updated and install security patches to prevent future infections.",
    "How does malware spread": "Malware can spread through various vectors, including:\n1. Email attachments: Malicious files attached to emails can infect your system when opened.\n2. Infected websites: Visiting compromised websites can result in drive-by downloads of malware.\n3. Removable media: USB drives or external hard drives can carry malware from one system to another.\n4. Software vulnerabilities: Exploiting security flaws in software can allow malware to infect systems.\n5. Social engineering: Trickery or deception can persuade users to download and install malware unknowingly.\n6. Network vulnerabilities: Weaknesses in network security can be exploited to spread malware across connected devices.",
    "Signs of malware infection": "Common signs of a malware infection include:\n1. Sluggish performance: Noticeable slowdowns in system speed or responsiveness.\n2. Pop-up ads: Unexpected and intrusive advertisements appearing on your screen.\n3. Unexplained changes: Settings, desktop backgrounds, or browser homepages changing without your input.\n4. Crashes and errors: Frequent crashes, freezes, or error messages occurring unexpectedly.\n5. High network activity: Unusual spikes in network traffic or data usage.\n6. Missing files: Files or folders disappearing from your system without explanation.\n7. Unauthorized access: Suspicious logins or activity indicating someone else may have access to your system."
};

const synth = window.speechSynthesis;

// Define GDPR and privacy-related quiz questions and answers
const gdprQuizQuestions = [
    {
        question: "What does GDPR stand for?",
        options: ["General Data Protection Regulation", "Global Data Privacy Regulation", "General Data Privacy Rule", "Global Data Protection Regulation"],
        correctAnswer: "General Data Protection Regulation"
    },
    {
        question: "Which of the following is considered personal data under GDPR?",
        options: ["Name", "IP Address", "Email Address", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the maximum fine for GDPR non-compliance?",
        options: ["€10 million", "€20 million", "€50 million", "€100 million"],
        correctAnswer: "€20 million"
    }
    // Add more GDPR and privacy-related questions as needed
];

let currentQuestionIndex = 0; // Track the current question index
let quizInProgress = false; // Track if the quiz is currently in progress

// Function to process user messages and start the quiz if requested
function processUserMessage(message) {
    const input = message.toLowerCase().trim();
    console.log("User input:", input); // Log the user input to see if it's correctly captured
    if (input.includes("start the gdpr quiz") || input.includes("take quiz")) {
        console.log("Starting quiz..."); // Log that the quiz should start
        startGDPRQuiz();
    } else {
        console.log("Not starting quiz."); // Log that the quiz should not start
        // Process other user messages as usual
        output(input);
    }
}

// Function to start the GDPR and privacy-related quiz
function startGDPRQuiz() {
    // Check if the quiz is not already in progress
    if (!quizInProgress) {
        quizInProgress = true;
        displayGDPRQuizQuestion();
    } else {
        displayMessage("The quiz has already started.");
    }
}

// Function to display the GDPR and privacy-related quiz question and options
function displayGDPRQuizQuestion() {
    const currentQuestion = gdprQuizQuestions[currentQuestionIndex];
    const questionHTML = `
        <div class="quiz-question">${currentQuestion.question}</div>
        <div class="quiz-options">
            ${currentQuestion.options.map((option, index) => `
                <button onclick="handleGDPRQuizAnswer(${index})">${option}</button>
            `).join('')}
        </div>
    `;
    displayMessage(questionHTML);
}

// Function to handle user's answer to the GDPR and privacy-related quiz question
function handleGDPRQuizAnswer(selectedIndex) {
    const currentQuestion = gdprQuizQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[selectedIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        displayMessage("Correct! 🎉");
    } else {
        displayMessage(`Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`);
    }
    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < gdprQuizQuestions.length) {
        setTimeout(displayGDPRQuizQuestion, 2000); // Display next question after 2 seconds
    } else {
        displayMessage("GDPR and privacy-related quiz ended. Thank you for participating!");
        quizInProgress = false;
    }
}

// Function to display message in the chat interface
function displayMessage(message) {
    const mainDiv = document.getElementById("message-section");
    let botDiv = document.createElement("div");
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span class="bot-response">${message}</span>`;
    mainDiv.appendChild(botDiv);
    scrollToBottom();
}

// Function to scroll to the bottom of the chat interface
function scrollToBottom() {
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
}

// Example function to simulate user input (replace with actual user input handling)
function simulateUserInput() {
    const userMessage = document.getElementById("user-input").value;
    processUserMessage(userMessage);
}

// Example function to display bot output (replace with actual output handling)
function output(message) {
    displayMessage(message);
}


function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-aus";
    synth.speak(utterance);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    if (input !== "") {
        processInput(input);
        inputField.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            sendMessage();
        }
    });
});

function generateOptionsHTML(topic) {
    const optionList = options[topic];
    if (optionList) {
        return optionList.map((option, index) => `<button onclick="handleOptionClick('${topic}', ${index})">${option}</button>`).join('');
    } else {
        return "Sorry, options not available for this topic.";
    }
}

function handleOptionClick(topic, index) {
    const optionList = options[topic];
    if (optionList && optionList[index]) {
        const selectedOption = optionList[index];
        const answer = optionsAnswer[selectedOption];
        if (answer) {
            displayAnswer(answer);
        } else {
            console.error("Answer not available for this option");
        }
    } else {
        console.error("Option not available");
    }
}

function processInput(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
        .replace(/[\W_]/g, " ")
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .trim();

    if (text.includes("start quiz") || text.includes("start the gdpr quiz") || text.includes("take quiz")) {
        startGDPRQuiz(); // Start the quiz
    } else {
        let response = compareInput(text);
        if (response) {
            if (response.startsWith("Option:")) {
                // Extract the topic from the response
                const topic = response.split(":")[1].trim();
                // Generate options HTML for the given topic
                const optionsHTML = generateOptionsHTML(topic);
                displayOptions(optionsHTML);
            } else {
                displayAnswer(response);
            }
        } else {
            displayAnswer(alternative[Math.floor(Math.random() * alternative.length)]);
        }
    }
}

function compareInput(input) {
    // Check if the input matches any keys in optionsAnswer
    for (const key in optionsAnswer) {
        if (key.toLowerCase() === input) {
            return optionsAnswer[key];
        }
    }

    // If no match found in optionsAnswer, fall back to botReply
    for (let i = 0; i < userMessage.length; i++) {
        if (userMessage[i].includes(input)) {
            return botReply[i][Math.floor(Math.random() * botReply[i].length)];
        }
    }
    return null;
}

function displayAnswer(answer) {
    const mainDiv = document.getElementById("message-section");
    let botDiv = document.createElement("div");
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span class="bot-response">${answer}</span>`;
    mainDiv.appendChild(botDiv);
    speak(answer);
    scrollToBottom();
}

function displayOptions(optionsHTML) {
    const mainDiv = document.getElementById("message-section");
    let botDiv = document.createElement("div");
    botDiv.classList.add("message");
    botDiv.innerHTML = optionsHTML;
    mainDiv.appendChild(botDiv);
    scrollToBottom();
}

function scrollToBottom() {
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
}





