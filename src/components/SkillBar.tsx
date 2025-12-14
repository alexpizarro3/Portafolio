interface SkillBarProps {
  skill: string;
  level: number; // 0 a 100
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
