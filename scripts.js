document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");
  const dayElement = document.getElementById("day");

  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toISOString().split("T")[1].split(".")[0];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "short" });

    timeElement.textContent = utcTime;
    dayElement.textContent = dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
