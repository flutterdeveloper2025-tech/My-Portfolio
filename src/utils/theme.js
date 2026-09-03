export const C={
  purple:"#7c3aed",purpleL:"#8b5cf6",purpleD:"#6d28d9",
  cyan:"#06b6d4",green:"#10b981",amber:"#f59e0b",pink:"#ec4899",
  dark900:"#0a0a0f",dark800:"#0f0f1a",dark700:"#141424",dark600:"#1a1a2e",
  border:"rgba(139,92,246,0.15)",borderHov:"rgba(139,92,246,0.4)",
  text:"#e2e8f0",textMuted:"rgba(148,163,184,0.7)",
};
export const G={
  purple:"linear-gradient(135deg,#7c3aed,#8b5cf6)",
  purpleR:"linear-gradient(135deg,#8b5cf6,#7c3aed)",
  cyanPurple:"linear-gradient(135deg,#06b6d4,#7c3aed)",
  purpleGlow:"radial-gradient(circle,rgba(124,58,237,0.3),transparent 70%)",
};
export const fadeUp={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
export const fadeIn={hidden:{opacity:0},show:{opacity:1,transition:{duration:0.5}}};
export const scaleIn={hidden:{opacity:0,scale:0.9},show:{opacity:1,scale:1,transition:{duration:0.5,ease:[0.22,1,0.36,1]}}};
export const slideL={hidden:{opacity:0,x:-30},show:{opacity:1,x:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
export const slideR={hidden:{opacity:0,x:30},show:{opacity:1,x:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}};
export const stagger={hidden:{},show:{transition:{staggerChildren:0.08}}};
export const staggerF={hidden:{},show:{transition:{staggerChildren:0.05}}};
