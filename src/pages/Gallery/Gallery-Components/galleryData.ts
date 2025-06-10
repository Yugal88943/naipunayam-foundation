import hanzasImage4 from "@/assets/Gallery-Section/hanzas_image_4.webp";
import hanzas3 from "@/assets/Gallery-Section/hanzas-3.webp";
import hanzas4 from "@/assets/Gallery-Section/hanzas-4.webp";
import hanzas2 from "@/assets/Gallery-Section/hanzas-2.webp";
import hanzas5 from "@/assets/Gallery-Section/hanzas-5.webp";
import hanzasImage1 from "@/assets/Gallery-Section/hanzas_image_1.webp";
import hanzas7 from "@/assets/Gallery-Section/hanzas-7.webp";
import hanzasImage2 from "@/assets/Gallery-Section/hanzas_image_2.webp";
import hanzas9 from "@/assets/Gallery-Section/hanzas-9.webp";
import hanzasImage3 from "@/assets/Gallery-Section/hanzas_image_3.webp";
import vihaasImage1 from "@/assets/Gallery-Section/vihaas_image_1.webp";
import vihaasImage2 from "@/assets/Gallery-Section/vihaas_image_2.webp";
import vihaasImage3 from "@/assets/Gallery-Section/vihaas_image_3.webp";
import vihaasDesign4 from "@/assets/Gallery-Section/vihaas-design-4.webp";
import vihaasImage4 from "@/assets/Gallery-Section/vihaas_image_4.webp";
import vihaasImage5 from "@/assets/Gallery-Section/vihaas_image_5.webp";
import vihaasDesign8 from "@/assets/Gallery-Section/vihaas-design-8.webp";
import vihaasDesign9 from "@/assets/Gallery-Section/vihaas-design-9.webp";
import vihaasDesign10 from "@/assets/Gallery-Section/vihaas-design-10.webp";
import vihaasTech1 from "@/assets/Gallery-Section/vihaas-tech-1.webp";
import vihaasTech3 from "@/assets/Gallery-Section/vihaas-tech-3.webp";
import vihaasTech4 from "@/assets/Gallery-Section/vihaas-tech-4.webp";
import vihaasTech5 from "@/assets/Gallery-Section/vihaas-tech-5.webp";
import vihaasTech6 from "@/assets/Gallery-Section/vihaas-tech-6.webp";
import vihaasTech7 from "@/assets/Gallery-Section/vihaas-tech-7.webp";
import vihaasTech8 from "@/assets/Gallery-Section/vihaas-tech-8.webp";
import vihaasTech9 from "@/assets/Gallery-Section/vihaas-tech-9.webp";
import vihaasTech10 from "@/assets/Gallery-Section/vihaas-tech-10.webp";
import vihaasTech11 from "@/assets/Gallery-Section/vihaas-tech-11.webp";
import vihaasTech12 from "@/assets/Gallery-Section/vihaas-tech-12.webp";
import vihaasTech13 from "@/assets/Gallery-Section/vihaas-tech-13.webp";
import vihaasTech15 from "@/assets/Gallery-Section/vihaas-tech-15.webp";

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
