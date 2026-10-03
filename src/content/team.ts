import type { TeamMember } from "@/types/content";

export const team: TeamMember[] = Array.from({ length: 4 }, (_, index) => ({
  id: `member-${index + 1}`,
  name: null,
  role: "职务待补充",
  university: null,
  photo: null,
}));

export const departments = [
  { number: "01", name: "部门一", description: "部门名称与职责介绍待补充。" },
  { number: "02", name: "部门二", description: "部门名称与职责介绍待补充。" },
  { number: "03", name: "部门三", description: "部门名称与职责介绍待补充。" },
];
