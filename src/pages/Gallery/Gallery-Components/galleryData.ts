// export interface GalleryImage {
//     id: string;
//     title: string;
//     image: string;
//     label: string;
//     description?: string;
//   }
  
//   export const galleryData: GalleryImage[] = [
//     // ---- ThreadWorks (Hanzas) ----
//     { id: "hanzas-1", title: "Stitching Success", image: "/src/assets/Gallery-Section/hanzas_image_4.jpeg", label: "ThreadWorks", description: "Celebrating the art of sewing and community." },
//     { id: "hanzas-3", title: "Seams of Hope", image: "/src/assets/Gallery-Section/hanzas-3.jpeg", label: "ThreadWorks", description: "Empowering journeys, one stitch at a time." },
//     { id: "hanzas-4", title: "Threads of Change", image: "/src/assets/Gallery-Section/hanzas-4.jpeg", label: "ThreadWorks", description: "Turning fabric into futures." },
//     { id: "hanzas-2", title: "Crafting Confidence", image: "/src/assets/Gallery-Section/hanzas-2.jpeg", label: "ThreadWorks", description: "Building new skills and smiles." },

//     { id: "hanzas-5", title: "Sewing Dreams", image: "/src/assets/Gallery-Section/hanzas-5.jpeg", label: "ThreadWorks", description: "Where creativity meets community." },
//     { id: "hanzas-6", title: "Fabric of Community", image: "/src/assets/Gallery-Section/hanzas_image_1.jpeg", label: "ThreadWorks", description: "Stitching together a brighter future." },
//     { id: "hanzas-7", title: "Empowerment in Every Stitch", image: "/src/assets/Gallery-Section/hanzas-7.jpeg", label: "ThreadWorks", description: "Crafting skills, crafting lives." },
//     { id: "hanzas-8", title: "Sewing Togetherness", image: "/src/assets/Gallery-Section/hanzas_image_2.jpeg", label: "ThreadWorks", description: "Building bonds through sewing." },
//     { id: "hanzas-9", title: "Threads of Joy", image: "/src/assets/Gallery-Section/hanzas-9.jpeg", label: "ThreadWorks", description: "Creating joy, one stitch at a time." },
//     { id: "hanzas-10", title: "Sewing Skills, Sewing Futures", image: "/src/assets/Gallery-Section/hanzas_image_3.jpeg", label: "ThreadWorks", description: "Empowering through creativity." },

//     // ---- SparkLab (Vihaas Design) ----
//     { id: "vihaas-design-1", title: "Igniting Ideas", image: "/src/assets/Gallery-Section/vihaas_image_1.jpeg", label: "Hands-On Makers", description: "Where creativity meets circuits." },
//     { id: "vihaas-design-2", title: "Precision in Progress", image: "/src/assets/Gallery-Section/vihaas_image_2.jpeg", label: "Hands-On Makers", description: "Hands-on moments at SparkLab." },
//     { id: "vihaas-design-3", title: "Crafting Futures", image: "/src/assets/Gallery-Section/vihaas_image_3.jpeg", label: "Hands-On Makers", description: "Learning the art of making." },
//     { id: "vihaas-design-4", title: "Electric Energy", image: "/src/assets/Gallery-Section/vihaas-design-4.jpg", label: "Hands-On Makers", description: "Every connection counts." },
//     { id: "vihaas-design-5", title: "Circuit Stories", image: "/src/assets/Gallery-Section/vihaas_image_4.jpeg", label: "Hands-On Makers", description: "The power of teamwork." },
//     { id: "vihaas-design-6", title: "Bright Beginnings", image: "/src/assets/Gallery-Section/vihaas_image_5.jpeg", label: "Hands-On Makers", description: "Sparking curiosity in youth." },
//     // { id: "vihaas-design-7", title: "Innovation in Action", image: "/src/assets/Gallery-Section/vihaas-design-7.jpg", label: "Hands-On Makers", description: "Ideas taking shape." },
//     { id: "vihaas-design-8", title: "Learning by Doing", image: "/src/assets/Gallery-Section/vihaas-design-8.jpg", label: "Hands-On Makers", description: "The joy of hands-on learning." },
//     { id: "vihaas-design-9", title: "Wired for Growth", image: "/src/assets/Gallery-Section/vihaas-design-9.jpg", label: "Hands-On Makers", description: "Building brighter futures." },
//     { id: "vihaas-design-10", title: "Shaping Tomorrow", image: "/src/assets/Gallery-Section/vihaas-design-10.jpeg", label: "Hands-On Makers", description: "Every project is a new adventure." },
  
//     // ---- Tech Forward (Vihaas Tech) ----
//     { id: "vihaas-tech-1", title: "Exploring New Tech", image: "/src/assets/Gallery-Section/vihaas-tech-1.jpeg", label: "InnoVate", description: "Future-ready and fearless." },
//     // { id: "vihaas-tech-2", title: "Digital Dreams", image: "/src/assets/Gallery-Section/vihaas-tech-2.jpg", label: "InnoVate", description: "Learning, connecting, growing." },
//     { id: "vihaas-tech-3", title: "Code and Create", image: "/src/assets/Gallery-Section/vihaas-tech-3.jpeg", label: "InnoVate", description: "Programming a brighter future." },
//     { id: "vihaas-tech-4", title: "Tech in Action", image: "/src/assets/Gallery-Section/vihaas-tech-4.jpeg", label: "InnoVate", description: "Empowering every student." },
//     { id: "vihaas-tech-5", title: "Growth Mode", image: "/src/assets/Gallery-Section/vihaas-tech-5.jpeg", label: "InnoVate", description: "Curiosity in motion." },
//     { id: "vihaas-tech-6", title: "Inspire & Build", image: "/src/assets/Gallery-Section/vihaas-tech-6.jpeg", label: "InnoVate", description: "New tech, new skills." },
//     { id: "vihaas-tech-7", title: "Digital Leap", image: "/src/assets/Gallery-Section/vihaas-tech-7.jpeg", label: "InnoVate", description: "Next-gen innovators." },
//     { id: "vihaas-tech-8", title: "Skill Set Go", image: "/src/assets/Gallery-Section/vihaas-tech-8.jpeg", label: "InnoVate", description: "Ready for tomorrow." },
//     { id: "vihaas-tech-9", title: "Collaborate & Create", image: "/src/assets/Gallery-Section/vihaas-tech-9.jpeg", label: "InnoVate", description: "Together, we achieve more." },
//     { id: "vihaas-tech-10", title: "Lead the Change", image: "/src/assets/Gallery-Section/vihaas-tech-10.jpeg", label: "InnoVate", description: "Preparing leaders of tomorrow." },
//     { id: "vihaas-tech-11", title: "Progressive Pathways", image: "/src/assets/Gallery-Section/vihaas-tech-11.jpg", label: "InnoVate", description: "Onwards and upwards." },
//     { id: "vihaas-tech-12", title: "Bright Futures", image: "/src/assets/Gallery-Section/vihaas-tech-12.jpg", label: "InnoVate", description: "Shaping skills, shaping lives." },
//     { id: "vihaas-tech-13", title: "Next Step", image: "/src/assets/Gallery-Section/vihaas-tech-13.jpg", label: "InnoVate", description: "From learners to leaders." },
//     // { id: "vihaas-tech-14", title: "Unlock Potential", image: "/src/assets/Gallery-Section/vihaas-tech-14.jpg", label: "InnoVate", description: "Tech for everyone." },
//     { id: "vihaas-tech-15", title: "New Horizons", image: "/src/assets/Gallery-Section/vihaas-tech-15.jpg", label: "InnoVate", description: "Learning with vision." },
//     // { id: "vihaas-tech-16", title: "Infinite Ideas", image: "/src/assets/Gallery-Section/vihaas-tech-16.jpg", label: "InnoVate", description: "The sky is the limit." },
//     // { id: "vihaas-tech-17", title: "Driven by Passion", image: "/src/assets/Gallery-Section/vihaas-tech-17.jpg", label: "InnoVate", description: "Excelling through technology." },
//     // { id: "vihaas-tech-18", title: "Momentum", image: "/src/assets/Gallery-Section/vihaas-tech-18.jpg", label: "InnoVate", description: "The journey continues." },
//   ];  




import hanzasImage4 from "@/assets/Gallery-Section/hanzas_image_4.jpeg";
import hanzas3 from "@/assets/Gallery-Section/hanzas-3.jpeg";
import hanzas4 from "@/assets/Gallery-Section/hanzas-4.jpeg";
import hanzas2 from "@/assets/Gallery-Section/hanzas-2.jpeg";
import hanzas5 from "@/assets/Gallery-Section/hanzas-5.jpeg";
import hanzasImage1 from "@/assets/Gallery-Section/hanzas_image_1.jpeg";
import hanzas7 from "@/assets/Gallery-Section/hanzas-7.jpeg";
import hanzasImage2 from "@/assets/Gallery-Section/hanzas_image_2.jpeg";
import hanzas9 from "@/assets/Gallery-Section/hanzas-9.jpeg";
import hanzasImage3 from "@/assets/Gallery-Section/hanzas_image_3.jpeg";
import vihaasImage1 from "@/assets/Gallery-Section/vihaas_image_1.jpeg";
import vihaasImage2 from "@/assets/Gallery-Section/vihaas_image_2.jpeg";
import vihaasImage3 from "@/assets/Gallery-Section/vihaas_image_3.jpeg";
import vihaasDesign4 from "@/assets/Gallery-Section/vihaas-design-4.jpg";
import vihaasImage4 from "@/assets/Gallery-Section/vihaas_image_4.jpeg";
import vihaasImage5 from "@/assets/Gallery-Section/vihaas_image_5.jpeg";
import vihaasDesign8 from "@/assets/Gallery-Section/vihaas-design-8.jpg";
import vihaasDesign9 from "@/assets/Gallery-Section/vihaas-design-9.jpg";
import vihaasDesign10 from "@/assets/Gallery-Section/vihaas-design-10.jpeg";
import vihaasTech1 from "@/assets/Gallery-Section/vihaas-tech-1.jpeg";
import vihaasTech3 from "@/assets/Gallery-Section/vihaas-tech-3.jpeg";
import vihaasTech4 from "@/assets/Gallery-Section/vihaas-tech-4.jpeg";
import vihaasTech5 from "@/assets/Gallery-Section/vihaas-tech-5.jpeg";
import vihaasTech6 from "@/assets/Gallery-Section/vihaas-tech-6.jpeg";
import vihaasTech7 from "@/assets/Gallery-Section/vihaas-tech-7.jpeg";
import vihaasTech8 from "@/assets/Gallery-Section/vihaas-tech-8.jpeg";
import vihaasTech9 from "@/assets/Gallery-Section/vihaas-tech-9.jpeg";
import vihaasTech10 from "@/assets/Gallery-Section/vihaas-tech-10.jpeg";
import vihaasTech11 from "@/assets/Gallery-Section/vihaas-tech-11.jpg";
import vihaasTech12 from "@/assets/Gallery-Section/vihaas-tech-12.jpg";
import vihaasTech13 from "@/assets/Gallery-Section/vihaas-tech-13.jpg";
import vihaasTech15 from "@/assets/Gallery-Section/vihaas-tech-15.jpg";

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  label: string;
  description?: string;
}

export const galleryData: GalleryImage[] = [
  { id: "hanzas-1", title: "Stitching Success", image: hanzasImage4, label: "ThreadWorks" },
  { id: "hanzas-3", title: "Seams of Hope", image: hanzas3, label: "ThreadWorks" },
  { id: "hanzas-4", title: "Threads of Change", image: hanzas4, label: "ThreadWorks" },
  { id: "hanzas-2", title: "Crafting Confidence", image: hanzas2, label: "ThreadWorks" },
  { id: "hanzas-5", title: "Sewing Dreams", image: hanzas5, label: "ThreadWorks" },
  { id: "hanzas-6", title: "Fabric of Community", image: hanzasImage1, label: "ThreadWorks" },
  { id: "hanzas-7", title: "Empowerment in Every Stitch", image: hanzas7, label: "ThreadWorks" },
  { id: "hanzas-8", title: "Sewing Togetherness", image: hanzasImage2, label: "ThreadWorks" },
  { id: "hanzas-9", title: "Threads of Joy", image: hanzas9, label: "ThreadWorks" },
  { id: "hanzas-10", title: "Sewing Skills, Sewing Futures", image: hanzasImage3, label: "ThreadWorks" },
  { id: "vihaas-design-1", title: "Igniting Ideas", image: vihaasImage1, label: "Hands-On Makers" },
  { id: "vihaas-design-2", title: "Precision in Progress", image: vihaasImage2, label: "Hands-On Makers" },
  { id: "vihaas-design-3", title: "Crafting Futures", image: vihaasImage3, label: "Hands-On Makers" },
  { id: "vihaas-design-4", title: "Electric Energy", image: vihaasDesign4, label: "Hands-On Makers" },
  { id: "vihaas-design-5", title: "Circuit Stories", image: vihaasImage4, label: "Hands-On Makers" },
  { id: "vihaas-design-6", title: "Bright Beginnings", image: vihaasImage5, label: "Hands-On Makers" },
  { id: "vihaas-design-8", title: "Learning by Doing", image: vihaasDesign8, label: "Hands-On Makers" },
  { id: "vihaas-design-9", title: "Wired for Growth", image: vihaasDesign9, label: "Hands-On Makers" },
  { id: "vihaas-design-10", title: "Shaping Tomorrow", image: vihaasDesign10, label: "Hands-On Makers" },
  { id: "vihaas-tech-1", title: "Exploring New Tech", image: vihaasTech1, label: "InnoVate" },
  { id: "vihaas-tech-3", title: "Code and Create", image: vihaasTech3, label: "InnoVate" },
  { id: "vihaas-tech-4", title: "Tech in Action", image: vihaasTech4, label: "InnoVate" },
  { id: "vihaas-tech-5", title: "Growth Mode", image: vihaasTech5, label: "InnoVate" },
  { id: "vihaas-tech-6", title: "Inspire & Build", image: vihaasTech6, label: "InnoVate" },
  { id: "vihaas-tech-7", title: "Digital Leap", image: vihaasTech7, label: "InnoVate" },
  { id: "vihaas-tech-8", title: "Skill Set Go", image: vihaasTech8, label: "InnoVate" },
  { id: "vihaas-tech-9", title: "Collaborate & Create", image: vihaasTech9, label: "InnoVate" },
  { id: "vihaas-tech-10", title: "Lead the Change", image: vihaasTech10, label: "InnoVate" },
  { id: "vihaas-tech-11", title: "Progressive Pathways", image: vihaasTech11, label: "InnoVate" },
  { id: "vihaas-tech-12", title: "Bright Futures", image: vihaasTech12, label: "InnoVate" },
  { id: "vihaas-tech-13", title: "Next Step", image: vihaasTech13, label: "InnoVate" },
  { id: "vihaas-tech-15", title: "New Horizons", image: vihaasTech15, label: "InnoVate" },
];
