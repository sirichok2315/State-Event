"use client";
import { useState, ChangeEvent } from "react";
import type { Band } from "@/app/types/Band";
import BandCard from "@/components/BandCard";

type CourseExplorerProps = {
    bandsData: Band[];
};

export default function CourseExplorer({ bandsData = [] }: CourseExplorerProps) {
    // State สำหรับช่องค้นหา
    const [keyword, setKeyword] = useState("");

    // State สำหรับเก็บ ID ของวงที่ติดตาม (ใช้ Set หรือ Array)
    const [followedBandIds, setFollowedBandIds] = useState<number[]>([]);

    // State สำหรับเก็บจำนวน Like ของแต่ละวง { [bandId]: count }
    const [likesMap, setLikesMap] = useState<Record<number, number>>({});

    // State สำหรับเงื่อนไขการเรียงลำดับ (ส่วนขยาย)
    const [sortBy, setSortBy] = useState<"none" | "name" | "year">("none");

    // จัดการพิมพ์ในช่องค้นหา (Controlled Input)
    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    // ฟังก์ชันสลับสถานะติดตาม / เลิกติดตาม
    function toggleFollow(bandId: number) {
        setFollowedBandIds((prev) =>
            prev.includes(bandId)
                ? prev.filter((id) => id !== bandId)
                : [...prev, bandId]
        );
    }

    // ฟังก์ชันเพิ่ม Like
    function handleLike(bandId: number) {
        setLikesMap((prev) => ({
            ...prev,
            [bandId]: (prev[bandId] || 0) + 1,
        }));
    }

    // ฟังก์ชันล้างเงื่อนไขทั้งหมด (ส่วนขยาย)
    function resetFilters() {
        setKeyword("");
        setSortBy("none");
    }

    const searchText = keyword.trim().toLowerCase();

    // 1. กรองข้อมูลตามคำค้นหา
    let filteredBands = bandsData.filter((band) => {
        const matchName = band.name.toLowerCase().includes(searchText);
        const matchGenre = band.genre.toLowerCase().includes(searchText);
        const matchMember = band.members.some((m) =>
            m.name.toLowerCase().includes(searchText)
        );
        return matchName || matchGenre || matchMember;
    });

    // 2. เรียงลำดับรายการตาม State sortBy (ส่วนขยาย)
    if (sortBy === "name") {
        filteredBands = [...filteredBands].sort((a, b) => a.name.localeCompare(b.name, "th"));
    }

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 16px" }}>
            {/* ส่วนควบคุม: ช่องค้นหา + ตัวเลือกการเรียง + ปุ่มล้างเงื่อนไข */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                    <input
                        type="search"
                        aria-label="ค้นหาวงดนตรี"
                        value={keyword}
                        onChange={handleKeywordChange}
                        placeholder="🔍 ค้นหาวงดนตรี, แนวเพลง หรือสมาชิก..."
                        style={{
                            flex: "1",
                            minWidth: "280px",
                            padding: "12px 20px",
                            fontSize: "16px",
                            borderRadius: "24px",
                            border: "1px solid #cbd5e1",
                            outline: "none",
                        }}
                    />

                    {/* ปุ่มเรียงลำดับ (ส่วนขยาย) */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "none" | "name" | "year")}
                        style={{
                            padding: "12px 16px",
                            borderRadius: "24px",
                            border: "1px solid #cbd5e1",
                            backgroundColor: "#fff",
                        }}
                    >
                        <option value="none">เรียงลำดับแบบเริ่มต้น</option>
                        <option value="name">เรียงตามชื่อวง (ก-ฮ)</option>
                    </select>

                    {/* ปุ่มล้างเงื่อนไข (ส่วนขยาย) */}
                    {(keyword || sortBy !== "none") && (
                        <button
                            onClick={resetFilters}
                            style={{
                                padding: "12px 20px",
                                borderRadius: "24px",
                                border: "none",
                                backgroundColor: "#ef4444",
                                color: "#fff",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            🔄 ล้างเงื่อนไข
                        </button>
                    )}
                </div>

                {/* แสดงจำนวนวงที่ติดตามอยู่ */}
                <div style={{ textAlign: "center", fontSize: "16px", fontWeight: "600", color: "#2563eb" }}>
                    📌 ติดตามอยู่ทั้งหมด: {followedBandIds.length} วง
                </div>
            </div>

            {/* แสดง Empty State เมื่อไม่พบข้อมูล */}
            {filteredBands.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>ไม่พบวงดนตรีที่ตรงตามเงื่อนไข</p>
                    <p style={{ fontSize: "14px", marginTop: "8px" }}>ลองเปลี่ยนคำค้นหาหรือกดปุ่มล้างเงื่อนไข</p>
                </div>
            ) : (
                /* แสดงรายการการ์ดวงดนตรี */
                <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
                    {filteredBands.map((band) => (
                        <BandCard
                            key={band.id} // 👈 มั่นใจว่าใช้ unique key
                            band={band}
                            isFollowed={followedBandIds.includes(band.id)}
                            likeCount={likesMap[band.id] || 0}
                            onToggleFollow={() => toggleFollow(band.id)}
                            onLike={() => handleLike(band.id)}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}