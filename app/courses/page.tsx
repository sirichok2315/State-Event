
 import BandCard from "@/components/BandCard";
import CourseExplorer from "@/components/CourseExplorer";

const bandsData = require("../data/bands.json");

export default function Courses() {
  return (
    <>
      <CourseExplorer bandsData={bandsData} />
    </>
  );
}