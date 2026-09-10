
 import BandCard from "@/components/BandCard";
import CourseExplorer from "@/components/CourseExplorer";

import { bandsData } from "@/data/bandsData";

export default function Courses() {
  return (
    <>
      <CourseExplorer bandsData={bandsData} />
    </>
  );
}