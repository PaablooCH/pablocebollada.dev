type PanelSide = "left" | "right";
type TransitionPhase = "cover" | "reveal";

type Props = {
    phase: TransitionPhase;
    onPanelAnimationEnd: (side: PanelSide) => void;
};

export default function OutroPanels({ phase, onPanelAnimationEnd }: Props) {
    return (
        <div aria-hidden="true" className={`navigation-transition navigation-transition--${phase}`}>
            <div className="navigation-transition-panel navigation-transition-panel--left" onAnimationEnd={() => onPanelAnimationEnd("left")} />
            <div className="navigation-transition-panel navigation-transition-panel--right" onAnimationEnd={() => onPanelAnimationEnd("right")} />
        </div>
    );
}
