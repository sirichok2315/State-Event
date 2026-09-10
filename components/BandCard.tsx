import Image from "next/image";
import type { Band } from "@/app/types/Band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  likeCount: number;
  onToggleFollow: () => void;
  onLike: () => void;
};

export default function BandCard({
  band,
  isFollowed,
  likeCount,
  onToggleFollow,
  onLike,
}: BandCardProps) {
  // คำนวณจำนวนสมาชิกจากข้อมูลที่มีอยู่แล้ว โดยไม่เพิ่ม State ใหม่ (ส่วนขยาย)
  const memberCount = band.members?.length ?? 0;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* รูปภาพหลัก */}
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src={band.image}
          alt={band.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 4px 0" }}>{band.name}</h2>
        </div>

        {/* แสดงปีที่ก่อตั้ง (ถ้ามี) + แนวเพลง */}
        <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
          🎵 {band.genre}
        </div>

        {/* ปุ่ม ติดตาม และ Like */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <button
            onClick={onToggleFollow}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: isFollowed ? "#dcfce7" : "#2563eb",
              color: isFollowed ? "#15803d" : "#ffffff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {isFollowed ? "✓ ติดตามแล้ว" : "+ ติดตาม"}
          </button>

          <button
            onClick={onLike}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#f8fafc",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ❤️ {likeCount}
          </button>
        </div>

        {/* แสดงจำนวนสมาชิก (คำนวณจากข้อมูลเดิม) */}
        <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: "14px", fontWeight: "600", color: "#334155", marginBottom: "8px" }}>
            สมาชิกในวง ({memberCount} คน):
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", color: "#475569", fontSize: "13px" }}>
            {band.members?.map((member) => (
              <li
                key={member.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                {/* ส่วนแสดงรูปสมาชิกวงกลมหน้าชื่อ */}
                <div
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#e2e8f0",
                    flexShrink: 0,
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      👤
                    </div>
                  )}
                </div>

                {/* ชื่อและบทบาท */}
                <div>
                  <span style={{ fontWeight: "500", color: "#1e293b" }}>{member.name}</span>{" "}
                  <span style={{ color: "#64748b" }}>({member.role})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}