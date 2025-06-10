// src/pages/Blog-News/Blog-News-Components/blogData.ts
import Blog_HanzaS_1 from "@/assets/Blog-News-Section/blog_hanzas_1.webp";
import Blog_HanzaS_2 from "@/assets/Blog-News-Section/blog_hanzas_2.webp";
import Vihaas_Design from "@/assets/Blog-News-Section/vihaas_design.webp";
import solderingImage from "@/assets/Blog-News-Section/solderingimage.webp";
import Blog_Vihaas_Tech_1 from "@/assets/Blog-News-Section/blog_vihaas_tech_1.webp";
import Blog_Vihaas_Tech_2 from "@/assets/Blog-News-Section/blog_vihaas_tech_2.webp";
export const blogPosts = [
    {
        id: 1,
        category: "Women Empowerment",
        title: "HanzaS: Built by Women, Powered by Purpose",
        snippet: "At HanzaS, fashion is more than fabric. We’re not just selling clothes; we’re building a brand that celebrates women as creators, earners, and leaders.",
        image: Blog_HanzaS_1,
        link: "/blog-news/women_empowerment",
        bgColor: "bg-pink-50"
    },
    {
        id: 2,
        category: "Women Empowerment",
        title: "HanzaS: A Story Stitched with Strength",
        snippet: "A mother and daughter began with courage and craft in a Rajasthan village, creating a movement of over 200 artisans. Discover how HanzaS became a symbol of hope and heritage.",
        image: Blog_HanzaS_2,
        link: "/blog-news/women_empowerment_hanzas",
        bgColor: "bg-yellow-50"
    },
    {
        id: 3,
        category: "Youth Empowerment",
        title: "Vihaas Design Technologies: Empowering Himachal’s Tech Future",
        snippet: "Vihaas Design Technologies, based in Solan, is driving local innovation in telecommunications and product design. Their commitment to 'Make in India' supports job creation, skill-building, and a brighter future for Himachal’s youth.",
        image: Vihaas_Design, // Use your actual path/import!
        link: "/blog-news/vihaas-design-technologies",
        bgColor: "bg-blue-50",
    },
    {
        id: 4,
        category: "Skill Development Initiative",
        title: "Free Soldering Training for Youth – Learn, Build, Empower!",
        snippet: "Naipunayam Foundation now offers free, hands-on soldering training in Solan—open to all youth, with a monthly stipend and mentorship. No experience required—just enthusiasm to learn!",
        image: solderingImage, // Or your own downloaded image!
        link: "/blog-news/free-soldering-training",
        bgColor: "bg-green-50",
    },
    {
        id: 5,
        category: "Technical Education",
        title: "Vihaas Tech Pro: Real-World Learning for Next-Gen Engineers",
        snippet: "Bridging the gap between classroom theory and practical innovation, Vihaas Tech Pro is shaping the next generation of Himachal’s technical talent through mentorship, project-based learning, and hands-on industry experience.",
        image: Blog_Vihaas_Tech_1,
        link: "/blog-news/vihaas-tech-pro-1",
        bgColor: "bg-blue-50",
    },
    {
        id: 6,
        category: "Engineering Skills",
        title: "Building Future Innovators: Vihaas Tech Pro’s Training Modules",
        snippet: "Discover how Vihaas Tech Pro empowers students to master Embedded Systems, IoT, and Hardware Design through immersive, hands-on programs built in collaboration with industry experts.",
        image: Blog_Vihaas_Tech_2,
        link: "/blog-news/vihaas-tech-pro-2",
        bgColor: "bg-green-50",
    },
];
