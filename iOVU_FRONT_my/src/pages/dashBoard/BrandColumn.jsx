import StatCard from "./StatCard";

const BrandColumn = ({ brandName, stats }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 20px",
        width: "200px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "8px 16px",
          borderRadius: "16px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        {brandName}
      </div>
      {stats.map((item, index) => (
        <StatCard key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default BrandColumn;
