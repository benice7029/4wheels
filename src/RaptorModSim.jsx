import React, { useState } from "react";

export default function RaptorModSim() {
  const [mods, setMods] = useState({
    bumper: false,
    snorkel: false,
    lift: false,
  });

  const toggleMod = (part) => {
    setMods((prev) => ({ ...prev, [part]: !prev[part] }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Ford Ranger Raptor 改裝模擬器</h1>

      <div className="relative w-[600px] h-[340px]">
        <img
          src="/base.png"
          alt="Raptor Base"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {mods.bumper && (
          <img
            src="/mods/bumper.png"
            alt="ARB Bumper"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
        {mods.snorkel && (
          <img
            src="/mods/snorkel.png"
            alt="Snorkel"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
        {mods.lift && (
          <img
            src="/mods/lift.png"
            alt="Eibach Lift"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
      </div>

      <div className="flex gap-4 mt-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" onChange={() => toggleMod("bumper")} /> ARB 保桿
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" onChange={() => toggleMod("snorkel")} /> Safari 呼吸管
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" onChange={() => toggleMod("lift")} /> Eibach 升高
        </label>
      </div>
    </div>
  );
}
