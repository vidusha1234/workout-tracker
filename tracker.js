import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const workoutPlan = {
  "Day 1 – Full Body (Upper)": [
    "Flat DB Press",
    "DB Bench Fly",
    "DB Shoulder Press",
    "DB Lateral Raise",
    "DB Pullover on Flat Bench",
    "Bent-over BB Row",
    "Lying Triceps Extension",
    "Seated DB Bicep Curl",
  ],
  "Day 3 – Full Body (Lower)": [
    "BB Squat",
    "DB Lunge",
    "DB Bulgarian Split Squat",
    "BB Good Morning",
    "DB Hamstring Curl",
    "Standing BB Calf Raise",
    "Seated DB Calf Raise",
  ],
  "Day 4 – Full Body (Arm Emphasis)": [
    "BB Shoulder Press",
    "DB Front Raise",
    "DB Internal Rotation",
    "DB Lateral Raise",
    "DB Bent-over Lateral Raise",
    "Close-Grip BB Bench Press",
    "Seated DB Bicep Curl",
    "BB or DB Wrist Curl",
  ],
  "Day 6 – Full Body (Chest/Back)": [
    "Flat BB Bench Press",
    "Flat DB Fly",
    "Bent-over BB Row",
    "One-arm DB Row",
    "BB Row",
    "Romanian Deadlift",
  ],
};

export default function WorkoutTracker() {
  const [log, setLog] = useState({});

  const handleInputChange = (day, exercise, set, value) => {
    setLog((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [exercise]: {
          ...prev[day]?.[exercise],
          [set]: value,
        },
      },
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workout Tracker</h1>
      {Object.entries(workoutPlan).map(([day, exercises]) => (
        <Card key={day} className="mb-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{day}</h2>
            {exercises.map((exercise) => (
              <div key={exercise} className="mb-3">
                <h3 className="font-medium">{exercise}</h3>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Set 1 (Weight/Reps)"
                    onChange={(e) => handleInputChange(day, exercise, "set1", e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Set 2 (Weight/Reps)"
                    onChange={(e) => handleInputChange(day, exercise, "set2", e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Set 3 (Weight/Reps)"
                    onChange={(e) => handleInputChange(day, exercise, "set3", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => console.log(log)}>Save Progress</Button>
    </div>
  );
}
