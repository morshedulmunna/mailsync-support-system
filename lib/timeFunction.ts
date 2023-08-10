export function formatDate(dateString: any) {
  const date = new Date(dateString);

  const formattedDate = `${date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  return formattedDate;
}
