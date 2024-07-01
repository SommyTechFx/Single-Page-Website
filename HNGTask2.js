document.addEventListener("DOMContentLoaded", () => {
  const time = document.getElementById("time");
  const day = document.getElementById("day");

  function updateDayandTime() {
    const nowDay = new Date();
    const utcTime = nowDay.toISOString().split("T")[1].split(".")[0];
    const dayOfWeek = nowDay.toLocaleDateString("en-US", { weekday: "short" });

    time.textContent = utcTime;
    day.textContent = dayOfWeek;
  }

  updateDayandTime();
  setInterval(updateDayandTime);
});
