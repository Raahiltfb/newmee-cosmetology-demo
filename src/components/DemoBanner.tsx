import React from 'react';
import { CLINIC_DATA } from '../constants';

export const DemoBanner = () => {
  return (
    <div className="bg-white text-black/70 py-2 px-6 text-center text-[10px] uppercase tracking-[0.2em] font-bold">
      Sample website concept prepared for <span className="text-white">{CLINIC_DATA.name}</span>
    </div>
  );
};
