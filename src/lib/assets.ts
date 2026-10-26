import fs from "node:fs";
import path from "node:path";

import { eventConfig } from "@/config/event";

type AssetSlot = {
  candidates: readonly string[];
};

export type ResolvedAssets = {
  hero: string | null;
  heroMobile: string | null;
  logo: string | null;
  qr: string | null;
};

function resolveAsset(slot: AssetSlot): string | null {
  const assetDirectory = path.join(process.cwd(), "public", "assets");

  for (const candidate of slot.candidates) {
    if (fs.existsSync(path.join(assetDirectory, candidate))) {
      return `/assets/${candidate}`;
    }
  }

  return null;
}

export function getAssets(): ResolvedAssets {
  return {
    hero: resolveAsset(eventConfig.assets.hero),
    heroMobile: resolveAsset(eventConfig.assets.heroMobile),
    logo: resolveAsset(eventConfig.assets.logo),
    qr: resolveAsset(eventConfig.assets.qr),
  };
}
