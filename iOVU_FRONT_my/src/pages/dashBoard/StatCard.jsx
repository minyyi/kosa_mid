const StatCard = ({ label, value }) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "12px",
        marginBottom: "12px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ fontSize: "14px", color: "#666" }}>{label}</div>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</div>
    </div>
  );
};

export default StatCard;
