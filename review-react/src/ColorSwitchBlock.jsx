export default function ColorSwitchBlock({onChangeColor}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onChangeColor();
        }}>
            Change color
        </button>
    );
}
