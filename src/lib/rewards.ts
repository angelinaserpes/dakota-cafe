export const REWARDS_KEY = "dakota_rewards_points";

export type Tier = "Bronze" | "Silver" | "Gold";

export function getPoints(): number {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem(REWARDS_KEY);
  return raw ? parseInt(raw, 10) || 0 : 0;
}

export function setPoints(points: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(REWARDS_KEY, String(Math.max(0, Math.floor(points))));
}

export function addPoints(amount: number) {
  const current = getPoints();
  const next = current + Math.max(0, Math.floor(amount));
  setPoints(next);
  return next;
}

export function redeemPoints(cost: number) {
  const current = getPoints();
  if (current < cost) return { success: false, remaining: current };
  const next = current - cost;
  setPoints(next);
  return { success: true, remaining: next };
}

export function getTier(points: number): Tier {
  if (points >= 500) return "Gold";
  if (points >= 200) return "Silver";
  return "Bronze";
}

export function getProgress(points: number) {
  const tier = getTier(points);
  const thresholds = { Bronze: 0, Silver: 200, Gold: 500 } as const;
  const nextThreshold = tier === "Bronze" ? 200 : tier === "Silver" ? 500 : 500;
  const currentBase = thresholds[tier];
  const progress = tier === "Gold" ? 100 : Math.min(100, ((points - currentBase) / (nextThreshold - currentBase)) * 100);
  const nextTier = tier === "Gold" ? "Gold" : tier === "Silver" ? "Gold" : "Silver";
  return { tier, progress: Math.round(progress), nextTier, nextThreshold };
}
