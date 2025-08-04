import BrandTrackingChart from "../component/charts/BrandTrackingChart";
const BrandTracking = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      <BrandTrackingChart />
    </div>
  );
};

export default BrandTracking;
