declare namespace HomeIcons {
    interface BaseProps {
        size?: number,
        borderSize?:number,
        className?: string,
        color?: string,
        hoverColor?: string,
        onMount?:()=>void;
        onUmMount?:()=>void;
        onClick?:()=>void
    }
}
export default HomeIcons;