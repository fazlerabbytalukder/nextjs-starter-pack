"use client";

const Badge = ({ status }) => {
  let badgeClass = "";

  switch (status) {
    case "Success":
      badgeClass = "badge-success";
      break;
    case "Pending":
      badgeClass = "badge-pending";
      break;
    case "Failed":
      badgeClass = "badge-error";
      break;
    case "Processing":
      badgeClass = "badge-processing";
      break;
    case "open":
      badgeClass = "badge-success";
      break;
    case "closed":
      badgeClass = "badge-error";
      break;
    default:
      badgeClass = "badge-default";
      break;
  }
  return <span className={`${badgeClass} badge`}>{status}</span>;
};

export default Badge;
