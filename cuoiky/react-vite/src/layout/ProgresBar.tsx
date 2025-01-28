
import Pro from '../types/Bar';

function ProgresBar(props:Pro) {
    const { bgcolor, completed } = props;
    // const [complete,setComplete]=useState(0);
    // useEffect(() => {
    //     setInterval(() => setComplete(Math.floor(Math.random() * 100) + 1), 2000);
    //   }, []);
    const containerStyles = {
        height: 5,
        width: 250,
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 25
    }

    const fillerStyles = {
        height: 5,
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: '#1B1A24',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
}

export default ProgresBar
