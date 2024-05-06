let words = [
    {
        word: "firewall",
        hint: "It acts as a barrier between a trusted internal network and untrusted external networks."
    },
    {
        word: "encryption",
        hint: "It involves converting data into a code to prevent unauthorized access."
    },
    {
        word: "password",
        hint: "It's a secret combination of characters used to gain access to a system."
    },
    {
        word: "vulnerability",
        hint: "It refers to weaknesses in a system that can be exploited by attackers."
    },
    {
        word: "authentication",
        hint: "It verifies the identity of a user or system attempting to access resources."
    },
    {
        word: "cyberattack",
        hint: "It's a deliberate attempt to exploit computer systems, networks, or devices."
    },
    {
        word: "malware",
        hint: "It's malicious software designed to disrupt, damage, or gain unauthorized access to a computer system."
    },
    {
        word: "phishing",
        hint: "It's a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication."
    },
    {
        word: "ransomware",
        hint: "It's a type of malware that encrypts files on a victim's computer and demands payment for their release."
    },
    {
        word: "biometrics",
        hint: "It's the measurement and statistical analysis of people's unique physical and behavioral characteristics."
    },
    {
        word: "consent",
        hint: "It's the permission granted by an individual for the processing of their personal data."
    },
    {
        word: "personal",
        hint: "It refers to data that relates to an identifiable person."
    },
    {
        word: "rights",
        hint: "These are the entitlements granted to individuals regarding their personal data under GDPR."
    },
    {
        word: "compliance",
        hint: "It's the adherence to laws, regulations, and standards related to data protection, such as GDPR."
    },
    {
        word: "data",
        hint: "It's information that is stored, processed, or transmitted by computer systems."
    },
    {
        word: "protection",
        hint: "It involves safeguarding personal data against unauthorized access, use, or disclosure."
    },
    {
        word: "transparency",
        hint: "It's the principle of providing individuals with clear and easily understandable information about how their personal data is processed."
    },
    {
        word: "violation",
        hint: "It's an infringement or breach of GDPR or other privacy regulations."
    },
    {
        word: "audit",
        hint: "It's a systematic examination of processes, controls, and practices related to data protection to ensure compliance with GDPR."
    },
    {
        word: "fine",
        hint: "It's a penalty imposed on organizations for non-compliance with GDPR, often based on the severity of the violation."
    },
    {
        word: "data subject",
        hint: "It refers to an individual whose personal data is being processed."
    },
    {
        word: "data controller",
        hint: "It's the entity that determines the purposes, conditions, and means of the processing of personal data."
    },
    {
        word: "data processor",
        hint: "It's an entity that processes personal data on behalf of the data controller."
    },
    {
        word: "data breach",
        hint: "It's a security incident where sensitive, protected, or confidential data is accessed, disclosed, or stolen without authorization."
    },
    {
        word: "privacy policy",
        hint: "It's a statement or legal document that discloses how an organization gathers, uses, manages, and protects the personal data of its customers and users."
    },
    {
        word: "data minimization",
        hint: "It's a principle of GDPR that requires organizations to limit the collection and processing of personal data to what is strictly necessary for the intended purpose."
    },
    {
        word: "data portability",
        hint: "It's the ability for individuals to obtain and reuse their personal data for their own purposes across different services."
    },
    {
        word: "privacy by design",
        hint: "It's an approach to system engineering that takes privacy into account throughout the entire development process."
    },
    {
        word: "right to be forgotten",
        hint: "It's the right for individuals to have their personal data erased or removed when it's no longer necessary for the purpose for which it was collected."
    },
    {
        word: "data protection impact assessment (DPIA)",
        hint: "It's a process to systematically analyze and evaluate the potential impact of processing operations on the protection of personal data."
    }
];

// Hint for the Hangman game
const hint = "This regulation aims to protect individuals' personal data and privacy.";

module.exports = { wordList, hint };