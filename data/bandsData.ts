import { Band } from "@/app/types/Band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "โลโซ (LOSO)",
    genre: "เพลง Rock",
    image: "/images/band/15181673_1311085792256589_1313898178526602859_n.jpg",
    members: [
      { id: 1, name: "เสกสรรค์ ศุขพิมาย", role: "นักร้องนำ" ,image:"/images/band/Dtbezn3nNUxytg04acxwqd0SOYOhnCoOgEU1BzSElJmKLU.jpg"},
      { id: 2, name: "กิตติศักดิ์ โคตรคำ", role: "กลอง" ,image:"/images/band/834685.jpg"},
      { id: 3, name: "อภิรัฐ สุขจิตร์", role: "เบส" ,image:"/images/band/26653ff7-8cda-4a44-8ea2-878e7173b38a.webp"},
    ],
  },
  {
    id: 2,
    name: "ปู พงษ์สิทธิ์ คำภีร์ (วงคำภีร์)",
    genre: "เพลง เพื่อชีวิต",
    image: "/images/band/ahr0cdovl3aylmlzyw5vb2suy29tl2pvlzavdwqvndc4lzizote1otcvmje1ntkxmdbfmtaxntu5mtqzmda3mdi0mzdfmzyuanbn.jpg",
    members: [
      { id: 1, name: "พงษ์สิทธิ์ คำภีร์", role: "นักร้องนำ",image:"/images/band/e303428b-9fb6-44ce-89b3-940013dfa6e3.jpg"},
      { id: 2, name: "ศิวะพงษ์ ศรีปรีชาพัฒนะ", role: "กีตาร์" ,image:"/images/band/8f7c4cd1e149f2afcbd305d24dd409c3.635x639x1.jpg"},
      { id: 3, name: "ยุทธ์ดนัย มั่งนิมิตร", role: "เบส",image:"/images/band/images (2).jpg" },
      { id: 4, name: "อุดร ทีนะกุล", role: "กลอง" ,image:"/images/band/images (3).jpg"},
    ],
  },
  {
    id: 3,
    name: "หินเหล็กไฟ (Stone Metal Fire)",
    genre: "เพลง Rock",
    image: "/images/band/S__30582888.jpg",
    members: [
      { id: 1, name: " ปฐมพงศ์ สมบัติพิบูลย์", role: "นักร้องนำ",image:"/images/band/images (4).jpg" },
      { id: 2, name: "จักรรินทร์ ดวงมณีรัตนชัย ", role: "กีตาร์",image:"/images/band/images (5).jpg" },
      { id: 3, name: "นำพล ขจรพิมานมาศ ", role: "กีตาร์",image:"/images/band/images (6).jpg" },
      { id: 4, name: " ณรงค์ ศิริสารสุนทร ", role: "เบส",image:"/images/band/images (7).jpg" },
      { id: 5, name: "ดำรงสิทธิ์ ศรีนาค ", role: "กลอง",image:"/images/band/images (8).jpg" },
    ],
  },
];