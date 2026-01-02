"use client";

import Next13ProgressBar from "next13-progressbar";

export default function ProgressBarClient() {
  return (
    <Next13ProgressBar
      height="2px"
      color="#019472"
      options={{ showSpinner: false }}
      showOnShallow
    />
  );
}
