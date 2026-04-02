import { create } from 'zustand';
import { Asset } from '@/types/asset';

interface AppState {
  selectedAsset: Asset | null;
  setSelectedAsset: (asset: Asset) => void;
  clearSelectedAsset: () => void;
}

export const useStore = create<AppState>((set) => ({
  selectedAsset: null,
  setSelectedAsset: (asset) => set({ selectedAsset: asset }),
  clearSelectedAsset: () => set({ selectedAsset: null }),
}));
