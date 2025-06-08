import backgroundImage from "../assets/Blogimg/hitesh-choudhary-JNxTZzpHmsI-unsplash.jpg";
import backgroundImage1 from "../assets/Blogimg/kaur-kristjan-CpPF4W5PB1c-unsplash.jpg"
import backgroundImage2 from "../assets/Blogimg/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg"
import backgroundImage4 from "../assets/Blogimg/jorge-ramirez-MceA9kSze0U-unsplash.jpg"
import backgroundImage5 from "../assets/Blogimg/flyd-mT7lXZPjk7U-unsplash.jpg"
import backgroundImage6 from "../assets/Blogimg/d-c-tr-nh-BI5JpNK5sE0-unsplash.jpg"






export const blogData = [
  {
    id: 1,
    title: "Blockchain Technology",
    imgurl: backgroundImage, // ✅ Fixed: Use string, not object
    content: "Blockchain is revolutionizing how digital transactions are validated and stored securely...",
    fullContent: "Blockchain is a decentralized ledger system that records transactions across multiple systems to prevent fraud. It is widely used in finance, healthcare, and voting systems for transparency and security."
  },
  {
    id: 2,
    title: "Dark Web Explained",
    imgurl: backgroundImage1,
    content: "The Dark Web is a hidden part of the internet not indexed by search engines...",
    fullContent: "The Dark Web requires special tools like Tor to access. While it provides anonymity, it's also associated with illegal activities. Understanding its structure helps in cybersecurity and threat intelligence."
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    imgurl:backgroundImage2,
    content: "AI is changing industries with smart automation and decision-making...",
    fullContent: "Artificial Intelligence allows machines to learn from data and make decisions. Applications include self-driving cars, chatbots, facial recognition, and healthcare diagnostics."
  },
  {
    id: 4,
    title: "Internet of Things (IoT)",
    imgurl: backgroundImage4,
    content: "IoT connects everyday objects to the internet for real-time control and monitoring...",
    fullContent: "The Internet of Things links devices like smart TVs, thermostats, and cars to the internet. It enables data collection, automation, and smart homes. Security remains a major concern in IoT networks."
  },
  {
    id: 5,
    title: "Cybersecurity Threats in 2025",
    imgurl: backgroundImage5,
    content: "New cyber threats are evolving rapidly. Learn how to stay protected...",
    fullContent: "Cybersecurity includes practices and tools to protect systems from breaches. Emerging threats include ransomware, phishing-as-a-service, and AI-powered malware."
  },
  {
    id: 6,
    title: "5G Technology",
    imgurl:backgroundImage6,
    content: "5G brings ultra-fast internet and low latency. Here’s how it works...",
    fullContent: "5G is the fifth generation of wireless technology, offering gigabit speeds and near-zero latency. It supports smart cities, remote surgeries, and autonomous vehicles."
  },
];

export default blogData;
